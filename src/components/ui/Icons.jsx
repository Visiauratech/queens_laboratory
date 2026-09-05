import './Icons.css'

function IconShell({ children, className = '', size = 18, label }) {
  return (
    <span
      className={`icon ${className}`}
      style={{ '--icon-size': `${size}px` }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" focusable="false">
        {children}
      </svg>
    </span>
  )
}

export function IconPin({ className, size, label } = {}) {
  return (
    <IconShell className={className} size={size} label={label}>
      <path
        d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </IconShell>
  )
}

export function IconMail({ className, size, label } = {}) {
  return (
    <IconShell className={className} size={size} label={label}>
      <rect x="3" y="5" width="18" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 7.5 12 13l7.5-5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  )
}

export function IconPhone({ className, size, label } = {}) {
  return (
    <IconShell className={className} size={size} label={label}>
      <path
        d="M8.2 3.8c.5-.5 1.3-.6 1.9-.2l2 1.3c.6.4.8 1.2.5 1.9l-.8 1.7c-.2.4-.1.9.2 1.2l3.3 3.3c.3.3.8.4 1.2.2l1.7-.8c.7-.3 1.5-.1 1.9.5l1.3 2c.4.6.3 1.4-.2 1.9l-1.1 1.1c-.9.9-2.2 1.2-3.4.8-2.7-.9-5.7-3.5-8.1-5.9-2.4-2.4-5-5.4-5.9-8.1-.4-1.2-.1-2.5.8-3.4l1.1-1.1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </IconShell>
  )
}

export function IconWhatsApp({ className, size, label } = {}) {
  return (
    <IconShell className={className} size={size} label={label}>
      <path
        d="M12 3.2a8.8 8.8 0 0 0-7.5 13.4L3.4 20.6l4.2-1.1A8.8 8.8 0 1 0 12 3.2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.4.5c-.1.2-.1.4 0 .6.4.7 1.2 1.5 1.9 1.9.2.1.4.1.6 0l.5-.4c.2-.1.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.5.7-.4.2-1 .3-1.6.1-1.4-.4-3.2-1.7-4.5-3.5-1.2-1.6-1.8-3.1-1.8-4.3 0-.5.2-1 .5-1.3z"
        fill="currentColor"
      />
    </IconShell>
  )
}

export function IconPerson({ className, size, label } = {}) {
  return (
    <IconShell className={className} size={size} label={label}>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.5 19.2c1.2-3.2 3.4-4.8 6.5-4.8s5.3 1.6 6.5 4.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </IconShell>
  )
}

export function IconClock({ className, size, label } = {}) {
  return (
    <IconShell className={className} size={size} label={label}>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.8v4.6l3.2 1.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </IconShell>
  )
}
