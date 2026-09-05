import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './PageLoader.css'

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export default function PageLoader() {
  const location = useLocation()
  const [visible, setVisible] = useState(true)
  const firstRoute = useRef(true)

  useEffect(() => {
    scrollToTop()
    const bootTimer = setTimeout(() => {
      setVisible(false)
      scrollToTop()
    }, 1600)
    return () => clearTimeout(bootTimer)
  }, [])

  useEffect(() => {
    if (firstRoute.current) {
      firstRoute.current = false
      return undefined
    }
    scrollToTop()
    setVisible(true)
    const timer = setTimeout(() => {
      setVisible(false)
      scrollToTop()
    }, 700)
    return () => clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    if (visible) {
      document.documentElement.classList.add('loader-open')
      document.body.classList.add('loader-open')
    } else {
      document.documentElement.classList.remove('loader-open')
      document.body.classList.remove('loader-open')
    }
    return () => {
      document.documentElement.classList.remove('loader-open')
      document.body.classList.remove('loader-open')
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading">
      <div className="page-loader__core">
        <div className="page-loader__orbit" aria-hidden="true" />
        <div className="page-loader__orbit page-loader__orbit--inner" aria-hidden="true" />
        <div className="logo-frame logo-frame--loader">
          <img src={logo} alt="Queens Laboratory" className="brand-logo" />
        </div>
        <div className="page-loader__lab" aria-hidden="true">
          <svg viewBox="0 0 48 48" className="page-loader__microscope" fill="none">
            <path
              d="M14 42h20M18 42V30h12v12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 30V18"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <rect x="20" y="8" width="8" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
            <circle className="page-loader__lens" cx="24" cy="13" r="2.2" fill="currentColor" />
            <path
              d="M28 20l8 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="38" cy="28" r="4.5" stroke="currentColor" strokeWidth="2" />
            <path
              className="page-loader__beam"
              d="M24 18v8"
              stroke="#c8f000"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
          <div className="page-loader__dna">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <p className="page-loader__text">Analysing sample…</p>
    </div>
  )
}
