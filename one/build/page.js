import { resolve, relative, join } from 'path'
import vfile from 'vfile'
import remark from 'remark'
import slug from 'remark-slug'
import frontmatter from 'remark-frontmatter'
import shortcodes from 'remark-shortcodes'
import remarkToRehype from 'remark-rehype'
import raw from 'rehype-raw'
import html from 'rehype-stringify'
import highlight from 'rehype-highlight'
import etpl from 'etpl'
import { readFileSync, writeFileSync, replaceExtSync } from './util'
import demo from './remark-demo'
import ref from './remark-ref'
import anchor from './remark-anchor'
import details from './remark-details'
import custom from './remark-custom'
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
  .use(anchor)
  .use(custom)
  .use(details)
  .use(ref)
  .use(frontmatter)
  .use(shortcodes)
  .use(demo)
  .use(extractFrontmatter)
  .use(slug)
  .use(remarkToRehype, { allowDangerousHTML: true })
  .use(raw)
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
    hasAlert = false
  } = data

  Object.keys(deps || {}).forEach(dep => {
    add({ [dep]: { [src]: true } })
  })

  let { layout, style = 'post' } = meta
  let componentList = Object.keys(components)
  let demoList = Object.keys(demos)
  let result = renderPage({
    content: (contents || '')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/\{/g, '&#x7B;')
      .replace(/\}/g, '&#x7D;')
      .replace(/v-pre="true"/g, 'v-pre')
      .replace(/data-markdown="true"/g, 'data-markdown'),
    demos: demoList.map(name => {
      return {
        name,
        src: join('@/components/demos', relative(DOCS_DIR, demos[name].path))
      }
    }),
    components: componentList,
    alert: hasAlert,
    boilerplate: demoList.length || componentList.length || hasAlert || style === 'post',
    layout,
    style,
    path: file
  })

  writeFileSync(dest, result)
}
