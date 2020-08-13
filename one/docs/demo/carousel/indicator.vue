<template>
<article>
  <section>
    <h4>Indicator type</h4>
    <veui-radio-group
      v-model="indicator"
      :items="indicators"
    />
  </section>
  <section>
    <veui-carousel
      :datasource="items"
      :indicator="indicator"
    />
  </section>
</article>
</template>

<script>
import { Carousel, RadioGroup } from 'veui'

export default {
  components: {
    'veui-carousel': Carousel,
    'veui-radio-group': RadioGroup
  },
  data () {
    return {
      items: [
        {
          src:
            'https://ecmb.bdimg.com/public01/one-design/2b77cc4a4c5c906993c0e512f3ddaf03.jpg',
          alt: 'A cute kitty looking at you with its greenish eyes.',
          label: 'Cat'
        },
        {
          src:
            'https://ecmb.bdimg.com/public01/one-design/6fedc62b9221846ce5114c7447622e47.jpeg',
          alt: 'A common kingfisher flying above river.',
          label: 'Kingfisher'
        },
        {
          src:
            'https://ecmb.bdimg.com/public01/one-design/e1b6473c898d9e456452ee79d7533a86.jpeg',
          alt: 'A white and gray dolphin in blue water.',
          label: 'Dolphin'
        }
      ],
      indicator: 'radio',
      indicators: [
        { label: 'Radio', value: 'radio' },
        { label: 'Number', value: 'number' },
        { label: 'None', value: 'none' }
      ]
    }
  }
}
</script>

<style lang="less" scoped docs>
h4 {
  margin: 0 0 10px;
}

section {
  margin-bottom: 10px;
}
</style>
