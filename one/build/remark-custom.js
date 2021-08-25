import tokenizer from './customBlock'
import visit from 'unist-util-visit'
import { render } from './page'

const NAME = 'customblock'

const typeMap = {
  tip: 'info',
  warning: 'warning'
}

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

    visit(tree, NAME, ({ className, value }, index, parent) => {
      let { contents } = render(value, path, {})
      if (typeMap[className]) {
        if (!data.hasAlert) {
          data.hasAlert = true
        }
        parent.children.splice(index, 1, {
          type: 'html',
          value: `<veui-alert ui="s" type="${typeMap[className]}">${contents}</veui-alert>`
        })
      } else {
        className = className ? `${className} custom-block` : 'custom-block'
        parent.children.splice(index, 1, {
          type: 'html',
          value: `<div class="${className}">${contents}</div>`
        })
      }
    })
  }
}
