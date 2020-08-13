<template>
<article>
  <veui-switch
    v-model="status"
    true-value="ON"
    false-value="OFF"
  >
    Bluetooth
  </veui-switch>
  <p>Status: {{ statusMap[status] }}</p>
</article>
</template>

<script>
import { Switch } from 'veui'

const STATUS_MAP = {
  ON: 'On',
  OFF: 'Off'
}

export default {
  components: {
    'veui-switch': Switch
  },
  data () {
    return {
      status: 'ON',
      statusMap: STATUS_MAP
    }
  }
}
</script>
