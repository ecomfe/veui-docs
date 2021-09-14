<template>
<article>
  <section>
    <h4>2 view, 2 group</h4>
    <veui-carousel
      :datasource="items"
      :slides-per-group="2"
      :slides-per-view="2"
      effect="slide"
      indicator-position="outside"
      indicator-alignment="end"
      wrap
    />
    <h4>2 view, 1 group</h4>
    <veui-carousel
      :datasource="items"
      :slides-per-group="1"
      :slides-per-view="2"
      effect="slide"
      indicator-position="outside"
      indicator-alignment="end"
      wrap
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
        },
        {
          src:
            'https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/1b61ee88fdb4a4b918816ae1cfd84af1_fullsize.jpg',
          alt: 'Tesla logo.',
          label: '特斯拉'
        }
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
