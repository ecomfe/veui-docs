import { resolve, relative, join } from 'path'
import vfile from 'vfile'
import remark from 'remark'
import slug from 'remark-slug'
import frontmatter from 'remark-frontmatter'
import shortcodes from 'remark-shortcodes'
import remarkToRehype from 'remark-rehype'
import raw from 'rehype-raw'
import rehypeAutolinkHeadings from '@justfork/rehype-autolink-headings'
import html from 'rehype-stringify'
import highlight from 'rehype-highlight'
import etpl from 'etpl'
import stringifyObject from 'stringify-object'
import { readFileSync, writeFileSync, replaceExtSync } from './util'
import demo from './remark-demo'
import ref from './remark-ref'
import scope from './remark-scope'
import details from './remark-details'
import custom from './remark-custom'
import toc from './remark-extract-toc'
import extractFrontmatter from './remark-extract-frontmatter'
import rehypePreviewImg from './rehype-preview-img'
import rehypeLink from './rehype-link'
import rehypeScoped from './rehype-scoped'
import rehypeDemo from './rehype-demo'
import rehypePre from './rehype-pre'
import { add } from './deps'
import { vue } from './language'

const DOCS_DIR = resolve(__dirname, '../docs')
const PAGES_DIR = resolve(__dirname, '../../pages')
const PAGE_TPL = readFileSync(resolve(__dirname, '../templates/page.etpl'))

const renderPage = etpl.compile(PAGE_TPL)

const md = remark()
  .use(scope)
  .use(custom)
  .use(ref)
  .use(details)
  .use(frontmatter)
  .use(shortcodes)
  .use(demo)
  .use(extractFrontmatter)
  .use(slug)
  .use(toc)
  .use(remarkToRehype, { allowDangerousHTML: true })
  .use(raw)
  .use(rehypeAutolinkHeadings, {
    content: {
      type: 'element',
      tagName: 'icon-link',
      properties: { class: 'icon-link' }
    },
    test: ['h2', 'h3', 'h4', 'h5', 'h6']
  })
  .use(rehypePreviewImg)
  .use(rehypeLink)
  .use(rehypeScoped)
  .use(rehypeDemo)
  .use(highlight, { languages: { vue } })
  .use(rehypePre)
  .use(html, { allowDangerousHTML: true })

export function render (contents, path, data = {}) {
  return md.processSync(vfile({ contents, path, data }))
}

function renderFile (file) {
  return render(readFileSync(file), file)
}

export function renderDocToPage (file) {
  let src = resolve(DOCS_DIR, file)
  let dest = resolve(PAGES_DIR, replaceExtSync(file, 'vue'))
  let { contents, data } = renderFile(src, dest)
  let {
    demos = {},
    components = {},
    meta = {},
    deps = {},
    hasAlert = false,
    toc
  } = data

  Object.keys(deps || {}).forEach(dep => {
    add({ [dep]: { [src]: true } })
  })

  let { layout, style = 'post', toc: showToc } = meta
  let componentList = Object.keys(components)
  let demoList = Object.keys(demos)
  let result = renderPage({
    content: (contents || '')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/\{/g, '&#x7B;')
      .replace(/\}/g, '&#x7D;')
      .replace(/v-pre="true"/g, 'v-pre')
      .replace(/data-md="true"/g, 'data-md'),
    demos: demoList.map(name => {
      return {
        name,
        src: join(
          '@/components/demos',
          relative(DOCS_DIR, demos[name].filePath)
        )
      }
    }),
    components: componentList,
    alert: hasAlert,
    boilerplate:
      demoList.length || componentList.length || hasAlert || style === 'post',
    layout,
    style,
    path: file,
    toc: showToc !== false ? stringifyObject(toc[0].children) : null
  })

  writeFileSync(dest, result)
}
