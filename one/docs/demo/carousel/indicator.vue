<template>
<article>
  <section>
    <h4>Indicator type</h4>
    <veui-radio-group
      v-model="indicator"
      :items="indicators"
    />
    <h4>Indicator position（仅在对齐方式是 end 时生效）</h4>
    <veui-radio-group
      v-model="indicatorPosition"
      :items="positions"
    />
    <h4>Indicator alignment</h4>
    <veui-radio-group
      v-model="align"
      :items="alignments"
    />
  </section>
  <section>
    <veui-carousel
      :datasource="items"
      :indicator="indicator"
      :indicator-position="indicatorPosition"
      :indicator-align="align"
    />
  </section>
</article>
</template>

<script>
import { Carousel, RadioGroup } from 'veui'

// TODO update alignment

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
      indicator: 'bar',
      indicatorPosition: 'inside',
      align: 'start',
      indicators: [
        { label: 'bar', value: 'bar' },
        { label: 'number', value: 'number' },
        { label: 'dot', value: 'dot' },
        { label: 'none', value: 'none' }
      ],
      alignments: [
        { label: 'start', value: 'start' },
        { label: 'end', value: 'end' }
      ],
      positions: [
        { label: 'inside', value: 'inside' },
        { label: 'outside', value: 'outside' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  margin: 0 0 10px;

  &:not(:first-child) {
    margin-top: 10px;
  }
}

section {
  margin-bottom: 10px;
}
</style>
