function timeout (t) {
  return new Promise(resolve => {
    setTimeout(resolve, t)
  })
}

let paddingTopInPixels = null
function getScrollPaddingTopInPixels () {
  if (paddingTopInPixels !== null) {
    return paddingTopInPixels
  }
  const measurer = document.createElement('div')
  const paddingTop = getComputedStyle(document.documentElement).scrollPaddingTop
  measurer.style.position = 'absolute'
  measurer.style.visibility = 'hidden'
  measurer.style.height = paddingTop
  document.body.appendChild(measurer)
  paddingTopInPixels = measurer.offsetHeight
  measurer.remove()
  return paddingTopInPixels
}

export default async function scrollBehavior (to) {
  if (to.hash) {
    // scroll to anchor by returning the selector
    await timeout(0)
    return {
      selector: decodeURIComponent(to.hash),
      offset: {
        y: getScrollPaddingTopInPixels()
      }
    }
  }

  return {
    x: 0,
    y: 0
  }
}
