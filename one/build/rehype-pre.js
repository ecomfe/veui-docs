import visit from 'unist-util-visit'

export default function attacher () {
  return tree => {
    visit(tree, 'element', ({ tagName, properties }) => {
      if (tagName === 'pre') {
        properties['v-pre'] = true
      }
    })
  }
}
