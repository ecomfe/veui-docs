<template>
<article>
  <veui-form
    :data="formData"
  >
    <veui-field
      label="门店："
      name="store"
      :rules="[{
        name: 'required', message: `请选择门店`, triggers: 'select'
      }]"
    >
      <veui-transfer
        :datasource="storeList"
        v-model="formData.store"
      >
        <template #selected-item-label="{ label, value }">
          <div class="selected-store">
            <span class="store-label">{{ label }}</span>
            <veui-field
              :key="`storeCounts.${value}`"
              :name="`storeCounts.${value}`"
              :rules="[
                { name: 'required', message: `请填写${label}的数量`, triggers: 'change,blur' }
              ]"
              abstract
            >
              <veui-number-input
                v-model="formData.storeCounts[value]"
                class="store-number"
                ui="s"
                :min="1"
              />
            </veui-field>
          </div>
        </template>
      </veui-transfer>
    </veui-field>
  </veui-form>
</article>
</template>

<script>
import { Form, Field, NumberInput, Transfer } from 'veui'

export default {
  components: {
    'veui-form': Form,
    'veui-field': Field,
    'veui-number-input': NumberInput,
    'veui-transfer': Transfer
  },
  data () {
    return {
      disabled: true,
      formData: {
        store: [],
        storeCounts: {}
      },
      storeList: [
        { label: '门店1', value: '1' },
        { label: '门店2', value: '2' },
        { label: '门店3', value: '3' },
        { label: '门店4', value: '4' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.selected-store {
  display: flex;
  align-items: center;

  .store-label {
    min-width: 60px;
  }
}
</style>
