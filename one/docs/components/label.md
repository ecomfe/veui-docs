# Label <small>标签</small>

## 示例

### 激活输入组件

可以使用 [`for`](#props-for) 属性指定被激活组件的 `ref`。点击标签区域可以触发

[[ demo src="/demo/label/default.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``for`` | `string=` | - | [^for] |

^^^for
允许通过 [`ref`](https://v2.cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)、[Vue 组件实例](https://v2.cn.vuejs.org/v2/guide/instance.html)、[`HTMLElement`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement) 的方式指定目标组件或元素。如果指定的是组件，点击标签后会调用对应组件的 `activate` 方法（如果存在）；如果指定的是元素，点击标签后会调用对应元素的 [`click` 方法](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click)。

+++类型详情
| 类型 | 描述 |
| -- | -- |
| `string` | 在当前浮层组件所在上下文中，通过匹配 `$refs` 中的键名查找 HTML 元素或对应组件实例的根元素。 |
| `Vue` | 如果传入的是组件实例，就直接返回该组件的根元素。 |
| `HTMLElement` | 如果已经是一个 HTML 元素了，就直接使用该元素。 |
+++
^^^


### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 默认插槽。无默认内容。用于填充行内内容，**不允许**放入块级内容。 |
