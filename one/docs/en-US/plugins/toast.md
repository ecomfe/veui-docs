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

^^^options
| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `status` | `string` | `'info'` | The type of message, can be `'success'` / `'warning'` / `'info'` / `'error'`. |
| `type` | `string` | `'info'` | Deprecated. Please use the `status` property instead. |
| `duration` | `number` | `3000` | Sets the duration in milliseconds before the message disappears. |
^^^

The `$toast` method also provides the following shortcut methods, which will set the `status` value of `options` to the corresponding value:

| Method Name | Type | Description |
| -- | -- | -- |
| `success` | `function(message, options): void` | Displays a message with the "success" status. |
| `warn` | `function(message, options): void` | Displays a message with the "warning" status. |
| `info` | `function(message, options): void` | Displays a message with the "normal message" status. |
| `error` | `function(message, options): void` | Displays a message with the "error" status. |
