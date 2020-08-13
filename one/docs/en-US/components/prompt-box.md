# PromptBox

## Demos

[[ demo src="/demo/prompt-box/base.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | [^open] |
| `title` | `string` | - | The title of the prompt box. |
| `content` | `string` | - | The description text above the text input. |
| `value` | `string` | `''` | [^value] |
| `overlay-class` | `string|Array|Object=` | - | See the `overlay-class` prop of [`Overlay`](./overlay). |

^^^open
:::badges
`.sync`
:::

Whether the prompt box is displayed.
^^^

^^^value
:::badges
`v-model`
:::

The value of the prompt input.
^^^

### Slots

| Name | Description |
| -- | -- |
| `default` | The content of the prompt box. |
| `title` | The title of the prompt box. Will ignore the `title` prop when specified. |
| `foot` | The foot area of the prompt box. Displays an “OK” and a “Cancel” button by default. |

### Events

| Name | Description |
| -- | -- |
| `input` | [^event-input] |
| `ok` | Triggered when the “OK” button is clicked. |
| `cancel` | Triggered when the “Cancel” button is clicked. |
| `afterclose` | Triggered after the box overlay is closed. If leaving transition is provided by the theme, the event will be triggered after the transition completes. |

^^^event-input
:::badges
`v-model`
:::

Triggered when the input value changes. The callback parameter list is `(value: string)` with `value` being the current value of the input.
^^^
