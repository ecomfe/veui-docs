<template>
<article>
  <veui-calendar v-model="date"/>
  <p>Selected: {{ readableDate }}</p>
</article>
</template>

<script>
import { Calendar } from 'veui'

export default {
  components: {
    'veui-calendar': Calendar
  },
  data () {
    return {
      date: new Date()
    }
  },
  computed: {
    readableDate () {
      return this.date.toLocaleDateString(this.$i18n.locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<docs>
支持 `v-model`，数据类型为原生 `Date` 类型。
</docs>

<docs locale="en-US">
Supports `v-model` with value type being the native `Date`.
</docs>
