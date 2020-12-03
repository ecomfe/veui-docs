import { entries, sortBy } from 'lodash'
import nav from '../assets/data/nav.json'

export default entries(nav).reduce(function (ret, [lang, items]) {
  ret[lang] = items.map(function (item) {
    if (!item.children) {
      return item
    }
    return {
      ...item,
      children: sortBy(item.children, child => child.title)
    }
  })
  return ret
}, {})
