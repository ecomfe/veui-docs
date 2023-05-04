# toast

## Installation

```js
import Vue from 'vue'
import { $toast } from 'veui'

Vue.use(toast)
```

## API

After installing, this plugin will provide a `$toast` object on all component instances, which is a `function(message, options): void`.

| Name | Type | Description |
| -- | -- | -- |
| `message` | `string` | The text content displayed in the message popup. |
| `options` | `Object` | [^options] |

^^^ref
| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `type` | `string` | `'info'` | The type of message, can be `'success'` / `'warning'` / `'info'` / `'error'`. |
| `duration` | `number` | `3000` | Sets the duration in milliseconds before the message disappears. |
^^^

The `$toast` method also provides the following shortcut methods, which will set the `type` value of `options` to the corresponding type:

| Method Name | Type | Description |
| -- | -- | -- |
| `success` | `function(message, options): void` | Displays a message with the "success" style. |
| `warn` | `function(message, options): void` | Displays a message with the "warning" style. |
| `info` | `function(message, options): void` | Displays a message with the "normal message" style. |
| `error` | `function(message, options): void` | Displays a message with the "error" style. |
