<template>
<article class="autocomplete-normal-demo">
  <section>
    <h3>Suggest on input</h3>
    <veui-autocomplete
      :datasource="suggestions"
      clearable
    />
  </section>
  <section>
    <h3>Suggest on focus</h3>
    <veui-autocomplete
      :datasource="coffees"
      suggest-on-focus="focus"
    />
  </section>
</article>
</template>

<script>
import { Autocomplete } from 'veui'

export default {
  components: {
    'veui-autocomplete': Autocomplete
  },
  data () {
    return {
      suggestions: [
        {
          value: 'Moka'
        },
        {
          value: 'Turkish'
        },
        {
          value: 'Latte'
        },
        {
          value: 'Cappuccino'
        }
      ],
      coffees: [
        {
          label: 'Infused',
          value: 'infused',
          options: [
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
          label: 'Espresso',
          value: 'espresso',
          options: [
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
          options: [
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

<style lang="less" scoped>
.autocomplete-normal-demo {
  display: flex;

  section + section {
    margin-left: 60px;
  }
}
</style>
