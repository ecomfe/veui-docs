import { resolve, join } from 'path'
import visit from 'unist-util-visit'
import h from 'hastscript'
import { removeClass, addClass, hasClass } from './rehype-util-class'
import { readFileSync } from './util'

const RE_SPACE = /[\w\r\n]*/
const MERMAID_DIR = resolve(__dirname, '../../static/images/mermaid')

export default function attacher () {
  return tree => {
    visit(tree, 'element', (node, index, { children }) => {
      let { tagName, properties, properties: { src, alt, title, className } } = node
      if (tagName !== 'img' || src.match(/^\w+:\/\//)) {
        return
      }

      if (title && title.indexOf('mermaid') !== -1) {
        let fig = h(
          'figure.hero.mermaid',
          {
            'v-once': true
          },
          {
            type: 'raw',
            value: readFileSync(join(MERMAID_DIR, src))
          }
        )
        children.splice(index, 1, fig)
        return
      }

      src = src.replace(/(\.\.)?\/assets\//g, '/images/content/')

      if (hasClass(node, 'preview')) {
        removeClass(node, 'preview')
        let fig = h(`figure${hasClass(node, 'hero') ? '.hero' : ''}`, [
          h('div.preview', [
            h('img', {
              src,
              alt,
              title,
              className,
              srcset: `${src} 2x`
            })
          ]),
          ...(title || alt) ? [
            h('figcaption', [
              ...title ? [
                h('p.caption', title)
              ] : [],
              ...alt ? [
                h('p.desc', alt)
              ] : []
            ])
          ] : []
        ])
        children.splice(index, 1, fig)

        if (hasClass(node, 'bad')) {
          removeClass(node, 'bad')
          addClass(fig, 'bad')
          let prev
          let prevIndex = index - 1
          while (true) {
            prev = children[prevIndex]
            if (!prev) {
              break
            }
            // skip whitespace-only text nodes
            if (prev.type === 'text' && RE_SPACE.test(prev.value)) {
              prevIndex--
              continue
            }
            break
          }
          if (prev) {
            let prevPreview = (prev.children || [])[0]
            if (prevPreview && hasClass(prevPreview, 'preview')) {
              let prevImg = (prevPreview.children || [])[0]
              if (hasClass(prevImg, 'good')) {
                removeClass(prevImg, 'good')
                addClass(prev, 'good')
                children.splice(index - 1, 2, h('div.comparison', [prev, fig]))
              }
            }
          }
        }
      } else {
        properties.src = src
        properties.srcset = `${src} 2x`
        if (className && !className.length) {
          delete properties.className
        }
      }
    })
  }
}
