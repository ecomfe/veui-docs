import { readFileSync } from 'fs'
import cheerio from 'cheerio'
import { render } from './page'
const VERSION_RE = /^(\d+\.\d+\.\d+(?:-[a-z]+(?:\.\d+)?)?)(?:\s+"([^"]+)")?(?:\s+\((\d{4}-\d{2}-\d{2})\))?$/i
function getVersion (title = '') {
  const [, version, codeName, date] = title.trim().match(VERSION_RE) || []
  if (!version) {
    return null
  }
  return [version, codeName, date]
}

const TYPE_MAP = {
  '⚠️': 'breaking',
  '💡': 'feature',
  '🐞': 'bugfix',
  '🧪': 'experimental'
}
const TYPE_KEYS = Object.keys(TYPE_MAP)
function getChangeType (title) {
  const t = title.trim()
  const key = TYPE_KEYS.find(key => t.includes(key))
  if (!key) {
    return null
  }
  return TYPE_MAP[key]
}

const TAG_RE = /#([^\s]+)$/
function getTags (comment) {
  return comment
    .trim()
    .split(/\s+/)
    .map(token => {
      const [, tag] = token.match(TAG_RE) || []
      return tag
    })
    .filter(tag => !!tag)
}

const EDIT_TYPE_RE = /^\[([+-^])\]/
const EDIT_TYPE_MAP = {
  '-': 'remove',
  '+': 'add',
  '^': 'modify'
}
function getEditType (text) {
  const [, sign] = text.match(EDIT_TYPE_RE) || []
  if (sign) {
    return EDIT_TYPE_MAP[sign]
  }

  return null
}

function trim (text) {
  return text.trim().replace(/^\n+|\n+$/g, '')
}

function extract (html) {
  const changelog = []

  const $ = cheerio.load(html)
  const $versions = $('h2')

  $versions.each((_, el) => {
    const $version = $(el)
    const [version, codeName, date] = getVersion($(el).text()) || []
    const versionLog = {
      version,
      codeName,
      date,
      changeset: []
    }

    const $types = $version.nextUntil('h2', 'h3')

    if ($types.length === 0) {
      throw new Error(`No change type found for version ${version}`)
    }

    let type
    $types.each((_, el) => {
      const $type = $(el)
      type = getChangeType($type.text())

      const $changeset = $type.next('ul').children()

      if ($changeset.length === 0) {
        throw new Error(`No changeset found for version ${version}`)
      }

      $changeset.each((_, el) => {
        const $change = $(el)
        const tags = $change
          .contents()
          .toArray()
          .map(el => {
            if (el.type === 'comment') {
              return getTags(el.data)
            }
            return []
          })
          .reduce((all, current) => all.concat(current), [])

        $change.contents().filter((_, el) => el.type === 'comment').remove()
        $change.find('*').contents().filter((_, el) => el.type === 'comment').remove()

        const $container = trim($change.html()).startsWith('<p>') ? $change.children('p').first() : $change

        let html = trim($container.html())
        const editType = getEditType($container.text())
        html = html.replace(EDIT_TYPE_RE, '')

        $container.html(html)

        versionLog.changeset.push({
          type,
          tags,
          editType,
          content: trim($change.html())
        })
      })
    })

    changelog.push(versionLog)
  })
  return changelog
}

export function getChangelogData () {
  const changelogPath = require.resolve('veui/CHANGELOG.md')
  const raw = readFileSync(changelogPath, 'utf8')
  const { contents } = render(raw, changelogPath)
  return extract(contents)
}
