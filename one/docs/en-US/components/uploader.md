# Uploader

## Examples

### File upload

Set the value of [`type`](#props-type) to `file` to enter file upload mode.

[[ demo src="/demo/uploader/file.vue" ]]

### Image upload

Set the value of [`type`](#props-type) to `image` to enter image upload mode.

[[ demo src="/demo/uploader/image.vue" ]]

### Media upload

Set the value of [`type`](#props-type) to `media` to enter media upload mode.

[[ demo src="/demo/uploader/media.vue" ]]

### Validation

Validate image format, size, quantity, and use [`validator`](#props-validator) for custom validation.

[[ demo src="/demo/uploader/validate.vue" ]]

### Custom upload

Customize the upload process using [`upload`](#props-upload) and configure the overlay options using [`controls`](#props-controls).

[[ demo src="/demo/uploader/custom.vue" ]]

### Sorting

Set the [`sortable`](#props-sortable) property to specify that upload items can be sorted by drag and drop.

[[ demo src="/demo/uploader/sortable.vue" ]]

### Custom action bar

Set the [`controls`](#props-controls) property to specify the action options that appear when hovering over each upload item.

[[ demo src="/demo/uploader/controls.vue" ]]

### Custom upload entry

Set the [`entries`](#props-entries) property to specify the action options that appear when hovering over "continue uploading" items.

[[ demo src="/demo/uploader/entries.vue" ]]

### Custom pick

Set the [`pick`](#props-pick) property to customize file selection.

[[ demo src="/demo/uploader/pick.vue" ]]

### Help text

Set the [`help`](#props-help) property or [`help`](#slots-help) slot to specify help text.

[[ demo src="/demo/uploader/help.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``type`` | `string` | `'file'` | [^type] |
| ``value`` | `Object | Array<Object>` | - | [^value] |
| ``key-field`` | `string` | `'key'` | Specifies the unique key of the file object, which serves as the basis for correctly handling the order of the file list when the data changes. |
| ``name`` | `string` | `'file'` | The `name` of the native `<input>` element. |
| ``action`` | `string` | - | The upload URL. |
| ``headers`` | `Object` | `uploader.headers` | The content to be added to the [HTTP request headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers). Can be [globally configured](#configs-uploader-headers). |
| ``with-credentials`` | `boolean` | `true` | Same as the [`withCredentials`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials) property of `XMLHttpRequest`. |
| ``request-mode`` | `string` | `uploader.requestMode` | [^request-mode] |
| ``iframe-mode`` | `string` | `uploader.iframeMode` | [^iframe-mode] |
| ``callback-namespace`` | `string` | `uploader.callbackNamespace` | Specifies the namespace of the callback function when `request-mode` is `'iframe'` and `iframe-mode` is `'callback'`, under the `window` object. Can be [globally configured](#configs-uploader-callbackNamespace). |
| ``data-type`` | `string` | `'json'` | [^data-type] |
| ``convert-response`` | `uploader.convertResponse` | - | [^convert-response] |
| ``accept`` | `string` | - | Same as the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/file#accept) attribute of the native `<input>` element, adding another layer of validation after the browser's file type filtering. For cases where the MIME type, such as `application/msword`, does not match the extension, the validation is skipped. |
| ``max-count`` | `number` | - | The maximum number of files. |
| ``max-size`` | `number | string` | - | The maximum size of a single file. If it is a `number`, the unit is in `bytes`; if it is a `string`, it supports adding units after the number, and the units can be `b` / `kb` / `mb` / `gb` / `tb`. |
| ``validator`` | `function(Object): Object | Promise<Object>` | - | [^validator] |
| ``payload`` | `Object` | - | Additional parameters to be carried in the upload request. |
| ``autoupload`` | `boolean` | `true` | Specifies whether to upload immediately after selecting files. |
| ``order`` | `string` | `'asc'` | [^order] |
| ``picker-position`` | `string` | `'after'` | [^picker-position] |
| ``upload`` | `function(Object, Object): function` | - | [^upload] |
| ``controls`` | `function(Object, Array<Object>): Array<Object>` | - | [^controls] |
| ``multiple`` | `boolean` | `false` | Upload multiple files. When `max-count` is `1` and `multiple` is `true`, `value` is also an array. |
| ``entries`` | `function(Array<Object>): Array<Object>` | - | [^entries] |
| ``pick`` | `function({remainingCount: number}): Promise<Object>` | - | [^pick] |
| ``after-pick`` | `function(Array<Object>): void` | - | The callback after selecting files. |
| ``sortable`` | `boolean` | `false` | Whether the file list can be sorted. |
| ``preview-options`` | `object` | `{wrap: true, indicator: 'number'}` | Preview options passed to [`Lightbox`](./lightbox). |
| ``validity-display`` | `'popup' | 'inline'` | `'popup'` | [^validity-display] |
| ``help`` | `string` | - | Help text. |
| ``help-position`` | `'side' | 'bottom'` | `'side'` | [^help-position] |
| ``picker-label`` | `string` | - | The text of the upload button. |
| ``picker-icon`` | `string | Object` | - | The icon of the upload button, referring to the [`name`](./icon#props-name) prop of [`Icon`](./icon). |

^^^ui
Predefined styles.

+++Enum values
| Value | Description |
| -- | -- |
| `s` | Small-sized style. |
| `m` | Medium-sized style. |
+++
^^^

^^^type
The type of file to be uploaded.

+++Enum values
| Value | Description |
| -- | -- |
| `file` | Upload files. |
| `image` | Upload images. |
| `media` | Upload media files (supports both video and image). |
| `video` | Upload videos. |
+++
^^^

^^^value
When `multiple` is set to `true`, returns an array of file objects. Additionally, if `max-count` is set to a value greater than `1`, it is regarded as having enabled `multiple`.

Each file object is of type `{name: string, src: string, ...}`, as well as custom properties added in `convert-response`.
^^^

^^^request-mode
Specifies the asynchronous upload method. Can be [globally configured](#configs-uploader-request-mode).

+++Enum values
| Value | Description |
| -- | -- |
| `xhr` | Upload using `XMLHttpRequest`. |
| `iframe` | Upload using `<iframe>`. |
| `custom` | Custom upload process, uploaded via the prop `upload` method. |
+++
^^^

^^^iframe-mode
When the value of [`request-mode`](#props-request-mode) is `iframe`, specifies the callback method after the upload is successful. Can be [globally configured](#configs-uploader-request-mode).

+++Enum values
| Value | Description |
| -- | -- |
| `postmessage` | Callback via `PostMessage`. |
| `callback` | Callback via calling the callback function in the window's [`callback-namespace`](#props-callback-namespace). |
+++
^^^

^^^data-type
Specifies the parsing method for text if the callback value is text. `data-type` can be empty if the callback data is an `Object`.

+++Enum values
| Value | Description |
| -- | -- |
| `json` | The text returned by the callback is JSON. |
| `text` | The text returned by the callback is plain text. |
+++
^^^

^^^convert-response
A function that converts callback data to the required format so that the component can determine whether the upload was successful and display the corresponding result. The parameter is the callback data. The format of the returned result is as follows:

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `success` | `boolean` | Indicates whether the upload was successful. |
| `name` | `string` | The name of the file. Required when `success` is `true`. |
| `src` | `string` | The address of the file. Required when `success` is `true`. |
| `message` | `string` | Error message when upload fails. Required when `success` is `false`. |
| `preview` | `boolean` | Whether to preview the failed upload item when upload fails. |

Custom attributes can also be added to the returned result. These custom attributes will be included in the [`value`](#props-value) and [`change`](#events-change), [`success`](#events-success), [`failure`](#events-failure), [`remove`](#events-remove), and [`progress`](#events-progress) event callback parameters `file`. Can be [globally configured](#configs-uploader-convert-response).
+++
^^^

^^^order
The display order of uploaded files, sorted by the time of upload start.

+++Enum values
| Value | Description |
| -- | -- |
| `asc` | Ascending order. |
| `desc` | Descending order. |
+++
^^^

^^^picker-position
In image upload mode, the position of the upload button in the image queue.

+++Enum values
| Value | Description |
| -- | -- |
| `before` | The upload button is always at the front of the queue. |
| `after` | The upload button is always at the end of the queue. |
| `top` | The upload button is always on top of the queue. |
| `none` | Do not show the upload button. |
+++
^^^

^^^pick
Custom logic for selecting files to be uploaded.

```ts
function pick({ remainingCount: number }): Promise<PickedFile | PickedFile[]>

type PickedFile = {
  name: string
  type: string
  src: string
  poster?: string
  alt?: string
  size?: number
}
```

+++Properties
| Value | Description |
| -- | -- |
| `name` | File name. |
| `type` | File type. |
| `src` | File address. |
| `poster` | Preview image for video files. |
| `alt` | Replacement text. |
| `size` | File size. |
+++
^^^

^^^validity-display
Display method for validation information.

+++Enum values
| Value | Description |
| -- | -- |
| `popup` | Display validation information in a popup when hovering. |
| `inline` | Display validation information inline. |
+++
^^^

^^^help-position
Display position for help information.

+++Enum values
| Value | Description |
| -- | -- |
| `side` | Display next to the upload button. |
| `bottom` | Display below the upload button. |
+++
^^^

^^^validator
Custom validation logic, with the original [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object as the parameter. The format of the returned result is as follows:

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `valid` | `boolean` | Whether the validation passes. |
| `message` | `string` | Error message when `valid` is `false`. |
| `preview` | `boolean` | Whether to preview the failed upload item when validation fails. |

Asynchronous validation is supported, and the return value can be a `Promise` that resolves to the above return result.
^^^

^^^upload
Customize the upload process when the value of `request-mode` is `'custom'`. The first parameter is the original [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object, and the second parameter is the object containing the callback functions related to the upload process, with the following specific properties:

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `onload` | `function` | Callback function when the upload is complete, with the same content as the return value of the [`convert-response`](#props-convert-response) attribute. |
| `onprogress` | `function` | Callback function when the upload progress changes, with the parameter `{ loaded: number, total: number }`, where `loaded` is the number of bytes uploaded, and `total` is the total number of bytes in the file. |
| `oncancel` | `function` | Callback function to be executed on the component when the custom upload is actively canceled, with no parameters. |
| `onerror` | `function` | Callback function when an error occurs during the upload, with the parameter `{ message: string }`, where `message` is the error message. |

If `upload` returns a function, that function will be called when the user cancels the operation or the upload component is destroyed, to interrupt the custom upload process.
^^^

^^^controls
In image upload mode, customize the operation items on the image mask layer. The parameters are `(file: Object, defaultControls: Array<Object>)`, where `file` is the file-related information, and `defaultControls` is the array containing the default operation items. Depending on the status of the file, return an array containing different operation items. The specific properties of each operation item are as follows:

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `name` | `string` | The name of the operation item. Clicking this button will trigger an event with the same name. The callback parameter of the event is `(file: Object, index: number)`, where `file` is the file object that triggered the event, and `index` is the sequence number of the file in the list. |
| `label` | `string` | The text description of the operation item. |
| `icon` | `string` | The icon used for the operation item. |
| `disabled` | `boolean` | Whether the operation item is disabled. If this field is empty, the disabled status of the operation item follows the overall disabled status of the component. |
^^^

^^^entries
Control the operation items for each uploaded file, such as delete and preview. The default operation item array will be passed as a parameter, and the actual effective operation item array will be returned. The operation item object refers to the field details of the [`controls`](#props-controls) attribute.
^^^

### Slots

| Name | Description |
| -- | -- |
| ``upload`` | The area of the upload button in image upload mode. |
| ``help`` | Tips for file quantity, format, size, etc. |
| ``file`` | [^file] |
| ``file-before`` | The area before the content of a single file. The slot parameters are the same as those of the [`file`](#slots-file) slot. |
| ``file-after`` | The area after the content of a single file. The slot parameters are the same as those of the [`file`](#slots-file) slot. |
| ``uploading`` | The area of a single image being uploaded in image upload mode. The slot parameters are the same as those of the [`file`](#slots-file) slot. |
| ``failure`` | The area of a single image that failed to upload in image upload mode. The slot parameters are the same as those of the [`file`](#slots-file) slot). |

^^^file
The area of a single file used to customize its content.

+++Slot Parameters
| Name | Type | Description |
| -- | -- | -- |
| `name` | `string` | The name of the file. |
| `src` | `string` | The address of the file. |
| `status` | `string` | The status of the file. `'success'` indicates a successful upload; `'uploading'` indicates that the file is being uploaded; `'failure'` indicates a failed upload. |
| `index` | `number` | The serial number of the file in the list. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``change`` | [^event-change] |
| ``remove`` | [^event-remove] |
| ``success`` | Triggered when uploading is successful, the callback parameter is the same as that of the `remove` event. |
| ``failure`` | Triggered when uploading fails, the callback parameter is the same as that of the `remove` event. |
| ``invalid`` | [^event-invalid] |
| ``statuschange`` | [^event-statuschange] |
| ``progress`` | [^event-progress] |

^^^event-change
Triggered only when uploading or deleting files, the callback parameter is `(value)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `value` | `Object | Array<Object>` | The value of the component's `value` property. |
+++
^^^

^^^^event-remove
Triggered when a file is deleted, the callback parameter is `(file, index)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `file` | `Object` | [^remove-file] |
| `index` | `number` | The index of the deleted file. |

^^^remove-file
The file that was deleted.

| Name | Type | Description |
| -- | -- | -- |
| `name` | `string` | The name of the file. |
| `src` | `string` | The address of the file. |
| `status` | `string` | The upload status. `'success'` indicates that the upload was successful; `'uploading'` indicates that the upload is in progress; `'failure'` indicates that the upload failed. |
^^^

Also contains custom properties added in [`convert-response`](#props-convert-response).
+++
^^^^

^^^^event-invalid
Triggered when file validation fails, the callback parameter is `(validity: Object)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `file` | `Object` | The file information that did not pass validation, which is the same as the `file` parameter in the `remove` event callback. If the reason for the validation failure is that the selected number of files exceeds the `max-count` limit, this field is empty. |
| `errors` | `Array<Object>` |  |
+++

^^^invalid-errors
An array containing all the validation error information of the file, each item in the array is an object containing the failed validation information.

| Name | Type | Description |
| -- | -- | -- |
| `type` | `string` | The type of validation failure. The enumeration values of the type can be obtained from the `Uploader.errors` object, such as `Uploader.errors.SIZE_INVALID`. |
| `value` | `number | string | Object` | The value that did not pass validation, which has different types depending on the `type`. |
| `message` | `string` | The error message of the validation failure. |
^^^

+++Validation errors and parameters
| Type | Description | `value` Type | `value` Description |
| -- | -- | -- | -- |
| `TYPE_INVALID` | File type validation failed. | `string` | The name of the file. |
| `SIZE_INVALID` | File size validation failed. | `number` | The size of the file in bytes. |
| `TOO_MANY_FILES` | The number of selected files exceeds the `max-count` limit. | `number` | The number of files already selected. |
| `CUSTOM_INVALID` | `validator` custom validation failed. | `Object` | The file object, with the same fields as the `file` parameter in the `remove` event callback. |
+++
^^^^

^^^event-statuschange
Triggered when the overall status of all files changes, the callback parameter is the overall status of the component `(status: string)`.

+++Values
| Value | Description |
| -- | -- |
| `empty` | No files have been selected for upload. |
| `uploading` | At least one file is currently being uploaded. |
| `failure` | At least one file upload has failed. |
| `success` | All files have been uploaded successfully. |
+++
^^^

^^^event-progress
Triggered when the upload progress changes in the case where the value of `request-mode` is `'xhr'`, the callback parameter is `(file, index, event)`.

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `file` | `Object` | The same as the `file` parameter in the `remove` event callback. |
| `index` | `number` | The index of the file currently being uploaded. |
| `event` | [`Event`](https://developer.mozilla.org/en-US/docs/Web/Events/progress) | The native upload progress event. |
+++
^^^

### Configs

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| ``uploader.requestMode`` | `string` | `'xhr'` | See [`request-mode`](#props-request-mode) prop. |
| ``uploader.iframeMode`` | `string` | `'postmessage'` | See [`iframe-mode`](#props-iframe-mode) prop. |
| ``uploader.callbackNamespace`` | `string` | `'veuiUploadResult'` | See [`callback-namespace`](#props-callback-namespace) prop. |
| ``uploader.headers`` | `Object` | - | See [`headers`](#props-headers) prop. |
| ``uploader.convertResponse`` | `function(Object): Object` | - | See [`convert-response`](#props-convert-response) prop. |
| ``uploader.pickerPosition`` | `string` | `'after'` | See [`picker-position`](#props-picker-position) prop. |

### Icons

| Name | Description |
| --- | --- |
| ``upload`` | Upload files. |
| ``add-image`` | Upload images. |
| ``clear`` | Delete. |
| ``success`` | Upload succeeded. |
| ``failure`` | Upload failed. |
| ``loading`` | Uploading. |
| ``file`` | Uploaded files. |
| ``alert`` | Validation failure warning. |
| ``preview`` | Preview images. |

### CSS

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ``--dls-uploader-file-item-width`` | `<length>` | - | The width of file list item when [`type`](#props-type) prop is set to `file`. |
