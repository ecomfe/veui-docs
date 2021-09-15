<template>
<article>
  <section>
    <h4>Router link</h4>
    <div>
      <veui-link :to="{ name: 'components-icon' }">
        Previous
      </veui-link>
    </div>
  </section>
  <section>
    <h4>Native link (<code>ui="strong s"</code>)</h4>
    <div>
      <veui-link
        ui="strong s"
        native
        to="./pagination"
      >
        Next
      </veui-link>
    </div>
  </section>
  <section>
    <h4>External link</h4>
    <div>
      <veui-link
        to="https://www.baidu.com/"
        target="_blank"
      >
        Baidu
      </veui-link>
    </div>
  </section>
</article>
</template>

<script>
import { Link } from 'veui'

export default {
  components: {
    'veui-link': Link
  }
}
</script>

<style lang="less" scoped>
h4 {
  margin-top: 0;
}

section:not(:last-child) {
  margin-bottom: 40px;
}
</style>
