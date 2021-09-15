<template>
<article>
  <section>
    <h4>Normal size</h4>
    <veui-tree
      ui="m"
      :datasource="datasource"
    />
  </section>
  <section>
    <h4>Small size</h4>
    <veui-tree
      ui="s"
      :datasource="datasource"
    />
  </section>
</article>
</template>

<script>
import { Tree } from 'veui'

export default {
  components: {
    'veui-tree': Tree
  },
  data () {
    return {
      datasource: [
        {
          label: 'Infused',
          value: 'infused',
          children: [
            {
              label: 'Brewed',
              value: 'brewed',
              children: [
                {
                  label: 'Drip brewed',
                  value: 'drip-brewed'
                },
                {
                  label: 'Filtered',
                  value: 'filtered'
                },
                {
                  label: 'Pour-over',
                  value: 'pour-over'
                },
                {
                  label: 'Immersion brewed',
                  value: 'immersion-brewed'
                }
              ]
            },
            {
              label: 'French press',
              value: 'french-press'
            },
            {
              label: 'Cold brew',
              value: 'cold-brew'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
article {
  display: flex;
}

section {
  width: 45%;
}
</style>
