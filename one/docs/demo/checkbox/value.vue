<template>
<article>
  <veui-checkbox
    v-model="status"
    true-value="CONFIRMED"
    false-value="UNCONFIRMED"
  >
    I've read the agreement
  </veui-checkbox>
  <p>State: {{ statusMap[status] }}</p>
</article>
</template>

<script>
import { Checkbox } from 'veui'

const STATUS_MAP = {
  CONFIRMED: 'Confirmed',
  UNCONFIRMED: 'Not confirmed'
}

export default {
  components: {
    'veui-checkbox': Checkbox
  },
  data () {
    return {
      status: 'UNCONFIRMED',
      statusMap: STATUS_MAP
    }
  }
}
</script>
