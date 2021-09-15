<template>
<article>
  <div>
    <veui-check-box
      v-model="wrap"
    >
      循环播放
    </veui-check-box>
    <veui-check-box
      v-model="indicator"
      true-value="number"
      false-value="none"
    >
      头部页码
    </veui-check-box>
  </div>
  <veui-button
    class="mt-3p"
    ui="primary"
    @click="open = true"
  >
    展现灯箱
  </veui-button>
  <veui-lightbox
    :open.sync="open"
    :datasource="items"
    :wrap="wrap"
    :indicator="indicator"
  />
</article>
</template>

<script>
import { Lightbox, Checkbox, Button } from 'veui'

export default {
  components: {
    'veui-lightbox': Lightbox,
    'veui-check-box': Checkbox,
    'veui-button': Button
  },
  data () {
    return {
      wrap: false,
      indicator: 'number',
      open: false
    }
  },
  computed: {
    items () {
      return [
        {
          src:
            'https://ecmb.bdimg.com/public01/one-design/2b77cc4a4c5c906993c0e512f3ddaf03.jpg',
          alt: 'A cute kitty looking at you with its greenish eyes.',
          desc: 'Cat'
        },
        {
          src:
            'https://ecmb.bdimg.com/public01/one-design/6fedc62b9221846ce5114c7447622e47.jpeg',
          alt: 'A common kingfisher flying above river.',
          desc: 'Kingfisher'
        },
        {
          src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
          alt: 'flower video',
          desc: '花',
          type: 'video'
        },
        {
          src:
            'https://ecmb.bdimg.com/public01/one-design/e1b6473c898d9e456452ee79d7533a86.jpeg',
          alt: 'A white and gray dolphin in blue water.',
          desc: 'Dolphin'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.veui-checkbox {
  margin-right: 15px;
}

.mt-3p {
  margin-top: 12px;
}
</style>
