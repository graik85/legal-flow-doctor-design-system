/* @ds-bundle: {"format":3,"namespace":"LegalFlowDoctorDesignSystem_fa7d52","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"17e629a0624f","components/core/Badge.jsx":"0d5c067c0a2b","components/core/Button.jsx":"cfe9d7ab927a","components/core/Card.jsx":"4d29093a51c1","components/core/Divider.jsx":"94ce0f091e96","components/core/Input.jsx":"20068ad424c6","components/core/Select.jsx":"3c442c3d773c","components/core/StatusPill.jsx":"fddcfe2fccb7","components/core/Tag.jsx":"744339f03095","ui_kits/app/Agenda.jsx":"f30152563e33","ui_kits/app/App.jsx":"4b94d3e03e6f","ui_kits/app/CaseDetail.jsx":"8be753233dfb","ui_kits/app/CaseList.jsx":"5d4b4735b400","ui_kits/app/Dashboard.jsx":"3f8420d794a8","ui_kits/app/Jurisprudencia.jsx":"c961fb8fd49e","ui_kits/app/Sidebar.jsx":"c9a04e89849d","ui_kits/app/data.js":"8a638bada666"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LegalFlowDoctorDesignSystem_fa7d52 = window.LegalFlowDoctorDesignSystem_fa7d52 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Avatar — user / contact representation with image or initials fallback.
 */
function Avatar({
  name,
  src,
  size = 'md',
  variant = 'default',
  status,
  style: extraStyle
}) {
  const sizes = {
    xs: {
      wh: '24px',
      font: '10px'
    },
    sm: {
      wh: '32px',
      font: '12px'
    },
    md: {
      wh: '40px',
      font: '14px'
    },
    lg: {
      wh: '48px',
      font: '16px'
    },
    xl: {
      wh: '64px',
      font: '20px'
    },
    '2xl': {
      wh: '80px',
      font: '26px'
    }
  };
  const palettes = [{
    bg: 'var(--color-teal-100)',
    fg: 'var(--color-teal-800)'
  }, {
    bg: 'var(--color-navy-100)',
    fg: 'var(--color-navy-800)'
  }, {
    bg: 'var(--color-gold-100)',
    fg: 'var(--color-gold-700)'
  }, {
    bg: 'var(--color-success-100)',
    fg: 'var(--color-success-700)'
  }, {
    bg: 'var(--color-info-100)',
    fg: 'var(--color-info-600)'
  }];
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
  const {
    wh,
    font
  } = sizes[size] || sizes.md;
  const initials = getInitials(name);
  const palette = palettes[getPaletteIndex(name)];
  const statusColors = {
    online: '#22a35a',
    away: '#d97706',
    busy: '#dc2626',
    offline: '#737b8c'
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
    ...extraStyle
  };
  return /*#__PURE__*/React.createElement("span", {
    style: baseStyle
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || 'avatar',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%'
    }
  }) : /*#__PURE__*/React.createElement("span", null, initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: statusOffset,
      right: statusOffset,
      width: statusSize,
      height: statusSize,
      borderRadius: '50%',
      backgroundColor: statusColors[status] || statusColors.offline,
      border: '2px solid white'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — compact status indicator for case states, counts, and labels.
 */
function Badge({
  variant = 'default',
  size = 'md',
  dot = false,
  children
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
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      fontSize: '10px',
      padding: '2px 7px',
      letterSpacing: '0.03em'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '3px 9px',
      letterSpacing: '0.02em'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '4px 12px'
    }
  };
  const variants = {
    default: {
      backgroundColor: 'var(--color-gray-100)',
      color: 'var(--color-gray-700)',
      borderColor: 'var(--color-gray-200)'
    },
    active: {
      backgroundColor: 'var(--status-active-bg)',
      color: 'var(--status-active-fg)',
      borderColor: 'var(--status-active-ring)'
    },
    pending: {
      backgroundColor: 'var(--status-pending-bg)',
      color: 'var(--status-pending-fg)',
      borderColor: 'var(--status-pending-ring)'
    },
    closed: {
      backgroundColor: 'var(--status-closed-bg)',
      color: 'var(--status-closed-fg)',
      borderColor: 'var(--status-closed-ring)'
    },
    review: {
      backgroundColor: 'var(--status-review-bg)',
      color: 'var(--status-review-fg)',
      borderColor: 'var(--status-review-ring)'
    },
    urgent: {
      backgroundColor: 'var(--status-urgent-bg)',
      color: 'var(--status-urgent-fg)',
      borderColor: 'var(--status-urgent-ring)'
    },
    teal: {
      backgroundColor: 'var(--color-teal-100)',
      color: 'var(--color-teal-800)',
      borderColor: 'var(--color-teal-300)'
    },
    navy: {
      backgroundColor: 'var(--color-navy-900)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-navy-900)'
    },
    gold: {
      backgroundColor: 'var(--color-gold-100)',
      color: 'var(--color-gold-700)',
      borderColor: 'var(--color-gold-400)'
    }
  };
  const dotColors = {
    default: '#9399a6',
    active: '#22a35a',
    pending: '#d97706',
    closed: '#737b8c',
    review: '#3b82f6',
    urgent: '#dc2626',
    teal: '#14867A',
    navy: '#ffffff',
    gold: '#c9943a'
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: size === 'sm' ? '5px' : '6px',
      height: size === 'sm' ? '5px' : '6px',
      borderRadius: '50%',
      backgroundColor: dotColors[variant] || '#9399a6',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Button — primary interactive element for Legal Flow Doctor.
 * Supports primary, secondary, ghost, and destructive variants,
 * three sizes, disabled state, and optional leading/trailing icons.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  onClick,
  type = 'button',
  children
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
    position: 'relative'
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      padding: 'var(--space-1-5) var(--space-3)',
      height: '32px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: 'var(--space-2-5) var(--space-4)',
      height: '38px'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: 'var(--space-3) var(--space-6)',
      height: '44px'
    }
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--color-teal-600)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-teal-600)',
      boxShadow: 'var(--shadow-button-primary)'
    },
    secondary: {
      backgroundColor: 'var(--bg-default)',
      color: 'var(--color-navy-900)',
      borderColor: 'var(--border-strong)',
      boxShadow: 'var(--shadow-button)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-navy-900)',
      borderColor: 'transparent'
    },
    destructive: {
      backgroundColor: 'var(--color-danger-500)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-danger-500)',
      boxShadow: '0 2px 8px -1px rgba(220,38,38,0.30)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-teal-700)',
      borderColor: 'var(--color-teal-400)'
    },
    gold: {
      backgroundColor: 'var(--color-gold-500)',
      color: 'var(--color-white)',
      borderColor: 'var(--color-gold-500)',
      boxShadow: '0 2px 8px -1px rgba(201,148,58,0.35)'
    }
  };
  const [hovered, setHovered] = React.useState(false);
  const hoverStyles = {
    primary: {
      backgroundColor: 'var(--color-teal-700)',
      borderColor: 'var(--color-teal-700)'
    },
    secondary: {
      backgroundColor: 'var(--color-gray-50)',
      borderColor: 'var(--color-gray-400)'
    },
    ghost: {
      backgroundColor: 'var(--color-gray-100)',
      borderColor: 'transparent'
    },
    destructive: {
      backgroundColor: 'var(--color-danger-700)',
      borderColor: 'var(--color-danger-700)'
    },
    outline: {
      backgroundColor: 'var(--color-teal-50)',
      borderColor: 'var(--color-teal-500)'
    },
    gold: {
      backgroundColor: 'var(--color-gold-600)',
      borderColor: 'var(--color-gold-600)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hovered && !disabled && !loading ? hoverStyles[variant] : {})
  };
  const spinnerStyle = {
    width: size === 'sm' ? '12px' : '14px',
    height: size === 'sm' ? '12px' : '14px',
    border: '2px solid rgba(255,255,255,0.35)',
    borderTopColor: 'currentColor',
    borderRadius: '50%',
    animation: 'lfd-spin 0.7s linear infinite'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: e => {
      e.currentTarget.style.boxShadow = 'var(--focus-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = variants[variant].boxShadow || '';
    }
  }, loading && /*#__PURE__*/React.createElement("span", {
    style: spinnerStyle
  }), !loading && iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft), children, !loading && iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Card — surface container. Supports optional header, footer,
 * hover lift, and accent-left highlight.
 */
function Card({
  variant = 'default',
  padding = 'md',
  hover = false,
  accent = null,
  header = null,
  footer = null,
  onClick,
  style: extraStyle,
  children
}) {
  const [hovered, setHovered] = React.useState(false);
  const paddings = {
    none: '0',
    sm: 'var(--space-4)',
    md: 'var(--space-card-y) var(--space-card-x)',
    lg: 'var(--space-8) var(--space-8)'
  };
  const variants = {
    default: {
      backgroundColor: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      boxShadow: hovered && hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)'
    },
    inset: {
      backgroundColor: 'var(--surface-inset)',
      border: '1px solid var(--border-muted)',
      boxShadow: 'none'
    },
    emphasis: {
      backgroundColor: 'var(--color-navy-900)',
      border: '1px solid var(--color-navy-800)',
      boxShadow: 'var(--shadow-lg)'
    },
    accent: {
      backgroundColor: 'var(--surface-accent)',
      border: '1px solid var(--border-accent)',
      boxShadow: 'var(--shadow-xs)'
    },
    gold: {
      backgroundColor: 'var(--color-gold-50)',
      border: '1px solid var(--border-gold)',
      boxShadow: 'var(--shadow-xs)'
    }
  };
  const accentBorder = {
    teal: 'var(--color-teal-500)',
    gold: 'var(--color-gold-500)',
    danger: 'var(--color-danger-500)',
    navy: 'var(--color-navy-700)'
  };
  const baseStyle = {
    borderRadius: 'var(--radius-card)',
    overflow: 'hidden',
    transition: 'var(--transition-card)',
    cursor: onClick ? 'pointer' : 'default',
    transform: hovered && hover ? 'translateY(-1px)' : 'none',
    position: 'relative',
    ...variants[variant],
    ...(accent ? {
      borderLeft: `3px solid ${accentBorder[accent] || accent}`
    } : {}),
    ...extraStyle
  };
  const bodyStyle = {
    padding: paddings[padding]
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
    backgroundColor: variant === 'emphasis' ? 'rgba(255,255,255,0.04)' : undefined
  };
  const footerStyle = {
    padding: 'var(--space-3) var(--space-card-x)',
    borderTop: '1px solid var(--border-muted)',
    backgroundColor: variant === 'inset' ? undefined : 'var(--surface-inset)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: baseStyle,
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, header && /*#__PURE__*/React.createElement("div", {
    style: headerStyle
  }, header), /*#__PURE__*/React.createElement("div", {
    style: bodyStyle
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: footerStyle
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * Divider — horizontal or vertical separator with optional label.
 */
function Divider({
  orientation = 'horizontal',
  label,
  spacing = 'md',
  style: extraStyle
}) {
  const spacings = {
    sm: 'var(--space-3)',
    md: 'var(--space-5)',
    lg: 'var(--space-8)'
  };
  const margin = spacings[spacing];
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: '1px',
        height: '1em',
        backgroundColor: 'var(--border-default)',
        margin: `0 ${margin}`,
        ...extraStyle
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        margin: `${margin} 0`,
        ...extraStyle
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        backgroundColor: 'var(--border-default)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--fg-subtle)',
        letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        backgroundColor: 'var(--border-default)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--border-default)',
      margin: `${margin} 0`,
      ...extraStyle
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/**
 * Input — text field with label, helper text, and validation states.
 */
function Input({
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
  style: extraStyle
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || `lfd-input-${Math.random().toString(36).slice(2, 7)}`;
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      padding: '6px 10px',
      height: '32px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '8px 12px',
      height: '38px'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '10px 14px',
      height: '44px'
    }
  };
  const resolvedState = errorText ? 'error' : state;
  const borderColor = {
    default: focused ? 'var(--color-teal-500)' : 'var(--border-strong)',
    error: focused ? 'var(--color-danger-500)' : 'var(--color-danger-400)',
    success: focused ? 'var(--color-success-500)' : 'var(--color-success-400)',
    disabled: 'var(--border-muted)'
  };
  const shadowStyle = focused ? resolvedState === 'error' ? 'var(--focus-ring-danger)' : 'var(--focus-ring)' : 'none';
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-1-5)',
    ...extraStyle
  };
  const labelStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    color: disabled ? 'var(--fg-disabled)' : 'var(--fg-default)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-1)'
  };
  const inputWrapStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 'var(--radius-input)',
    border: `1.5px solid ${borderColor[resolvedState] || borderColor.default}`,
    backgroundColor: disabled ? 'var(--bg-muted)' : 'var(--bg-default)',
    boxShadow: shadowStyle,
    transition: 'var(--transition-input)',
    overflow: 'hidden'
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
    boxSizing: 'border-box'
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
    height: '100%'
  };
  const helperStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    color: resolvedState === 'error' ? 'var(--color-danger-600)' : 'var(--fg-muted)',
    lineHeight: 'var(--leading-normal)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger-500)'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: inputWrapStyle
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: affixStyle
  }, prefix), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    readOnly: readOnly,
    autoComplete: autoComplete,
    required: required,
    style: inputStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      ...affixStyle,
      borderRight: undefined
    }
  }, suffix)), (helperText || errorText) && /*#__PURE__*/React.createElement("p", {
    style: helperStyle
  }, errorText || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
/**
 * Select — styled dropdown for filtering, role selection, and case categorization.
 */
function Select({
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
  style: extraStyle
}) {
  const [focused, setFocused] = React.useState(false);
  const selectId = id || `lfd-select-${Math.random().toString(36).slice(2, 7)}`;
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      padding: '5px 30px 5px 10px',
      height: '32px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '7px 34px 7px 12px',
      height: '38px'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '9px 38px 9px 14px',
      height: '44px'
    }
  };
  const resolvedState = errorText ? 'error' : 'default';
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-1-5)',
    ...extraStyle
  };
  const labelStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    color: disabled ? 'var(--fg-disabled)' : 'var(--fg-default)',
    display: 'flex',
    gap: 'var(--space-1)',
    alignItems: 'center'
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
    border: `1.5px solid ${focused ? resolvedState === 'error' ? 'var(--color-danger-500)' : 'var(--color-teal-500)' : 'var(--border-strong)'}`,
    borderRadius: 'var(--radius-input)',
    boxShadow: focused ? resolvedState === 'error' ? 'var(--focus-ring-danger)' : 'var(--focus-ring)' : 'none',
    outline: 'none',
    transition: 'var(--transition-input)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235a6170' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center'
  };
  const helperStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-xs)',
    color: resolvedState === 'error' ? 'var(--color-danger-600)' : 'var(--fg-muted)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-danger-500)'
    }
  }, "*")), /*#__PURE__*/React.createElement("select", {
    id: selectId,
    name: name,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    required: required,
    style: selectStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(opt => typeof opt === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: opt,
    value: opt
  }, opt) : /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value,
    disabled: opt.disabled
  }, opt.label))), (helperText || errorText) && /*#__PURE__*/React.createElement("p", {
    style: helperStyle
  }, errorText || helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
/**
 * StatusPill — prominent case/matter status display with icon dot.
 * More visual than Badge; used in case headers and list rows.
 */
function StatusPill({
  status = 'active',
  label,
  size = 'md'
}) {
  const statuses = {
    active: {
      label: 'Active',
      bg: 'var(--status-active-bg)',
      fg: 'var(--status-active-fg)',
      dot: '#22a35a'
    },
    pending: {
      label: 'Pending',
      bg: 'var(--status-pending-bg)',
      fg: 'var(--status-pending-fg)',
      dot: '#d97706'
    },
    review: {
      label: 'In Review',
      bg: 'var(--status-review-bg)',
      fg: 'var(--status-review-fg)',
      dot: '#3b82f6'
    },
    closed: {
      label: 'Closed',
      bg: 'var(--status-closed-bg)',
      fg: 'var(--status-closed-fg)',
      dot: '#737b8c'
    },
    urgent: {
      label: 'Urgent',
      bg: 'var(--status-urgent-bg)',
      fg: 'var(--status-urgent-fg)',
      dot: '#dc2626'
    },
    drafting: {
      label: 'Drafting',
      bg: 'var(--color-navy-100)',
      fg: 'var(--color-navy-800)',
      dot: '#244876'
    },
    settled: {
      label: 'Settled',
      bg: 'var(--color-teal-100)',
      fg: 'var(--color-teal-800)',
      dot: '#14867A'
    }
  };
  const s = statuses[status] || statuses.active;
  const displayLabel = label || s.label;
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '3px 9px',
      dotSize: '6px',
      gap: '5px'
    },
    md: {
      fontSize: 'var(--text-sm)',
      padding: '4px 12px',
      dotSize: '7px',
      gap: '6px'
    },
    lg: {
      fontSize: 'var(--text-base)',
      padding: '6px 14px',
      dotSize: '8px',
      gap: '7px'
    }
  };
  const sz = sizes[size];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sz.gap,
      padding: sz.padding,
      borderRadius: 'var(--radius-full)',
      backgroundColor: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: sz.fontSize,
      fontWeight: 'var(--weight-semibold)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: sz.dotSize,
      height: sz.dotSize,
      borderRadius: '50%',
      backgroundColor: s.dot,
      flexShrink: 0,
      animation: status === 'active' ? 'lfd-pulse 2s infinite' : undefined
    }
  }), displayLabel);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — compact label for categorizing matters, document types, practice areas.
 */
function Tag({
  children,
  color = 'default',
  removable = false,
  onRemove,
  size = 'md',
  style: extraStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: '1px 7px',
      gap: '4px'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '2px 9px',
      gap: '5px'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '3px 11px',
      gap: '5px'
    }
  };
  const colors = {
    default: {
      bg: 'var(--color-gray-100)',
      fg: 'var(--color-gray-700)',
      border: 'var(--color-gray-200)'
    },
    teal: {
      bg: 'var(--color-teal-100)',
      fg: 'var(--color-teal-800)',
      border: 'var(--color-teal-200)'
    },
    navy: {
      bg: 'var(--color-navy-100)',
      fg: 'var(--color-navy-800)',
      border: 'var(--color-navy-200)'
    },
    gold: {
      bg: 'var(--color-gold-100)',
      fg: 'var(--color-gold-700)',
      border: 'var(--color-gold-200)'
    },
    green: {
      bg: 'var(--color-success-100)',
      fg: 'var(--color-success-700)',
      border: 'var(--color-success-200)'
    },
    amber: {
      bg: 'var(--color-warning-100)',
      fg: 'var(--color-warning-700)',
      border: 'var(--color-warning-200)'
    },
    red: {
      bg: 'var(--color-danger-100)',
      fg: 'var(--color-danger-700)',
      border: 'var(--color-danger-200)'
    },
    blue: {
      bg: 'var(--color-info-100)',
      fg: 'var(--color-info-600)',
      border: 'var(--color-info-200)'
    }
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
    ...extraStyle
  };
  const removeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: hovered ? 0.8 : 0.5,
    transition: 'opacity 120ms',
    marginLeft: '2px'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: tagStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, children, removable && /*#__PURE__*/React.createElement("span", {
    style: removeStyle,
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 2l6 6M8 2l-6 6",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Agenda.jsx
try { (() => {
// Legal Flow Doctor — Agenda & Vencimientos
// Exports: Agenda

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAYS_SHORT = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
function Agenda({
  onNavigate
}) {
  const {
    vencimientos,
    todayEvents,
    cases
  } = window.LFDData;
  const [currentMonth, setCurrentMonth] = React.useState(5); // June = 5
  const [currentYear] = React.useState(2026);
  const [activeView, setActiveView] = React.useState('mes');
  const [selectedDay, setSelectedDay] = React.useState(19);

  // Build calendar grid for current month
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrev = new Date(currentYear, currentMonth, 0).getDate();
  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) cells.push({
    day: daysInPrev - i,
    current: false
  });
  for (let d = 1; d <= daysInMonth; d++) cells.push({
    day: d,
    current: true
  });
  while (cells.length % 7 !== 0) cells.push({
    day: cells.length - daysInMonth - firstDay + 1,
    current: false
  });

  // Map vencimientos to dates
  const vByDate = {};
  vencimientos.forEach(v => {
    const d = parseInt(v.date.split('-')[2]);
    const m = parseInt(v.date.split('-')[1]) - 1;
    if (m === currentMonth) {
      if (!vByDate[d]) vByDate[d] = [];
      vByDate[d].push(v);
    }
  });
  const selectedDateStr = `2026-${String(currentMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
  const selectedVenc = vencimientos.filter(v => v.date === selectedDateStr);
  const isToday = d => d === 19 && currentMonth === 5 && currentYear === 2026;
  const priorityColor = {
    high: '#dc2626',
    normal: '#244876'
  };
  const priorityBg = {
    high: '#fee2e2',
    normal: '#dfe8f2'
  };
  const priorityLabel = {
    high: 'Urgente',
    normal: 'Normal'
  };
  const statusColors = {
    active: {
      bg: '#dcfaec',
      fg: '#166534',
      dot: '#22a35a',
      label: 'Activo'
    },
    urgent: {
      bg: '#fee2e2',
      fg: '#991b1b',
      dot: '#dc2626',
      label: 'Urgente'
    },
    pending: {
      bg: '#fef9c3',
      fg: '#974d00',
      dot: '#d97706',
      label: 'Pendiente'
    },
    review: {
      bg: '#dbeafe',
      fg: '#1d4ed8',
      dot: '#3b82f6',
      label: 'En revisión'
    },
    closed: {
      bg: '#eceff4',
      fg: '#5a6170',
      dot: '#737b8c',
      label: 'Cerrado'
    },
    settled: {
      bg: '#d0f4f0',
      fg: '#106b61',
      dot: '#14867a',
      label: 'Resuelto'
    }
  };
  const upcoming = vencimientos.filter(v => !v.done && v.date >= '2026-06-19').sort((a, b) => a.date.localeCompare(b.date)).slice(0, 8);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderBottom: '1px solid var(--border-muted)',
      padding: '14px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '18px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-default)'
    }
  }, "Agenda"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, vencimientos.filter(v => !v.done && v.date >= '2026-06-19').length, " vencimientos pr\xF3ximos \xB7 ", todayEvents.length, " eventos hoy")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }
  }, ['mes', 'lista'].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setActiveView(v),
    style: {
      padding: '5px 14px',
      borderRadius: '5px',
      border: '1.5px solid ' + (activeView === v ? 'var(--color-teal-500)' : 'var(--border-default)'),
      background: activeView === v ? 'var(--color-teal-50)' : 'white',
      color: activeView === v ? 'var(--color-teal-700)' : 'var(--fg-muted)',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, v === 'mes' ? 'Vista mes' : 'Lista')), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '7px 14px',
      borderRadius: '6px',
      border: 'none',
      background: 'var(--color-teal-600)',
      color: 'white',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })), "Nuevo vencimiento"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 28px',
      display: 'flex',
      gap: '16px'
    }
  }, activeView === 'mes' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: '8px',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentMonth(m => Math.max(0, m - 1)),
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '5px',
      border: '1px solid var(--border-default)',
      background: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-default)'
    }
  }, MONTHS[currentMonth], " ", currentYear), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCurrentMonth(m => Math.min(11, m + 1)),
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '5px',
      border: '1px solid var(--border-default)',
      background: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--fg-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      padding: '8px 12px 4px'
    }
  }, DAYS_SHORT.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: 'center',
      fontSize: '10px',
      fontWeight: 700,
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '4px 0'
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      padding: '0 12px 12px',
      gap: '2px'
    }
  }, cells.map((cell, i) => {
    const hasEvents = cell.current && vByDate[cell.day];
    const isSelected = cell.current && cell.day === selectedDay;
    const today = isToday(cell.day) && cell.current;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => cell.current && setSelectedDay(cell.day),
      style: {
        borderRadius: '7px',
        padding: '6px 4px',
        minHeight: '56px',
        cursor: cell.current ? 'pointer' : 'default',
        background: isSelected ? 'var(--color-teal-600)' : today ? 'var(--color-navy-900)' : 'transparent',
        transition: 'background 100ms',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        fontSize: '13px',
        fontWeight: today || isSelected ? 700 : 400,
        color: isSelected || today ? 'white' : cell.current ? 'var(--fg-default)' : 'var(--fg-subtle)',
        fontFamily: 'var(--font-sans)',
        marginBottom: '4px'
      }
    }, cell.day), hasEvents && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2px',
        justifyContent: 'center'
      }
    }, vByDate[cell.day].slice(0, 3).map((v, vi) => /*#__PURE__*/React.createElement("div", {
      key: vi,
      style: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: isSelected ? 'rgba(255,255,255,0.7)' : v.done ? 'var(--color-gray-300)' : v.priority === 'high' ? 'var(--color-danger-400)' : 'var(--color-teal-400)'
      }
    }))));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderBottom: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Hoy \u2014 ", selectedDay, " de ", MONTHS[currentMonth])), selectedVenc.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 18px',
      fontSize: '13px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Sin vencimientos este d\xEDa.") : selectedVenc.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.id,
    style: {
      padding: '12px 18px',
      borderBottom: i < selectedVenc.length - 1 ? '1px solid var(--border-muted)' : 'none',
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      marginTop: '4px',
      background: v.done ? 'var(--color-gray-300)' : v.priority === 'high' ? 'var(--color-danger-400)' : 'var(--color-teal-400)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: v.done ? 'var(--fg-subtle)' : 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      textDecoration: v.done ? 'line-through' : 'none'
    }
  }, v.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      marginTop: '2px'
    }
  }, v.court), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--color-teal-700)',
      marginTop: '3px'
    }
  }, v.caseId)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      padding: '2px 8px',
      borderRadius: '999px',
      background: v.done ? 'var(--color-gray-100)' : priorityBg[v.priority],
      color: v.done ? 'var(--fg-subtle)' : priorityColor[v.priority],
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'nowrap'
    }
  }, v.done ? 'Cumplido' : priorityLabel[v.priority]))), selectedDay === 19 && currentMonth === 5 && /*#__PURE__*/React.createElement(React.Fragment, null, todayEvents.map((ev, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 18px',
      borderTop: '1px solid var(--border-muted)',
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: ev.type === 'hearing' ? '#244876' : ev.type === 'deadline' ? '#dc2626' : '#14867a',
    strokeWidth: "2",
    style: {
      marginTop: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, ev.title), ev.court && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      marginTop: '2px'
    }
  }, ev.court)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      whiteSpace: 'nowrap'
    }
  }, ev.time)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '280px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderBottom: '1px solid var(--border-muted)',
      background: 'var(--color-navy-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'white',
      fontFamily: 'var(--font-sans)'
    }
  }, "Pr\xF3ximos vencimientos")), upcoming.map((v, i) => {
    const d = new Date(v.date + 'T12:00:00');
    const dStr = `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}`;
    const isUrgent = v.priority === 'high';
    return /*#__PURE__*/React.createElement("div", {
      key: v.id,
      style: {
        padding: '10px 16px',
        borderBottom: i < upcoming.length - 1 ? '1px solid var(--border-muted)' : 'none',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        textAlign: 'center',
        minWidth: '36px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '16px',
        fontWeight: 800,
        color: isUrgent ? 'var(--color-danger-500)' : 'var(--fg-default)',
        fontFamily: 'var(--font-sans)',
        lineHeight: 1
      }
    }, d.getDate()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '9px',
        fontWeight: 700,
        color: 'var(--fg-subtle)',
        fontFamily: 'var(--font-sans)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }
    }, MONTHS[d.getMonth()].slice(0, 3))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        fontWeight: 500,
        color: 'var(--fg-default)',
        fontFamily: 'var(--font-sans)',
        lineHeight: 1.3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, v.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--color-teal-700)',
        marginTop: '3px'
      }
    }, v.caseId)), isUrgent && /*#__PURE__*/React.createElement("span", {
      style: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: 'var(--color-danger-400)',
        flexShrink: 0,
        marginTop: '4px'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      padding: '14px 16px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      marginBottom: '10px'
    }
  }, "Estado PJN / MEV"), [['PJN', true], ['MEV', true], ['PBA', true], ['CABA', false]].map(([name, online]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5px 0',
      borderBottom: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontFamily: 'var(--font-mono)',
      color: 'var(--fg-default)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '11px',
      fontWeight: 600,
      color: online ? 'var(--color-success-600)' : 'var(--color-danger-600)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: online ? 'var(--color-success-400)' : 'var(--color-danger-400)'
    }
  }), online ? 'En línea' : 'Caído'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)',
      marginTop: '8px'
    }
  }, "\xDAltima sincronizaci\xF3n: hace 4 min")))), activeView === 'lista' && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg-subtle)'
    }
  }, ['Fecha', 'Vencimiento', 'Expediente', 'Tribunal', 'Prioridad', 'Estado'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: '9px 14px',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      borderBottom: '1px solid var(--border-default)',
      whiteSpace: 'nowrap'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, vencimientos.sort((a, b) => a.date.localeCompare(b.date)).map((v, i) => {
    const d = new Date(v.date + 'T12:00:00');
    const overdue = !v.done && v.date < '2026-06-19';
    return /*#__PURE__*/React.createElement("tr", {
      key: v.id,
      style: {
        background: i % 2 === 0 ? 'white' : 'var(--bg-subtle)',
        cursor: 'pointer'
      },
      onMouseEnter: e => e.currentTarget.style.background = 'var(--color-teal-50)',
      onMouseLeave: e => e.currentTarget.style.background = i % 2 === 0 ? 'white' : 'var(--bg-subtle)'
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: overdue ? 'var(--color-danger-600)' : 'var(--fg-default)',
        fontWeight: overdue ? 700 : 400
      }
    }, d.getDate(), " ", MONTHS[d.getMonth()].slice(0, 3), " ", d.getFullYear())), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        fontWeight: 500,
        color: v.done ? 'var(--fg-subtle)' : 'var(--fg-default)',
        fontFamily: 'var(--font-sans)',
        textDecoration: v.done ? 'line-through' : 'none'
      }
    }, v.title)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--color-teal-700)'
      }
    }, v.caseId)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        maxWidth: '180px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        display: 'block'
      }
    }, v.court)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        fontWeight: 600,
        padding: '2px 8px',
        borderRadius: '999px',
        background: overdue ? 'var(--color-danger-100)' : priorityBg[v.priority],
        color: overdue ? 'var(--color-danger-700)' : priorityColor[v.priority],
        fontFamily: 'var(--font-sans)'
      }
    }, overdue ? 'Vencido' : priorityLabel[v.priority])), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        fontWeight: 600,
        color: v.done ? 'var(--color-success-700)' : 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)'
      }
    }, v.done ? '✓ Cumplido' : 'Pendiente')));
  })))))));
}
Object.assign(window, {
  Agenda
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Agenda.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
// Legal Flow Doctor — App Shell
// Main app component, rendered last

function PlaceholderView({
  title,
  subtitle,
  features,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-subtle)',
      padding: '48px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '480px',
      width: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '72px',
      height: '72px',
      borderRadius: '16px',
      background: 'var(--color-navy-900)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-teal-300)',
      margin: '0 auto 20px'
    }
  }, icon), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 8px',
      fontSize: '22px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-default)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: '14px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.6
    }
  }, subtitle), features && features.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '10px',
      padding: '20px 24px',
      boxShadow: 'var(--shadow-sm)',
      textAlign: 'left',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--fg-muted)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-sans)',
      marginBottom: '12px'
    }
  }, "Features planificados"), features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '7px 0',
      borderBottom: i < features.length - 1 ? '1px solid var(--border-muted)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '18px',
      height: '18px',
      borderRadius: '50%',
      border: '2px dashed var(--color-teal-300)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '999px',
      background: 'var(--color-navy-100)',
      color: 'var(--color-navy-800)',
      fontSize: '12px',
      fontWeight: 600,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })), "En desarrollo \u2014 pr\xF3ximamente")));
}
function App() {
  const [view, setView] = React.useState('dashboard');
  const [selectedCase, setSelectedCase] = React.useState(null);
  const handleNavigate = v => {
    if (v !== 'case-detail') setSelectedCase(null);
    setView(v);
  };
  const handleSelectCase = id => {
    setSelectedCase(id);
    setView('case-detail');
  };
  const handleBack = () => {
    setSelectedCase(null);
    setView('cases');
  };
  const icon = d => /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
  const placeholders = {
    pruebas: {
      title: 'Gestión de Pruebas',
      subtitle: 'Control del ciclo de vida de cada prueba — testimonial, confesional, informativa y pericial — desde el ofrecimiento hasta la producción.',
      features: ['Prueba testimonial — testigos con estado del ciclo (ofrecida → admitida → notificada → producida)', 'Prueba confesional — absolución de posiciones con seguimiento', 'Prueba informativa — oficios a bancos, ANSES, AFIP, registros', 'Prueba pericial — médica, contable, ingeniería; análisis con IA integrado', 'Punteo de expediente — checklist de estado para avanzar de etapa', 'Sistema de semáforo: 🔴 vencimiento procesal · 🟡 compromiso · 🟢 tarea', 'Alertas automáticas con 90 / 30 / 15 / 7 días de anticipación'],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "3",
        width: "6",
        height: "4",
        rx: "1"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 12 2 2 4-4"
      }))
    },
    honorarios: {
      title: 'Honorarios y facturación',
      subtitle: 'Registro de horas trabajadas, liquidación de honorarios y facturación electrónica AFIP — todo desde el expediente.',
      features: ['Time tracking por expediente y tarea', 'Liquidación automática de honorarios', 'Facturación electrónica con CAE (AFIP)', 'Dashboard de ingresos por área y abogado', 'Cuentas por cobrar y recordatorios de pago'],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "23"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      }))
    },
    'portal-cliente': {
      title: 'Portal del cliente',
      subtitle: 'Acceso seguro para que los clientes consulten el estado de sus causas, descarguen documentos y firmen electrónicamente.',
      features: ['Vista de estado de expedientes en tiempo real', 'Descarga de documentos autorizados', 'Firma electrónica de escritos y contratos', 'Notificaciones automáticas por email y WhatsApp', 'Chat directo cliente ↔ estudio'],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      }))
    },
    documents: {
      title: 'Documentos',
      subtitle: 'Repositorio centralizado de escritos, contratos y pruebas con búsqueda full-text y versionado.',
      features: ['Repositorio por expediente con versiones', 'Búsqueda full-text en todos los documentos', 'Editor de escritos con variables dinámicas', 'Firma electrónica integrada'],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }))
    },
    liquidaciones: {
      title: 'Liquidaciones',
      subtitle: 'Cálculo automático de rubros: intereses, actualizaciones indexadas y capital.',
      features: ['Cálculo de intereses (tasas BNA / CER / UVA)', 'Actualización por índices INDEC', 'Exportación a PDF y Word', 'Historial de liquidaciones por expediente'],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "2",
        y: "3",
        width: "20",
        height: "14",
        rx: "2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "8",
        y1: "21",
        x2: "16",
        y2: "21"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "21"
      }))
    },
    reportes: {
      title: 'Reportes',
      subtitle: 'Métricas de gestión: causas activas, tiempos de resolución, performance por abogado.',
      features: ['Dashboard de KPIs por área de práctica', 'Reporte de cartera por estado y cliente', 'Métricas de tiempo promedio de resolución', 'Exportación Excel / PDF'],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("line", {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "10"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "4"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "14"
      }))
    },
    facturacion: {
      title: 'Facturación electrónica',
      subtitle: 'Emisión de comprobantes electrónicos con CAE directo desde la plataforma (AFIP).',
      features: ['Emisión de facturas A, B y C con CAE', 'Integración directa con AFIP (webservice)', 'Vinculación automática con honorarios', 'Historial de comprobantes por cliente'],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M9 11l3 3L22 4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
      }))
    },
    users: {
      title: 'Usuarios y permisos',
      subtitle: 'Gestión de accesos por rol: socio, asociado, pasante, administrativo y cliente.',
      features: ['5 niveles de permisos configurables', 'Acceso por expediente o por área', 'Log de auditoría de acciones', 'Multi-estudio (tenancy)'],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M23 21v-2a4 4 0 0 0-3-3.87"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75"
      }))
    },
    settings: {
      title: 'Configuración',
      subtitle: null,
      features: [],
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      }))
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    currentView: view,
    onNavigate: handleNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      overflow: 'hidden'
    }
  }, view === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
    onNavigate: handleNavigate
  }), view === 'cases' && /*#__PURE__*/React.createElement(CaseList, {
    onSelectCase: handleSelectCase
  }), view === 'case-detail' && /*#__PURE__*/React.createElement(CaseDetail, {
    caseId: selectedCase || 'LFD-2024-0091',
    onBack: handleBack
  }), view === 'agenda' && /*#__PURE__*/React.createElement(Agenda, {
    onNavigate: handleNavigate
  }), view === 'jurisprudencia' && /*#__PURE__*/React.createElement(Jurisprudencia, null), placeholders[view] && /*#__PURE__*/React.createElement(PlaceholderView, placeholders[view])));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CaseDetail.jsx
try { (() => {
// Legal Flow Doctor — Case Detail (Expediente)
// Exports: CaseDetail

function CaseDetail({
  caseId,
  onBack
}) {
  const {
    cases,
    caseHistory,
    caseDocuments,
    parties,
    todayEvents
  } = window.LFDData;
  const [activeTab, setActiveTab] = React.useState('general');
  const c = cases.find(x => x.id === caseId) || cases[0];
  const statusStyles = {
    active: {
      bg: '#dcfaec',
      fg: '#166634',
      dot: '#22a35a',
      label: 'Activo'
    },
    urgent: {
      bg: '#fee2e2',
      fg: '#991b1b',
      dot: '#dc2626',
      label: 'Urgente'
    },
    pending: {
      bg: '#fef9c3',
      fg: '#974d00',
      dot: '#d97706',
      label: 'Pendiente'
    },
    review: {
      bg: '#dbeafe',
      fg: '#1d4ed8',
      dot: '#3b82f6',
      label: 'En revisión'
    },
    closed: {
      bg: '#eceff4',
      fg: '#5a6170',
      dot: '#737b8c',
      label: 'Cerrado'
    },
    settled: {
      bg: '#d0f4f0',
      fg: '#106b61',
      dot: '#14867a',
      label: 'Resuelto'
    },
    review: {
      bg: '#dbeafe',
      fg: '#1d4ed8',
      dot: '#3b82f6',
      label: 'In Review'
    },
    closed: {
      bg: '#eceff4',
      fg: '#5a6170',
      dot: '#737b8c',
      label: 'Closed'
    },
    settled: {
      bg: '#d0f4f0',
      fg: '#106b61',
      dot: '#14867a',
      label: 'Settled'
    }
  };
  const TABS = ['general', 'documents', 'parties', 'history', 'agenda'];
  const tabLabel = {
    general: 'General',
    documents: 'Documentos',
    parties: 'Partes',
    history: 'Historial',
    agenda: 'Agenda'
  };
  const st = statusStyles[c.status] || statusStyles.active;
  const Field = ({
    label,
    value,
    mono
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--fg-default)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
      fontWeight: 500
    }
  }, value || '—'));
  const fileIcons = {
    pdf: '#dc2626',
    doc: '#244876',
    zip: '#a8752a'
  };
  const caseEvents = todayEvents.filter(e => e.caseId === c.id);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderBottom: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderBottom: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M12 19l-7-7 7-7"
  })), "Expedientes"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-subtle)',
      fontSize: '13px'
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--color-teal-700)',
      fontWeight: 500
    }
  }, c.id)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 10px',
      borderRadius: '999px',
      fontSize: '11px',
      fontWeight: 600,
      background: st.bg,
      color: st.fg,
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: st.dot
    }
  }), st.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, c.type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, c.jurisdiction)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 4px',
      fontSize: '18px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-default)',
      lineHeight: 1.3
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, c.court, " \xB7 Iniciado ", c.filed, " \xB7 Actualizado ", c.lastUpdate)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginLeft: '16px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '7px 12px',
      borderRadius: '6px',
      border: '1px solid var(--border-strong)',
      background: 'white',
      color: 'var(--fg-default)',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  })), "Editar"), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '7px 12px',
      borderRadius: '6px',
      border: 'none',
      background: 'var(--color-teal-600)',
      color: 'white',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })), "Agregar documento")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0',
      paddingLeft: '28px'
    }
  }, TABS.map(tab => /*#__PURE__*/React.createElement("button", {
    key: tab,
    onClick: () => setActiveTab(tab),
    style: {
      padding: '10px 18px',
      fontSize: '13px',
      fontFamily: 'var(--font-sans)',
      fontWeight: activeTab === tab ? 600 : 400,
      color: activeTab === tab ? 'var(--color-teal-700)' : 'var(--fg-muted)',
      background: 'none',
      border: 'none',
      borderBottom: activeTab === tab ? '2px solid var(--color-teal-600)' : '2px solid transparent',
      cursor: 'pointer',
      transition: 'all 100ms',
      whiteSpace: 'nowrap'
    }
  }, tabLabel[tab])))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px 28px'
    }
  }, activeTab === 'general' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 280px',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      marginBottom: '16px',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "Datos del Expediente"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "N\xB0 Expediente",
    value: c.id,
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Iniciado",
    value: c.filed
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Jurisdicci\xF3n",
    value: c.jurisdiction
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Juzgado",
    value: c.court
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Tipo de causa",
    value: c.type
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Monto reclamado",
    value: c.amount,
    mono: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Cliente",
    value: c.client
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Asignado a",
    value: c.assigned
  }), /*#__PURE__*/React.createElement(Field, {
    label: "\xDAltima actualizaci\xF3n",
    value: c.lastUpdate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      marginBottom: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.06em'
    }
  }, "Notas Internas"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-subtle)',
      borderRadius: '6px',
      border: '1px solid var(--border-muted)',
      padding: '12px',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.6,
      minHeight: '80px'
    }
  }, "Sin notas. Agreg\xE1 una nota para registrar observaciones internas sobre esta causa."), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: '10px',
      fontSize: '12px',
      color: 'var(--color-teal-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, "+ Agregar nota"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.07em'
    }
  }, "Resumen"), [['Documentos', caseDocuments.length], ['Partes', parties.length], ['Movimientos', caseHistory.length], ['Vencimientos', '2']].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '7px 0',
      borderBottom: '1px solid var(--border-muted)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '15px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-teal-50)',
      border: '1px solid var(--color-teal-200)',
      borderRadius: '8px',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--color-teal-800)',
      fontFamily: 'var(--font-sans)',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '0.07em'
    }
  }, "\u26A1 Pr\xF3xima Acci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--color-teal-900)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.5
    }
  }, "Vencimiento de presentaci\xF3n ", /*#__PURE__*/React.createElement("strong", null, "ma\xF1ana"), ". La contestaci\xF3n de demanda debe presentarse antes de las 11:00 hs."), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: '10px',
      fontSize: '12px',
      background: 'var(--color-teal-600)',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Abrir editor de documentos")))), activeTab === 'documents' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-muted)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Documentos (", caseDocuments.length, ")"), /*#__PURE__*/React.createElement("button", {
    style: {
      fontSize: '12px',
      color: 'var(--color-teal-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "+ Subir archivo")), caseDocuments.map((doc, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 18px',
      borderBottom: i < caseDocuments.length - 1 ? '1px solid var(--border-muted)' : 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--bg-subtle)',
    onMouseLeave: e => e.currentTarget.style.background = 'white'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '32px',
      height: '36px',
      borderRadius: '4px',
      background: fileIcons[doc.type] + '14',
      border: `1px solid ${fileIcons[doc.type]}30`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '9px',
      fontWeight: 700,
      color: fileIcons[doc.type],
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase'
    }
  }, doc.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, doc.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      marginTop: '2px'
    }
  }, doc.size, " \xB7 Subido el ", doc.date, " por ", doc.user)), /*#__PURE__*/React.createElement("button", {
    style: {
      fontSize: '11px',
      color: 'var(--color-teal-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Descargar")))), activeTab === 'history' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Historial de movimientos")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0'
    }
  }, caseHistory.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '14px',
      padding: '12px 18px',
      borderBottom: i < caseHistory.length - 1 ? '1px solid var(--border-muted)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: i === 0 ? 'var(--color-teal-500)' : 'var(--color-gray-300)',
      border: i === 0 ? '2px solid var(--color-teal-200)' : 'none',
      marginTop: '4px'
    }
  }), i < caseHistory.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1px',
      flex: 1,
      background: 'var(--border-muted)',
      margin: '4px 0 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingBottom: i < caseHistory.length - 1 ? '4px' : '0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 600,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, h.action), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-mono)',
      whiteSpace: 'nowrap'
    }
  }, h.date, " ", h.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      marginTop: '2px'
    }
  }, h.detail), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)',
      marginTop: '3px'
    }
  }, "por ", h.user)))))), activeTab === 'parties' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, parties.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      padding: '16px 20px',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '36px',
      height: '36px',
      borderRadius: '6px',
      background: i === 0 ? 'var(--color-teal-100)' : i === 1 ? 'var(--color-navy-100)' : 'var(--color-gold-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: '11px',
      fontWeight: 700,
      color: i === 0 ? 'var(--color-teal-800)' : i === 1 ? 'var(--color-navy-800)' : 'var(--color-gold-700)',
      fontFamily: 'var(--font-sans)'
    }
  }, p.role.slice(0, 2).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      background: 'var(--bg-muted)',
      padding: '1px 7px',
      borderRadius: '4px'
    }
  }, p.role)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      display: 'block'
    }
  }, "Tipo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, p.type)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      display: 'block'
    }
  }, "CUIT"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-mono)'
    }
  }, p.cuit)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      display: 'block'
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, p.contact))))))), activeTab === 'agenda' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: '13px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Eventos vinculados a esta causa:"), caseEvents.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px'
    }
  }, "Sin eventos programados hoy para esta causa.") : caseEvents.map((ev, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '12px',
      padding: '10px 0',
      borderBottom: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      minWidth: '42px'
    }
  }, ev.time), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, ev.title))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: '16px',
      fontSize: '12px',
      color: 'var(--color-teal-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0
    }
  }, "+ Agendar evento"))));
}
Object.assign(window, {
  CaseDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CaseDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CaseList.jsx
try { (() => {
// Legal Flow Doctor — Case List (Expedientes)
// Exports: CaseList

function CaseList({
  onSelectCase
}) {
  const {
    cases
  } = window.LFDData;
  const [search, setSearch] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const [typeFilter, setTypeFilter] = React.useState('all');
  const filtered = cases.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q || c.title.toLowerCase().includes(q) || c.id.toLowerCase().includes(q) || c.client.toLowerCase().includes(q) || c.court.toLowerCase().includes(q);
    const matchStatus = statusFilter === 'all' || c.status === statusFilter;
    const matchType = typeFilter === 'all' || c.type === typeFilter;
    return matchSearch && matchStatus && matchType;
  });
  const statusStyles = {
    active: {
      bg: '#dcfaec',
      fg: '#166534',
      dot: '#22a35a',
      label: 'Activo'
    },
    urgent: {
      bg: '#fee2e2',
      fg: '#991b1b',
      dot: '#dc2626',
      label: 'Urgente'
    },
    pending: {
      bg: '#fef9c3',
      fg: '#974d00',
      dot: '#d97706',
      label: 'Pendiente'
    },
    review: {
      bg: '#dbeafe',
      fg: '#1d4ed8',
      dot: '#3b82f6',
      label: 'En revisión'
    },
    closed: {
      bg: '#eceff4',
      fg: '#5a6170',
      dot: '#737b8c',
      label: 'Cerrado'
    },
    settled: {
      bg: '#d0f4f0',
      fg: '#106b61',
      dot: '#14867a',
      label: 'Resuelto'
    },
    drafting: {
      bg: '#dfe8f2',
      fg: '#1d3a61',
      dot: '#244876',
      label: 'En trámite'
    }
  };
  const types = ['all', ...Array.from(new Set(cases.map(c => c.type)))];
  const statuses = ['all', 'active', 'urgent', 'pending', 'review', 'closed', 'settled'];
  const btnBase = {
    border: 'none',
    borderRadius: '4px',
    padding: '4px 10px',
    fontSize: '12px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 100ms'
  };
  const StatusCount = ({
    status,
    count
  }) => {
    const st = statusStyles[status];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '10px 14px',
        background: 'white',
        border: '1px solid var(--border-muted)',
        borderRadius: '6px',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: st.dot,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)',
        flex: 1
      }
    }, st.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '16px',
        fontWeight: 700,
        color: 'var(--fg-default)',
        fontFamily: 'var(--font-sans)'
      }
    }, count));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderBottom: '1px solid var(--border-muted)',
      padding: '14px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '18px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-default)'
    }
  }, "Expedientes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, cases.length, " causas en total \u2014 ", cases.filter(c => c.status === 'active').length, " activas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...btnBase,
      background: 'var(--bg-subtle)',
      border: '1px solid var(--border-strong)',
      color: 'var(--fg-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  })), "Exportar")), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btnBase,
      background: 'var(--color-teal-600)',
      color: 'white',
      padding: '6px 14px',
      fontSize: '13px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })), "Nueva Causa")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, ['active', 'urgent', 'pending', 'review', 'closed'].map(s => /*#__PURE__*/React.createElement(StatusCount, {
    key: s,
    status: s,
    count: cases.filter(c => c.status === s).length
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderBottom: '1px solid var(--border-muted)',
      padding: '10px 28px',
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flex: 1,
      maxWidth: '340px',
      background: 'var(--bg-subtle)',
      border: '1px solid var(--border-default)',
      borderRadius: '6px',
      padding: '7px 12px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--fg-muted)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Buscar por car\xE1tula, cliente, juzgado, N\xB0 expte\u2026",
    style: {
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: '13px',
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Estado:"), statuses.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setStatusFilter(s),
    style: {
      ...btnBase,
      background: statusFilter === s ? 'var(--color-teal-600)' : 'var(--bg-subtle)',
      color: statusFilter === s ? 'white' : 'var(--fg-muted)',
      border: '1px solid ' + (statusFilter === s ? 'var(--color-teal-600)' : 'var(--border-default)'),
      padding: '3px 9px'
    }
  }, s === 'all' ? 'Todos' : statusStyles[s]?.label || s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      alignItems: 'center',
      marginLeft: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Tipo:"), /*#__PURE__*/React.createElement("select", {
    value: typeFilter,
    onChange: e => setTypeFilter(e.target.value),
    style: {
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      border: '1px solid var(--border-default)',
      borderRadius: '5px',
      padding: '3px 24px 3px 8px',
      background: 'var(--bg-subtle)',
      color: 'var(--fg-default)',
      outline: 'none',
      cursor: 'pointer'
    }
  }, types.map(t => /*#__PURE__*/React.createElement("option", {
    key: t,
    value: t
  }, t === 'all' ? 'Todos los tipos' : t)))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, filtered.length, " resultado", filtered.length !== 1 ? 's' : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '16px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg-subtle)'
    }
  }, ['Expte.', 'Carátula / Juzgado', 'Tipo', 'Cliente', 'Monto', 'Estado', 'Asignado', 'Actualizado'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: '9px 14px',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      borderBottom: '1px solid var(--border-default)',
      whiteSpace: 'nowrap'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, filtered.map((c, i) => {
    const st = statusStyles[c.status] || statusStyles.active;
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      onClick: () => onSelectCase(c.id),
      style: {
        cursor: 'pointer',
        background: i % 2 === 0 ? 'white' : '#fafbfc',
        transition: 'background 80ms'
      },
      onMouseEnter: e => e.currentTarget.style.background = 'var(--color-teal-50)',
      onMouseLeave: e => e.currentTarget.style.background = i % 2 === 0 ? 'white' : '#fafbfc'
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--color-teal-700)',
        fontWeight: 500
      }
    }, c.id)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 14px',
        borderBottom: '1px solid var(--border-muted)',
        maxWidth: '260px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        fontWeight: 500,
        color: 'var(--fg-default)',
        fontFamily: 'var(--font-sans)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '240px'
      }
    }, c.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        color: 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)',
        marginTop: '2px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, c.court)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)'
      }
    }, c.type)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap',
        maxWidth: '130px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: 'var(--fg-default)',
        fontFamily: 'var(--font-sans)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block'
      }
    }, c.client)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        fontFamily: 'var(--font-mono)',
        color: 'var(--fg-default)'
      }
    }, c.amount)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '2px 8px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: 600,
        background: st.bg,
        color: st.fg,
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: st.dot
      }
    }), st.label)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        background: 'var(--color-navy-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '9px',
        fontWeight: 700,
        color: 'var(--color-navy-700)',
        flexShrink: 0
      }
    }, c.assigned.split(' ').map(w => w[0]).join('')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)'
      }
    }, c.assigned.split(' ')[0]))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '11px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: 'var(--fg-subtle)',
        fontFamily: 'var(--font-sans)'
      }
    }, c.lastUpdate)));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "8",
    style: {
      padding: '32px',
      textAlign: 'center',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: '13px'
    }
  }, "Ninguna causa coincide con los filtros aplicados.")))))));
}
Object.assign(window, {
  CaseList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CaseList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Dashboard.jsx
try { (() => {
// Legal Flow Doctor — Dashboard View
// Exports: Dashboard

function StatCard({
  label,
  value,
  sub,
  color,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: '8px',
      padding: '16px 18px',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      opacity: 0.85
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '28px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.1
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, sub));
}
function Dashboard({
  onNavigate
}) {
  const {
    stats,
    todayEvents,
    cases,
    upcomingEvents
  } = window.LFDData;
  const recentCases = cases.slice(0, 5);
  const statusStyles = {
    active: {
      bg: '#dcfaec',
      fg: '#166534',
      dot: '#22a35a'
    },
    urgent: {
      bg: '#fee2e2',
      fg: '#991b1b',
      dot: '#dc2626'
    },
    pending: {
      bg: '#fef9c3',
      fg: '#974d00',
      dot: '#d97706'
    },
    review: {
      bg: '#dbeafe',
      fg: '#1d4ed8',
      dot: '#3b82f6'
    },
    closed: {
      bg: '#eceff4',
      fg: '#5a6170',
      dot: '#737b8c'
    },
    settled: {
      bg: '#d0f4f0',
      fg: '#106b61',
      dot: '#14867a'
    }
  };
  const eventTypeStyle = {
    hearing: '#244876',
    deadline: '#dc2626',
    meeting: '#14867a'
  };
  const eventTypeLabel = {
    hearing: 'Hearing',
    deadline: 'Deadline',
    meeting: 'Meeting'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderBottom: '1px solid var(--border-muted)',
      padding: '14px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '18px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-default)'
    }
  }, "Inicio"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Jueves, 19 de junio de 2026 \xB7 ", stats.hearingsThisMonth, " audiencias este mes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('cases'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '7px 14px',
      borderRadius: '6px',
      border: '1.5px solid var(--color-teal-400)',
      background: 'transparent',
      color: 'var(--color-teal-700)',
      fontSize: '13px',
      fontWeight: 600,
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })), "Nueva Causa"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, window.LFDData.movimientos && window.LFDData.movimientos.filter(m => !m.read).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-navy-900)',
      borderRadius: '8px',
      padding: '12px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: 'var(--color-teal-400)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: '13px',
      color: 'white',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-teal-300)'
    }
  }, window.LFDData.movimientos.filter(m => !m.read).length, " movimientos nuevos"), " en tus expedientes \u2014 PJN sincronizado hace 4 min"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'rgba(255,255,255,0.45)',
      fontFamily: 'var(--font-sans)'
    }
  }, "PJN \xB7 MEV \xB7 CABA \u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Total Expedientes",
    value: stats.totalCases,
    sub: `+${stats.newThisWeek} esta semana`,
    color: "var(--color-navy-600)",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "14,2 14,8 20,8"
    }))
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Causas activas",
    value: stats.activeCases,
    sub: "74,5% del total",
    color: "var(--color-teal-600)",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "22 12 18 12 15 21 9 3 6 12 2 12"
    }))
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Urgentes",
    value: stats.urgentCases,
    sub: "Requieren atenci\xF3n inmediata",
    color: "var(--color-danger-500)",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    }))
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Firmas pendientes",
    value: stats.pendingSignatures,
    sub: "Documentos por firmar",
    color: "var(--color-gold-500)",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 2v4a2 2 0 0 0 2 2h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10.4 19.6 8 22l-4-1 1-4 6.4-6.4"
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-muted)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Expedientes recientes"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('cases'),
    style: {
      fontSize: '12px',
      color: 'var(--color-teal-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Ver todas \u2192")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg-subtle)'
    }
  }, ['Expte.', 'Carátula', 'Tipo', 'Estado', 'Asignado'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      padding: '8px 14px',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: 'var(--fg-muted)',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      borderBottom: '1px solid var(--border-muted)',
      whiteSpace: 'nowrap'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, recentCases.map((c, i) => {
    const st = statusStyles[c.status] || statusStyles.active;
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      onClick: () => onNavigate('case-detail'),
      style: {
        cursor: 'pointer',
        background: i % 2 === 0 ? 'white' : 'var(--bg-subtle)',
        transition: 'background 100ms'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--color-teal-700)',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid var(--border-muted)'
      }
    }, c.id), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        maxWidth: '220px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        fontWeight: 500,
        color: 'var(--fg-default)',
        fontFamily: 'var(--font-sans)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, c.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        color: 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)',
        marginTop: '1px'
      }
    }, c.court)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)'
      }
    }, c.type)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '2px 8px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: 600,
        background: st.bg,
        color: st.fg,
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        background: st.dot
      }
    }), c.status.charAt(0).toUpperCase() + c.status.slice(1))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid var(--border-muted)',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        background: 'var(--color-teal-100)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '9px',
        fontWeight: 700,
        color: 'var(--color-teal-800)',
        flexShrink: 0
      }
    }, c.assigned.split(' ').map(w => w[0]).join('')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        color: 'var(--fg-muted)',
        fontFamily: 'var(--font-sans)'
      }
    }, c.assigned.split(' ')[0]))));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-muted)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Movimientos"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('agenda'),
    style: {
      fontSize: '12px',
      color: 'var(--color-teal-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Ver agenda \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, window.LFDData.movimientos.map((mv, i) => /*#__PURE__*/React.createElement("div", {
    key: mv.id,
    style: {
      padding: '10px 18px',
      borderBottom: i < window.LFDData.movimientos.length - 1 ? '1px solid var(--border-muted)' : 'none',
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      background: mv.read ? 'transparent' : 'var(--color-teal-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      marginTop: '5px',
      flexShrink: 0,
      background: mv.read ? 'var(--color-gray-200)' : mv.type === 'deadline' ? 'var(--color-danger-400)' : 'var(--color-teal-400)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, mv.action), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-mono)',
      whiteSpace: 'nowrap'
    }
  }, mv.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      marginTop: '1px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, mv.detail), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      marginTop: '3px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--color-teal-700)'
    }
  }, mv.caseId), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '9px',
      fontWeight: 700,
      padding: '1px 5px',
      borderRadius: '3px',
      background: mv.source === 'PJN' ? 'var(--color-navy-100)' : 'var(--color-gray-100)',
      color: mv.source === 'PJN' ? 'var(--color-navy-700)' : 'var(--fg-muted)',
      fontFamily: 'var(--font-mono)'
    }
  }, mv.source)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderTop: '1px solid var(--border-muted)',
      background: 'var(--bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '0.07em'
    }
  }, "Pr\xF3ximos vencimientos"), window.LFDData.vencimientos.filter(v => !v.done && v.date >= '2026-06-19').slice(0, 3).map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      marginRight: '8px'
    }
  }, v.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 600,
      color: v.priority === 'high' ? 'var(--color-danger-600)' : 'var(--fg-muted)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans)'
    }
  }, v.date.slice(8), " ", ['', '', '', '', '', '', 'jun', 'jul', 'ago'][parseInt(v.date.slice(5, 7))]))))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Jurisprudencia.jsx
try { (() => {
// Legal Flow Doctor — Buscador de Jurisprudencia con IA
// Exports: Jurisprudencia

const SAMPLE_RESULTS = [{
  id: 'j1',
  title: 'García c/ Municipalidad de Buenos Aires s/ Daños y Perjuicios',
  court: 'Cámara Nacional de Apelaciones en lo Civil, Sala B',
  date: '2024-09-12',
  excerpt: 'La responsabilidad del Estado por los daños causados por el deficiente estado de la vía pública debe ser analizada conforme los arts. 1757 y 1758 del Código Civil y Comercial. La falta de señalización adecuada constituye factor de atribución objetivo.',
  relevance: 97,
  source: 'PJN',
  cites: 12,
  topics: ['Daños y perjuicios', 'Responsabilidad del Estado', 'Vía pública']
}, {
  id: 'j2',
  title: 'Municipalidad de CABA c/ Empresa Constructora s/ Ejecución',
  court: 'Juzgado Contencioso Administrativo Federal N° 3',
  date: '2024-07-03',
  excerpt: 'En materia de contratos administrativos, la Municipalidad goza de prerrogativas exorbitantes que le permiten modificar unilateralmente el contrato ante razones de interés público debidamente fundadas, conforme doctrina de la CSJN.',
  relevance: 84,
  source: 'CSJN',
  cites: 8,
  topics: ['Contratos administrativos', 'Prerrogativas', 'CABA']
}, {
  id: 'j3',
  title: 'López y otros c/ Municipalidad s/ Amparo colectivo',
  court: 'Cámara Federal de Apelaciones de La Plata',
  date: '2023-11-28',
  excerpt: 'El amparo colectivo resulta procedente cuando la afectación incide sobre una pluralidad de personas determinables, aunque no sean parte del proceso. El acceso a la información pública municipal no puede ser restringido sin causa fundada.',
  relevance: 79,
  source: 'PJN',
  cites: 21,
  topics: ['Amparo', 'Acción colectiva', 'Información pública']
}, {
  id: 'j4',
  title: 'Rodríguez c/ Municipalidad de Lanús s/ Responsabilidad extracontractual',
  court: 'Suprema Corte de Justicia de Buenos Aires',
  date: '2023-08-15',
  excerpt: 'La omisión de mantenimiento de instalaciones públicas configura falta de servicio en los términos del art. 1112 del Código Civil (actual art. 1764 CCyCN), generando responsabilidad directa del Estado municipal.',
  relevance: 76,
  source: 'SCBA',
  cites: 5,
  topics: ['Falta de servicio', 'Estado municipal', 'Responsabilidad extracontractual']
}];
function Jurisprudencia() {
  const [query, setQuery] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState([]);
  const [activeResult, setActiveResult] = React.useState(null);
  const SUGGESTIONS = ['Responsabilidad del Estado por vía pública deficiente', 'Despido sin causa — cálculo de indemnización', 'Nulidad de acto administrativo por vicios de forma', 'Prescripción en contratos comerciales — plazo'];
  const handleSearch = q => {
    const text = q || query;
    if (!text.trim()) return;
    setQuery(text);
    setLoading(true);
    setSubmitted(true);
    setResults([]);
    setTimeout(() => {
      setLoading(false);
      setResults(SAMPLE_RESULTS);
    }, 1400);
  };
  const sourceColors = {
    PJN: '#244876',
    CSJN: '#8b5e18',
    SCBA: '#106b61'
  };
  const sourceBg = {
    PJN: '#dfe8f2',
    CSJN: '#faf0d8',
    SCBA: '#d0f4f0'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--bg-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderBottom: '1px solid var(--border-muted)',
      padding: '14px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '18px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-default)'
    }
  }, "Buscador de Jurisprudencia"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, "+500.000 fuentes judiciales argentinas indexadas con IA \xB7 PJN \xB7 CSJN \xB7 SCBA \xB7 C\xE1maras provinciales")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      borderRadius: '999px',
      background: 'var(--color-teal-50)',
      border: '1px solid var(--color-teal-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: 'var(--color-teal-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 600,
      color: 'var(--color-teal-700)',
      fontFamily: 'var(--font-sans)'
    }
  }, "IA activa")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: submitted ? 'var(--bg-subtle)' : 'var(--color-navy-900)',
      padding: submitted ? '16px 28px' : '48px 28px',
      transition: 'all 400ms'
    }
  }, !submitted && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      color: 'rgba(255,255,255,0.5)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Describ\xED tu caso en lenguaje natural \u2014 la IA encuentra los precedentes m\xE1s relevantes")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '720px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      background: submitted ? 'white' : 'rgba(255,255,255,0.10)',
      border: '1.5px solid ' + (submitted ? 'var(--border-strong)' : 'rgba(255,255,255,0.2)'),
      borderRadius: '8px',
      padding: '10px 16px',
      transition: 'all 300ms'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: submitted ? 'var(--fg-muted)' : 'rgba(255,255,255,0.5)',
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  })), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    onKeyDown: e => e.key === 'Enter' && handleSearch(),
    placeholder: "Ej: responsabilidad del Estado por da\xF1o en v\xEDa p\xFAblica CABA",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: '14px',
      fontFamily: 'var(--font-sans)',
      color: submitted ? 'var(--fg-default)' : 'white'
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setQuery('');
      setSubmitted(false);
      setResults([]);
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: submitted ? 'var(--fg-subtle)' : 'rgba(255,255,255,0.4)',
      fontSize: '16px',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("button", {
    onClick: () => handleSearch(),
    style: {
      padding: '10px 20px',
      borderRadius: '8px',
      border: 'none',
      background: 'var(--color-teal-600)',
      color: 'white',
      fontSize: '13px',
      fontWeight: 600,
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "Buscar con IA")), !submitted && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '16px',
      justifyContent: 'center'
    }
  }, SUGGESTIONS.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => handleSearch(s),
    style: {
      padding: '5px 13px',
      borderRadius: '999px',
      border: '1px solid rgba(255,255,255,0.2)',
      background: 'rgba(255,255,255,0.07)',
      color: 'rgba(255,255,255,0.65)',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer'
    }
  }, s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px',
      display: 'flex',
      gap: '16px'
    }
  }, loading && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      padding: '60px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '3px solid var(--color-teal-100)',
      borderTopColor: 'var(--color-teal-500)',
      animation: 'lfd-spin 0.8s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      marginBottom: '6px'
    }
  }, "Analizando jurisprudencia\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Consultando +500.000 fuentes \xB7 PJN \xB7 CSJN \xB7 C\xE1maras"))), !loading && results.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, results.length, " resultados m\xE1s relevantes para: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg-default)'
    }
  }, "\"", query, "\"")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--color-teal-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600
    }
  }, "Ordenar por: Relevancia \u2193")), results.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => setActiveResult(activeResult?.id === r.id ? null : r),
    style: {
      background: 'white',
      border: '1px solid ' + (activeResult?.id === r.id ? 'var(--color-teal-400)' : 'var(--border-default)'),
      borderRadius: '8px',
      padding: '16px 18px',
      cursor: 'pointer',
      boxShadow: activeResult?.id === r.id ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transition: 'all 200ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '14px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-default)',
      lineHeight: 1.4,
      flex: 1
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: r.relevance >= 90 ? 'var(--color-teal-700)' : r.relevance >= 75 ? 'var(--color-navy-700)' : 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      background: r.relevance >= 90 ? 'var(--color-teal-50)' : r.relevance >= 75 ? 'var(--color-navy-50)' : 'var(--bg-subtle)',
      padding: '2px 8px',
      borderRadius: '999px',
      border: '1px solid ' + (r.relevance >= 90 ? 'var(--color-teal-200)' : r.relevance >= 75 ? 'var(--color-navy-100)' : 'var(--border-muted)')
    }
  }, r.relevance, "% relevante"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      padding: '2px 8px',
      borderRadius: '4px',
      background: sourceBg[r.source] || 'var(--bg-subtle)',
      color: sourceColors[r.source] || 'var(--fg-muted)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600
    }
  }, r.source), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, r.court), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)'
    }
  }, "\xB7 ", r.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '11px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)'
    }
  }, "\xB7 ", r.cites, " citas")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.6
    }
  }, r.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
      marginTop: '10px'
    }
  }, r.topics.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: '11px',
      padding: '2px 8px',
      borderRadius: '4px',
      background: 'var(--color-navy-50)',
      color: 'var(--color-navy-700)',
      fontFamily: 'var(--font-sans)',
      border: '1px solid var(--color-navy-100)'
    }
  }, t))), activeResult?.id === r.id && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      paddingTop: '14px',
      borderTop: '1px solid var(--border-muted)',
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '6px 14px',
      borderRadius: '5px',
      border: 'none',
      background: 'var(--color-teal-600)',
      color: 'white',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Ver fallo completo"), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '6px 14px',
      borderRadius: '5px',
      border: '1px solid var(--border-strong)',
      background: 'white',
      color: 'var(--fg-default)',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Citar en escrito"), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '6px 14px',
      borderRadius: '5px',
      border: '1px solid var(--border-strong)',
      background: 'white',
      color: 'var(--fg-default)',
      fontSize: '12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Guardar"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '220px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      border: '1px solid var(--border-default)',
      borderRadius: '8px',
      padding: '14px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      marginBottom: '10px'
    }
  }, "Filtrar por fuente"), [['PJN', 'Poder Judicial Nación', 892], ['CSJN', 'Corte Suprema', 124], ['SCBA', 'Sup. Corte Bs As', 341], ['Cámaras', 'Cámaras Nac.', 2100]].map(([code, label, count]) => /*#__PURE__*/React.createElement("label", {
    key: code,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '5px 0',
      cursor: 'pointer',
      borderBottom: '1px solid var(--border-muted)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    style: {
      accentColor: 'var(--color-teal-600)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: '12px',
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-mono)'
    }
  }, count)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-teal-50)',
      border: '1px solid var(--color-teal-200)',
      borderRadius: '8px',
      padding: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--color-teal-800)',
      fontFamily: 'var(--font-sans)',
      marginBottom: '8px'
    }
  }, "\uD83D\uDCA1 Consejo IA"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--color-teal-900)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.5
    }
  }, "Agreg\xE1 la jurisdicci\xF3n y el fuero para resultados m\xE1s precisos. Ej: ", /*#__PURE__*/React.createElement("em", null, "\"da\xF1os CABA fuero civil 2023-2024\""))))), !loading && !submitted && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-gray-300)",
    strokeWidth: "1.2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 8v3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "14",
    r: "0.5",
    fill: "var(--color-gray-300)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: 'var(--fg-subtle)',
      fontFamily: 'var(--font-sans)',
      textAlign: 'center'
    }
  }, "Ingres\xE1 una consulta para buscar jurisprudencia con IA")))));
}
Object.assign(window, {
  Jurisprudencia
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Jurisprudencia.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
// Legal Flow Doctor — Sidebar Navigation
// Exports: Sidebar

const NAV_ITEMS = [{
  id: 'dashboard',
  label: 'Inicio',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }))
}, {
  id: 'cases',
  label: 'Expedientes',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14,2 14,8 20,8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "10,9 9,9 8,9"
  })),
  badge: 184
}, {
  id: 'agenda',
  label: 'Agenda',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  })),
  badge: 4,
  badgeVariant: 'urgent'
}, {
  id: 'documents',
  label: 'Documentos',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }))
}, {
  id: 'liquidaciones',
  label: 'Liquidaciones',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  }))
}, {
  id: 'reportes',
  label: 'Reportes',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "14"
  }))
}, {
  id: 'pruebas',
  label: 'Pruebas',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 11l3 3L22 4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "8",
    height: "8",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7l4-4 4 4"
  }))
}, {
  id: 'honorarios',
  label: 'Honorarios',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  }))
}, {
  id: 'portal-cliente',
  label: 'Portal del cliente',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }))
}, {
  id: 'jurisprudencia',
  label: 'Jurisprudencia IA',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 8v3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "14",
    r: "0.8",
    fill: "currentColor"
  }))
}, {
  id: 'facturacion',
  label: 'Facturación',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 11l3 3L22 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }))
}];
const BOTTOM_ITEMS = [{
  id: 'users',
  label: 'Usuarios',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }))
}, {
  id: 'settings',
  label: 'Configuración',
  icon: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  }))
}];
function Sidebar({
  currentView,
  onNavigate
}) {
  const {
    user
  } = window.LFDData;
  const itemStyle = id => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '9px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontFamily: 'var(--font-sans)',
    fontWeight: currentView === id ? '600' : '400',
    color: currentView === id ? '#ffffff' : 'rgba(255,255,255,0.55)',
    backgroundColor: currentView === id ? 'rgba(20,134,122,0.25)' : 'transparent',
    transition: 'all 120ms ease',
    border: 'none',
    outline: 'none',
    width: '100%',
    textAlign: 'left',
    position: 'relative'
  });
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: '220px',
      flexShrink: 0,
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: 'var(--color-navy-900)',
      borderRight: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-sidebar)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px 12px',
      borderBottom: '1px solid rgba(255,255,255,0.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-icon.svg",
    width: "28",
    height: "28",
    alt: "LFD"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '14px',
      fontWeight: 600,
      color: 'white',
      lineHeight: 1.1,
      letterSpacing: '-0.01em'
    }
  }, "Legal Flow"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '9px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-teal-400)',
      marginTop: '1px'
    }
  }, "Doctor")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255,255,255,0.07)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '6px',
      padding: '6px 10px',
      cursor: 'text'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgba(255,255,255,0.4)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'rgba(255,255,255,0.35)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Buscar\u2026 ", /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontSize: '10px',
      opacity: 0.5
    }
  }, "\u2318K")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.25)',
      padding: '8px 4px 4px',
      fontFamily: 'var(--font-sans)'
    }
  }, "Principal"), NAV_ITEMS.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => onNavigate(item.id),
    style: itemStyle(item.id)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: currentView === item.id ? 1 : 0.6,
      color: currentView === item.id ? 'var(--color-teal-300)' : 'currentColor'
    }
  }, item.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      background: item.badgeVariant === 'urgent' ? 'var(--color-danger-500)' : 'rgba(255,255,255,0.12)',
      color: 'white',
      borderRadius: '999px',
      padding: '1px 6px',
      minWidth: '18px',
      textAlign: 'center'
    }
  }, item.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.25)',
      padding: '12px 4px 4px',
      fontFamily: 'var(--font-sans)'
    }
  }, "Administraci\xF3n"), BOTTOM_ITEMS.map(item => /*#__PURE__*/React.createElement("button", {
    key: item.id,
    onClick: () => onNavigate(item.id),
    style: itemStyle(item.id)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.6
    }
  }, item.icon), /*#__PURE__*/React.createElement("span", null, item.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px',
      borderTop: '1px solid rgba(255,255,255,0.07)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 8px',
      borderRadius: '6px',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      background: 'var(--color-teal-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: 700,
      color: 'white',
      flexShrink: 0
    }
  }, "SC"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 600,
      color: 'white',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      color: 'rgba(255,255,255,0.4)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, user.role)), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "rgba(255,255,255,0.3)",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  })))));
}
Object.assign(window, {
  Sidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
// Legal Flow Doctor — Mock Data
// Sets window.LFDData for the UI kit prototype

window.LFDData = {
  user: {
    name: 'Sarah Chen',
    role: 'Senior Attorney',
    initials: 'SC',
    firm: 'Chen & Associates'
  },
  stats: {
    totalCases: 247,
    activeCases: 184,
    urgentCases: 7,
    hearingsThisMonth: 23,
    pendingSignatures: 14,
    newThisWeek: 6
  },
  cases: [{
    id: 'LFD-2024-0091',
    title: 'García S.A. v. Municipalidad de Buenos Aires',
    type: 'Commercial',
    court: 'Juzgado Comercial N° 12',
    status: 'active',
    assigned: 'Sarah Chen',
    client: 'García S.A.',
    amount: '$4,200,000',
    lastUpdate: '2h ago',
    filed: '2024-01-15',
    jurisdiction: 'CABA'
  }, {
    id: 'LFD-2024-0087',
    title: 'Torres c/ Empresa Logística del Sur',
    type: 'Labor',
    court: 'Tribunal del Trabajo N° 5',
    status: 'urgent',
    assigned: 'Miguel Torres',
    client: 'Carlos Torres',
    amount: '$890,000',
    lastUpdate: '4h ago',
    filed: '2024-01-08',
    jurisdiction: 'GBA'
  }, {
    id: 'LFD-2024-0082',
    title: 'Martínez v. Banco Nacional',
    type: 'Civil',
    court: 'Juzgado Civil N° 7',
    status: 'review',
    assigned: 'Ana Martínez',
    client: 'Lucía Martínez',
    amount: '$1,500,000',
    lastUpdate: '1d ago',
    filed: '2023-12-20',
    jurisdiction: 'CABA'
  }, {
    id: 'LFD-2024-0079',
    title: 'Importadora Pampas v. Distribuidora Norte',
    type: 'Commercial',
    court: 'Cámara Comercial Sala D',
    status: 'pending',
    assigned: 'Roberto Pérez',
    client: 'Importadora Pampas',
    amount: '$8,750,000',
    lastUpdate: '2d ago',
    filed: '2023-11-30',
    jurisdiction: 'Federal'
  }, {
    id: 'LFD-2024-0075',
    title: 'Rodríguez c/ Constructora Delta',
    type: 'Civil',
    court: 'Juzgado Civil N° 3',
    status: 'active',
    assigned: 'Sarah Chen',
    client: 'Familia Rodríguez',
    amount: '$2,100,000',
    lastUpdate: '3d ago',
    filed: '2023-11-14',
    jurisdiction: 'CABA'
  }, {
    id: 'LFD-2024-0070',
    title: 'Farmacéutica Austral c/ ANMAT',
    type: 'Administrative',
    court: 'Cámara Federal Contencioso-Administrativo',
    status: 'active',
    assigned: 'Miguel Torres',
    client: 'Farmacéutica Austral',
    amount: '$12,000,000',
    lastUpdate: '5d ago',
    filed: '2023-10-22',
    jurisdiction: 'Federal'
  }, {
    id: 'LFD-2024-0068',
    title: 'Pérez Estudio c/ AFIP resolución 4521',
    type: 'Tax',
    court: 'Tribunal Fiscal de la Nación',
    status: 'review',
    assigned: 'Ana Martínez',
    client: 'Pérez Estudio Contable',
    amount: '$580,000',
    lastUpdate: '1w ago',
    filed: '2023-10-10',
    jurisdiction: 'Federal'
  }, {
    id: 'LFD-2024-0061',
    title: 'Sucesión Fernández — Acuerdo extrajudicial',
    type: 'Family',
    court: 'Juzgado Civil N° 15',
    status: 'settled',
    assigned: 'Roberto Pérez',
    client: 'Familia Fernández',
    amount: '$3,400,000',
    lastUpdate: '1w ago',
    filed: '2023-09-01',
    jurisdiction: 'CABA'
  }, {
    id: 'LFD-2024-0055',
    title: 'Cervecería Patagonia v. Importadora Belgrano',
    type: 'Commercial',
    court: 'Juzgado Comercial N° 8',
    status: 'closed',
    assigned: 'Sarah Chen',
    client: 'Cervecería Patagonia',
    amount: '$990,000',
    lastUpdate: '2w ago',
    filed: '2023-07-12',
    jurisdiction: 'CABA'
  }, {
    id: 'LFD-2024-0049',
    title: 'Vidal c/ Aerolíneas por incumplimiento',
    type: 'Civil',
    court: 'Juzgado Civil N° 9',
    status: 'urgent',
    assigned: 'Sarah Chen',
    client: 'Horacio Vidal',
    amount: '$240,000',
    lastUpdate: '30m ago',
    filed: '2024-02-01',
    jurisdiction: 'Federal'
  }],
  todayEvents: [{
    time: '09:30',
    title: 'Audiencia — García S.A. v. Municipalidad',
    court: 'Juzgado Comercial N° 12',
    caseId: 'LFD-2024-0091',
    type: 'hearing'
  }, {
    time: '11:00',
    title: 'Vencimiento presentación — Torres c/ Logística del Sur',
    court: 'Tribunal del Trabajo N° 5',
    caseId: 'LFD-2024-0087',
    type: 'deadline'
  }, {
    time: '14:00',
    title: 'Reunión con cliente — Familia Fernández',
    court: null,
    caseId: 'LFD-2024-0061',
    type: 'meeting'
  }, {
    time: '16:30',
    title: 'Respuesta pericial — Martínez v. Banco Nacional',
    court: 'Juzgado Civil N° 7',
    caseId: 'LFD-2024-0082',
    type: 'deadline'
  }],
  upcomingEvents: [{
    date: 'Mañana',
    title: 'Escrito de apelación — Pampas v. Distribuidora',
    caseId: 'LFD-2024-0079',
    type: 'deadline',
    priority: 'high'
  }, {
    date: '22 jun',
    title: 'Audiencia preliminar — Farmacéutica Austral',
    caseId: 'LFD-2024-0070',
    type: 'hearing',
    priority: 'normal'
  }, {
    date: '24 jun',
    title: 'Declaración pericial — Rodríguez c/ Delta',
    caseId: 'LFD-2024-0075',
    type: 'hearing',
    priority: 'normal'
  }, {
    date: '26 jun',
    title: 'Vencimiento respuesta AFIP — Pérez Estudio',
    caseId: 'LFD-2024-0068',
    type: 'deadline',
    priority: 'high'
  }],
  caseHistory: [{
    date: '2024-06-19',
    time: '14:23',
    user: 'Sarah Chen',
    action: 'Documento cargado',
    detail: 'Contestación de demanda — FINAL.pdf (324 KB)'
  }, {
    date: '2024-06-18',
    time: '09:15',
    user: 'Sistema',
    action: 'Estado actualizado',
    detail: 'Activo → En revisión (escalación automática)'
  }, {
    date: '2024-06-15',
    time: '11:40',
    user: 'Miguel Torres',
    action: 'Nota agregada',
    detail: 'Conversación con abogado contrario; acuerdo improbable antes del tercer trimestre.'
  }, {
    date: '2024-06-12',
    time: '16:00',
    user: 'Ana Martínez',
    action: 'Audiencia registrada',
    detail: 'Audiencia preliminar — asistida. Próxima fecha: 3 de julio.'
  }, {
    date: '2024-06-10',
    time: '10:22',
    user: 'Sarah Chen',
    action: 'Documento cargado',
    detail: 'Prueba documental — Lote 1 (12 archivos)'
  }, {
    date: '2024-06-05',
    time: '08:30',
    user: 'Sistema',
    action: 'Recordatorio enviado',
    detail: 'Aviso 72hs — audiencia del 8 de junio enviado a Sarah Chen'
  }, {
    date: '2024-01-15',
    time: '09:00',
    user: 'Roberto Pérez',
    action: 'Causa iniciada',
    detail: 'LFD-2024-0091 creada. Ingreso de cliente García S.A.'
  }],
  caseDocuments: [{
    name: 'Contestación de demanda — FINAL.pdf',
    size: '324 KB',
    date: '2024-06-19',
    user: 'Sarah Chen',
    type: 'pdf'
  }, {
    name: 'Prueba documental — Batch 1.zip',
    size: '14.2 MB',
    date: '2024-06-10',
    user: 'Sarah Chen',
    type: 'zip'
  }, {
    name: 'Escrito inicial — Demanda.pdf',
    size: '89 KB',
    date: '2024-01-15',
    user: 'Roberto Pérez',
    type: 'pdf'
  }, {
    name: 'Poder notarial — García S.A..pdf',
    size: '45 KB',
    date: '2024-01-15',
    user: 'Roberto Pérez',
    type: 'pdf'
  }, {
    name: 'Convenio de honorarios.docx',
    size: '28 KB',
    date: '2024-01-15',
    user: 'Roberto Pérez',
    type: 'doc'
  }],
  pjnStatus: {
    lastSync: 'hace 4 min',
    status: 'online',
    pendingAlerts: 3,
    jurisdictions: ['PJN', 'MEV', 'PBA', 'CABA']
  },
  movimientos: [{
    id: 'm1',
    caseId: 'LFD-2024-0091',
    caseTitle: 'García S.A. v. Municipalidad',
    time: '08:42',
    date: 'Hoy',
    type: 'auto',
    action: 'Nueva providencia',
    detail: 'Se corre traslado del escrito de fs. 234/241 por el término de ley.',
    source: 'PJN',
    read: false
  }, {
    id: 'm2',
    caseId: 'LFD-2024-0087',
    caseTitle: 'Torres c/ Log. del Sur',
    time: '07:15',
    date: 'Hoy',
    type: 'deadline',
    action: 'Vencimiento hoy',
    detail: 'Contestación de demanda vence a las 11:00 hs — Tribunal del Trabajo N° 5.',
    source: 'sistema',
    read: false
  }, {
    id: 'm3',
    caseId: 'LFD-2024-0070',
    caseTitle: 'Farmacéutica Austral c/ ANMAT',
    time: '06:30',
    date: 'Hoy',
    type: 'auto',
    action: 'Movimiento registrado',
    detail: 'Agregado dictamen fiscal. Autos a despacho.',
    source: 'PJN',
    read: false
  }, {
    id: 'm4',
    caseId: 'LFD-2024-0082',
    caseTitle: 'Martínez v. Banco Nacional',
    time: '18:22',
    date: 'Ayer',
    type: 'auto',
    action: 'Sentencia parcial',
    detail: 'Se dicta sentencia interlocutoria. Ver texto completo en PJN.',
    source: 'PJN',
    read: true
  }, {
    id: 'm5',
    caseId: 'LFD-2024-0079',
    caseTitle: 'Pampas v. Distribuidora Norte',
    time: '15:10',
    date: 'Ayer',
    type: 'deadline',
    action: 'Recordatorio automático',
    detail: 'Escrito de apelación vence mañana. ¿Ya lo preparaste?',
    source: 'sistema',
    read: true
  }],
  vencimientos: [{
    id: 'v1',
    date: '2026-06-19',
    caseId: 'LFD-2024-0087',
    title: 'Contestación de demanda',
    court: 'Tribunal del Trabajo N° 5',
    priority: 'high',
    semaforo: 'rojo',
    done: false
  }, {
    id: 'v2',
    date: '2026-06-20',
    caseId: 'LFD-2024-0079',
    title: 'Escrito de apelación',
    court: 'Cámara Comercial Sala D',
    priority: 'high',
    semaforo: 'rojo',
    done: false
  }, {
    id: 'v3',
    date: '2026-06-22',
    caseId: 'LFD-2024-0070',
    title: 'Audiencia preliminar',
    court: 'Cámara Federal CA',
    priority: 'normal',
    semaforo: 'rojo',
    done: false,
    type: 'hearing'
  }, {
    id: 'v4',
    date: '2026-06-24',
    caseId: 'LFD-2024-0075',
    title: 'Declaración pericial',
    court: 'Juzgado Civil N° 3',
    priority: 'normal',
    semaforo: 'amarillo',
    done: false,
    type: 'hearing'
  }, {
    id: 'v5',
    date: '2026-06-26',
    caseId: 'LFD-2024-0068',
    title: 'Respuesta a AFIP resolución 4521',
    court: 'Tribunal Fiscal',
    priority: 'high',
    semaforo: 'rojo',
    done: false
  }, {
    id: 'v6',
    date: '2026-06-28',
    caseId: 'LFD-2024-0091',
    title: 'Prueba pericial contable — presentación',
    court: 'Juzgado Comercial N° 12',
    priority: 'normal',
    semaforo: 'amarillo',
    done: false
  }, {
    id: 'v7',
    date: '2026-07-03',
    caseId: 'LFD-2024-0082',
    title: 'Próxima audiencia — Juzgado Civil',
    court: 'Juzgado Civil N° 7',
    priority: 'normal',
    semaforo: 'verde',
    done: false,
    type: 'hearing'
  }, {
    id: 'v8',
    date: '2026-07-08',
    caseId: 'LFD-2024-0049',
    title: 'Vencimiento medida cautelar',
    court: 'Juzgado Civil N° 9',
    priority: 'high',
    semaforo: 'rojo',
    done: false
  }, {
    id: 'v9',
    date: '2026-06-15',
    caseId: 'LFD-2024-0055',
    title: 'Presentación de alegatos',
    court: 'Juzgado Comercial N° 8',
    priority: 'normal',
    semaforo: 'verde',
    done: true
  }, {
    id: 'v10',
    date: '2026-06-10',
    caseId: 'LFD-2024-0061',
    title: 'Firma acuerdo extrajudicial',
    court: 'Juzgado Civil N° 15',
    priority: 'normal',
    semaforo: 'amarillo',
    done: true
  }],
  honorarios: {
    pendingTotal: 4820000,
    billedThisMonth: 1250000,
    collectedThisMonth: 890000,
    byArea: [{
      area: 'Comercial',
      amount: 2100000,
      pct: 44
    }, {
      area: 'Civil',
      amount: 1200000,
      pct: 25
    }, {
      area: 'Laboral',
      amount: 900000,
      pct: 19
    }, {
      area: 'Otro',
      amount: 620000,
      pct: 12
    }]
  },
  parties: [{
    role: 'Plaintiff',
    name: 'García Inversiones S.A.',
    type: 'Corporation',
    cuit: '30-71234567-8',
    attorney: 'Sarah Chen',
    contact: 'Dr. Pablo García (CEO)'
  }, {
    role: 'Defendant',
    name: 'Municipalidad de Buenos Aires',
    type: 'Government',
    cuit: '34-99902018-4',
    attorney: 'Dr. Ramón Suárez (PD Office)',
    contact: 'Procuración General'
  }, {
    role: 'Expert Witness',
    name: 'Ing. Marcelo Domínguez',
    type: 'Individual',
    cuit: '20-14523789-1',
    attorney: null,
    contact: 'mdominguez@peritos.ar'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

})();
