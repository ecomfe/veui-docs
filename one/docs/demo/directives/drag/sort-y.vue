<template>
<article>
  <transition-group
    ref="group"
    name="list"
    tag="div"
    class="items"
  >
    <div
      v-for="item in items"
      :key="item"
      v-drag.sort.y="{
        name: 'words',
        containment: 'group',
        sort: sortCallback,
      }"
      class="item"
    >
      {{ item }}
    </div>
  </transition-group>
</article>
</template>

<script>
import drag from 'veui/directives/drag'

const items = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'.split(/[,. ]+/).filter(Boolean)

export default {
  directives: {
    drag
  },
  data () {
    return {
      items
    }
  },
  methods: {
    sortCallback (fromIndex, toIndex) {
      let items = this.items
      let item = items[fromIndex]
      items.splice(fromIndex, 1)
      items.splice(toIndex, 0, item)
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  background: white;
  border: 1px solid pink;
  border-radius: 3px;
  margin: 0 10px 8px 0;
  padding: 1px 2px;
}

.items {
  padding: 0;
  list-style-position: inside;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  resize: both;

  .item {
    width: 20%;
    border-color: peachpuff;
  }
}

.list-move {
  transition: transform 200ms ease;
}
</style>
