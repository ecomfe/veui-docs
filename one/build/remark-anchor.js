import visit from 'unist-util-visit'
import { upperFirst } from './util'

const KNOWN_SCOPES_CONFIG = {
  props: '属性',
  events: '事件',
  methods: '方法',
  slots: '插槽',
  icons: '图标',
  configs: '全局配置',
  options: '绑定值',
  modifiers: '修饰符',
  arguments: '参数'
}
const KNOWN_SCOPES = Object.entries(KNOWN_SCOPES_CONFIG).reduce(
  (acc, [key, value]) => {
    acc[upperFirst(key)] = key
    acc[value] = key
    return acc
  },
  {}
)

export default function attacher () {
  return tree => {
    let scope = null

    visit(tree, (node, index, parent) => {
      const { type, depth, children, value, position } = node
      if (type === 'heading') {
        if (depth === 3) {
          let text = children[0]
          if (text && text.type === 'element' && text.tagName === 'icon-link') {
            text = children[1]
          }
          if (text && text.type === 'text' && KNOWN_SCOPES[text.value]) {
            scope = KNOWN_SCOPES[text.value]
            return
          }
        }

        if (depth <= 3) {
          scope = null
        }

        return
      }

      if (
        type === 'inlineCode' &&
        position.end.offset - position.start.offset - value.length === 4
      ) {
        const id = `${scope || 'doc'}-${value.replace(/\./g, '-')}`

        node.data = node.data || {}
        node.data.hProperties = { id }

        parent.children[index] = {
          type: 'link',
          url: `#${id}`,
          children: [node]
        }
      }
    })
  }
}
