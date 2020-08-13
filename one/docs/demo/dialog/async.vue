<template>
<article>
  <veui-button
    :disabled="submitting"
    @click="submitOpen = true"
  >
    Submit
  </veui-button>
  <veui-button
    :disabled="saving"
    @click="saveOpen = true"
  >
    Save
  </veui-button>
  <veui-dialog
    title="System"
    :open.sync="submitOpen"
    :before-close="submit"
    :closable="false"
    :escapable="!submitting"
    :loading="submitting"
  >
    Confirm to create the issue?
  </veui-dialog>
  <veui-dialog
    title="System"
    :open.sync="saveOpen"
    :closable="false"
    :escapable="!submitting"
  >
    Confirm to save the post?
    <template #foot>
      <veui-button
        ui="primary"
        :loading="saving"
        @click="save('ok')"
      >
        OK
      </veui-button>
      <veui-button
        :disabled="saving"
        @click="save"
      >
        Cancel
      </veui-button>
    </template>
  </veui-dialog>
</article>
</template>

<script>
import { Dialog, Button } from 'veui'
import toast from 'veui/managers/toast'

function fakeRequest () {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(Math.random() < 0.5)
    }, 2000)
  )
}

export default {
  components: {
    'veui-dialog': Dialog,
    'veui-button': Button
  },
  data () {
    return {
      submitOpen: false,
      saveOpen: false,
      submitting: false,
      saving: false
    }
  },
  methods: {
    submit (type) {
      if (type === 'ok') {
        this.submitting = true
        return fakeRequest().then(success => {
          this.submitting = false
          if (!success) {
            toast.error('Failed to create the issue. Please retry.')
            return false
          }
          toast.success('Issue created successfully!')
        })
      }
    },
    save (type) {
      if (type === 'ok') {
        this.saving = true
        return fakeRequest().then(success => {
          this.saving = false
          if (!success) {
            toast.error('Failed to save the post. Please retry.')
          } else {
            toast.success('Post saved successfully!')
            this.saveOpen = false
          }
        })
      }
      this.saveOpen = false
    }
  }
}
</script>

<style lang="less" scoped docs>
article > .veui-button {
  margin-right: 20px;
}
</style>

<docs>
当你希望统一处理用户可能触发对话框关闭的操作，请使用 `before-close` 属性传入统一的处理函数，此时无论是点击“确定”/“取消”按钮、关闭按钮还是按下 <kbd>esc</kbd> 触发的关闭操作，都会统一进入 `before-close` 的处理流程。如果逻辑相对简单，比如取消时没有额外逻辑，可以直接操作 `open` 属性来关闭对话框。
</docs>

<docs locale="en-US">
When you want a unified process to handle all user interactions that might trigger the dialog to be closed, you can leverage the `before-close` function prop. No matter the close behavior is about to be triggered by clicking “OK”/“Cancel” buttons, the close button or pressing <kbd>esc</kbd>, `before-close` will always take over the following process. If the logic is relatively simple, you can manipulate `open` prop directly to close the dialog.
</docs>
