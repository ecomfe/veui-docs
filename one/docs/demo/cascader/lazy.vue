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
        label: '杭州',
        value: '杭州'
      },
      {
        label: '宁波',
        value: '宁波'
      },
      {
        label: '温州',
        value: '温州'
      },
      {
        label: '舟山',
        value: '舟山'
      },
      {
        label: '绍兴',
        value: '绍兴'
      }
    ]
  },
  {
    label: '上海',
    value: '上海',
    lazy: true
  },
  {
    label: '重庆',
    value: '重庆',
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

const pudongChildren = [
  {
    label: '张江',
    value: '张江'
  },
  {
    label: '北蔡',
    value: '北蔡'
  }
]

const loadShanghai = (descendants) => [
  {
    label: '浦东新区',
    value: '浦东新区',
    lazy: true,
    ...(descendants ? { options: pudongChildren } : null)
  },
  {
    label: '闵行',
    value: '闵行',
    options: [
      {
        label: '莘庄',
        value: '莘庄'
      },
      {
        label: '颛桥',
        value: '颛桥'
      }
    ]
  },
  {
    label: '宝山',
    value: '宝山',
    // load no data
    ...(descendants ? null : { lazy: true })
  },
  {
    label: '徐汇',
    value: '徐汇',
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
          let descendants
          switch (scope) {
            case 'children':
              descendants = false
              break
            case 'descendants':
              descendants = true
              break
            default:
              console.warn('Not supported.')
              resolve()
              return
          }

          resolve(
            parent
              ? {
                浦东新区: pudongChildren,
                上海: loadShanghai(descendants)
              }[parent.value]
              : undefined
          )
        }, 1000)
      })
    }
  }
}
</script>
