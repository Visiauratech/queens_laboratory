import './Field.css'

export default function SelectField({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  options = [],
  placeholder = 'Select an option',
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
      <div className="field__control field__control--select">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className="field__input field__select"
          aria-invalid={showError}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value ?? opt} value={opt.value ?? opt}>
              {opt.label ?? opt}
            </option>
          ))}
        </select>
        <span className="field__glow" aria-hidden="true" />
      </div>
      {showError && <p className="field__error">{error}</p>}
    </div>
  )
}
