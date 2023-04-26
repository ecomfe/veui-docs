# Uploader

## Examples

### File upload

Set the [`type`](#props-type) prop to `file` to use the file upload mode.

[[ demo src="/demo/uploader/file.vue" ]]

### Image upload

Set the [`type`](#props-type) prop to `image` to use the image upload mode.

[[ demo src="/demo/uploader/image.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``type`` | `string` | `'file'` | [^type] |
| ``value`` | `Object | Array<Object>` | - | [^value] |
| ``key-field`` | `string` | `'key'` | Used to specify a unique key for the file object, as a basis for correctly handling the order of the file list when the data changes. |
| ``name`` | `string` | `'file'` | The `name` of native `<input>` elements. |
| ``action`` | `string` | - | Upload URL. |
| ``headers`` | `Object` | `uploader.headers` | Extra [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers). Can be [globally configured](#configs-uploader-headers). |
| ``with-credentials`` | `boolean` | `true` | The same as the [`withCredentials`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials) option of `XMLHttpRequest`. |
| ``request-mode`` | `string` | `uploader.requestMode` | [^request-mode] |
| ``iframe-mode`` | `string` | `uploader.iframeMode` | [^iframe-mode] |
| ``callback-namespace`` | `string` | `uploader.callbackNamespace` | The namespace of the callback function when [`request-mode`](#props-request-mode) is `'iframe'` and `iframe-mode` is `'callback'`, will be placed under the `window` object. Can be [globally configured](#configs-uploader-callbackNamespace). |
| ``data-type``| `string` | `'json'` | [^data-type] |
| ``convert-response`` | `uploader.convertResponse` | - | [^convert-response] |
| ``accept`` | `string` | - | The same as the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/file#limiting_accepted_file_types) attribute of native `<input>` elements. Works as an extra layer of validation on top of browsers' file filter. Will skip validation when MIME type doesn't match file extension, eg. `application/msword`. |
| ``max-count`` | `number` | - | The maximum file count. |
| ``max-size`` | `number | string` | - | The maximun size of a single file. When being a `number`, the unit will be `byte`. When being a `string`, units can be added after numbers, including `b` / `kb` / `mb` / `gb` / `tb`. |
| ``payload`` | `Object` | - | The extra data payload to be sent together with the file. |
| ``progress`` | `string` | `'text'` | [^progress] |
| ``autoupload`` | `boolean` | `true` | Whether to start upload as soon as a file is selected. |
| ``order`` | `string` | `asc` | [^order] |
| ``upload`` | `function(Object, Object): function` | - | [^upload] |
| ``controls`` | `function(Object, Array<Object>): Array<Object>` | - | [^controls] |

^^^ui
Style variants.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small. |
| `m` | Medium. |
+++
^^^

^^^type
The type of the uploader.

+++Enum values
| Value | Description |
| -- | -- |
| `file` | File upload. |
| `image` | Image upload. |
+++
^^^

^^^value
Returns an array of file objects when `multiple` is `true`. When `max-count` is set to a value greater than `1`, then `multiple` treated as `true`.

The type of single file is `{name: string, src: string, ...}`, and fields added inside [`convert-response`](#props-convert-response).
+++
^^^

^^^request-mode
The request mode of the uploader. Can be [globally configured](#configs-uploader-request-mode).

+++Enum values
| Value | Description |
| -- | -- |
| `xhr` | Upload with `XMLHttpRequest`. |
| `iframe` | Upload with `<iframe>`. |
+++
^^^

^^^iframe-mode
To specify the callback mode when [`request-mode`](#props-request-mode) is `iframe`. Can be [globally configured](#configs-uploader-iframe-mode).

+++Enum values
| Value | Description |
| -- | -- |
| `postmessage` | Callback with `PostMessage`. |
| `callback` | Callback with callback functions registered according to [`callback-namespace`](#props-callback-namespace) on `window`. |
+++
^^^

^^^data-type
To specify the data type in order to parse the callback value if it's text content. Can be left empty if callback value is `Object`.

+++Enum values
| Value | Description |
| -- | -- |
| `json` | The callback text is JSON. |
| `text` | The callback text is plain text. |
+++
^^^

^^^convert-response
Converts response data to standard format that can be consumed by the uploader, in order to allow the uploader to display upload result. The parameter is the callback data. The type of the return value must conform to the following:

+++Properties
| Property | Type | Description |
| -- | -- | -- |
| `success` | `boolean` | Whether the upload succeeded. |
| `name` | `string` | The name of the file. Required when `success` is `true`. |
| `src` | `string` | The location of the file. Required when `success` is `true`. |
| `message` | `string` | Error message when upload fails. Required when `success` is `false`. |

Additional fields can be added to the response data. These data fields will be included in the [`value`](#props-value) prop and parameter of callbacks [`change`](#events-change), [`success`](#events-success), [`failure`](#events-failure), [`remove`](#events-remove) and [`progress`](#events-progress) events. Can be [globally configured](#configs-uploader-convert-response).
+++
^^^

^^^progress
To specify how to display progress when `request-mode` is `xhr`.

+++Enum values
| Value | Description |
| -- | -- |
| `text` | Displays as status text. |
| `number` | Displays the progress as percentage. |
| `bar` | Displays th progress as a progress bar. |
+++
^^^

^^^order
The order of displaying uploaded files according to start time.

+++Enum values
| Value | Description |
| -- | -- |
| `asc` | Ascending order. |
| `desc` | Descending order. |
+++
^^^

^^^upload
Customizing the upload process in case the value of `request-mode` is `'custom'`, the first parameter is the native [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object and the second parameter is the object that contains callback functions associated with the upload process, with the following properties.

+++Properties
| Property | Type | Description |
| -- | -- | -- |
| `onload` | `function` | The upload completion callback function whose arguments is the same as the [`convert-response`](#props-convert-response) prop's return value. |
| `onprogress` | `function` | The callback function for upload progress, the parameter type being `{ loaded: number, total: number }`, `loaded` is the number of bytes that have been uploaded, and `total` is the total number of bytes in the file. |
| `oncancel` | `function` | The callback to the component when the custom upload is actively cancelled, no parameters. |
| `onerror` | `function` | The callback for upload error, the parameter type is `{ message: string }` and `message` is the error message. |

If `upload` returns a function, it will be called when the user cancelled proactively or the upload component is destroyed, to abort the custom upload process.
^^^

^^^controls
In image upload mode, it is used to customize the actions on the floating toolbar. The parameter types are `(file: Object, defaultControls: Array<Object>)`, where `file` is the file related information and `defaultControls` is the array containing the default actions. It can return an array of different actions depending on the file state. The specific properties for each action item are as follows.

+++Properties
| Property | Type | Description |
| -- | -- | -- |
| `name` | `string` | The name of the action item. When the button is clicked, an event with the same name will be emitted, with `(file: Object, index: number)` as the callback parameter, `file` is the file object that triggered the event, and `index` is the number of the file in the list. |
| `icon` | `string` | The icon of the action item. |
| `disabled` | `boolean` | Whether the action item is disabled. If this property is undefined, the disabled state of the action item follows the disabled state of the component. |
^^^

### Slots

| Name | Description |
| -- | -- |
| ``button-label`` | [^button-label] |
| ``upload`` | The area of the upload button in image upload mode. |
| ``desc`` | The content of the prompt for the number, format, size, etc. of files. |
| ``file`` | [^file] |
| ``file-before`` | The area before the contents of a single file. The scope argument is the same as the [`file`](#slots-file) slot. |
| ``file-after`` | The area after the contents of a single file. The scope argument is the same as the [`file`](#slots-file) slot. |
| ``uploading`` | The area of a single image being uploaded in image upload mode. The scope argument is the same as the [`file`](#slots-file) slot. |
| ``failure`` | The area of a single image that failed to upload in image upload mode. The scope argument is the same as the [`file`](#slots-file) slot. |

^^^button-label
The content in the upload button.

Default content: file upload for prompt to select a file, and image upload for upload image icon.
^^^

^^^file
Single file area to customize the file content.

+++Slot props
| name | type | description |
| -- | -- | -- |
| `name` | `string` | The name of the file. |
| `src` | `string` | The address of the file. |
| `status` | `string` | The status of the file. `'success'` means the upload was successful; `'uploading'` means the upload is in progress; `'failure'` means the upload failed. |
| `index` | `number` | The number of the file in the list. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |
| ``remove`` | [^event-remove] |
| ``success`` | Triggers when upload succeeded. Shares the same callback parameter list with the [`remove`](#events-remove) event. |
| ``failure`` | Triggers when upload failed. Shares the same callback parameter list with the [`remove`](#events-remove) event. |
| ``invalid`` | [^event-invalid] |
| ``statuschange`` | [^event-statuschange] |
| ``progress`` | [^event-progress] |

^^^event-change
Triggers when upload succeeded or a file is removed. The callback parameter list is `(value)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `Object | Array<Object>` | The `value` of the component. |
+++
^^^

^^^event-remove
Triggered when a file is removed. The callback parameter list is `(file, index)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `file` | `Object` | The removed file object. |
| `index` | `number` | The index of the removed file. |

`file` properties

| Name | Type | Description |
| -- | -- | -- |
| `name` | `string` | The name of the file. |
| `src` | `string` | The location of the file. |
| `status` | `string` | The status of the upload process. Can be one of `'success'` / `'uploading'` / `'failure'`. |

Fields added from `convert-response` are also available.
+++
^^^

^^^event-invalid
Triggered when file validation fails. The callback parameter list is `(validity: Object)`.

+++Parameter properties
| Name | Type | Description |
| -- | -- | -- |
| `file` | `Object` | The information about the file that failed the validation, being the same type as `file` in the callback parameter of the [`remove`](#events-remove) event. This property is empty if the validation fails because the number of files selected exceeds the `max-count` limit. |
| `errors` | `Array<Object>` | Array of all the validation error messages of the file, each item in it is an object that contains validation failure information. |
+++

+++Validation error properties
| Name | Type | Description |
| -- | -- | -- |
| `type` | `string` | The type of validation error, whose enum value can be accessed from the `Uploader.errors` object, eg. `Uploader.errors.SIZE_INVALID`. |
| `value` | `number | string | Object` | The value that doesn't pass validation, can be different types depending on the `type` property. |
| `message` | `string` | The validation error message. |
+++

+++Relationship between validation failure types and parameters
| type | description | `value` type | `value` description |
| -- | -- | -- | -- |
| `TYPE_INVALID` | File type validation failure. | `string` | File name. |
| `SIZE_INVALID` | File size validation failure. | `number` | File size in bytes. |
| `TOO_MANY_FILES` | The number of selected files exceeds the `max-count` limit. | `number` | Number of files selected. |
| `CUSTOM_INVALID` | Custom validation failure returned by [`validator`](#props-validator) prop. | `Object` | File object, same as [`remove`](#events-remove) event callback parameter. |
+++
^^^

^^^event-statuschange
Triggered when the status of the entire uploader changes. The callback parameter list is `(status: string)`.

+++Values
| Value | Description |
| -- | -- |
| `empty` | No file is selected. |
| `uploading` | At least one file is being uploaded. |
| `failure` | Any file is not being successfully uploaded. |
| `success` | All files are successfully uploaded. |
+++
^^^

^^^event-progress
Triggered when upload progress updated, when `request-mode` is `'xhr'`. The callback parameter list is `(file, index, event)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `file` | `Object` | Same as the file parameter of the callback for the [`remove`](#events-remove) event. |
| `index` | `number` | The index of the file being uploaded. |
| `event` | [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/progress) | Native upload progress event object. |
+++
^^^

### Configs

| Key | Type | Default | Description |
| -- | -- | -- | -- |
| ``uploader.requestMode`` | `string` | `'xhr'` | Same as the [`request-mode`](#props-request-mode) prop. |
| ``uploader.iframeMode`` | `string` | `'xhr'` | Same as the [`iframe-mode`](#props-iframe-mode) prop. |
| ``uploader.callbackNamespace`` | `string` | `'veuiUploadResult'` | Same as the [`callback-namespace`](#props-callback-namespace) prop. |
| ``uploader.headers`` | `Object` | - | Same as the [`headers`](#props-headers) prop. |
| ``uploader.convertResponse`` | `function(Object): Object` | - | Same as the [`convert-response`](#props-convert-response) prop. |

### Icons

| Name | Description |
| -- | -- |
| ``upload`` | Upload file. |
| ``clear`` | Remove file. |
| ``success`` | Upload succeeded. |
| ``redo`` | Retry upload. |
| ``file`` | File. |
| ``add`` | Add file. |
| ``alert`` | Validation failure alert. |
