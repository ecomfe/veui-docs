<template>
<div>
  <veui-cascader
    v-model="value"
    :options="options"
    multiple
    :load="load"
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
    lazy: true
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

const hzChildren = [
  {
    label: '菏',
    value: '菏'
  },
  {
    label: '泽',
    value: '泽'
  }
]

const getSdChildren = (full) => [
  {
    label: '菏泽',
    value: '菏泽',
    lazy: true,
    ...(full ? { options: hzChildren } : null)
  },
  {
    label: '潍坊',
    value: '潍坊',
    options: [
      {
        label: '潍',
        value: '潍'
      },
      {
        label: '坊',
        value: '坊'
      }
    ]
  },
  {
    label: '泰山',
    value: '泰山',
    // load no data
    ...(full ? null : { lazy: true })
  },
  {
    label: '烟台',
    value: '烟台',
    disabled: true
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
  },
  methods: {
    load: ({ parent, scope }) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let isFull
          switch (scope) {
            case 'children':
              isFull = false
              break
            case 'descendants':
              isFull = true
              break
            default:
              console.warn('Not supported.')
              resolve()
              return
          }

          resolve(
            parent
              ? {
                菏泽: hzChildren,
                山东: getSdChildren(isFull)
              }[parent.value]
              : undefined
          )
        }, 1000)
      })
    }
  }
}
</script>
