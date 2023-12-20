<template>
<article>
  <veui-select
    v-model="license"
    class="select"
    ui="l"
    :options="options"
  />
  <veui-select
    v-model="license"
    class="select"
    :options="options"
  />
  <veui-select
    v-model="license"
    class="select"
    ui="s"
    :options="options"
  />
  <veui-select
    v-model="license"
    class="select"
    ui="xs"
    :options="options"
  />
</article>
</template>

<script>
import { Select } from 'veui'

export default {
  components: {
    'veui-select': Select
  },
  data () {
    return {
      license: null,
      options: [
        {
          label: 'MIT',
          value: 'mit'
        },
        {
          label: 'BSD',
          value: 'bsd'
        },
        {
          label: 'Apache 2.0',
          value: 'apache2'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.select {
  max-width: 120px;
  margin-right: 10px;
}
</style>
