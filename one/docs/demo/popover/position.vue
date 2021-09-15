<template>
<article>
  <veui-grid-container :columns="5">
    <veui-grid-row>
      <veui-grid-column
        :span="1"
        :offset="1"
      >
        <span
          ref="ts"
          class="target"
        >top-start</span>
        <veui-popover
          target="ts"
          position="top-start"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
      <veui-grid-column :span="1">
        <span
          ref="t"
          class="target"
        >top</span>
        <veui-popover
          target="t"
          position="top"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
      <veui-grid-column :span="1">
        <span
          ref="te"
          class="target"
        >top-end</span>
        <veui-popover
          target="te"
          position="top-end"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
    </veui-grid-row>
    <veui-grid-row>
      <veui-grid-column :span="1">
        <span
          ref="ls"
          class="target"
        >left-start</span>
        <veui-popover
          target="ls"
          position="left-start"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
      <veui-grid-column
        :span="1"
        :offset="3"
      >
        <span
          ref="rs"
          class="target"
        >right-start</span>
        <veui-popover
          target="rs"
          position="right-start"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
    </veui-grid-row>
    <veui-grid-row>
      <veui-grid-column :span="1">
        <span
          ref="l"
          class="target"
        >left</span>
        <veui-popover
          target="l"
          position="left"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
      <veui-grid-column
        :span="1"
        :offset="3"
      >
        <span
          ref="r"
          class="target"
        >right</span>
        <veui-popover
          target="r"
          position="right"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
    </veui-grid-row>
    <veui-grid-row>
      <veui-grid-column :span="1">
        <span
          ref="le"
          class="target"
        >left-end</span>
        <veui-popover
          target="le"
          position="left-end"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
      <veui-grid-column
        :span="1"
        :offset="3"
      >
        <span
          ref="re"
          class="target"
        >right-end</span>
        <veui-popover
          target="re"
          position="right-end"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
    </veui-grid-row>
    <veui-grid-row>
      <veui-grid-column
        :span="1"
        :offset="1"
      >
        <span
          ref="bs"
          class="target"
        >bottom-start</span>
        <veui-popover
          target="bs"
          position="bottom-start"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
      <veui-grid-column :span="1">
        <span
          ref="b"
          class="target"
        >bottom</span>
        <veui-popover
          target="b"
          position="bottom"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
      <veui-grid-column :span="1">
        <span
          ref="be"
          class="target"
        >bottom-end</span>
        <veui-popover
          target="be"
          position="bottom-end"
        >
          Hello.
        </veui-popover>
      </veui-grid-column>
    </veui-grid-row>
  </veui-grid-container>
</article>
</template>

<script>
import { GridContainer, GridRow, GridColumn, Popover } from 'veui'

export default {
  components: {
    'veui-grid-container': GridContainer,
    'veui-grid-row': GridRow,
    'veui-grid-column': GridColumn,
    'veui-popover': Popover
  },
  data () {
    return {
      ui: null
    }
  }
}
</script>

<style lang="less" scoped>
.veui-grid-container {
  width: 80%;
  min-width: 600px;
}

.veui-grid-row {
  margin-bottom: 20px;
}

.veui-grid-column {
  text-align: center;
  vertical-align: middle;
  line-height: 2;
}

.target {
  display: inline-block;
  width: 100%;
  padding: 0.5em 0;
  border: 1px solid #999;
  border-radius: 2px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
}
</style>
