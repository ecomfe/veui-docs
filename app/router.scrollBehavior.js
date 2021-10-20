function timeout (t) {
  return new Promise(resolve => {
    setTimeout(resolve, t)
  })
}

export default async function scrollBehavior (to) {
  if (to.hash) {
    // scroll to anchor by returning the selector
    await timeout(0)
    return {
      selector: decodeURIComponent(to.hash),
      offset: {
        y: 120
      }
    }
  }

  return {
    x: 0,
    y: 0
  }
}
