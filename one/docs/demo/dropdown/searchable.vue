<template>
<article>
  <veui-dropdown
    label="Operation"
    placeholder="Type to search..."
    searchable
    :options="options"
  />
</article>
</template>

<script>
import { Dropdown } from 'veui'

export default {
  components: {
    'veui-dropdown': Dropdown
  },
  data () {
    return {
      options: [
        {
          label: '>',
          value: '>'
        },
        {
          label: '>>',
          value: '>>'
        },
        {
          label: '<',
          value: '<'
        },
        {
          label: '|',
          value: '|'
        },
        {
          label: '~/.bash_profile',
          value: '~/.bash_profile'
        },
        {
          label: 'alias',
          value: 'alias'
        },
        {
          label: 'cd',
          value: 'cd'
        },
        {
          label: 'cd ..',
          value: 'cd ..'
        },
        {
          label: 'cp',
          value: 'cp'
        },
        {
          label: 'Wildcards (*)',
          value: 'Wildcards (*)'
        },
        {
          label: 'env',
          value: 'env'
        },
        {
          label: 'env | grep VARIABLE',
          value: 'env | grep VARIABLE'
        },
        {
          label: 'export',
          value: 'export'
        },
        {
          label: 'grep',
          value: 'grep'
        },
        {
          label: 'grep -i',
          value: 'grep -i'
        },
        {
          label: 'grep -R',
          value: 'grep -R'
        },
        {
          label: 'grep -Rl',
          value: 'grep -Rl'
        },
        {
          label: 'HOME',
          value: 'HOME'
        },
        {
          label: 'ls',
          value: 'ls'
        },
        {
          label: 'mkdir',
          value: 'mkdir'
        },
        {
          label: 'mv',
          value: 'mv'
        },
        {
          label: 'nano',
          value: 'nano'
        },
        {
          label: 'PATH',
          value: 'PATH'
        },
        {
          label: 'pwd',
          value: 'pwd'
        },
        {
          label: 'rm',
          value: 'rm'
        },
        {
          label: 'rm -r',
          value: 'rm -r'
        },
        {
          label: 'sed',
          value: 'sed'
        },
        {
          label: 'sort',
          value: 'sort'
        },
        {
          label: 'standard error',
          value: 'standard error'
        },
        {
          label: 'source',
          value: 'source'
        },
        {
          label: 'standard input',
          value: 'standard input'
        },
        {
          label: 'standard output',
          value: 'standard output'
        },
        {
          label: 'touch',
          value: 'touch'
        },
        {
          label: 'uniq',
          value: 'uniq'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped docs>
.veui-dropdown {
  margin-left: 1em;
}
</style>
