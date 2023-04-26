# Sidebar

:::tip
The `Sidebar` component needs to be used with the [`Layout`](./layout) / [`Header`](./header) / [`Footer`](./footer) / [`Content`](./content) components.
:::

## Examples

### Collapse mode

Use the [`collapse-mode`](#props-collapse-mode) prop to specify the collapse mode, which can be `slim` (partially collapsed) or `hidden` (completely collapsed).

[[ demo src="/demo/sidebar/collapse-mode.vue" browser="/demo/sidebar/collapse-mode.vue" ]]

### Toggle button

Use the `collapsible` prop to show or hide the expand/collapse button of the sidebar.

[[ demo src="/demo/sidebar/collapsible.vue" browser="/demo/sidebar/collapsible.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``sticky`` | `boolean` | `false` | Whether to stick the sidebar to the top. See [`Sticky layout`](./layout#sticky-layout) for usage notes. |
| ``collapsible`` | `boolean` | `false` | Whether to show the expand/collapse button of the sidebar. |
| ``collapsed`` | `boolean` | `false` | [^collapsed] |
| ``autocollapse`` | `boolean` | `false` | Whether to automatically collapse the sidebar when the window is stretched to a certain threshold. |
| ``collapse-mode`` | `'slim' | 'hidden'` | `'slim'` | The collapse mode, which can be `slim` (partially collapsed) or `hidden` (completely collapsed).

^^^collapsed
:::badges
`.sync`
:::

The state of collapsing or expanding the sidebar.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | The content of the sidebar. |
