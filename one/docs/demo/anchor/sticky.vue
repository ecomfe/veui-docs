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

    <section class="anchor-one">
      <h3>普通锚点</h3>
      <veui-anchor
        :items="coffees"
        :sticky="false"
        container="container"
      />
    </section>
    <section class="anchor-two">
      <h3>吸附锚点</h3>
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
          value: '#infused',
          children: [
            {
              label: 'Breadcrumb',
              value: '/components/breadcrumb'
            }
          ]
        },
        {
          label: 'Boiled',
          value: '#boiled',
          children: [
            {
              label: 'Button',
              value: '/components/button'
            }
          ]
        },
        {
          label: 'Espresso',
          value: '#espresso'
        },
        {
          label: 'Milk coffee',
          value: '#milk-coffee'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.anchor-demo {
  position: relative;

  .line {
    position: absolute;
    top: 0;
    width: 180px;
    border-top: 1px solid red;;

    &::after {
      content: "0";
      position: absolute;
      right: 0;
      bottom: 0;
      color: red;
      font-size: 12px;
    }
  }

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
    border-top: 1px solid #ccc;
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
    left: 450px;
    top: 50px;
  }
}

</style>

<docs>
虚线框标记容器。
</docs>
