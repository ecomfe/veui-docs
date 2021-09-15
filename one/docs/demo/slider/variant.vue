<template>
<article>
  <veui-slider
    v-model="value"
    :min="0"
    :max="360"
    :step="1"
    :parse="parseColorHue"
    :format="formatColorHue"
  >
    <template #track>
      <div
        style="width: 100%; height: 20px;"
        :style="{background: colorGradient}"
      />
    </template>
    <template #thumb="{ index }">
      <div
        :key="`thumb_${index}`"
        style="margin-top: 2px"
      >
        <div style="width: 16px; height: 12px">
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
          ><polygon points="8,0 16,12 0,12"/></svg>
        </div>
      </div>
    </template>
    <template #tip="{ open, activeIndex }">
      <div
        v-show="open"
        class="custom-tip"
        :style="{
          left: `${(activeIndex >= 0 ? parseColorHue(value[activeIndex]) : 0) / 360 * 100}%`,
          backgroundColor: value[activeIndex]
        }"
      />
    </template>
  </veui-slider>
  <section>
    <span
      v-for="(val, index) in value"
      :key="`color-value-${index}`"
    >
      "<span :style="{ color: val }">{{ val }}</span>"<span v-if="index < value.length - 1">,</span>
    </span>
  </section>
</article>
</template>

<script>
import { Slider } from 'veui'

export default {
  components: {
    'veui-slider': Slider
  },
  data () {
    let value = [1, 1, 1, 1, 1].map((_, i) => `hsl(${(i + 1) * 60}, 50%, 50%)`)
    return { value }
  },
  computed: {
    colorGradient () {
      let colors = [1, 1, 1, 1, 1, 1, 1].map(function (_, index) {
        return `hsl(${60 * index}, 50%, 50%) ${(100 / 6) * index}%`
      })
      return `linear-gradient(to right, ${colors.join(',')})`
    }
  },
  methods: {
    parseColorHue (val) {
      return parseInt(val.substring(val.indexOf('(') + 1, val.indexOf(',')), 10)
    },
    formatColorHue (val) {
      return `hsl(${val}, 50%, 50%)`
    }
  }
}
</script>

<style lang="less" scoped>
.custom-tip {
  position: absolute;
  top: -24px;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  text-align: center;
  border: 1px solid #fff;
  font-size: 12px;
}

section {
  margin-top: 1em;
  background-color: #fafafa;
  padding: 0.5em 1em;
  border-radius: 4px;
  font-size: 12px;
}
</style>
