import toString from 'mdast-util-to-string'
import visit from 'unist-util-visit'

export default function attacher () {
  return transformer

  function transformer (tree, vfile) {
    const headings = []

    visit(tree, 'heading', onHeading)

    vfile.data.toc = createTree(headings)

    function onHeading (node) {
      const heading = {
        depth: node.depth,
        label: toString(node)
      }
      if (node.data !== undefined && node.data.id != null) {
        heading.value = `#${node.data.id}`
      }
      headings.push(heading)
    }

    function createTree (headings) {
      const root = { depth: 0 }
      const parents = []
      let previous = root

      headings.forEach((heading) => {
        if (heading.depth > previous.depth) {
          if (previous.children === undefined) {
            previous.children = []
          }
          parents.push(previous)
        } else if (heading.depth < previous.depth) {
          while (parents[parents.length - 1].depth >= heading.depth) {
            parents.pop()
          }
        }

        parents[parents.length - 1].children.push(heading)
        previous = heading
      })

      return root.children
    }
  }
}
