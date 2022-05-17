# Form <small>表单</small>

:::tip
`Form` 组件需要配合 [`Fieldset`](./fieldset) 及 [`Field`](./field) 组件使用。
:::

## 示例

### 基础样式

使用 [`actions`](#slots-actions) 插槽来提供表单操作按钮。

[[ demo src="/demo/form/normal.vue" ]]

### 只读状态

设置 [`readonly`](#slots-readonly) 来使内部表单项处于只读状态。

[[ demo src="/demo/form/readonly.vue" ]]

### 禁用状态

设置 [`disabled`](#slots-disabled) 来使内部表单项处于禁用状态。

[[ demo src="/demo/form/disabled.vue" ]]

### 提示与辅助文本

[[ demo src="/demo/form/help.vue" ]]

### 校验

[[ demo src="/demo/form/validate.vue" ]]

### 规则校验

[[ demo src="/demo/form/rule.vue" ]]

### 异步联合校验

[[ demo src="/demo/form/validator.vue" ]]

### 前置、后置校验

[[ demo src="/demo/form/before-after.vue" ]]

### 警告信息

[[ demo src="/demo/form/warn.vue" ]]

### 抽象表单项

[[ demo src="/demo/form/abstract.vue" ]]

### 原生输入框与表单项整合

[[ demo src="/demo/form/withhold.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``readonly`` | `boolean=` | `false` | 内部输入组件是否为只读状态。 |
| ``disabled`` | `boolean=` | `false` | 内部输入组件是否为禁用状态。 |
| ``data`` | `Object` | - | [^data] |
| ``validators`` | `Array<Object>=` | - | [^validators] |
| ``before-validate`` | `function=` | - | 表单进入提交流程后，进行校验之前的 hook，传入参数为 `(data)`，`data` 为表单 [`data`](#props-data) 属性值的副本。支持返回 `Promise`，返回值或 `Promise.resolve` 的值为 `true` 或 `undefined` 表示流程继续，其它返回值表示中断流程并触发 [`invalid`](#events-invalid) 事件。|
| ``after-validate`` | `function=` | - | 表单校验成功后，触发 [`submit`](#events-submit) 事件之前的 hook，传入参数为 `(data)`，与 `beforeValidate` 的入参是同一个引用。支持返回 `Promise`，返回值或 `Promise.resolve` 的值为 `true` 或 `undefined` 表示流程继续，其它返回值表示中断流程并触发 [`invalid`](#events-invalid) 事件。|

^^^data
表单绑定的数据，和表单中的输入组件通过 `v-model` 绑定，也是表单校验时的数据源。

:::warning
[`Field`](./field) 如果处于 `disabled` 状态，提交流程中处理 `data` 副本时其对应的数据键值对会被过滤，校验时同理。
:::
^^^

^^^validators
表单联合校验、异步校验器。项目类型为 `{fields, validate, triggers}`。

+++属性详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `fields` | `Array` | 对应 `Field` 的 `field` 描述的集合。事件会绑定到对应 `Field` 中的输入组件上。 |
| `validate` | `function` | 自定义校验函数，传入参数为 `(data[fields[0]], data[fields[1]], ...)`，`data` 为表单 [`data`](#props-data) 属性值的引用。返回 `undefined` / `true` 代表校验成功，返回 `{[field]: message, ...}` 表示校验失败信息，详见[表单 › 表单校验逻辑](#表单校验逻辑)。 |
| `triggers` | `string | Array<string>` | 事件名称集合。 |
+++


+++规则详情
| `fields` | `triggers` | 绑定事件情况 |
| -- | -- | -- |
| `['a']` | `['change', 'blur,input,xxx', 'submit']` | a(change) |
| `['a','b','c']` | `['change', 'blur,input,xxx', 'submit']` | a(change), b(blur,input,xxx), c(submit) |
| `['a','b','c']` | `'blur'` | a(blur), b(submit), c(submit) |
| `['a','b','c']` | `'blur,input'` | a(blur,input), b(blur,input), c(blur,input) |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | [^slot-default] |
| ``actions`` | 表单操作内容，如“提交”、“取消”按钮等。无默认内容。作用域参数与 [`default`](#slots-default) 插槽相同。 |

^^^slot-default
可直接内联 `Fieldset` 或 `Field` 组件。无默认内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `submit` | `() => void` | 触发表单提交。 |
| `validating` | `boolean` | 是否正在执行表单校验。 |
+++
^^^


### 事件

| 名称 | 描述 |
| -- | -- |
| ``submit`` | [^event-submit] |
| ``invalid`` | [^event-invalid] |

^^^event-submit
在原生 `submit` 事件之后触发，回调参数为 `(data, event)`。具体提交流程请参考[表单 › 表单提交流程](#表单提交流程)。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `data` | `Object` | 表单 [`data`](#props-data) 属性值的引用。 |
| `event` | `Event` | 原生事件对象。 |
+++
^^^

^^^event-invalid
`beforeValidate`、`validate`、`afterValidate` 流程中某一项返回中断时触发，回调参数为流程 function 的返回值，参数为 `(result)`，表示流程中断的信息，具体返回值类型由流程返回决定。具体提交流程请参考[表单 › 表单提交流程](#表单提交流程)，`validate` 逻辑见[表单 › 表单校验逻辑](#表单校验逻辑)。
^^^

### 方法
| 方法 | 描述 |
| -- | -- |
| ``submit`` | [^method-submit] |
| ``validate`` | [^method-validate] |
| ``clearValidities`` | [^method-clearvalidities] |
| ``setValidities`` | [^method-setvalidities] |

^^^method-submit
手动提交表单。

```ts
function submit(): void
```
^^^

^^^method-validate
手动校验表单。

```ts
function validate(fieldNames?: Array<string> | null): Promise<true | Record<string, Object>>
```

可选参数 `fieldNames` 可以指定进行校验的字段。

返回值是 `Promise`，校验成功解析为 `true`，校验失败则解析为 `Record<string, Object>`，其中 key 是错误字段名称。
^^^

^^^method-clearvalidities
手动清除表单校验信息。
```ts
function clearValidities(fieldNames?: Array<string> | null): void
```

可选参数 `fieldNames` 可以指定清除的字段。
^^^

^^^method-setvalidities
手动设置表单校验信息。

:::warning
该方法并不能覆盖 `rules` 和 `validators` 产生的校验信息。
:::

```ts
type InputValidity = {
  status: 'success' | 'warning' | 'error'
  message: string
}
function setValidities(validities: Record<string, string | InputValidity>): void

// 示例：将表单提交返回错误添加到表单中
this.$refs.form.setValidities({
  name: 'name error',
  email: 'email error'
})
```
^^^

### 表单提交流程

<img class="preview hero" src="/images/development/form/flow.png">

:::warning
`beforeValidate` 和 `afterValidate` 以及 [`submit`](#events-submit) 事件操作的 `data` 均为 props `data` 的同一个副本。考虑到校验信息和 UI 中数据的一致性，`validate` 的目标数据是 props `data` 的源数据。因此在 `beforeValidate` 中**不建议**修改 `data` 副本。
:::

### 表单校验逻辑

表单校验内部分为 `Field` 的 `rule` 校验和 `validators` 的校验。

1. `Field` 的 `rule` 是单值、同步校验。详见[表单项](./field)。
2. `validators` 可以是多值、异步的校验。

+++validators 示例
```js
validators: [
  {
    fields: ['start', 'end'],
    validate (start, end) {
      if (start == null || end == null) {
        return true
      }

      if (parseInt(start, 10) >= parseInt(end, 10)) {
        return {
          start: '下限必须小于上限'
        }
      }
      return true
    },
    triggers: ['change', 'submit,input']
  },
  {
    fields: ['phone'],
    validate (phone) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          let res
          if (phone === '18888888888') {
            res = {
              phone: '该手机已被注册'
            }
          }
          return resolve(res)
        }, 3000)
      })
    },
    triggers: ['input']
  }
]
```
+++

#### 交互过程的校验

<img class="preview hero" src="/images/development/form/interaction.png">

#### 提交过程的校验

<img class="preview hero" src="/images/development/form/submit.png">

提交时，其中一个过程的校验失败不会导致整个校验终止，校验信息将在两个过程执行完毕后进行整合，并传递到 [`invalid`](#events-invalid) 事件中去。
