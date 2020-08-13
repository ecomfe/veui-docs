<template>
<article>
  <section>
    <veui-tree
      v-model="checked"
      :datasource="coffees"
      :expanded.sync="expanded"
      checkable
      selectable
      :selected.sync="selected"
    />
  </section>
  <section>
    <h4>Expanded items</h4>
    {{ expanded }}
    <h4>Checked items</h4>
    {{ checked }}
    <h4>Selected item</h4>
    {{ selected }}
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
      expanded: ['infused', 'brewed'],
      checked: [],
      selected: null,
      coffees: [
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
                  value: 'filtered',
                  disabled: true
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
        },
        {
          label: 'Boiled',
          value: 'boiled',
          disabled: true,
          children: [
            {
              label: 'Percolated',
              value: 'percolated'
            },
            {
              label: 'Turkish',
              value: 'turkish'
            },
            {
              label: 'Moka',
              value: 'moka'
            }
          ]
        },
        {
          label: 'Espresso',
          value: 'espresso',
          children: [
            {
              label: 'Caffè Americano',
              value: 'caffe-americano'
            },
            {
              label: 'Cafe Lungo',
              value: 'cafe-lungo',
              disabled: true
            },
            {
              label: 'Café Cubano',
              value: 'cafe-cubano'
            },
            {
              label: 'Caffè crema',
              value: 'caffe-crema'
            },
            {
              label: 'Cafe Zorro',
              value: 'cafe-zorro'
            },
            {
              label: 'Doppio',
              value: 'doppio'
            },
            {
              label: 'Espresso Romano',
              value: 'espresso-romano'
            },
            {
              label: 'Guillermo',
              value: 'guillermo'
            },
            {
              label: 'Ristretto',
              value: 'ristretto'
            }
          ]
        },
        {
          label: 'Milk coffee',
          value: 'milk-coffee',
          children: [
            {
              label: 'Flat white',
              value: 'flat-white'
            },
            {
              label: 'Latte',
              value: 'latte'
            },
            {
              label: 'Macchiato',
              value: 'macchiato'
            },
            {
              label: 'Cappuccino',
              value: 'cappuccino'
            },
            {
              label: 'White coffee',
              value: 'white-coffee'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped docs>
h4 {
  margin: 0;
}
h4 + h4 {
  margin-top: 20px;
}

section {
  width: 45%;
  float: left;
}

article {
  overflow: hidden;
}
</style>
