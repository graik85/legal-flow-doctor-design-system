/* @ds-bundle: {"format":3,"namespace":"LegalFlowDoctorDesignSystem_fa7d52","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"17e629a0624f","components/core/Badge.jsx":"0d5c067c0a2b","components/core/Button.jsx":"cfe9d7ab927a","components/core/Card.jsx":"4d29093a51c1","components/core/Divider.jsx":"94ce0f091e96","components/core/Input.jsx":"20068ad424c6","components/core/Select.jsx":"3c442c3d773c","components/core/StatusPill.jsx":"fddcfe2fccb7","components/core/Tag.jsx":"744339f03095","ui_kits/app/App.jsx":"cad2e71c6bb6","ui_kits/app/CaseDetail.jsx":"8be753233dfb","ui_kits/app/CaseList.jsx":"5d4b4735b400","ui_kits/app/Dashboard.jsx":"cb4ab8cf9557","ui_kits/app/Sidebar.jsx":"8f2fe1a7466b","ui_kits/app/data.js":"5a2aafa93deb"},"inlinedExternals":[],"unexposedExports":[]} */

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

// ui_kits/app/App.jsx
try { (() => {
// Legal Flow Doctor — App Shell
// Main app component, rendered last

function PlaceholderView({
  title,
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
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '56px',
      height: '56px',
      borderRadius: '12px',
      background: 'var(--bg-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--fg-subtle)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '16px',
      fontFamily: 'var(--font-serif)',
      fontWeight: 600,
      color: 'var(--fg-muted)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontFamily: 'var(--font-sans)',
      color: 'var(--fg-subtle)'
    }
  }, "Esta secci\xF3n no est\xE1 prototipada en este kit."));
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
  const placeholders = {
    agenda: {
      title: 'Agenda',
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "28",
        height: "28",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5"
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
      }))
    },
    documents: {
      title: 'Documentos',
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "28",
        height: "28",
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
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "28",
        height: "28",
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
    reportes: {
      title: 'Reportes',
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "28",
        height: "28",
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
      title: 'Facturación',
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "28",
        height: "28",
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
      title: 'Usuarios',
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "28",
        height: "28",
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
      icon: /*#__PURE__*/React.createElement("svg", {
        width: "28",
        height: "28",
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
  }), placeholders[view] && /*#__PURE__*/React.createElement(PlaceholderView, {
    title: placeholders[view].title,
    icon: placeholders[view].icon
  })));
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
  }, "Dashboard"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '12px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, "Thursday, June 19, 2026 \xB7 ", stats.hearingsThisMonth, " hearings this month")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Total Expedientes",
    value: stats.totalCases,
    sub: `+${stats.newThisWeek} this week`,
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
    label: "Active Matters",
    value: stats.activeCases,
    sub: "74.5% of total",
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
    label: "Urgent",
    value: stats.urgentCases,
    sub: "Require immediate action",
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
    label: "Pending Signatures",
    value: stats.pendingSignatures,
    sub: "Documents awaiting sign",
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
  }, "Recent Expedientes"), /*#__PURE__*/React.createElement("button", {
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
  }, "View all \u2192")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg-subtle)'
    }
  }, ['Case No.', 'Caption', 'Type', 'Status', 'Assigned'].map(h => /*#__PURE__*/React.createElement("th", {
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
  }, "Today"), /*#__PURE__*/React.createElement("button", {
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
  }, "Full calendar \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, todayEvents.map((ev, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 18px',
      borderBottom: i < todayEvents.length - 1 ? '1px solid var(--border-muted)' : 'none',
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0,
      minWidth: '38px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-mono)'
    }
  }, ev.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '3px',
      alignSelf: 'stretch',
      borderRadius: '2px',
      background: eventTypeStyle[ev.type] || '#9399a6',
      flexShrink: 0,
      marginTop: '3px'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--fg-default)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 1.4
    }
  }, ev.title), ev.court && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      color: 'var(--fg-muted)',
      fontFamily: 'var(--font-sans)',
      marginTop: '2px'
    }
  }, ev.court), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 600,
      color: eventTypeStyle[ev.type],
      background: `${eventTypeStyle[ev.type]}18`,
      padding: '1px 5px',
      borderRadius: '3px',
      fontFamily: 'var(--font-sans)',
      marginTop: '4px',
      display: 'inline-block'
    }
  }, eventTypeLabel[ev.type]))))), /*#__PURE__*/React.createElement("div", {
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
  }, "Upcoming"), upcomingEvents.slice(0, 3).map((ev, i) => /*#__PURE__*/React.createElement("div", {
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
  }, ev.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 600,
      color: ev.priority === 'high' ? 'var(--color-danger-600)' : 'var(--fg-muted)',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans)'
    }
  }, ev.date))))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Dashboard.jsx", error: String((e && e.message) || e) }); }

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
