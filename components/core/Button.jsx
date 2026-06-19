import React from 'react';

/**
 * Button — primary interactive element for Legal Flow Doctor.
 * Supports primary, secondary, ghost, and destructive variants,
 * three sizes, disabled state, and optional leading/trailing icons.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  onClick,
  type = 'button',
  children,
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 'var(--leading-none)',
    letterSpacing: '0.01em',
    borderRadius: 'var(--radius-button)',
    border: '1.5px solid transparent',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-button)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    outline: 'none',
    position: 'relative',
  };

  const sizes = {
    sm: { fontSize: 'var(--text-sm)', padding: 'var(--space-1-5) var(--space-3)', height: '32px' },
    md: { fontSize: 'var(--text-sm)', padding: 'var(--space-2-5) var(--space-4)', height: '38px' },
    lg: { fontSize: 'var(--text-base)', padding: 'var(--space-3) var(--space-6)', height: '44px' },
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-teal-600)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-teal-600)',
      boxShadow: 'var(--shadow-button-primary)',
    },
    secondary: {
      backgroundColor: 'var(--bg-default)',
      color: 'var(--color-navy-900)',
      borderColor: 'var(--border-strong)',
      boxShadow: 'var(--shadow-button)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-navy-900)',
      borderColor: 'transparent',
    },
    destructive: {
      backgroundColor: 'var(--color-danger-500)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-danger-500)',
      boxShadow: '0 2px 8px -1px rgba(220,38,38,0.30)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-teal-700)',
      borderColor: 'var(--color-teal-400)',
    },
    gold: {
      backgroundColor: 'var(--color-gold-500)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-gold-500)',
      boxShadow: '0 2px 8px -1px rgba(201,148,58,0.35)',
    },
  };

  const [hovered, setHovered] = React.useState(false);

  const hoverStyles = {
    primary: { backgroundColor: 'var(--color-teal-700)', borderColor: 'var(--color-teal-700)' },
    secondary: { backgroundColor: 'var(--color-gray-50)', borderColor: 'var(--color-gray-400)' },
    ghost: { backgroundColor: 'var(--color-gray-100)', borderColor: 'transparent' },
    destructive: { backgroundColor: 'var(--color-danger-700)', borderColor: 'var(--color-danger-700)' },
    outline: { backgroundColor: 'var(--color-teal-50)', borderColor: 'var(--color-teal-500)' },
    gold: { backgroundColor: 'var(--color-gold-600)', borderColor: 'var(--color-gold-600)' },
  };

  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hovered && !disabled && !loading ? hoverStyles[variant] : {}),
  };

  const spinnerStyle = {
    width: size === 'sm' ? '12px' : '14px',
    height: size === 'sm' ? '12px' : '14px',
    border: '2px solid rgba(255,255,255,0.35)',
    borderTopColor: 'currentColor',
    borderRadius: '50%',
    animation: 'lfd-spin 0.7s linear infinite',
  };

  return (
    <button
      type={type}
      style={style}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={e => { e.currentTarget.style.boxShadow = 'var(--focus-ring)'; }}
      onBlur={e => { e.currentTarget.style.boxShadow = variants[variant].boxShadow || ''; }}
    >
      {loading && <span style={spinnerStyle} />}
      {!loading && iconLeft && <span style={{ display:'flex', alignItems:'center' }}>{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span style={{ display:'flex', alignItems:'center' }}>{iconRight}</span>}
    </button>
  );
}
