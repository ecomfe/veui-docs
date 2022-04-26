<template>
<fragment>
  <iframe
    ref="iframe"
    class="one-iframe"
  />
  <slot/>
</fragment>
</template>

<script>
import { Fragment } from 'vue-frag'

export default {
  name: 'one-iframe',
  components: {
    Fragment
  },
  props: {
    globalStyle: String
  },
  watch: {
    globalStyle (value) {
      if (this.style) {
        this.style.textContent = value
      }
    }
  },
  beforeDestroy () {
    if (this.contents) {
      this.contents.forEach(node => {
        this.$refs.iframe.parentNode.appendChild(node)
      })
    }

    if (this.mo) {
      this.mo.disconnect()
    }
  },
  mounted () {
    const links = document.querySelectorAll('link[rel=stylesheet]')
    const styles = document.querySelectorAll('style')
    const { iframe } = this.$refs
    const { body, head } = iframe.contentDocument
    this.contents = this.$el.frag.filter(node => node !== iframe);
    [...links, ...styles].forEach(node => {
      const clone = node.cloneNode(true)
      head.appendChild(clone)
    })

    this.contents.forEach(node => {
      body.appendChild(node)
    })

    if (this.globalStyle) {
      const style = document.createElement('style')
      style.textContent = this.globalStyle
      head.appendChild(style)
      this.style = style
    }

    this.watchLiveStyle(head)
  },
  methods: {
    watchLiveStyle (head) {
      this.liveStyle = document.createComment('')
      head.appendChild(this.liveStyle)

      this.mo = new MutationObserver(mutations => {
        for (const mutation of mutations) {
          if (mutation.target === document.head) {
            const style = (this.liveSource = [...mutation.addedNodes].find(
              node => node.nodeName === 'STYLE' && node.dataset.cssscoper
            ))
            if (style) {
              const liveStyle = style.cloneNode(true)
              head.replaceChild(liveStyle, this.liveStyle)
              this.liveStyle = liveStyle
            }
          } else if (mutation.target === this.liveSource) {
            this.liveStyle.textContent = this.liveSource.textContent
          }
        }
      })
      this.mo.observe(document.head, { childList: true })
    }
  }
}
</script>

<style lang="stylus" scoped>
.one-iframe
  display block
  width 100%
  height 100%
  border none
  overflow auto
</style>
