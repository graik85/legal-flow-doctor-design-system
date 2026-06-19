import React from 'react';

/**
 * StatusPill — prominent case/matter status display with icon dot.
 * More visual than Badge; used in case headers and list rows.
 */
export function StatusPill({ status = 'active', label, size = 'md' }) {
  const statuses = {
    active:   { label: 'Active',      bg: 'var(--status-active-bg)',   fg: 'var(--status-active-fg)',  dot: '#22a35a' },
    pending:  { label: 'Pending',     bg: 'var(--status-pending-bg)',  fg: 'var(--status-pending-fg)', dot: '#d97706' },
    review:   { label: 'In Review',   bg: 'var(--status-review-bg)',   fg: 'var(--status-review-fg)',  dot: '#3b82f6' },
    closed:   { label: 'Closed',      bg: 'var(--status-closed-bg)',   fg: 'var(--status-closed-fg)',  dot: '#737b8c' },
    urgent:   { label: 'Urgent',      bg: 'var(--status-urgent-bg)',   fg: 'var(--status-urgent-fg)',  dot: '#dc2626' },
    drafting: { label: 'Drafting',    bg: 'var(--color-navy-100)',     fg: 'var(--color-navy-800)',    dot: '#244876' },
    settled:  { label: 'Settled',     bg: 'var(--color-teal-100)',     fg: 'var(--color-teal-800)',    dot: '#14867A' },
  };

  const s = statuses[status] || statuses.active;
  const displayLabel = label || s.label;

  const sizes = {
    sm: { fontSize: 'var(--text-xs)', padding: '3px 9px', dotSize: '6px', gap: '5px' },
    md: { fontSize: 'var(--text-sm)', padding: '4px 12px', dotSize: '7px', gap: '6px' },
    lg: { fontSize: 'var(--text-base)', padding: '6px 14px', dotSize: '8px', gap: '7px' },
  };

  const sz = sizes[size];

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: sz.gap,
      padding: sz.padding,
      borderRadius: 'var(--radius-full)',
      backgroundColor: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: sz.fontSize,
      fontWeight: 'var(--weight-semibold)',
    }}>
      <span style={{
        width: sz.dotSize,
        height: sz.dotSize,
        borderRadius: '50%',
        backgroundColor: s.dot,
        flexShrink: 0,
        animation: status === 'active' ? 'lfd-pulse 2s infinite' : undefined,
      }} />
      {displayLabel}
    </span>
  );
}
