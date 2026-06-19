import React from 'react';

/**
 * Badge — compact status indicator for case states, counts, and labels.
 */
export function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children,
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    borderRadius: 'var(--radius-badge)',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
  };

  const sizes = {
    sm: { fontSize: '10px', padding: '2px 7px', letterSpacing: '0.03em' },
    md: { fontSize: 'var(--text-xs)', padding: '3px 9px', letterSpacing: '0.02em' },
    lg: { fontSize: 'var(--text-sm)', padding: '4px 12px' },
  };

  const variants = {
    default:     { backgroundColor: 'var(--color-gray-100)',    color: 'var(--color-gray-700)',    borderColor: 'var(--color-gray-200)' },
    active:      { backgroundColor: 'var(--status-active-bg)',  color: 'var(--status-active-fg)',  borderColor: 'var(--status-active-ring)' },
    pending:     { backgroundColor: 'var(--status-pending-bg)', color: 'var(--status-pending-fg)', borderColor: 'var(--status-pending-ring)' },
    closed:      { backgroundColor: 'var(--status-closed-bg)',  color: 'var(--status-closed-fg)',  borderColor: 'var(--status-closed-ring)' },
    review:      { backgroundColor: 'var(--status-review-bg)',  color: 'var(--status-review-fg)',  borderColor: 'var(--status-review-ring)' },
    urgent:      { backgroundColor: 'var(--status-urgent-bg)',  color: 'var(--status-urgent-fg)',  borderColor: 'var(--status-urgent-ring)' },
    teal:        { backgroundColor: 'var(--color-teal-100)',    color: 'var(--color-teal-800)',    borderColor: 'var(--color-teal-300)' },
    navy:        { backgroundColor: 'var(--color-navy-900)',    color: 'var(--color-white)',       borderColor: 'var(--color-navy-900)' },
    gold:        { backgroundColor: 'var(--color-gold-100)',    color: 'var(--color-gold-700)',    borderColor: 'var(--color-gold-400)' },
  };

  const dotColors = {
    default: '#9399a6', active: '#22a35a', pending: '#d97706',
    closed: '#737b8c', review: '#3b82f6', urgent: '#dc2626',
    teal: '#14867A', navy: '#ffffff', gold: '#c9943a',
  };

  const style = { ...base, ...sizes[size], ...variants[variant] };

  return (
    <span style={style}>
      {dot && (
        <span style={{
          width: size === 'sm' ? '5px' : '6px',
          height: size === 'sm' ? '5px' : '6px',
          borderRadius: '50%',
          backgroundColor: dotColors[variant] || '#9399a6',
          flexShrink: 0,
        }} />
      )}
      {children}
    </span>
  );
}
