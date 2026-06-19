import React from 'react';

/**
 * Card — surface container. Supports optional header, footer,
 * hover lift, and accent-left highlight.
 */
export function Card({
  variant = 'default',
  padding = 'md',
  hover = false,
  accent = null,
  header = null,
  footer = null,
  onClick,
  style: extraStyle,
  children,
}) {
  const [hovered, setHovered] = React.useState(false);

  const paddings = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-card-y) var(--space-card-x)',
    lg: 'var(--space-8) var(--space-8)',
  };

  const variants = {
    default: {
      backgroundColor: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      boxShadow: hovered && hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
    },
    inset: {
      backgroundColor: 'var(--surface-inset)',
      border: '1px solid var(--border-muted)',
      boxShadow: 'none',
    },
    emphasis: {
      backgroundColor: 'var(--color-navy-900)',
      border: '1px solid var(--color-navy-800)',
      boxShadow: 'var(--shadow-lg)',
    },
    accent: {
      backgroundColor: 'var(--surface-accent)',
      border: '1px solid var(--border-accent)',
      boxShadow: 'var(--shadow-xs)',
    },
    gold: {
      backgroundColor: 'var(--color-gold-50)',
      border: '1px solid var(--border-gold)',
      boxShadow: 'var(--shadow-xs)',
    },
  };

  const accentBorder = {
    teal: 'var(--color-teal-500)',
    gold: 'var(--color-gold-500)',
    danger: 'var(--color-danger-500)',
    navy: 'var(--color-navy-700)',
  };

  const baseStyle = {
    borderRadius: 'var(--radius-card)',
    overflow: 'hidden',
    transition: 'var(--transition-card)',
    cursor: onClick ? 'pointer' : 'default',
    transform: hovered && hover ? 'translateY(-1px)' : 'none',
    position: 'relative',
    ...variants[variant],
    ...(accent ? { borderLeft: `3px solid ${accentBorder[accent] || accent}` } : {}),
    ...extraStyle,
  };

  const bodyStyle = {
    padding: paddings[padding],
  };

  const headerStyle = {
    padding: 'var(--space-4) var(--space-card-x)',
    borderBottom: '1px solid var(--border-muted)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: 'var(--text-sm)',
    color: variant === 'emphasis' ? 'var(--color-white)' : 'var(--fg-default)',
    backgroundColor: variant === 'emphasis' ? 'rgba(255,255,255,0.04)' : undefined,
  };

  const footerStyle = {
    padding: 'var(--space-3) var(--space-card-x)',
    borderTop: '1px solid var(--border-muted)',
    backgroundColor: variant === 'inset' ? undefined : 'var(--surface-inset)',
  };

  return (
    <div
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {header && <div style={headerStyle}>{header}</div>}
      <div style={bodyStyle}>{children}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
}
