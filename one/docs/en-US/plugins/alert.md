# alert

## Installation

```js
import Vue from 'vue'
import { $alert } from 'veui'

Vue.use($alert)
```

## API

After installation, this plugin provides a `$alert` method on all component instances, with the following signature: `function(content, title, options): Promise<void>`.

The method returns a `Promise` object that is resolved when the alert dialog is successfully closed.

| Name | Type | Description |
| -- | -- | -- |
| `content` | `string` | The text content displayed in the alert dialog. |
| `title` | `string` | The title of the alert dialog. |
| `options` | `Object` | [^options] |

^^^options
| Name | Type | Description |
| -- | -- | -- |
| `status` | `string` | The type of the alert, one of `'success'`, `'warning'`, `'info'`, or `'error'`. The default value is `'success'`. |
| `type` | `string` | Deprecated. Use the `status` property instead. |
| `overlayClass` | `string | Object | Array<string>` | The class name(s) to be added to the root node of the alert dialog overlay. |
| `ok` | `function(): Promise<void>` | The function to be called when the "I got it" button is clicked. If the `Promise` returned by this function is resolved, the dialog will be closed, otherwise it will not. |
| `okLabel` | `string` | The text content of the "OK" button. |
| `theme` | `string` | The [theme](/getting-started/style-variants#built-in-sub-themes) of the alert box. Can be `'d20'` / `'d22'` / `'ai'`. |
^^^

The `$alert` method also provides the following shortcut methods, which set the `status` option to the corresponding value:

| Method | Type | Description |
| -- | -- | -- |
| `success` | `function(content, title, options): Promise<void>` | Shows an alert dialog with the "success" status. |
| `warn` | `function(content, title, options): Promise<void>` | Shows an alert dialog with the "warning" status. |
| `info` | `function(content, title, options): Promise<void>` | Shows an alert dialog with the "info" status. |
| `error` | `function(content, title, options): Promise<void>` | Shows an alert dialog with the "error" status. |
