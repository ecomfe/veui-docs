import { resolve, relative, join } from 'path'
import vfile from 'vfile'
import remark from 'remark'
import slug from 'remark-slug'
import frontmatter from 'remark-frontmatter'
import highlight from 'remark-highlight.js'
import shortcodes from 'remark-shortcodes'
import remarkToRehype from 'remark-rehype'
import raw from 'rehype-raw'
import html from 'rehype-stringify'
import etpl from 'etpl'
import { readFileSync, writeFileSync, replaceExtSync } from './util'
import demo from './remark-demo'
import ref from './remark-ref'
import details from './remark-details'
import custom from './remark-custom'
import extractFrontmatter from './remark-extract-frontmatter'
import rehypePreviewImg from './rehype-preview-img'
import rehypeLink from './rehype-link'
import rehypeDemo from './rehype-demo'
import { add } from './deps'
import lowlight from 'lowlight'
import { vue } from './language'

const DOCS_DIR = resolve(__dirname, '../docs')
const PAGES_DIR = resolve(__dirname, '../../pages')
const PAGE_TPL = readFileSync(resolve(__dirname, '../templates/page.etpl'))

const renderPage = etpl.compile(PAGE_TPL)

lowlight.registerLanguage('vue', vue)

const md = remark()
  .use(custom)
  .use(details)
  .use(ref)
  .use(frontmatter)
  .use(shortcodes)
  .use(demo)
  .use(extractFrontmatter)
  .use(highlight)
  .use(slug)
  .use(remarkToRehype, { allowDangerousHTML: true })
  .use(raw)
  .use(rehypePreviewImg)
  .use(rehypeLink)
  .use(rehypeDemo)
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
  let { demos = {}, components = {}, meta = {}, deps = {} } = data

  Object.keys(deps || {}).forEach(dep => {
    add({ [dep]: { [src]: true } })
  })

  let { layout, style } = meta
  let componentList = Object.keys(components)
  let demoList = Object.keys(demos)
  let result = renderPage({
    content: (contents || '').replace(/\n{3,}/g, '\n\n'),
    demos: demoList.map(name => {
      return {
        name,
        src: join('@/components/demos', relative(DOCS_DIR, demos[name].path))
      }
    }),
    components: componentList,
    boilerplate: demoList.length || componentList.length,
    layout,
    style: style || 'post'
  })

  writeFileSync(dest, result)
}
