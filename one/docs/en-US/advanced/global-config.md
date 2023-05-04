# Global Config

Many components in VEUI define global configuration options, allowing developers to globally configure the behavior details of a component when using it.

For example, the `Uploader` component can be configured uniformly for the upload mode. Users can choose to use the iframe callback method or the XHR2 method to transmit data based on the specific situation of the project's front-end and back-end interfaces and the browser versions that need to be supported. The conversion function of the remote data format can also be configured uniformly.

VEUI global configuration options can be overridden through the `veui/managers/config` module:

```js
import config from 'veui/managers/config'

config.set('uploader.requestMode', 'iframe')
config.set('uploader.convertResponse', ({ code, error, result }) => {
  /**
   * Transform from
   *
   * {
   *   code: 0,
   *   error: '...',
   *   result: {
   *     url: '...'
   *   }
   * }
   *
   * to
   *
   * {
   *   success: true,
   *   message: '...',
   *   src: '...'
   * }
   */
  return {
    success: code === 0,
    src: error ? null : result.url,
    message: error || null
  }
})
```

If you need to modify multiple settings of the same component at once, you can use the following syntax:

```js
import config from 'veui/managers/config'

config.set({
  requestMode: 'iframe',
  convertResponse: data => data
}, 'uploader')
```

The `config.set()` method can be passed in the following forms:

* `(key: string, value: *, namespace: string)`
* `(values: Object<{key: string, value: *}>, namespace: string)`

When the `namespace` parameter is provided, the final generated configuration item key name is <code>\`${namespace}.${key}\`</code>.

In addition, the `config.defaults()` method with the same parameter list is also provided, the difference is that if the key value that needs to be written in the configuration item already exists, it will not be overwritten.

Please check the details page of each component, directive, etc. for the global configurations supported by each component.

Share
Like
