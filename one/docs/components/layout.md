# Layout <small>布局</small>

:::tip
`Layout` 组件需要配合 [`Header`](./header) / [`Sidebar`](./sidebar) / [`Footer`](./footer) / [`Content`](./content) 组件使用。
:::

## 示例

### 基础布局

`Layout` 组件支持多种典型布局。

// TBD

<!-- [[ demo src="/demo/layout/basic.vue" ]] -->

### 收起侧边栏

`Sidebar` 组件通过 [`collapse-mode`](./Sidebar#props-collapse-mode) 属性支持两种收起模式，分别是 `slim`（部分收起）/`hidden`（完全收起）。

// TBD

<!-- [[ demo src="/demo/layout/sidebar.vue" ]] -->

### 吸顶/吸底布局

`Header` / `Sidebar` / `Footer` 组件均支持通过 `sticky` 属性设置吸顶/吸底。

// TBD

<!-- [[ demo src="/demo/layout/sticky.vue" ]] -->

## API

### 属性

// TBD

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 布局内容，可以是 [`Header`](./header) / [`Sidebar`](./sidebar) / [`Footer`](./footer) / [`Content`](./content) 组件或嵌套使用 `Layout` 组件。 |
