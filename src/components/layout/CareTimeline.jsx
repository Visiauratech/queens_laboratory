import { useEffect, useRef, useState } from 'react'
import ScrollReveal from './ScrollReveal'
import { CARE_SERVICES } from '../../utils/constants'
import './CareTimeline.css'

export default function CareTimeline() {
  const trackRef = useRef(null)
  const nodeRefs = useRef([])
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const update = () => {
      const focusY = window.innerHeight * 0.42
      let bestIndex = 0
      let bestDist = Number.POSITIVE_INFINITY

      nodeRefs.current.forEach((node, index) => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const dist = Math.abs(center - focusY)
        if (dist < bestDist) {
          bestDist = dist
          bestIndex = index
        }
      })

      setActive((prev) => (prev === bestIndex ? prev : bestIndex))

      const track = trackRef.current
      if (track) {
        const rect = track.getBoundingClientRect()
        const raw = (focusY - rect.top) / Math.max(rect.height, 1)
        setProgress(Math.min(1, Math.max(0, raw)))
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    window.addEventListener('touchmove', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('touchmove', onScroll)
    }
  }, [])

  return (
    <section className="section care-services">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Care Pathways</p>
          <h2 className="section-title">Services beyond a single sample</h2>
        </ScrollReveal>

        <div className="care-timeline" ref={trackRef}>
          <div className="care-timeline__rail" aria-hidden="true">
            <div className="care-timeline__rail-fill" style={{ transform: `scaleY(${progress})` }} />
          </div>

          {CARE_SERVICES.map((item, i) => {
            const state =
              i === active ? 'is-active' : i < active ? 'is-passed' : 'is-upcoming'

            return (
              <article
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[i] = el
                }}
                className={`care-node ${i % 2 === 0 ? 'care-node--left' : 'care-node--right'} ${state}`}
              >
                <div className="care-node__marker" aria-hidden="true">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <i className="care-node__glow" />
                </div>
                <div className="care-node__panel">
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
