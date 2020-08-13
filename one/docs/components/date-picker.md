# DatePicker <small>日期选择</small>

## 示例

### 单日选择

默认情况下，在下拉浮层中单击日期可以选中一个日期。可以配置 `clearable` 属性来允许清除已选值，用 `placeholder` 属性来配置未选择时的占位文本。

[[ demo src="/demo/date-picker/default.vue" ]]

### 日期范围选择

配置 `range` 属性时，可以在下拉浮层中选择一个日期范围。

[[ demo src="/demo/date-picker/range.vue" ]]

### 设置快捷选项

选择日期范围时，可以通过配置 `shortcuts` 属性来提供快捷选项。

[[ demo src="/demo/date-picker/shortcuts.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `type` | `string` | `'date'` | 日历的类型，可用值为 `'date'`/`'month'`/`'year'`，分别对应日期/月/年视图。 |
| `range` | `boolean` | `false` | 是否选择日期范围。 |
| `selected` | `Date|Array` | - | [^selected] |
| `today` | `Date` | `new Date()` | 「今天」的日期。 |
| `week-start` | `number` | `calendar.weekStart` | 一周的起始。可进行[全局配置](./calendar#全局配置)。 |
| `fill-month` | `boolean` | `true` | 当只有一个面板时，是否要在当前月份面板显示非本月日期。 |
| `date-class` | `string|Array|Object|function` | `{}` | 特定日期的自定义 HTML `class`。传非函数时，数据格式为所有 Vue 支持的 `class` 表达式；传函数时，签名为 `function(Date): string|Array<string>|Object<string, boolean>`，返回值格式亦为所有 Vue 支持的 `class` 表达式。 |
| `disabled-date` | `function(Date): boolean` | `() => false` | 特定日期是否禁用。 |
| `clearable` | `boolean` | `false` | 已选值是否可以清除。 |
| `placeholder` | `string` | `range ? datepicker.rangePlaceholder : datepicker.placeholder` | 未选择时的占位文本。可进行[全局配置](#全局配置)。 |
| `format` | `string` | `'yyyy-MM-dd'`/`'yyyy-MM'`/`'yyyy'` | 用于格式化的字符串表达式，具体格式可以参见 [date-fns 的文档](https://date-fns.org/v2.12.0/docs/format)。 |
| `shortcuts` | `Array<Object>` | `datepicker.shortcuts` | [^shortcuts] |
| `disabled` | `boolean=` | `false` | 是否为禁用状态。 |
| `readonly` | `boolean=` | `false` | 是否为只读状态。 |

^^^selected
:::badges
`v-model`
:::

已选日期（范围）的值，根据 `range` 属性值的不同，数据格式不同。

+++类型详情
| `range` | 类型 |
| -- | -- |
| `false` | `Date` |
| `true` | `[Date, Date]` |
+++
^^^

^^^shortcuts
在选择范围时，可以定制的浮层中的快捷选择项列表，格式为 `Array<{label, from, to}>`。可进行[全局配置](#全局配置)。

+++字段详情
<table>
  <thead>
    <tr>
      <th>名称</th>
      <th>类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>label</code></td>
      <td><code>string</code></td>
      <td>快捷选项的文本。</td>
    </tr>
    <tr>
      <td><code>from</code></td>
      <td colspan="2">开始时间计算方式，见下方<a href="#快捷选项偏移量数据格式">快捷选项偏移量数据格式</a>描述。</td>
    </tr>
    <tr>
      <td><code>to</code></td>
      <td colspan="2">结束时间计算方式，见下方<a href="#快捷选项偏移量数据格式">快捷选项偏移量数据格式</a>描述。</td>
    </tr>
  </tbody>
</table>
+++
^^^

#### 快捷选项偏移量数据格式

`shortcuts` 列表项中的 `from` 及 `to` 字段格式相同，分别用来设置开始结束日期的计算方式。格式为 `number|Object`，默认值为 `0`。

* 类型为 `number` 时，表示以「今天」为基准，偏移指定天数，比如 `-1` 等价于 `{ startOf: 'day', days: -1 }`，即「昨天」；
* 类型为 `Object` 时，支持的格式为：`{startOf: string=, days: number=, weeks: number=, months: number=, }`。

  +++字段详情
  | 名称 | 类型 | 默认值 | 描述 |
  | -- | -- | -- | -- |
  | `startOf` | `string=` | `'day'` | 起始日期基准，支持的值有 `'day'`/`'week'`/`'month'`/`'quarter'`/`'year'`。 |
  | `day` | `number=` | - | 偏移的天数。 |
  | `week` | `number=` | - | 偏移的周数。 |
  | `month` | `number=` | - | 偏移的月数。 |
  | `quarter` | `number=` | - | 偏移的季度数。 |
  | `year` | `number=` | - | 偏移的年数。 |

计算方式是先根据 `startOf` 设置基准，然后根据其它字段进行偏移量的叠加。

可以根据下面的例子，结合 `label` 理解计算方式。掌握以后，就可以非常快速地对快捷选项进行设置了。

```js
[
  {
    label: '上个月',
    // 本月第一天往前算一个月，即上月第一天
    from: {
      startOf: 'month',
      month: -1
    },
    // 本月第一天往前算一天，即上月最后一天
    to: {
      startOf: 'month',
      days: -1
    }
  },
  {
    label: '本月',
    // 本月第一天
    from: {
      startOf: 'month'
    },
    // 今天
    to: 0
  },
  {
    label: '本周',
    // 本周第一天，days 为 0 是可以省略的
    from: {
      startOf: 'week',
      days: 0
    },
    // 今天
    to: 0
  },
  {
    label: '最近7天',
    // 往前算 6 天
    from: -6,
    // 到今天
    to: 0
  },
  {
    label: '今天',
    to: 0
  }
]
```

### 插槽

| 名称 | 描述 |
| -- | -- |
| `date` | [^scoped-slot-date] |

^^^scoped-slot-date
浮层中日历的单日单元格内的区域，可用来定制每一天对应区域的内容。

默认内容：对应日期的 `date`。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `year` | `number` | 完整年份。 |
| `month` | `number` | 月份数，`0` 表示一月。 |
| `date` | `number` | 月份内的日期。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `select` | [^event-select] |

^^^event-select
:::badges
`v-model`
:::

选择修改后触发，回调参数为 `(selected)`。数据类型和 `selected` 属性一致。
^^^

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `datepicker.shortcuts` | `Array` | `[]` | 快捷选项配置。 |
| `datepicker.placeholder` | `string` | `@@datepicker.selectDate` | 选择单日时，未选择状态的占位文本。 |
| `datepicker.monthPlaceholder` | `string` | `@@datepicker.selectMonth` | 选择月份时，未选择状态的占位文本。 |
| `datepicker.yearPlaceholder` | `string` | `@@datepicker.selectYear` | 选择年时，未选择状态的占位文本。 |
| `datepicker.rangePlaceholder` | `string` | `@@datepicker.selectRange` | 选择日期范围时，未选择状态的占位文本。 |
| `datepicker.monthRangePlaceholder` | `string` | `@@datepicker.selectMonthRange` | 选择月份范围时，未选择状态的占位文本。 |
| `datepicker.yearRangePlaceholder` | `string` | `@@datepicker.selectYearRange` | 选择年份范围时，未选择状态的占位文本。 |

:::tip
`@@` 开头的值表示引用多语言配置中的相应字段。
:::

### 图标

| 名称 | 描述 |
| -- | -- |
| `calendar` | 日历。 |
| `clear` | 清除内容。 |
