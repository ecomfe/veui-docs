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
    <veui-radio-button-group
      v-model="size"
      ui="s"
      :items="sizes"
    />
  </section>
  <veui-empty
    :ui="size"
    desc="服务器错误"
  >
    <component :is="illustrations[current]"/>
  </veui-empty>
</article>
</template>

<script>
import { Empty, Button, Select, RadioButtonGroup } from 'veui'
import * as illustrations from 'dls-illustrations-vue'

const illustrationNames = [
  'IllustrationSpotBarChart',
  'IllustrationSpotCleared',
  'IllustrationSpotFunnelChart',
  'IllustrationSpotGaugeChart',
  'IllustrationSpotImageError',
  'IllustrationSpotLineChart',
  'IllustrationSpotLoadError',
  'IllustrationSpotMap',
  'IllustrationSpotNetworkError',
  'IllustrationSpotNoAccess',
  'IllustrationSpotNoContent',
  'IllustrationSpotNoFavorites',
  'IllustrationSpotNoHistory',
  'IllustrationSpotNoImage',
  'IllustrationSpotNoInternet',
  'IllustrationSpotNoMessages',
  'IllustrationSpotNoResults',
  'IllustrationSpotNoStore',
  'IllustrationSpotNoVideo',
  'IllustrationSpotPieChart',
  'IllustrationSpotPresentation',
  'IllustrationSpotRadarChart',
  'IllustrationSpotRelationshipChart',
  'IllustrationSpotServerError',
  'IllustrationSpotTryLater',
  'IllustrationSpotVideoError',
  'IllustrationSpotWordCloud'
]

export default {
  components: {
    'veui-empty': Empty,
    'veui-button': Button,
    'veui-select': Select,
    'veui-radio-button-group': RadioButtonGroup
  },
  data () {
    return {
      illustrations,
      current: 'IllustrationSpotLoadError',
      sizes: [
        {
          label: 'm',
          value: 'm'
        }, {
          label: 's',
          value: 's'
        }
      ],
      size: 'm'
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
  display: flex;
  gap: 12px;
  align-self: flex-start;
}

.picker {
  width: 240px;
}
</style>
