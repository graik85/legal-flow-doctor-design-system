import React from 'react';

/**
 * Select — styled dropdown for filtering, role selection, and case categorization.
 */
export function Select({
  label,
  value,
  defaultValue,
  onChange,
  options = [],
  placeholder = 'Select…',
  size = 'md',
  disabled = false,
  helperText,
  errorText,
  required = false,
  id,
  name,
  style: extraStyle,
}) {
  const [focused, setFocused] = React.useState(false);
  const selectId = id || `lfd-select-${Math.random().toString(36).slice(2, 7)}`;

  const sizes = {
    sm: { fontSize: 'var(--text-sm)', padding: '5px 30px 5px 10px', height: '32px' },
    md: { fontSize: 'var(--text-sm)', padding: '7px 34px 7px 12px', height: '38px' },
    lg: { fontSize: 'var(--text-base)', padding: '9px 38px 9px 14px', height: '44px' },
  };

  const resolvedState = errorText ? 'error' : 'default';

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-1-5)',
    ...extraStyle,
  };

  const labelStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    color: disabled ? 'var(--fg-disabled)' : 'var(--fg-default)',
    display: 'flex',
    gap: 'var(--space-1)',
    alignItems: 'center',
  };

  const selectStyle = {
    appearance: 'none',
    WebkitAppearance: 'none',
    width: '100%',
    ...sizes[size],
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-regular)',
    color: 'var(--fg-default)',
    backgroundColor: disabled ? 'var(--bg-muted)' : 'var(--bg-default)',
    border: `1.5px solid ${focused ? (resolvedState === 'error' ? 'var(--color-danger-500)' : 'var(--color-teal-500)') : 'var(--border-strong)'}`,
    borderRadius: 'var(--radius-input)',
    boxShadow: focused ? (resolvedState === 'error' ? 'var(--focus-ring-danger)' : 'var(--focus-ring)') : 'none',
    outline: 'none',
    transition: 'var(--transition-input)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235a6170' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
  };

  const helperStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    color: resolvedState === 'error' ? 'var(--color-danger-600)' : 'var(--fg-muted)',
  };

  return (
    <div style={wrapperStyle}>
      {label && (
        <label htmlFor={selectId} style={labelStyle}>
          {label}
          {required && <span style={{ color: 'var(--color-danger-500)' }}>*</span>}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        required={required}
        style={selectStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(opt =>
          typeof opt === 'string'
            ? <option key={opt} value={opt}>{opt}</option>
            : <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
        )}
      </select>
      {(helperText || errorText) && <p style={helperStyle}>{errorText || helperText}</p>}
    </div>
  );
}
