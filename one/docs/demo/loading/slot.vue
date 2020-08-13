<template>
<article>
  <div>
    Custom icon-star:
    <veui-loading
      loading
      ui="strong"
    >
      <template #spinner>
        <veui-icon
          spin
          name="star"
        />
      </template>
      loading...
    </veui-loading>
  </div>
  <div>
    Custom icon-sun:
    <veui-loading loading>
      <template #spinner>
        <veui-icon
          spin
          name="sun"
        />
      </template>
      loading...
    </veui-loading>
  </div>
  <div>
    Custom icon-umbrella:
    <veui-loading
      loading
      ui="reverse"
      class="reverse"
    >
      <template #spinner>
        <veui-icon
          spin
          name="umbrella"
        />
      </template>
      loading...
    </veui-loading>
  </div>
</article>
</template>

<script>
import { Icon, Loading } from 'veui'
import 'vue-awesome/icons/sun'
import 'vue-awesome/icons/star'
import 'vue-awesome/icons/umbrella'

export default {
  components: {
    'veui-icon': Icon,
    'veui-loading': Loading
  }
}
</script>

<style lang="less" scoped docs>
.reverse {
  background: #ccc;
  padding: 8px;
}
</style>
