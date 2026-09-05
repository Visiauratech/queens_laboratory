import './Field.css'

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  rows = 4,
  disabled = false,
  required = false,
}) {
  const showError = Boolean(touched && error)

  return (
    <div className={`field ${showError ? 'field--error' : ''} ${disabled ? 'field--disabled' : ''}`}>
      {label && (
        <label className="field__label" htmlFor={name}>
          {label}
          {required && <span className="field__req">*</span>}
        </label>
      )}
      <div className="field__control">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          className="field__input field__textarea"
          aria-invalid={showError}
        />
        <span className="field__glow" aria-hidden="true" />
      </div>
      {showError && <p className="field__error">{error}</p>}
    </div>
  )
}
