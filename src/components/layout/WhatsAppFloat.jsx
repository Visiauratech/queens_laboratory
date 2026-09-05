import { LAB } from '../../utils/constants'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  const href = `https://wa.me/91${LAB.whatsapp}?text=${encodeURIComponent(
    'Hello Queens Laboratory, I would like to enquire about home collection / lab tests.',
  )}`

  return (
    <a
      className="wa-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.01 3C9.39 3 4 8.38 4 14.99c0 2.1.55 4.06 1.52 5.77L4 29l8.45-1.47A11.9 11.9 0 0 0 16.01 27C22.63 27 28 21.62 28 15S22.63 3 16.01 3zm6.9 16.96c-.29.82-1.7 1.5-2.38 1.6-.61.08-1.38.12-2.23-.14-.52-.15-1.18-.37-2.04-.73-3.59-1.55-5.93-5.15-6.11-5.39-.18-.24-1.45-1.93-1.45-3.68s.91-2.61 1.24-2.97c.32-.35.71-.44.95-.44h.68c.22 0 .51-.08.8.61.29.71.99 2.43 1.08 2.61.09.18.15.39.03.63-.12.24-.18.39-.35.6-.18.21-.37.46-.53.62-.18.18-.36.37-.15.72.21.35.93 1.53 2 2.48 1.38 1.22 2.54 1.6 2.9 1.78.35.18.56.15.77-.09.21-.24.88-1.03 1.12-1.38.24-.35.47-.29.8-.18.32.12 2.06.97 2.41 1.15.35.18.59.26.68.41.09.15.09.86-.2 1.68z"
        />
      </svg>
    </a>
  )
}
