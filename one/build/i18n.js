export const DEFAULT_LOCALE = 'zh-Hans'
export const LOCALES = [
  {
    code: DEFAULT_LOCALE,
    label: '简体中文'
  },
  {
    code: 'en-US',
    label: 'English (US)'
  }
]
export const LOCALE_CODES = LOCALES.map(l => l.code)
export const RE_LOCALE = new RegExp(`^\\/(${LOCALE_CODES.join('|')})\\/`)
