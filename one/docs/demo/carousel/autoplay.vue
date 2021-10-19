<template>
<article>
  <veui-carousel
    :datasource="items"
    autoplay
    pause-on-hover
    :interval="5000"
  />
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
      ],
      autoplay: true,
      pauseOnHover: true
    }
  }
}
</script>

<docs>
还可以使用 [`interval`](#props-interval) 属性来指定自动播放的切换间隔时长，使用 [`wrap`](#props-wrap) 属性来允许循环播放，以及使用 [`pause-on-hover`](#props-pause-on-hover) 属性来时光标悬浮在指示器对应项时暂停自动播放。
</docs>

<docs locale="en-US">
You can also use the [`autoplay`](#props-autoplay) prop to enable autoplay, use the [`wrap`](#props-wrap) prop to enable looping and use the [`pause-on-hover`](#props-pause-on-hover) prop to pause playing when cursor hover step indicators.
</docs>
