<template>
<article>
  <section>
    <div>
      辅助信息位置：
      <veui-radio-button-group
        v-model="helpPosition"
        ui="s"
        :items="availableHelpPositions"
      />
    </div>
    <veui-uploader
      v-model="files"
      class="uploader"
      :help-position="helpPosition"
      help="Help text"
      action="/api/upload"
    />
    <veui-uploader
      v-model="files"
      class="uploader"
      :help-position="helpPosition"
      action="/api/upload"
    >
      <template #help>
        Custom help text via `help` slot
      </template>
    </veui-uploader>
  </section>
</article>
</template>

<script>
import { Uploader, RadioButtonGroup } from 'veui'

const mapper = (value) => ({ label: value, value })

export default {
  components: {
    'veui-uploader': Uploader,
    'veui-radio-button-group': RadioButtonGroup
  },
  data () {
    let files = [
      {
        name: 'demo-file1.txt',
        src: '/file/demo-file1.txt',
        key: 0
      }
    ]
    return {
      files,
      helpPosition: 'side',
      availableHelpPositions: ['side', 'bottom'].map(mapper)
    }
  }
}
</script>

<style lang="less" scoped>
article {
  display: flex;
}

.uploader {
  margin-top: 16px;
}

section {
  width: 45%;
}
</style>
