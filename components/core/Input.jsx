import React from 'react';

/**
 * Input — text field with label, helper text, and validation states.
 */
export function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  size = 'md',
  state = 'default',
  helperText,
  errorText,
  required = false,
  disabled = false,
  readOnly = false,
  prefix,
  suffix,
  id,
  name,
  autoComplete,
  style: extraStyle,
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || `lfd-input-${Math.random().toString(36).slice(2, 7)}`;

  const sizes = {
    sm: { fontSize: 'var(--text-sm)', padding: '6px 10px', height: '32px' },
    md: { fontSize: 'var(--text-sm)', padding: '8px 12px', height: '38px' },
    lg: { fontSize: 'var(--text-base)', padding: '10px 14px', height: '44px' },
  };

  const resolvedState = errorText ? 'error' : state;

  const borderColor = {
    default: focused ? 'var(--color-teal-500)' : 'var(--border-strong)',
    error:   focused ? 'var(--color-danger-500)' : 'var(--color-danger-400)',
    success: focused ? 'var(--color-success-500)' : 'var(--color-success-400)',
    disabled: 'var(--border-muted)',
  };

  const shadowStyle = focused
    ? resolvedState === 'error' ? 'var(--focus-ring-danger)' : 'var(--focus-ring)'
    : 'none';

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
    alignItems: 'center',
    gap: 'var(--space-1)',
  };

  const inputWrapStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 'var(--radius-input)',
    border: `1.5px solid ${borderColor[resolvedState] || borderColor.default}`,
    backgroundColor: disabled ? 'var(--bg-muted)' : 'var(--bg-default)',
    boxShadow: shadowStyle,
    transition: 'var(--transition-input)',
    overflow: 'hidden',
  };

  const inputStyle = {
    flex: 1,
    ...sizes[size],
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-regular)',
    color: disabled ? 'var(--fg-disabled)' : 'var(--fg-default)',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };

  const affixStyle = {
    padding: '0 10px',
    fontFamily: 'var(--font-sans)',
    fontSize: sizes[size].fontSize,
    color: 'var(--fg-muted)',
    backgroundColor: 'var(--bg-subtle)',
    display: 'flex',
    alignItems: 'center',
    borderRight: prefix ? '1px solid var(--border-muted)' : undefined,
    borderLeft: suffix ? '1px solid var(--border-muted)' : undefined,
    whiteSpace: 'nowrap',
    flexShrink: 0,
    height: '100%',
  };

  const helperStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    color: resolvedState === 'error' ? 'var(--color-danger-600)' : 'var(--fg-muted)',
    lineHeight: 'var(--leading-normal)',
  };

  return (
    <div style={wrapperStyle}>
      {label && (
        <label htmlFor={inputId} style={labelStyle}>
          {label}
          {required && <span style={{ color: 'var(--color-danger-500)' }}>*</span>}
        </label>
      )}
      <div style={inputWrapStyle}>
        {prefix && <span style={affixStyle}>{prefix}</span>}
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          required={required}
          style={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {suffix && <span style={{ ...affixStyle, borderRight: undefined }}>{suffix}</span>}
      </div>
      {(helperText || errorText) && (
        <p style={helperStyle}>{errorText || helperText}</p>
      )}
    </div>
  );
}
