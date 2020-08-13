<template>
<article>
  <veui-schedule
    v-model="selected"
    :shortcuts="shortcuts"
    shortcuts-display="popup"
    :statuses="statuses"
  />
</article>
</template>

<script>
import { Schedule } from 'veui'

export default {
  components: {
    'veui-schedule': Schedule
  },
  data () {
    return {
      selected: {
        0: [[0, 23]],
        1: [[9, 11], [13, 17]],
        3: [[13, 16]],
        5: [[9, 9], [16, 17]]
      },
      shortcuts: [
        {
          label: 'Entire week',
          selected: {
            0: true,
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true
          }
        },
        {
          label: 'Weekdays',
          selected: {
            1: true,
            2: true,
            3: true,
            4: true,
            5: true
          }
        },
        {
          label: 'Weekends',
          selected: {
            0: true,
            6: true
          }
        }
      ],
      statuses: [
        {
          label: 'Selected',
          name: 'selected'
        },
        {
          label: 'Available',
          name: 'available'
        }
      ]
    }
  }
}
</script>
