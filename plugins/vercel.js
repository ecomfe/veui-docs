import { inject, track } from '@vercel/analytics'

export default () => {
  inject()

  window.__vaTrack = track
}
