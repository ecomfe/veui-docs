<template>
<article>
  <section>
    <h4>按 `2/1` 比例展示轮播项</h4>
    <veui-carousel
      :datasource="items"
      effect="slide"
      indicator-align="end"
      slide-aspect-ratio="2/1"
    />
  </section>
</article>
</template>

<script>
import { Carousel } from 'veui'

export default {
  components: {
    'veui-carousel': Carousel
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  margin: 0 0 10px;
}

section {
  margin-bottom: 10px;
}
</style>
