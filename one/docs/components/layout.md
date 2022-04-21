# Layout <small>布局</small>

:::tip
`Layout` 组件需要配合 [`Header`](./header) / [`Sidebar`](./sidebar) / [`Footer`](./footer) / [`Content`](./content) 组件使用。
:::

## 示例

### 基础布局

`Layout` 组件支持多种典型布局。

[[ demo src="/demo/layout/basic.vue" browser="/demos/layout/basic.vue" ]]

### 通顶侧边栏

[[ demo src="/demo/layout/global-sidebar.vue" browser="/demos/layout/global-sidebar.vue" ]]

### 通栏底部

[[ demo src="/demo/layout/global-footer.vue" browser="/demos/layout/global-footer.vue" ]]

### 吸顶/吸底布局

`Header` / `Sidebar` / `Footer` 组件均支持通过 `sticky` 属性设置吸顶/吸底。

:::tip
当吸顶的布局头部和吸顶侧边栏一起使用需要在布局头部的父组件 `Layout` 上设置 `--dls-layout-header-height` 来指定布局头部的高度。
:::

:::tip
当吸底的布局底部和吸顶侧边栏一起使用需要在布局底部的父组件 `Layout` 上设置 `--dls-layout-footer-height` 来指定布局底部的高度。
:::

[[ demo src="/demo/layout/sticky.vue" browser="/demos/layout/sticky.vue" ]]

## API

### 属性
| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``direction`` | `'column' | 'row'` | `'column'` | 布局排列方向。在有 `Sidebar` 时，默认为 `'row'`。 |

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 布局内容，可以是 [`Header`](./header) / [`Sidebar`](./sidebar) / [`Footer`](./footer) / [`Content`](./content) 组件或嵌套使用 `Layout` 组件。 |
