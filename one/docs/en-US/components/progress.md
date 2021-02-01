# Progress

## Demos

[[ demo src="/demo/progress/default.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `type` | `string` | `'bar'` | The type of the progress. Available values are `bar`/`circular`, denoting progress bar and progress circle respectively. |
| `desc` | `boolean` | `false` | The description of the progress. |
| `value` | `number` | `0` | Progress value. |
| `min` | `number` | `0` | Minimum value. |
| `max` | `number` | `1` | Max value. |
| `decimal-place` | `number` | `0` | Decimal place for the progress value. |
| `status` | `string` | - | [^status] |
| `autosucceed` | `boolean|number` | - | Whether automatically enter the `success` status when the progress reaches the maximum value. `true` denotes entering immediately, while `number` values denotes the delay in milliseconds before entering the `success` status. |
| `indeterminate` | `boolean` | `false` | Whether the progress is indeterminate. Currently only works when `type` is `bar`. |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `fluid` | Fluid layout for progress bar. |
| `s` | Small. |
| `m` | Medium. |
^^^

^^^status
:::badges
`.sync`
:::

The status of the progress. Available values are `success`/`alert`, denoting success and alert status respectively.
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | [^slot-default] |

^^^slot-default
The description content. Displays the percentage value of the progress by default.

+++Scope properties
| Name | Type | Description |
| -- | -- | -- |
| `percent` | `number` | The percentage value of the progress. |
| `value` | `number` | The value of the progress, same as the `value` prop. |
| `status` | `string` | The status of the progress, same as the `status` prop. |
+++
^^^
