# Tabs <small>Tab</small>

:::tip
The `Tabs` component needs to be used with the [`Tab`](./tab) component.
:::

## Example

### Size variants

Available [`ui`](#props-ui) size values: `s` / `m` / `l`.

[[ demo src="/demo/tabs/size.vue" ]]

### Style variants

Use `ui` set to `borderless` / `simple` / `strong` to respectively enable the default style of no divider style, simple style, and enhanced style.

[[ demo src="/demo/tabs/style.vue" ]]

### Router mode

Set the [`to`](./tab#props-to) property of the [`Tab`](./tab) component to use the router mode.

[[ demo src="/demo/tabs/route.vue" ]]

### Data source

In addition to using the [`Tab`](./tab) component, you can also set the [`items`](#props-items) property to set the data source for the tab.

[[ demo src="/demo/tabs/items.vue" ]]

### Add and remove

Use the [`addable`](#props-addable) property to show the add button.

Add the [`removable`](./tab#props-removable) property to the [`Tab`](./tab) component or add the `removable` field to the `items` property of `Tabs` to make a single tab removable.

[[ demo src="/demo/tabs/addable.vue" ]]

### Tab status

Set the [`status`](./tab#props-status) property of the [`Tab`](./tab) component to add status to the tab.

[[ demo src="/demo/tabs/status.vue" ]]

### Sortable

Set the [`sortable`](#props-sortable) property to enable tab sorting, recommended to be used together with the [`items`](#props-items) property.

[[ demo src="/demo/tabs/sortable.vue" ]]

### Disabled state

Set the [`disabled`](./tab#props-disabled) property of the [`Tab`](./tab) component to disable the tab.

[[ demo src="/demo/tabs/disabled.vue" ]]

### Custom tab

Set [`tab-item`](#slots-tab-item) and [`tab-label`](#slots-tab-label) slot content, or the [`item`](./tab#slots-item) and [`label`](./tab#slots-label) slot of the [`Tab`](./tab) component to customize the tab content.

[[ demo src="/demo/tabs/tab-item.vue" ]]

### Extra content

Set the [`extra`](#slots-extra) slot content to provide additional content for the tab row.

[[ demo src="/demo/tabs/extra.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``items`` | `Array<Object>` | `[]` | [^items] |
| ``active`` | `string` | - | [^active] |
| ``matches`` | `function(Route, Route): boolean` | `tabs.matches` | [^matches] |
| ``addable`` | `boolean` | `false` | Whether to allow adding tabs. |
| ``max`` | `number` | - | The maximum number of tabs that can be added. |
| ``tip`` | `string` | - | The tooltip text. |
| ``add-label`` | `string` | - | The text content of the "Add" button. |
| ``eager`` | `boolean` | `false` | Whether to render the content of all non-active tab panels immediately (and hide them). |
| ``sortable`` | `boolean` | `false` | Whether the tab items can be dragged to sort, it is recommended to use with the [`items`](#props-items) property. |

^^^ui
The preset styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
| `borderless` | Style without bottom separator. |
| `simple` | Simple style. |
| `strong` | Strong style. |
+++
^^^

^^^items
The data source of tabs, the item type is `{ label, name, disabled, status, removable, to, native ... }`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The title of the tab. |
| `name` | `string` | The name of the tab. |
| `status` | `'success' | 'warning' | 'info' | 'error'` | The status of the tab. |
| `disabled` | `boolean` | Whether the tab is disabled. |
| `removable` | `boolean` | Whether the tab can be removed. |
| ``to`` | `string | Object` | - | Refer to the [`Tab`](./tab) component [`to`](./tab#props-to) prop |
| ``native`` | `boolean` | `false` | Whether to force the routing mode to use the native `<a>` element. |
+++
^^^

^^^active
:::badges
`.sync`
:::

Indicates which tab is currently active. The specific mapping value is affected by the properties of the [tab](./tab), with priority given to `to` > `name`.
^^^

^^^matches
Used to set a unified routing matching logic for the internal [`Tab`](./tab) component. Refer to the [`to`](./tab#props-to) prop of the [`Tab`](./tab) component for details.

:::warning
When the internal `Tab` component sets the [`matches`](./tab#props-matches) prop, it will override the [`matches`](#props-matches) prop on the `Tabs` component.
:::
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | Allows inline [`Tab`](./tab) components. No default content. |
| ``panel`` | The panel area below the tab. |
| ``extra`` | The extension area on the right side of the tab. |
| ``tab-item`` | [^tab-item] |
| ``tab-label`` | The text area of the tab, with the tab text as the default content. The slot parameters are the same as those of the [`tab-item`](#slots-tab-item) slot, except for `attrs` / `activate`. |

^^^tab-item
The tab area, with the button/link corresponding to the tab as the default content. The slot parameter is an object describing the tab properties.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `label` | `string` | The text of the tab. |
| `name` | `string` | The name of the tab. |
| `disabled` | `boolean` | Whether the tab is disabled. |
| `to` | `string` | The routing information of the tab. |
| `active` | `boolean` | Whether the tab is the active item. |
| `index` | `number` | The index value of the tab in the list. |
| `native` | `boolean` | Whether to force the routing mode to use the native `<a>` element. |
| `removable` | `boolean` | Whether the tab can be removed. |
| `status` | `string` | The status of the tab. |
| `attrs` | `Object<string, string>` | Other HTML attributes that need to be output to the tab element, such as `role` / `aria-selected` / `aria-controls`, etc. |
| `activate` | `function(): void` | The method to activate the current tab. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | Triggered when the tab is switched. The callback parameter is `(tab: Object)`, where `tab` is consistent with the slot parameter in [`tab-label`](#slots-tab-label). |
| ``add`` | Triggered when the add button is clicked. No callback parameters. |
| ``remove`` | Triggered when a tab is removed. The callback parameter is `(tab: Object)`, where `tab` is consistent with the slot parameter in [`tab-label`](#slots-tab-label). |
| ``sort`` | Triggered when sorting. The callback parameter is `(fromIndex: number, toIndex: number)`, indicating moving from the original position (`fromIndex`) to the new position (`toIndex`). |

### Methods

| Name | Description |
| -- | -- |
| ``scrollTabIntoView`` | [^method-scrolltabintoview] |

^^^method-scrolltabintoview
When a horizontal scroll bar is generated in the tab container, scroll the specified tab into view.

```ts
function scrollTabIntoView(tabName: string): void
```
^^^

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``tabs.matches`` | `function` | See description. | [^config-matches] |

^^^config-matches
The function signature is the same as the [`to`](./tab#props-to) prop of the [`Tab`](./tab) component. The default value is:

```js
function (current, to) {
  return current.fullPath === to.fullPath
}
```
^^^

### Icons

| Name | Description |
| -- | -- |
| ``add`` | Add button. |
| ``remove`` | Remove button. |
| ``prev`` | Left arrow button. |
| ``next`` | Right arrow button. |
| ``success`` | Success status. |
| ``warning`` | Warning status. |
| ``info`` | Normal information status. |
| ``error`` | Error status. |
