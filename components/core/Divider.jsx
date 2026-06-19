import React from 'react';

/**
 * Divider — horizontal or vertical separator with optional label.
 */
export function Divider({ orientation = 'horizontal', label, spacing = 'md', style: extraStyle }) {
  const spacings = { sm: 'var(--space-3)', md: 'var(--space-5)', lg: 'var(--space-8)' };
  const margin = spacings[spacing];

  if (orientation === 'vertical') {
    return (
      <span style={{
        display: 'inline-block',
        width: '1px',
        height: '1em',
        backgroundColor: 'var(--border-default)',
        margin: `0 ${margin}`,
        ...extraStyle,
      }} />
    );
  }

  if (label) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        margin: `${margin} 0`,
        ...extraStyle,
      }}>
        <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-default)' }} />
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-xs)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--fg-subtle)',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>{label}</span>
        <span style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-default)' }} />
      </div>
    );
  }

  return (
    <hr style={{
      border: 'none',
      borderTop: '1px solid var(--border-default)',
      margin: `${margin} 0`,
      ...extraStyle,
    }} />
  );
}
