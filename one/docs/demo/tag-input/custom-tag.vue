<template>
<article>
  <section>
    <veui-tag-input>
      <template #tag="{ tag, attrs, listeners }">
        <veui-tag
          v-model="value"
          ui="bordered"
          color="violet"
          v-bind="attrs"
          v-on="listeners"
        >
          {{ tag }}
        </veui-tag>
      </template>
    </veui-tag-input>
  </section>
</article>
</template>

<script>
import { TagInput, Tag } from 'veui'

export default {
  components: {
    'veui-tag-input': TagInput,
    'veui-tag': Tag
  },
  data () {
    return {
      value: ['Stephen', 'Wanda', 'Carol']
    }
  }
}
</script>
