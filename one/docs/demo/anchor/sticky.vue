<template>
<article class="anchor-demo">
  <div class="line"/>
  <div
    ref="container"
    class="anchor-wrapper"
  >
    <div
      v-for="i in coffees"
      :id="i.value.indexOf('#') >= 0 ? i.value.slice(1) : i.value"
      :key="i.value"
      class="block"
    >
      {{ i.label }}
    </div>
    <section class="anchor-two">
      <veui-anchor
        :items="coffees"
        container="container"
      />
    </section>
  </div>
</article>
</template>

<script>
import { Anchor } from 'veui'

export default {
  components: {
    'veui-anchor': Anchor
  },
  data () {
    return {
      coffees: [
        {
          label: 'Infused',
          value: '#infused2',
          children: [
            {
              label: 'Breadcrumb',
              value: '/components/breadcrumb'
            }
          ]
        },
        {
          label: 'Boiled',
          value: '#boiled2',
          children: [
            {
              label: 'Button',
              value: '/components/button'
            }
          ]
        },
        {
          label: 'Espresso',
          value: '#espresso2'
        },
        {
          label: 'Milk coffee',
          value: '#milk-coffee2'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.anchor-demo {
  position: relative;

  .anchor-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 300px;
    overflow: auto;
    border: 1px dashed;

    & > section {
      position: absolute;
    }
  }

  .block {
    white-space: nowrap;
    border-top: 1px solid #000;
    width: 100px;
    height: 150px;
    flex: none;

    & + .block {
      margin-top: 20px;
    }
  }

  .anchor-one {
    position: absolute;
    left: 250px;
    top: 50px;
  }

  .anchor-two {
    position: absolute;
    left: 250px;
    top: 50px;
  }
}

</style>

<docs>
虚线框标记容器，实线标记锚点项顶部，当二者重合触发激活。
</docs>
