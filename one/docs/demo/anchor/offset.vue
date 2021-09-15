<template>
<article class="anchor-offset-demo">
  <div class="target-offset-line"/>
  <div class="sticky-offset-line"/>
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
      <h3>吸附锚点</h3>
      <veui-anchor
        :items="coffees"
        target-offset="20px"
        sticky-offset="30px"
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
.anchor-offset-demo {
  position: relative;

  .sticky-offset-line,
  .target-offset-line {
    position: absolute;
    top: 20px;
    width: 180px;
    border-top: 1px solid red;

    &::after {
      content: "targetOffset: 20px";
      position: absolute;
      right: 0;
      bottom: 0;
      color: red;
      font-size: 12px;
    }
  }

  .sticky-offset-line {
    top: 30px;
    left: 250px;

    &::after {
      content: "stickyOffset: 30px";
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

  .anchor-two {
    position: absolute;
    left: 250px;
    top: 50px;
  }
}

</style>

<docs>
虚线框标记容器。
</docs>
