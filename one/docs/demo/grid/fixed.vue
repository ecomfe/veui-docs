<template>
<article>
  <veui-grid-container
    :columns="12"
    :gutter="10"
    :margin="0"
  >
    <veui-grid-row>
      <veui-grid-column :span="3">
        <div class="content">
          3/12
        </div>
      </veui-grid-column>
      <veui-grid-column :span="9">
        <div class="content">
          9/12
        </div>
      </veui-grid-column>
    </veui-grid-row>
    <veui-grid-row>
      <veui-grid-column :span="4">
        <div class="content">
          4/12
        </div>
      </veui-grid-column>
      <veui-grid-column :span="4">
        <div class="content">
          4/12
        </div>
      </veui-grid-column>
      <veui-grid-column :span="4">
        <div class="content">
          4/12
        </div>
      </veui-grid-column>
    </veui-grid-row>
  </veui-grid-container>
</article>
</template>

<script>
import { GridContainer, GridRow, GridColumn } from 'veui'

export default {
  components: {
    'veui-grid-container': GridContainer,
    'veui-grid-row': GridRow,
    'veui-grid-column': GridColumn
  }
}
</script>

<style lang="less" scoped>
article {
  width: 400px; /* Fixed-width container */
}

.veui-grid-row {
  & + & {
    margin: 2px 0; /* Just for showcase */
  }
}
</style>

<style lang="less" scoped docs>
.content {
  background-color: #eee;
  height: 100%;
  line-height: 60px;
  border-radius: 2px;
  text-align: center;
}
</style>

<docs>
可以在 `GridContainer` 上使用 `columns`/`margin`/`gutter` 调整布局参数。
</docs>
