<template>
<article>
  <section>
    <h4>Select + Input + Button</h4>
    <veui-input-group>
      <veui-select
        :options="protocols"
        style="width: 100px"
      />
      <veui-input/>
      <veui-button ui="primary">
        Submit
      </veui-button>
    </veui-input-group>
  </section>
  <section>
    <h4>Label + NumberInput + Button + <code>ui="s"</code></h4>
    <veui-input-group ui="s">
      <veui-label for="bid">
        USD
      </veui-label>
      <veui-number-input
        ref="bid"
        v-model="bid"
        style="width: 120px"
      />
      <veui-button>Submit</veui-button>
    </veui-input-group>
  </section>
  <section>
    <h4>NumberInput + Span + NumberInput + <code>ui="xs"</code></h4>
    <veui-input-group ui="xs">
      <veui-number-input v-model="width"/>
      <veui-span>×</veui-span>
      <veui-number-input v-model="height"/>
    </veui-input-group>
  </section>
  <section>
    <h4>Autocomplete + ButtonGroup</h4>
    <veui-input-group>
      <veui-autocomplete :datasource="suggestions"/>
      <veui-button-group
        :items="ops"
        ui="primary"
      />
    </veui-input-group>
  </section>
  <section>
    <h4>Select + SearchBox + <code>ui="l"</code></h4>
    <veui-input-group ui="l">
      <veui-select
        :options="types"
        :value="type"
        style="width: 120px"
      />
      <veui-search-box/>
    </veui-input-group>
  </section>
</article>
</template>

<script>
import {
  InputGroup,
  ButtonGroup,
  Select,
  Input,
  NumberInput,
  Button,
  Autocomplete,
  SearchBox,
  Label,
  Span
} from 'veui'

export default {
  name: 'text-input',
  components: {
    'veui-input-group': InputGroup,
    'veui-button-group': ButtonGroup,
    'veui-input': Input,
    'veui-select': Select,
    'veui-number-input': NumberInput,
    'veui-button': Button,
    'veui-autocomplete': Autocomplete,
    'veui-search-box': SearchBox,
    'veui-label': Label,
    'veui-span': Span
  },
  data () {
    return {
      protocols: [
        { label: 'https://', value: 'https' },
        { label: 'http://', value: 'http' }
      ],
      bid: 1024,
      width: 1024,
      height: 768,
      ops: [
        { label: 'Save', value: 'save' },
        { label: 'Submit', value: 'submit' }
      ],
      types: [
        { label: 'By ID', value: 'id' },
        { label: 'By Name', value: 'name' }
      ],
      type: 'id',
      suggestions: [
        { value: 'Steve Rogers' },
        { value: 'Tony Stark' },
        { value: 'Thor' },
        { value: 'Hulk' },
        { value: 'Stephen Strange' },
        { value: 'Natasha Romanov' },
        { value: 'Loki' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
section {
  margin-bottom: 20px;
}
</style>
