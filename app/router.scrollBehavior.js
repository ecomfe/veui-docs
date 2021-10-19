export default function scrollBehavior (to) {
  if (to.hash) {
    // scroll to anchor by returning the selector
    return {
      selector: decodeURIComponent(to.hash),
      offset: {
        y: 32
      }
    }
  }

  return {
    x: 0,
    y: 0
  }
}
