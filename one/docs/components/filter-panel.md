# FilterPanel <small>过滤面板</small>

## 示例

[[ demo src="/demo/filter-panel/default.vue"]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `datasource` | `Array<Object>` | `[]` | 数据源，项目类型为 `{label: string, ...}`。 |
| `searchable` | `boolean=` | `true` | 是否允许搜索。 |
| `filter` | `function=` | 见描述 | [^filter] |
| `search-on-input` | `boolean=` | `true` | 是否在输入的时候触发搜索。 |
| `placeholder` | `string=` | - | 搜索框的占位符。 |

^^^filter
搜索过滤函数，签名为 `function(keyword, item, index, datasource): boolean`。返回值为 `false` 的项目将被从结果中过滤掉。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `keyword` | `string` | 搜索关键词。 |
| `item` | `Object` | 当前遍历到的数据节点。 |
| `index` | `number` | 当前数据节点在兄弟节点中的索引。 |
| `datasource` | `Array<{label: string, ...}>` | 与 `datasource` 属性一致。 |
+++

+++默认值
```js
import { includes } from 'lodash'

function (keyword, { label }) {
  return includes(label, keyword)
}
```
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `head` | 标题区域。默认显示 `title` 属性值。 |
| `no-data` | `datasource` 中没数据时显示的内容。 |
| `default` | [^default] |

^^^default
主内容区域。

+++参数属性
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `items` | `Array<Object>` | `datasource` 经过过滤后的数据，类型与 `datasource` 保持一致。 |
+++
^^^
