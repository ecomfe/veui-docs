# Overlay <small>浮层</small>

## 示例

### 自定义定位

浮层可以在页面内按照自定义方式定位。

[[ demo src="/demo/overlay/position.vue" ]]

### 相对已有元素定位

浮层可以相对于页面内某个 DOM 元素定位。

[[ demo src="/demo/overlay/relative-base.vue" ]]

### 层叠顺序管理

同层级且相同优先级的浮层，越晚显示的层叠顺序越高。

[[ demo src="/demo/overlay/stack-display-order.vue" ]]

打开的浮层，会建立新的层叠上下文，从中打开的浮层层叠顺序会高于父级浮层。

[[ demo src="/demo/overlay/stack-on-overlay.vue" ]]

子浮层的层叠顺序受父浮层影响。

[[ demo src="/demo/overlay/stack-display-order-with-on-overlay.vue" ]]

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | 预设样式。`veui-theme-dls` 未提供，可自定义。 |
| `open` | `boolean` | `false` | [^open] |
| `target` | `string|Vue|Element` | - | [^target] |
| `priority` | `number` | - | [^priority] |
| `autofocus` | `boolean` | - | 是否自动抢占焦点到浮层内的第一个可聚焦元素。 |
| `modal` | `boolean` | `false` | 是否是模态浮层。模态浮层会抢占焦点且限制键盘导航处于浮层内部（关闭后焦点会回归）。 |
| `inline` | `boolean` | `false` | 是否将浮层渲染为内联内容。 |
| `local` | `boolean` | `false` | 是否将浮层保留在原来的 DOM 位置，而非移动到全局位置并参与[全局浮层管理](../advanced/overlay)。 |
| `overlay-class` | `string|Array|Object=` | - | [^overlay-class] |
| `overlay-style` | `string|Array|Object=` | - | [^overlay-style] |
| `options` | `Object` | 透传给底层 Popper.js 实现的 `modifiers` 配置项，具体内容参见[这里](https://popper.js.org/docs/v1/#modifiers)。 |

^^^open
:::badges
`.sync`
:::

是否显示浮层。
^^^

^^^target
允许通过 [`ref`](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)、[Vue 组件实例](https://cn.vuejs.org/v2/guide/instance.html)、[`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 的方式指定目标元素。如果目标元素存在，浮层会相对于该元素进行定位，具体定位参数由 `options` 属性指定。

+++类型详情
| 类型 | 描述 |
| -- | -- |
| `string` | 在当前浮层组件所在上下文中，通过匹配 `$refs` 中的键名查找 DOM 元素或对应组件实例的根元素。 |
| `Vue` | 如果传入的是组件实例，就直接返回该组件的根元素。 |
| `Element` | 如果已经是一个 DOM 元素了，就直接使用该元素。 |
+++
^^^

^^^priority
当前浮层组件实例与其它实例在层叠关系上的权重，数值越大，越靠上。

:::tip
由于所有浮层组件的浮层根元素都会放置到 `<body>` 元素下，所以为了更好地控制浮层层叠顺序，浮层模块内部实现了全局的层叠上下文。组件的父子关系决定了浮层的嵌套关系，在同层级内的每个浮层组件实例都可以通过指定 `priority` 来实现不同实例间的相对层叠顺序。相同 `priority` 数值的组件实例，按照实例化的先后顺序来决定层叠顺序，后实例化的组件在之前组件的上面。
:::
^^^

^^^overlay-class
浮层根元素类名，数据格式为所有 [Vue 支持的 `class` 表达式](https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A-HTML-Class)。

:::tip
由于浮层根元素会放置在 `<body>` 元素下，可以通过这个属性给浮层根元素设置类名以自定义样式。
:::
^^^

^^^overlay-style
浮层根元素的样式，数据格式为所有 [Vue 支持的 `style` 表达式](https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F)。
^^^
### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 浮层内容。 |

### 事件

| 名称 | 描述 |
| -- | -- |
| `locate` | 浮层定位发生变化时触发。 |
| `afteropen` | 浮层打开后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。 |
| `afterclose` | 浮层关闭后触发。如果样式主题提供了退出动画，将在退出动画完毕后触发。 |

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `overlay.overlayClass` | `string|Array|Object=` | `[]` | 全局配置需要添加到浮层容器上的类名，数据格式为所有 [Vue 支持的 `class` 表达式](https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A-HTML-Class)。 |
