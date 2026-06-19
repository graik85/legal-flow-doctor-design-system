import React from 'react';

/**
 * Avatar — user / contact representation with image or initials fallback.
 */
export function Avatar({
  name,
  src,
  size = 'md',
  variant = 'default',
  status,
  style: extraStyle,
}) {
  const sizes = {
    xs:  { wh: '24px', font: '10px' },
    sm:  { wh: '32px', font: '12px' },
    md:  { wh: '40px', font: '14px' },
    lg:  { wh: '48px', font: '16px' },
    xl:  { wh: '64px', font: '20px' },
    '2xl': { wh: '80px', font: '26px' },
  };

  const palettes = [
    { bg: 'var(--color-teal-100)',  fg: 'var(--color-teal-800)'  },
    { bg: 'var(--color-navy-100)',  fg: 'var(--color-navy-800)'  },
    { bg: 'var(--color-gold-100)',  fg: 'var(--color-gold-700)'  },
    { bg: 'var(--color-success-100)', fg: 'var(--color-success-700)' },
    { bg: 'var(--color-info-100)',  fg: 'var(--color-info-600)'  },
  ];

  function getInitials(str) {
    if (!str) return '?';
    const words = str.trim().split(/\s+/);
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  function getPaletteIndex(str) {
    if (!str) return 0;
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return Math.abs(hash) % palettes.length;
  }

  const { wh, font } = sizes[size] || sizes.md;
  const initials = getInitials(name);
  const palette = palettes[getPaletteIndex(name)];

  const statusColors = {
    online:  '#22a35a',
    away:    '#d97706',
    busy:    '#dc2626',
    offline: '#737b8c',
  };

  const statusSize = parseInt(wh) > 40 ? '12px' : '9px';
  const statusOffset = parseInt(wh) > 40 ? '2px' : '1px';

  const baseStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: wh,
    height: wh,
    borderRadius: '50%',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: font,
    overflow: src ? 'hidden' : 'visible',
    flexShrink: 0,
    backgroundColor: src ? 'transparent' : palette.bg,
    color: palette.fg,
    border: variant === 'outline' ? '2px solid var(--border-default)' : undefined,
    ...extraStyle,
  };

  return (
    <span style={baseStyle}>
      {src
        ? <img src={src} alt={name || 'avatar'} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
        : <span>{initials}</span>
      }
      {status && (
        <span style={{
          position: 'absolute',
          bottom: statusOffset,
          right: statusOffset,
          width: statusSize,
          height: statusSize,
          borderRadius: '50%',
          backgroundColor: statusColors[status] || statusColors.offline,
          border: '2px solid white',
        }} />
      )}
    </span>
  );
}
