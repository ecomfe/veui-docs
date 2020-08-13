<template>
<article>
  <section>
    <veui-collapse
      label="Normal size"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni asperiores minus vitae voluptatibus enim perspiciatis exercitationem placeat cumque molestias, labore cum, sunt, id veritatis excepturi ipsum facere quis blanditiis neque?
    </veui-collapse>
  </section>
  <section>
    <veui-collapse
      label="Small size"
      ui="s"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni asperiores minus vitae voluptatibus enim perspiciatis exercitationem placeat cumque molestias, labore cum, sunt, id veritatis excepturi ipsum facere quis blanditiis neque?
    </veui-collapse>
  </section>
</article>
</template>

<script>
import { Collapse } from 'veui'

export default {
  components: {
    'veui-collapse': Collapse
  }
}
</script>

<style lang="stylus" scoped docs>
section
  margin-bottom 20px
</style>
