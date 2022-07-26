<template>
<article>
  <section>
    <h4>内置 <code>&lt;img&gt;</code> 标签</h4>
    <veui-empty
      :image="image"
      title="找不到对应的内容"
      desc="请检查输入的网址是否正确"
    />
  </section>
  <section>
    <h4>任意内容</h4>
    <veui-empty
      ui="s"
      title="未知错误"
      :desc="false"
    >
      <veui-icon
        name="exclamation-circle-solid"
        style="height: 96px; color: rebeccapurple;"
      />
    </veui-empty>
  </section>
</article>
</template>

<script>
import { Empty, Icon } from 'veui'
import 'veui-theme-dls-icons/exclamation-circle-solid'

export default {
  components: {
    'veui-empty': Empty,
    'veui-icon': Icon
  },
  data () {
    return {
      image: {
        src: 'http://ecma.bdimg.com/public01/one-design/597ed72aff7a9fbacf23ba79b43aa61d.png',
        width: 296,
        height: 197,
        alt: '404 illustration provided by unDraw'
      }
    }
  }
}
</script>

<style lang="less" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-top: 20px;
  }
}

h4 {
  align-self: flex-start;
}
</style>
