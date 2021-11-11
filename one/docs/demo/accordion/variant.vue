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
    <veui-accordion :ui="realVariants">
      <veui-collapse label="Sun">
        The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.
      </veui-collapse>
      <veui-collapse label="Moon">
        The Moon is an astronomical body orbiting Earth and is the planet's only natural satellite. It is the fifth-largest satellite in the Solar System, and by far the largest among planetary satellites relative to the size of the planet that it orbits. The Moon is, after Jupiter's satellite Io, the second-densest satellite in the Solar System among those whose densities are known.
      </veui-collapse>
    </veui-accordion>
  </section>
</article>
</template>

<script>
import { Accordion, Collapse, RadioButtonGroup, CheckButtonGroup } from 'veui'

export default {
  components: {
    'veui-accordion': Accordion,
    'veui-collapse': Collapse,
    'veui-radio-button-group': RadioButtonGroup,
    'veui-check-button-group': CheckButtonGroup
  },
  data () {
    return {
      variants: [
        { label: 'default', value: '' },
        { label: 'simple', value: 'simple' },
        { label: 'basic', value: 'basic' },
        { label: 'strong', value: 'strong' }
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
