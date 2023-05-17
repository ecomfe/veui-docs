<template>
<div
  v-if="tag"
  class="one-changelog-button trigger"
>
  <veui-button
    ui="s"
    @click="open = !open"
  >
    <veui-icon name="clock"/>
    {{ t('changelog') }}
  </veui-button>
  <veui-drawer
    :title="t('changelog')"
    :open.sync="open"
    overlay-class="drawer"
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
import { Button, Drawer, Icon } from 'veui'
import i18n from 'veui/mixins/i18n'
import 'veui-theme-dls-icons/clock'

export default {
  name: 'one-changelog-button',
  components: {
    'veui-button': Button,
    'veui-drawer': Drawer,
    'veui-icon': Icon,
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

@media (max-width: 480px) {
  .trigger {
    top: 80px;
    right: 30px;
    height: auto;
  }

  .drawer {
    --dls-drawer-width: calc(100vw - 16px);
  }
}
</style>
