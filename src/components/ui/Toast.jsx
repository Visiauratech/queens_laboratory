import './Toast.css'

export default function Toast({ type, line1, line2, onClose }) {
  const isSuccess = type === 'success'

  return (
    <div className={`toast toast--${type}`} role="status" aria-live="polite">
      <span className="toast__icon" aria-hidden="true">
        {isSuccess ? (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.6" />
            <path d="M7 12.5l3.2 3.2L17 8.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.6" />
            <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
      <div className="toast__text">
        <p>{line1}</p>
        <p>{line2}</p>
      </div>
      <button type="button" className="toast__close" onClick={onClose} aria-label="Close notification">
        ×
      </button>
    </div>
  )
}
