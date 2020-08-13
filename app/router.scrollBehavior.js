export default function scrollBehavior (to) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (
    to.matched.some(r => r.components.default.options.scrollToTop)
  ) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  } else if (
    to.hash &&
    document.querySelector(decodeURIComponent(to.hash))
  ) {
    // scroll to anchor by returning the selector
    position = { selector: to.hash }
  }
  return position
}
