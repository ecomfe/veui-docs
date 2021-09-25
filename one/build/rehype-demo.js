import visit from 'unist-util-visit'
import h from 'hastscript'

const RE_DEMO = /^one-demo-[a-f0-9]+/i
export default function attacher () {
  return (tree, { data }) => {
    visit(tree, 'element', (node, index, parent) => {
      let { tagName } = node
      let [name] = tagName.match(RE_DEMO) || []
      if (name) {
        let { code, desc, browser } = data.demos[name] || {}
        if (!code) {
          return
        }

        let demo = h('one-demo',
          {
            browser
          },
          [
            node,
            h(
              'template',
              {
                slot: 'source'
              },
              {
                type: 'raw',
                value: code
              }
            ),
            h(
              'template',
              {
                slot: 'desc'
              },
              {
                type: 'raw',
                value: desc
              }
            )
          ])

        parent.children.splice(index, 1, demo)
      }
    })
  }
}
