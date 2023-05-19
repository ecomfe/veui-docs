// import { entries, sortBy } from 'lodash'
import nav from '../assets/data/nav.json'

// export default entries(nav).reduce((ret, [lang, items]) => {
//   ret[lang] = items.map(item => {
//     if (!item.children) {
//       return item
//     }
//     return {
//       ...item,
//       children:
//         item.slug === 'components'
//           ? sortBy(item.children, child => child.title)
//           : item.children
//     }
//   })
//   return ret
// }, {})

export default nav
