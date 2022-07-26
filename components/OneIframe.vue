<script>
import Vue from 'vue'

export default {
  name: 'one-iframe',
  props: {
    globalStyle: String,
    live: Boolean
  },
  watch: {
    globalStyle (value) {
      if (this.style) {
        this.style.textContent = value
      }
    }
  },
  beforeDestroy () {
    if (this.mo) {
      this.mo.disconnect()
    }
  },
  mounted () {
    const links = document.querySelectorAll('link[rel=stylesheet]')
    const styles = document.querySelectorAll('style')
    const { head } = this.$el.contentDocument

    ;[...links, ...styles].forEach(node => {
      const clone = node.cloneNode(true)
      head.appendChild(clone)
    })

    if (this.globalStyle) {
      const style = document.createElement('style')
      style.textContent = this.globalStyle
      head.appendChild(style)
      this.style = style
    }

    this.renderContents()

    if (this.live) {
      this.watchLiveStyle(head)
    }
  },
  beforeUpdate () {
    this.app.contents = Object.freeze(this.$slots.default)
  },
  methods: {
    renderContents () {
      const contents = this.$slots.default
      const body = this.$el.contentDocument.body
      const el = document.createElement('div')
      body.appendChild(el)

      this.app = new Vue({
        el,
        data () {
          return {
            contents: Object.freeze(contents)
          }
        },
        render (h) {
          return h('div', this.contents)
        }
      })
    },
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
  },
  render (h) {
    return h('iframe', {
      class: {
        'one-iframe': true
      }
    })
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
