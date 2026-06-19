import React from 'react';

/**
 * Tag — compact label for categorizing matters, document types, practice areas.
 */
export function Tag({
  children,
  color = 'default',
  removable = false,
  onRemove,
  size = 'md',
  style: extraStyle,
}) {
  const [hovered, setHovered] = React.useState(false);

  const sizes = {
    sm: { fontSize: '11px', padding: '1px 7px', gap: '4px' },
    md: { fontSize: 'var(--text-xs)', padding: '2px 9px', gap: '5px' },
    lg: { fontSize: 'var(--text-sm)', padding: '3px 11px', gap: '5px' },
  };

  const colors = {
    default:     { bg: 'var(--color-gray-100)',   fg: 'var(--color-gray-700)',   border: 'var(--color-gray-200)' },
    teal:        { bg: 'var(--color-teal-100)',   fg: 'var(--color-teal-800)',   border: 'var(--color-teal-200)' },
    navy:        { bg: 'var(--color-navy-100)',   fg: 'var(--color-navy-800)',   border: 'var(--color-navy-200)' },
    gold:        { bg: 'var(--color-gold-100)',   fg: 'var(--color-gold-700)',   border: 'var(--color-gold-200)' },
    green:       { bg: 'var(--color-success-100)',fg: 'var(--color-success-700)',border: 'var(--color-success-200)' },
    amber:       { bg: 'var(--color-warning-100)',fg: 'var(--color-warning-700)',border: 'var(--color-warning-200)' },
    red:         { bg: 'var(--color-danger-100)', fg: 'var(--color-danger-700)', border: 'var(--color-danger-200)' },
    blue:        { bg: 'var(--color-info-100)',   fg: 'var(--color-info-600)',   border: 'var(--color-info-200)' },
  };

  const c = colors[color] || colors.default;

  const tagStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    ...sizes[size],
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-medium)',
    borderRadius: 'var(--radius-tag)',
    border: `1px solid ${c.border}`,
    backgroundColor: c.bg,
    color: c.fg,
    lineHeight: 1.4,
    userSelect: 'none',
    ...extraStyle,
  };

  const removeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: hovered ? 0.8 : 0.5,
    transition: 'opacity 120ms',
    marginLeft: '2px',
  };

  return (
    <span
      style={tagStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {removable && (
        <span style={removeStyle} onClick={e => { e.stopPropagation(); onRemove && onRemove(); }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      )}
    </span>
  );
}
