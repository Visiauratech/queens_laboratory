import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import { LAB } from '../../utils/constants'
import { IconMail, IconPhone, IconPin, IconWhatsApp } from '../ui/Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__brand-row">
            <div className="logo-frame logo-frame--sm">
              <img src={logo} alt="Queens Laboratory" className="brand-logo" />
            </div>
            <div>
              <h3>Queens Laboratory</h3>
            </div>
          </div>
          <p className="footer__tag">
            Premium diagnostic care in Madurai with 24×7 home collection, precise reporting and multi-channel patient support.
          </p>
        </div>

        <div className="footer__col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col footer__col--contact">
          <h4>Contact</h4>
          <div className="contact-row">
            <IconPin size={16} />
            <div className="contact-row__body">
              <p>{LAB.address}</p>
            </div>
          </div>
          <div className="contact-row">
            <IconPhone size={16} />
            <div className="contact-row__body contact-row__stack">
              <a href={`tel:+91${LAB.phones[0]}`}>+91 {LAB.phones[0]}</a>
              <a href={`tel:+91${LAB.phones[1]}`}>+91 {LAB.phones[1]}</a>
            </div>
          </div>
          <div className="contact-row">
            <IconWhatsApp size={16} />
            <div className="contact-row__body">
              <a href={`https://wa.me/91${LAB.whatsapp}`} target="_blank" rel="noreferrer">
                +91 {LAB.whatsapp}
              </a>
            </div>
          </div>
          <div className="contact-row">
            <IconMail size={16} />
            <div className="contact-row__body">
              <a href={`mailto:${LAB.email}`}>{LAB.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__credit">
          <a href="https://www.viespire.com" target="_blank" rel="noreferrer">
            Designed and Crafted by{' '}
            <span className="footer__credit-brand">Viespire Technologies</span>
          </a>
        </p>
      </div>
    </footer>
  )
}
