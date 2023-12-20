<template>
<article>
  <section>
    <veui-radio-group
      v-model="mergeChecked"
      class="group"
      :items="items"
    />
    <veui-transfer
      v-model="selected"
      :datasource="coffees"
      :merge-checked="mergeChecked"
    />
    <p>Selected: {{ selected }}</p>
  </section>
</article>
</template>

<script>
import { Transfer, RadioGroup } from 'veui'

export default {
  components: {
    'veui-transfer': Transfer,
    'veui-radio-group': RadioGroup
  },
  data () {
    return {
      coffees: [
        {
          label: 'Infused',
          value: 'infused',
          id: '100',
          children: [
            {
              label: 'Brewed',
              value: 'brewed',
              id: '100-01',
              children: [
                {
                  label: 'Drip brewed',
                  value: 'drip-brewed',
                  id: '100-01-01'
                },
                {
                  label: 'Filtered',
                  value: 'filtered',
                  id: '100-01-02'
                },
                {
                  label: 'Pour-over',
                  value: 'pour-over',
                  id: '100-01-03'
                },
                {
                  label: 'Immersion brewed',
                  value: 'immersion-brewed',
                  id: '100-01-04'
                }
              ]
            },
            {
              label: 'French press',
              value: 'french-press',
              id: '100-02'
            },
            {
              label: 'Cold brew',
              value: 'cold-brew',
              id: '100-03'
            }
          ]
        },
        {
          label: 'Boiled',
          value: 'boiled',
          id: '200',
          children: [
            {
              label: 'Percolated',
              value: 'percolated',
              id: '200-01'
            },
            {
              label: 'Turkish',
              value: 'turkish',
              id: '200-02'
            },
            {
              label: 'Moka',
              value: 'moka',
              id: '200-03'
            }
          ]
        },
        {
          label: 'Espresso',
          value: 'espresso',
          id: '300',
          children: [
            {
              label: 'Caffè Americano',
              value: 'caffe-americano',
              id: '300-01'
            },
            {
              label: 'Cafe Lungo',
              value: 'cafe-lungo',
              id: '300-02'
            },
            {
              label: 'Café Cubano',
              value: 'cafe-cubano',
              id: '300-03'
            },
            {
              label: 'Caffè crema',
              value: 'caffe-crema',
              id: '300-04'
            },
            {
              label: 'Cafe Zorro',
              value: 'cafe-zorro',
              id: '300-05'
            },
            {
              label: 'Doppio',
              value: 'doppio',
              id: '300-06'
            },
            {
              label: 'Espresso Romano',
              value: 'espresso-romano',
              id: '300-07'
            },
            {
              label: 'Guillermo',
              value: 'guillermo',
              id: '300-08'
            },
            {
              label: 'Ristretto',
              value: 'ristretto',
              id: '300-09'
            }
          ]
        },
        {
          label: 'Milk coffee',
          value: 'milk-coffee',
          id: '400',
          children: [
            {
              label: 'Flat white',
              value: 'flat-white',
              id: '400-01'
            },
            {
              label: 'Latte',
              value: 'latte',
              id: '400-02'
            },
            {
              label: 'Macchiato',
              value: 'macchiato',
              id: '400-03'
            },
            {
              label: 'Cappuccino',
              value: 'cappuccino',
              id: '400-04'
            },
            {
              label: 'White coffee',
              value: 'white-coffee',
              id: '400-05'
            }
          ]
        }
      ],
      mergeChecked: 'keep-all',
      selected: []
    }
  },
  computed: {
    items () {
      return [
        { label: 'keep-all', value: 'keep-all' },
        { label: 'downwards', value: 'downwards' },
        { label: 'upwards', value: 'upwards' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.group {
  margin-bottom: 20px;
}
</style>
