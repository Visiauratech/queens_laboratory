import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import { LAB } from '../../utils/constants'
import { IconWhatsApp } from '../ui/Icons'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock page scroll while mobile menu is open
  useEffect(() => {
    const root = document.documentElement
    if (open) {
      root.classList.add('nav-open')
      document.body.classList.add('nav-open')
    } else {
      root.classList.remove('nav-open')
      document.body.classList.remove('nav-open')
    }
    return () => {
      root.classList.remove('nav-open')
      document.body.classList.remove('nav-open')
    }
  }, [open])

  // Close on Escape + when resizing to desktop
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const closeMenu = () => setOpen(false)
  const toggleMenu = () => setOpen((v) => !v)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--menu-open' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" onClick={closeMenu}>
          <div className="logo-frame logo-frame--nav">
            <img src={logo} alt="Queens Laboratory logo" className="brand-logo" />
          </div>
          <div className="nav__brand-text">
            <strong>QUEENS</strong>
            <span>LABORATORY</span>
          </div>
        </Link>

        <button
          type="button"
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`nav__backdrop ${open ? 'is-open' : ''}`}
          aria-hidden={!open}
          onClick={closeMenu}
        />

        <nav
          id="primary-navigation"
          className={`nav__menu ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <div className="nav__menu-list">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <a
            className="nav__cta"
            href={`https://wa.me/91${LAB.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <IconWhatsApp className="icon--bare" size={15} />
            Book Collection
          </a>
        </nav>
      </div>
    </header>
  )
}
