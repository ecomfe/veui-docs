const queued = {
  live: false
}

const queue = requestIdleCallback || setTimeout

let mql = window.matchMedia('(max-width: 480px)')

mql.addEventListener('change', ({ matches }) => {
  loadLive(matches)
})

loadLive(mql.matches)

function loadLive (isNarrow) {
  if (queued.live || isNarrow) {
    return
  }

  queued.live = true
  queue(() => import('../components/OneLive'))
}
