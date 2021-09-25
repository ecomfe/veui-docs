import visit from 'unist-util-visit'

const RE_DEMO = /^one-demo-[a-f0-9]+/i

export default function attacher () {
  return tree => {
    visit(tree, 'element', ({ tagName, properties }, _, { type }) => {
      if (type === 'root' && !RE_DEMO.test(tagName)) {
        properties['data-markdown'] = true
      }
    })
  }
}
