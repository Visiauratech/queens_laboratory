import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

/**
 * Resets scroll to the top on first load/refresh and on every route change.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    scrollToTop()

    // Re-assert after paint / loader layout shifts
    const frame = requestAnimationFrame(scrollToTop)
    const timer = window.setTimeout(scrollToTop, 50)
    const late = window.setTimeout(scrollToTop, 750)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
      window.clearTimeout(late)
    }
  }, [pathname])

  return null
}
