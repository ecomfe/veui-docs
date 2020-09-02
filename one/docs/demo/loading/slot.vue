<template>
<article>
  <section>
    Custom icon-star:
    <veui-loading
      loading
      ui="strong"
    >
      <template #spinner>
        <veui-icon
          spin
          name="star"
        />
      </template>
      loading...
    </veui-loading>
  </section>
  <section>
    Custom icon-sync:
    <veui-loading loading>
      <template #spinner>
        <veui-icon
          spin
          name="sync"
        />
      </template>
      loading...
    </veui-loading>
  </section>
  <section>
    Custom icon-clockwise:
    <veui-loading
      loading
      ui="reverse"
      class="reverse"
    >
      <template #spinner>
        <veui-icon
          spin
          name="clockwise"
        />
      </template>
      loading...
    </veui-loading>
  </section>
</article>
</template>

<script>
import { Icon, Loading } from 'veui'
import 'veui-theme-dls-icons/sync'
import 'veui-theme-dls-icons/star'
import 'veui-theme-dls-icons/clockwise'

export default {
  components: {
    'veui-icon': Icon,
    'veui-loading': Loading
  }
}
</script>

<style lang="less" scoped docs>
.reverse {
  background: #ccc;
  padding: 8px;
}

.section {
  margin-bottom: 20px;
}
</style>
