<template>
<article>
  <section ref="itemGroup">
    <h2>Axis: X（v-drag.sort.x）</h2>
    <transition-group
      ref="transitionGroup"
      name="list"
      tag="div"
      class="items"
    >
      <div
        v-for="item in items"
        :key="item"
        v-drag.sort.x="{
          name: 'mySortableButton',
          containment: 'itemGroup',
          callback: handleAxisXSortCallback,
          debug,
          align
        }"
        class="item"
      >
        {{ item }}
      </div>
    </transition-group>
  </section>
</article>
</template>

<script>
import drag from 'veui/directives/drag'

const items = [
  '须菩提',
  '菩萨亦如是',
  '若作是言',
  '我当灭度无量众生',
  '即不名菩萨',
  '🍎🍎',
  '🍋',
  '🍉🍉🍉',
  '🍓🍓',
  '何以故',
  '须菩提',
  '无有法名为菩萨',
  '是故佛说',
  '一切法无我',
  '无人',
  '无众生',
  '无寿者'
]

export default {
  directives: {
    drag
  },
  data () {
    return {
      debug: false,
      align: undefined,
      items: items.map((item, i) => `${i}. ${item}`)
    }
  },
  computed: {
    handleAxisXSortCallback () {
      return this.getTransitionSortCallback('items', 'transitionGroup')
    }
  },
  methods: {
    getTransitionSortCallback (itemsKey, transitionGroupRefKey) {
      return (toIndex, fromIndex) => {
        if (toIndex === fromIndex) {
          return
        }
        let promise
        if (transitionGroupRefKey) {
          promise = new Promise((resolve, reject) => {
            let el = this.$refs[transitionGroupRefKey].$el
            let handleTransitionEnd = () => {
              el.removeEventListener('transitionend', handleTransitionEnd)
              resolve()
            }
            el.addEventListener('transitionend', handleTransitionEnd)
          })
        }
        this.moveItem(this[itemsKey], fromIndex, toIndex)
        // 动画完了再回调成功
        return promise
      }
    },
    moveItem (items, fromIndex, toIndex) {
      let item = items[fromIndex]
      items.splice(fromIndex, 1)
      if (toIndex > fromIndex) {
        toIndex--
      }
      items.splice(toIndex, 0, item)
    }
  }
}
</script>

<style lang="less" scoped docs>
.items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.item {
  background: white;
  border: 1px solid pink;
  border-radius: 3px;
  margin: 0 10px 8px 0;
  padding: 1px 2px;

  &:nth-child(3n) {
    font-size: 1.2em;
  }
}

.list-move {
  // UE 给出的动画曲线是 0.25, 0.1, 0.25, 1，就是 ease
  transition: transform 200ms ease;
}
</style>
