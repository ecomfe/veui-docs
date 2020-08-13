<template>
<article>
  <h4>Chinese Regions</h4>
  <section>
    <veui-region-picker
      v-model="selected"
      :datasource="region"
    />
  </section>
  <section>Selected IDs: {{ result }}</section>
</article>
</template>

<script>
import { RegionPicker } from 'veui'
import region from '@/common/region'

export default {
  components: {
    'veui-region-picker': RegionPicker
  },
  data () {
    return {
      region,
      selected: null
    }
  },
  computed: {
    result () {
      return (this.selected || []).join(', ') || '-'
    }
  }
}
</script>

<style lang="less" scoped docs>
h4 {
  margin-top: 0;
}

section {
  margin-bottom: 10px;
}
</style>
