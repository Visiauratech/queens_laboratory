import './Field.css'

export default function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  maxLength,
  inputMode,
  autoComplete,
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
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          inputMode={inputMode}
          autoComplete={autoComplete}
          disabled={disabled}
          className="field__input"
          aria-invalid={showError}
          aria-describedby={showError ? `${name}-error` : undefined}
        />
        <span className="field__glow" aria-hidden="true" />
      </div>
      {showError && (
        <p id={`${name}-error`} className="field__error">
          {error}
        </p>
      )}
    </div>
  )
}
