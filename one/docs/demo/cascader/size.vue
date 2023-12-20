<template>
<div class="cascader-wrap">
  <veui-cascader
    v-model="value"
    class="cascader"
    ui="l"
    :options="options"
  />
  <veui-cascader
    v-model="value"
    class="cascader"
    :options="options"
  />
  <veui-cascader
    v-model="value"
    class="cascader"
    ui="s"
    :options="options"
  />
  <veui-cascader
    v-model="value"
    class="cascader"
    ui="xs"
    :options="options"
  />
</div>
</template>

<script>
import { Cascader } from 'veui'

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
    'veui-cascader': Cascader
  },
  data () {
    return {
      value: null,
      options
    }
  }
}
</script>

<style lang="less" scoped>
.cascader-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cascader + .cascader {
  margin-top: 12px;
}
</style>
