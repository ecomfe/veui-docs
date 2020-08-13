<template>
<article>
  <section>
    <h4>Custom label</h4>
    <veui-tree
      :datasource="coffees"
      item-click="toggle"
    >
      <template #item-label="{ item }">
        <i>{{ item.label }}</i>
      </template>
    </veui-tree>
  </section>
  <section>
    <h4>Custom item</h4>
    <veui-tree
      :datasource="coffees"
      item-click="toggle"
      class="custom-item"
    >
      <template #item="{ children, expanded, label }">
        <template v-if="children && children.length">
          <veui-button
            ui="aux icon"
            class="custom-toggle"
          >
            <veui-icon :name="expanded ? 'minus' : 'plus'"/>
          </veui-button>
          {{ label }}
        </template>
      </template>
    </veui-tree>
  </section>
</article>
</template>

<script>
import { Tree, Button, Icon } from 'veui'
import 'veui-theme-dls-icons/plus'
import 'veui-theme-dls-icons/minus'

export default {
  components: {
    'veui-tree': Tree,
    'veui-button': Button,
    'veui-icon': Icon
  },
  data () {
    return {
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
        },
        {
          label: 'Boiled',
          value: 'boiled',
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
              value: 'cafe-lungo'
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
@import "~veui-theme-dls/lib.less";

article {
  .clearfix();
}

h4 {
  margin-top: 0;
}

section {
  float: left;
  width: 45%;
}
</style>

<style lang="less">
.custom-toggle {
  margin-right: 4px;
}
</style>
