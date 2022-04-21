<template>
<article>
  <veui-grid-container>
    <veui-grid-row>
      <veui-grid-column :span="8">
        <div class="content">
          8/24
        </div>
      </veui-grid-column>
      <veui-grid-column :span="16">
        <div class="content">
          16/24
        </div>
      </veui-grid-column>
    </veui-grid-row>
    <veui-grid-row>
      <veui-grid-column :span="6">
        <div class="content">
          6/24
        </div>
      </veui-grid-column>
      <veui-grid-column :span="6">
        <div class="content">
          6/24
        </div>
      </veui-grid-column>
      <veui-grid-column :span="6">
        <div class="content">
          6/24
        </div>
      </veui-grid-column>
      <veui-grid-column :span="6">
        <div class="content">
          6/24
        </div>
      </veui-grid-column>
    </veui-grid-row>
    <veui-grid-row>
      <veui-grid-column :span="12">
        <div class="content">
          12/24
        </div>
      </veui-grid-column>
      <veui-grid-column :span="12">
        <div class="content">
          12/24
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
  padding: 10px 12px;
}

.veui-grid-row {
  & + & {
    margin: 2px 0; /* Just for showcase */
  }
}

.content {
  background-color: #eee;
  height: 100%;
  line-height: 60px;
  border-radius: 2px;
  text-align: center;
}
</style>
