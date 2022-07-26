<template>
<article>
  <section>
    <veui-select
      v-model="current"
      class="picker"
      ui="s"
      :options="options"
      overlay-style="--dls-dropdown-max-display-items: 4;"
    />
  </section>
  <veui-empty
    title="没有权限"
  >
    <component :is="illustrations[current]"/>
    <template #desc>
      请联系管理员为你添加权限
      <veui-button ui="strong text">
        发送邮件
      </veui-button>
    </template>
    <template #actions>
      <veui-button ui="primary">
        回到首页
      </veui-button>
    </template>
  </veui-empty>
</article>
</template>

<script>
import { Empty, Button, Select } from 'veui'
import * as illustrations from 'dls-illustrations-vue'

const illustrationNames = [
  'IllustrationBlank',
  'IllustrationClientError',
  'IllustrationForbidden',
  'IllustrationNoResults',
  'IllustrationNotFound',
  'IllustrationReviewError',
  'IllustrationReviewPending',
  'IllustrationReviewSuccess',
  'IllustrationServerError'
]

export default {
  components: {
    'veui-empty': Empty,
    'veui-button': Button,
    'veui-select': Select
  },
  data () {
    return {
      illustrations,
      current: 'IllustrationForbidden'
    }
  },
  computed: {
    options () {
      return illustrationNames.map(name => ({
        label: name,
        value: name
      }))
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

section {
  align-self: flex-start;
}

.picker {
  width: 240px;
}
</style>
