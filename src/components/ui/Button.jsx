import './Button.css'

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      <span className="btn__label">{loading ? 'Processing…' : children}</span>
      <span className="btn__shine" aria-hidden="true" />
    </button>
  )
}
