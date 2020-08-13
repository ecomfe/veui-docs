import visit from 'unist-util-visit'
import remove from 'unist-util-remove'
import yaml from 'js-yaml'

export default function attacher () {
  return (tree, file) => {
    let { data } = file

    visit(tree, 'yaml', node => {
      data.meta = yaml.safeLoad(node.value)
      return visit.EXIT
    })

    remove(tree, ['yaml', 'toml'])
  }
}
