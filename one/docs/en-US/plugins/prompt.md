# prompt

## Installation

```js
import Vue from 'vue'
import { $prompt } from 'veui'

Vue.use($prompt)
```

## API

After installation, this plugin will provide a `$prompt` method on all component instances, with the type of `function(content, title, options): Promise<?string>`.

This method returns a `Promise` object that will be resolved after the prompt is successfully closed. If the user clicks the "OK" button, the resolved result will be the string entered by the user; if the "Cancel" button is clicked, the result value will be `null`.

| Name | Type | Description |
| -- | -- | -- |
| `content` | `string` | The text content displayed in the prompt. |
| `title` | `string` | The title of the prompt. |
| `options` | `Object` | [^options] |

^^^options
| Name | Type | Description |
| -- | -- | -- |
| `overlayClass` | `string | Object | Array<string>` | The class name added to the root node of the prompt. |
| `ok` | `function(): Promise<void>` | Inserts an asynchronous process before the `Promise` returned by the `success` method is resolved after clicking the "OK" button. If the `Promise` returned by this function is resolved, the prompt will be closed; otherwise, it will remain open. |
| `cancel` | `function(): Promise<void>` | Inserts an asynchronous process before the `Promise` returned by the `success` method is resolved after clicking the "Cancel" button. If the `Promise` returned by this function is resolved, the prompt will be closed; otherwise, it will remain open. |
| `okLabel` | `string` | The text content of the "OK" button. |
| `cancelLabel` | `string` | The text content of the "Cancel" button. |
| `theme` | `string` | The [theme](/getting-started/style-variants#built-in-sub-themes) of the prompt box. Can be `'d20'` / `'d22'` / `'ai'`. |
^^^
