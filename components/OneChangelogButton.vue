<template>
<div
  v-if="tag"
  class="trigger"
>
  <veui-button
    ui="s"
    @click="open = !open"
  >
    {{ t('changelog') }}
  </veui-button>
  <veui-drawer
    :title="t('changelog')"
    :open.sync="open"
    outside-closable
    footless
  >
    <one-changelog
      class="changelog"
      :tag="tag"
    />
  </veui-drawer>
</div>
</template>

<script>
import { Button, Drawer } from 'veui'
import i18n from 'veui/mixins/i18n'

export default {
  name: 'one-changelog-button',
  components: {
    'veui-button': Button,
    'veui-drawer': Drawer,
    OneChangelog: () => import('./OneChangelog')
  },
  mixins: [i18n],
  props: {
    tag: String
  },
  data () {
    return {
      open: false
    }
  }
}
</script>

<style scoped>
.trigger {
  position: absolute;
  right: 60px;
  height: 36px;
  display: flex;
  align-items: center;
}

.changelog {
  padding: 12px 16px;
}
</style>
