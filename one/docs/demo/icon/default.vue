<template>
<article>
  <div
    v-for="name in names"
    :key="name"
    class="item"
  >
    <div class="icon">
      <veui-icon :name="name"/>
    </div>
    <div class="name">
      {{ name }}
    </div>
  </div>
</article>
</template>

<script>
import { Icon } from 'veui'
import 'veui-theme-dls-icons'

export default {
  components: {
    'veui-icon': Icon
  },
  data () {
    return {
      names: Object.keys(Icon.icons).sort()
    }
  }
}
</script>

<style lang="less" scoped>
article {
  overflow: hidden;
}

.item {
  @grid-size: 120px;
  float: left;
  width: @grid-size;
  height: calc(@grid-size + 3em);
  text-align: center;
  margin: 1em 2em;

  .icon {
    width: @grid-size;
    height: @grid-size;
    border: 1px solid transparent;
    font-size: 1.5em;
    line-height: @grid-size;
    border-radius: 4px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #ccc;
    }
  }

  .name {
    margin-top: 0.6em;
    color: #333;
    font-size: 0.8em;
    white-space: nowrap;
  }
}
</style>
