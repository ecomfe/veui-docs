<template>
<article>
  <section class="cascader-config">
    <veui-checkbox
      v-model="clearable2"
      ui="s"
    >
      Clearable
    </veui-checkbox>
    <veui-checkbox
      v-model="showSelectAll2"
      ui="s"
    >
      ShowSelectAll
    </veui-checkbox>
    <veui-radio
      v-model="trigger2"
      ui="s"
      value="click"
      name="columnTrigger2"
    >
      click to expand
    </veui-radio>
    <veui-radio
      v-model="trigger2"
      ui="s"
      value="hover"
      name="columnTrigger2"
    >
      hover to expand
    </veui-radio>
    <label>
      Max:
      <veui-number-input
        v-model="max2"
        ui="s"
      />
    </label>
    <label>
      columnWidth:
      <veui-input
        v-model="columnWidth2"
        ui="s"
      />
    </label>
  </section>
  <veui-cascader
    v-model="value2"
    class="mt-3p"
    :options="options"
    :searchable="searchable2"
    :column-trigger="trigger2"
    :clearable="clearable2"
    :inline="inline2"
    :show-select-all="showSelectAll2"
    :max="max2"
    :column-width="getRealColumnWidth(columnWidth2)"
    multiple
  />
</article>
</template>

<script>
import { Cascader, Checkbox, Radio, NumberInput, Input } from 'veui'

const options = [
  {
    label: '浙江',
    value: '浙江',
    options: [
      {
        label: '威海',
        value: '威海'
      },
      {
        label: '滨州',
        value: '滨州'
      },
      {
        label: '临沂',
        value: '临沂'
      },
      {
        label: '东营',
        value: '东营'
      },
      {
        label: '济南',
        value: '济南'
      }
    ]
  },
  {
    label: '山东',
    value: '山东',
    options: [
      {
        label: '菏泽',
        value: '菏泽',
        options: [
          {
            label: '菏泽1',
            value: '菏泽1'
          }
        ]
      },
      {
        label: '潍坊',
        value: '潍坊',
        options: [
          {
            label: '潍坊1',
            value: '潍坊1'
          }
        ]
      },
      {
        label: '泰山',
        value: '泰山'
      },
      {
        label: '烟台',
        value: '烟台'
      },
      {
        label: '华山',
        value: '华山'
      },
      {
        label: '衡山',
        value: '衡山'
      },
      {
        label: '嵩山',
        value: '嵩山'
      },
      {
        label: '恒山',
        value: '恒山'
      },
      {
        label: '大雪山',
        value: '大雪山'
      }
    ]
  },
  {
    label: '上海',
    value: '上海',
    disabled: true
  },
  {
    label: '北京',
    value: '北京'
  },
  {
    label: '海外',
    value: '海外',
    disabled: true,
    options: [
      {
        label: '日本',
        value: '日本'
      }
    ]
  }
]

export default {
  components: {
    'veui-cascader': Cascader,
    'veui-checkbox': Checkbox,
    'veui-radio': Radio,
    'veui-number-input': NumberInput,
    'veui-input': Input
  },
  data () {
    return {
      value2: null,
      searchable2: true,
      trigger2: 'click',
      clearable2: true,
      inline2: false,
      columnWidth2: '',
      showSelectAll2: false,
      max2: null,
      options
    }
  },
  methods: {
    getRealColumnWidth (val) {
      if (val && !isNaN(+val)) {
        return `${+val}px`
      }
      return val
    }
  }
}
</script>

<style lang="less" scoped>
.cascader-config {
  display: flex;
  align-items: center;
  height: 32px;
  & > * {
    margin-right: 8px;
    font-size: 12px;
  }
  .veui-input {
    width: 80px;
  }
}
.mt-3p {
  margin-top: 12px;
}
</style>
