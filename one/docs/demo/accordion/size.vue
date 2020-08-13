<template>
<article>
  <section>
    <veui-accordion>
      <veui-collapse label="Sun">
        The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.
      </veui-collapse>
      <veui-collapse label="Moon">
        The Moon is an astronomical body orbiting Earth and is the planet's only natural satellite. It is the fifth-largest satellite in the Solar System, and by far the largest among planetary satellites relative to the size of the planet that it orbits. The Moon is, after Jupiter's satellite Io, the second-densest satellite in the Solar System among those whose densities are known.
      </veui-collapse>
    </veui-accordion>
  </section>
  <section>
    <veui-accordion ui="s">
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
import { Accordion, Collapse } from 'veui'

export default {
  components: {
    'veui-accordion': Accordion,
    'veui-collapse': Collapse
  }
}
</script>

<style lang="stylus" scoped docs>
section
  margin-bottom 20px
</style>
