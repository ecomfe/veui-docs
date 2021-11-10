<template>
<article>
  <section>
    <div class="control-wrap">
      <veui-radio-button-group
        v-model="variant"
        ui="s"
        class="control-item"
        :items="variants"
      />
      <veui-radio-button-group
        v-model="bordered"
        ui="s"
        class="control-item"
        :items="[
          { label: 'default', value: '' },
          { label: 'bordered', value: 'bordered' },
          { label: 'borderless', value: 'borderless' }
        ]"
      />
      <veui-check-button-group
        v-model="dull"
        ui="s"
        class="control-item"
        :items="[{ label: 'dull', value: 'dull' }]"
      />
    </div>
    <veui-collapse
      :ui="realVariants"
      label="Sun"
    >
      The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.
    </veui-collapse>
  </section>
</article>
</template>

<script>
import { Collapse, RadioButtonGroup, CheckButtonGroup } from 'veui'

export default {
  components: {
    'veui-collapse': Collapse,
    'veui-radio-button-group': RadioButtonGroup,
    'veui-check-button-group': CheckButtonGroup
  },
  data () {
    return {
      variants: [
        { label: '默认', value: '' },
        { label: '简洁', value: 'simple' },
        { label: '白底', value: 'basic' },
        { label: '灰底', value: 'strong' }
      ],
      variant: '',
      bordered: '',
      dull: null
    }
  },
  computed: {
    realVariants () {
      return [this.variant, this.bordered || '', this.dull || '']
        .join(' ')
        .trim()
    }
  }
}
</script>

<style scoped>
section {
  margin-bottom: 20px;
}

.control-wrap {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.control-item {
  margin-right: 12px;
}
</style>
