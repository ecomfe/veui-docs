'use strict'

var trim = require('trim-trailing-lines')

module.exports = customBlock

var C_NEWLINE = '\n'
var C_TAB = '\t'
var C_SPACE = ' '
var C_COLON = ':'

var MIN_FENCE_COUNT = 3
var CODE_INDENT_COUNT = 4

function customBlock (eat, value, silent) {
  var self = this
  var length = value.length + 1
  var index = 0
  var subvalue = ''
  var fenceCount
  var marker
  var character
  var flag
  var queue
  var content
  var exdentedContent
  var closing
  var exdentedClosing
  var indent
  var now

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index)

    if (character !== C_SPACE && character !== C_TAB) {
      break
    }

    subvalue += character
    index++
  }

  indent = index

  /* Eat the fence. */
  character = value.charAt(index)

  if (character !== C_COLON) {
    return
  }

  index++
  marker = character
  fenceCount = 1
  subvalue += character

  while (index < length) {
    character = value.charAt(index)

    if (character !== marker) {
      break
    }

    subvalue += character
    fenceCount++
    index++
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return
  }

  /* Eat spacing before flag. */
  while (index < length) {
    character = value.charAt(index)

    if (character !== C_SPACE && character !== C_TAB) {
      break
    }

    subvalue += character
    index++
  }

  /* Eat flag. */
  flag = ''
  queue = ''

  while (index < length) {
    character = value.charAt(index)

    if (character === C_NEWLINE || character === C_COLON) {
      break
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character
    } else {
      flag += queue + character
      queue = ''
    }

    index++
  }

  character = value.charAt(index)

  if (character && character !== C_NEWLINE) {
    return
  }

  if (silent) {
    return true
  }

  now = eat.now()
  now.column += subvalue.length
  now.offset += subvalue.length

  subvalue += flag
  flag = self.decode.raw(self.unescape(flag), now)

  if (queue) {
    subvalue += queue
  }

  queue = ''
  closing = ''
  exdentedClosing = ''
  content = ''
  exdentedContent = ''

  /* Eat content. */
  while (index < length) {
    character = value.charAt(index)
    content += closing
    exdentedContent += exdentedClosing
    closing = ''
    exdentedClosing = ''

    if (character !== C_NEWLINE) {
      content += character
      exdentedClosing += character
      index++
      continue
    }

    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */
    if (content) {
      closing += character
      exdentedClosing += character
    } else {
      subvalue += character
    }

    queue = ''
    index++

    while (index < length) {
      character = value.charAt(index)

      if (character !== C_SPACE) {
        break
      }

      queue += character
      index++
    }

    closing += queue
    exdentedClosing += queue.slice(indent)

    if (queue.length >= CODE_INDENT_COUNT) {
      continue
    }

    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (character !== marker) {
        break
      }

      queue += character
      index++
    }

    closing += queue
    exdentedClosing += queue

    if (queue.length < fenceCount) {
      continue
    }

    queue = ''

    while (index < length) {
      character = value.charAt(index)

      if (character !== C_SPACE && character !== C_TAB) {
        break
      }

      closing += character
      exdentedClosing += character
      index++
    }

    if (!character || character === C_NEWLINE) {
      break
    }
  }

  subvalue += content + closing

  return eat(subvalue)({
    type: 'customblock',
    className: (flag || '').trim().replace(/\s+/g, ' '),
    value: trim(exdentedContent)
  })
}
