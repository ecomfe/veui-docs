<template>
<article>
  <section>
    <h2>Axis: Y（v-drag.sort.y）</h2>
    <transition-group
      ref="transitionGroup2"
      name="list"
      tag="ol"
      class="list"
    >
      <li
        v-for="item in items2"
        :key="item"
        v-drag.sort.y="{
          name: 'otherSortableButton',
          callback: handleAxisYSortCallback,
          debug,
          align
        }"
        class="item"
      >
        {{ item }}
      </li>
    </transition-group>
  </section>
</article>
</template>

<script>
import drag from 'veui/directives/drag'

const items = [
  '须菩提',
  '若菩萨作是言',
  '我当庄严佛土',
  '是不名菩萨',
  '何以故',
  '🦁',
  '🙈🙉🙊',
  '🐷🐶',
  '如来说',
  '庄严佛土者',
  '即非庄严',
  '是名庄严',
  '须菩提',
  '若菩萨通达无我法者'
]

export default {
  directives: {
    drag
  },
  data () {
    return {
      debug: false,
      align: undefined,
      items2: items.map((item, i) => `${i}${item}`)
    }
  },
  computed: {
    handleAxisYSortCallback () {
      return this.getTransitionSortCallback('items2', 'transitionGroup2')
    },
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

.list {
  padding: 0;
  list-style-position: inside;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  resize: both;
  overflow: scroll;

  .item {
    width: 40%;
    border-color: peachpuff;
  }
}
</style>

<style lang="less" scoped>
.list-move {
  // 动画曲线是 0.25, 0.1, 0.25, 1，就是 ease
  transition: transform 200ms ease;
}
</style>
