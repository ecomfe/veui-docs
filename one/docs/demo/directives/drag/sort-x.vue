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
      v-drag.sort.x="{
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
import { drag } from 'veui'

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
}

.list-move {
  transition: transform 200ms ease;
}
</style>

<docs>
可以通过 `v-drag.sort` 或 `v-drag="{ type: 'sort', ... }"` 来实现拖拽排序。
</docs>
