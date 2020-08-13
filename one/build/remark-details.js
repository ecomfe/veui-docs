import tokenizer from './details'
import visit from 'unist-util-visit'
import { escape } from 'lodash'
import { render } from './page'

const NAME = 'details'

export default function attacher () {
  let proto = this.Parser.prototype

  proto.blockTokenizers[NAME] = tokenizer
  proto.interruptParagraph.push([NAME])
  proto.interruptList.push([NAME])
  proto.interruptBlockquote.push([NAME])

  let methods = proto.blockMethods
  methods.unshift(NAME)

  return (tree, file) => {
    let { path, data } = file

    if (!data) {
      file.data = data = {}
    }
    if (!data.components) {
      data.components = {}
    }

    visit(tree, NAME, ({ summary, value }, index, parent) => {
      data.components['OneDetails'] = true

      let { contents } = render(value, path, data)
      parent.children.splice(index, 1, {
        type: 'html',
        value: `<one-details summary="${escape(summary)}">${contents}</one-details>`
      })
    })
  }
}
