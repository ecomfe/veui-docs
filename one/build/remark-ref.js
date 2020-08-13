import tokenizer from './refBlock'
import visit from 'unist-util-visit'
import remove from 'unist-util-remove'
import { render } from './page'

const NAME = 'refblock'
const RE_REF = /^\^([-_a-z0-9]+)/i

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
    if (!data.refs) {
      data.refs = {}
    }

    visit(tree, NAME, ({ id, value }) => {
      let { contents } = render(value, path, data)
      data.refs[id] = contents
    })
    remove(tree, NAME)

    visit(tree, 'linkReference', (node, index, parent) => {
      let { identifier } = node
      let [match, id] = identifier.match(RE_REF)
      if (!match || !id || !data.refs[id]) {
        return
      }

      parent.children.splice(index, 1, {
        type: 'html',
        value: data.refs[id]
      })
    })
  }
}
