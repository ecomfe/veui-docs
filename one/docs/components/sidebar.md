# Sidebar <small>布局侧边栏</small>

:::tip
`Sidebar` 组件需要配合 [`Layout`](./layout) / [`Header`](./header) / [`Footer`](./footer) / [`Content`](./content) 组件使用。
:::

## 示例

### 收起侧边栏

通过 [`collapse-mode`](#props-collapse-mode) 属性指定收起模式，分别是 `slim`（部分收起） / `hidden`（完全收起）。

[[ demo src="/demo/sidebar/collapse-mode.vue" ]]

### 展示/隐藏切换按钮

使用 `collapsible` 属性设置是否显示侧边栏展开/收起按钮。

[[ demo src="/demo/sidebar/collapsible.vue" ]]

## API

### 属性
| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``sticky`` | `boolean` | `false` | 是否吸顶。使用注意参考[`吸顶/吸底布局`](./layout#吸顶吸底布局)。 |
| ``collapsible`` | `boolean` | `false` | 是否显示收起/展开按钮。 |
| ``collapsed`` | `boolean` | `false` | [^collapsed] |
| ``autocollapse`` | `boolean` | `false` | 是否拉伸窗口到一定阈值时自动收起。 |
| ``collapse-mode`` | `'slim' | 'hidden'` | `'slim'` | 收起模式，分别是 `slim`（部分收起）/`hidden`（完全收起）。 

^^^collapsed
:::badges
`.sync`
:::

收起/展开的状态。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 布局侧边栏的内容。 |
