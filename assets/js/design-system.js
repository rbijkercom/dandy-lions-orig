/* @ds-bundle: {"format":4,"namespace":"DandyLionDesignSystem_d1d8fc","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"SeedDivider","sourcePath":"components/brand/SeedDivider.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/type/Eyebrow.jsx"},{"name":"GuidingQuestion","sourcePath":"components/type/GuidingQuestion.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"7f6d4613b253","components/actions/TextLink.jsx":"c25e80a7635d","components/brand/SeedDivider.jsx":"1be6d3ff8213","components/data/Tag.jsx":"a5f8d06ae02a","components/forms/Input.jsx":"c868d0c75f03","components/surfaces/Card.jsx":"e24f9d42a7ab","components/type/Eyebrow.jsx":"14bef8c28c56","components/type/GuidingQuestion.jsx":"72eda6e1ccbb","ui_kits/website/Site.jsx":"0d9120d20468"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DandyLionDesignSystem_d1d8fc = window.DandyLionDesignSystem_d1d8fc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DandyLion Button — quiet, intentional actions.
 * Never rounded-corporate, never shouty. Gentle power.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  fullWidth = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: "var(--text-sm)"
    },
    md: {
      padding: "12px 26px",
      fontSize: "var(--text-sm)"
    },
    lg: {
      padding: "16px 34px",
      fontSize: "var(--text-base)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-medium)",
    letterSpacing: "var(--tracking-wide)",
    lineHeight: 1,
    whiteSpace: "nowrap",
    borderRadius: "var(--radius-full)",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "1.5px solid transparent",
    transition: "background var(--duration-quick) var(--ease-soft), color var(--duration-quick) var(--ease-soft), border-color var(--duration-quick) var(--ease-soft), opacity var(--duration-quick) var(--ease-soft)",
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--charcoal-900)",
      color: "var(--ivory-50)",
      borderColor: "var(--charcoal-900)"
    },
    secondary: {
      background: "transparent",
      color: "var(--charcoal-900)",
      borderColor: "var(--charcoal-900)"
    },
    gold: {
      background: "var(--gold-500)",
      color: "var(--ivory-50)",
      borderColor: "var(--gold-500)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-accent)",
      borderColor: "transparent"
    }
  };
  const hoverFor = {
    primary: {
      background: "var(--gold-700)",
      borderColor: "var(--gold-700)"
    },
    secondary: {
      background: "var(--charcoal-900)",
      color: "var(--ivory-50)"
    },
    gold: {
      background: "var(--gold-700)",
      borderColor: "var(--gold-700)"
    },
    ghost: {
      color: "var(--charcoal-900)"
    }
  };
  const Tag = as;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover && !disabled ? hoverFor[variant] : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DandyLion TextLink — a link with a gentle underline that grows in on hover,
 * like awareness arriving. Use in prose and quiet CTAs.
 */
function TextLink({
  children,
  href = "#",
  muted = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      color: muted ? "var(--text-muted)" : "var(--text-accent)",
      textDecoration: "none",
      paddingBottom: "1px",
      transition: "color var(--duration-quick) var(--ease-soft)",
      ...(hover ? {
        color: "var(--charcoal-900)"
      } : {}),
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      height: "1px",
      width: "100%",
      background: "currentColor",
      transformOrigin: "left center",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transition: "transform var(--duration-calm) var(--ease-breath)"
    }
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/brand/SeedDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SeedDivider — the brand's signature section break. A thin hairline that
 * carries a single dandelion seed adrift at its center. Contrast, not bigness.
 */
function SeedDivider({
  width = "100%",
  tone = "gold",
  style = {},
  ...rest
}) {
  const seedColor = tone === "sage" ? "var(--sage-500)" : "var(--gold-500)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      width,
      color: "var(--border-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "currentColor"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    style: {
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "16",
    x2: "13",
    y2: "24",
    stroke: seedColor,
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: seedColor,
    strokeWidth: "1",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "11",
    x2: "13",
    y2: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "11",
    x2: "8",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "11",
    x2: "18",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "11",
    x2: "5",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "13",
    y1: "11",
    x2: "21",
    y2: "9"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "11",
    r: "1.4",
    fill: seedColor
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "currentColor"
    }
  }));
}
Object.assign(__ds_scope, { SeedDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SeedDivider.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small, quiet label. For service names, phases, categories.
 * Soft tints, never loud. Sentence case.
 */
function Tag({
  children,
  tone = "neutral",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--ivory-100)",
      color: "var(--charcoal-700)",
      border: "var(--border-hairline)"
    },
    gold: {
      background: "rgba(184, 152, 90, 0.14)",
      color: "var(--gold-700)",
      border: "rgba(184, 152, 90, 0.28)"
    },
    sage: {
      background: "rgba(156, 175, 136, 0.18)",
      color: "var(--sage-700)",
      border: "rgba(156, 175, 136, 0.34)"
    },
    charcoal: {
      background: "var(--charcoal-900)",
      color: "var(--ivory-50)",
      border: "var(--charcoal-900)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 12px",
      borderRadius: "var(--radius-full)",
      background: t.background,
      color: t.color,
      border: `1px solid ${t.border}`,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wide)",
      lineHeight: 1.4,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DandyLion Input — a quiet underline field. Presence, not a heavy box.
 * Renders as input or textarea. The underline warms to gold on focus.
 */
function Input({
  as = "input",
  label,
  hint,
  value,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Field = as;
  const fieldId = id || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    value: value,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      background: "transparent",
      border: "none",
      borderBottom: `1.5px solid ${focus ? "var(--gold-700)" : "var(--border-soft)"}`,
      borderRadius: 0,
      padding: "8px 2px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      lineHeight: "var(--leading-normal)",
      outline: "none",
      resize: as === "textarea" ? "vertical" : undefined,
      minHeight: as === "textarea" ? "96px" : undefined,
      transition: "border-color var(--duration-quick) var(--ease-soft)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DandyLion Card — a calm surface. Soft organic radius, barely-there shadow,
 * warm hairline. Never a heavy corporate box.
 */
function Card({
  children,
  variant = "surface",
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    surface: {
      background: "var(--bg-surface)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-sm)"
    },
    inset: {
      background: "var(--bg-inset)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "none"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-soft)",
      boxShadow: "none"
    },
    inverse: {
      background: "var(--bg-inverse)",
      border: "1px solid var(--charcoal-900)",
      boxShadow: "var(--shadow-md)",
      color: "var(--text-on-inverse)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)",
      transition: "transform var(--duration-calm) var(--ease-breath), box-shadow var(--duration-calm) var(--ease-breath)",
      ...variants[variant],
      ...(interactive && hover ? {
        transform: "translateY(-3px)",
        boxShadow: "var(--shadow-md)"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/type/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — a small, wide-tracked kicker that sits above a heading.
 * Quiet orientation before the eye reaches the serif line.
 */
function Eyebrow({
  children,
  color = "muted",
  style = {},
  ...rest
}) {
  const colors = {
    muted: "var(--text-muted)",
    gold: "var(--gold-700)",
    sage: "var(--sage-700)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: colors[color] || colors.muted,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/type/GuidingQuestion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GuidingQuestion — the signature typographic moment. A whispered, italic
 * serif question. The methodology, not decoration. Let space do the work.
 */
function GuidingQuestion({
  children,
  align = "left",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--text-lg)",
      lineHeight: "var(--leading-relaxed)",
      letterSpacing: "var(--tracking-normal)",
      color: "var(--text-muted)",
      textAlign: align,
      margin: 0,
      maxWidth: "34ch",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GuidingQuestion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/GuidingQuestion.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Site.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DandyLion website — a hi-fi recreation of the landing page described in the brand brief.
// Composes design-system primitives from the bundle. Sections export to window.
const {
  Button,
  TextLink,
  Eyebrow,
  GuidingQuestion,
  Card,
  Tag,
  SeedDivider
} = window.DandyLionDesignSystem_d1d8fc;

/* ------------------------------------------------------------------ */
/* Signature motif — a dandelion seed dispersal. Abstract, generative. */
/* Placeholder for the real "lion's mane dissolving into seeds" art.   */
/* ------------------------------------------------------------------ */
function SeedField({
  count = 46
}) {
  const [near, setNear] = React.useState(false);
  // deterministic pseudo-random seeds so layout is stable
  const seeds = React.useMemo(() => {
    const out = [];
    let s = 7;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    for (let i = 0; i < count; i++) {
      const t = i / count;
      // density: clustered left (the "mane"), dispersing right into seeds
      const x = Math.pow(t, 1.5) * 92 + rnd() * 8;
      const y = 12 + rnd() * 76;
      const size = 2 + (1 - t) * 5 + rnd() * 1.5;
      const op = 0.22 + (1 - t) * 0.5;
      const delay = rnd() * 6;
      out.push({
        x,
        y,
        size,
        op,
        delay,
        drift: 6 + rnd() * 14
      });
    }
    return out;
  }, [count]);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setNear(true),
    onMouseLeave: () => setNear(false),
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: 320
    }
  }, seeds.map((sd, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      left: `${sd.x}%`,
      top: `${sd.y}%`,
      width: sd.size,
      height: sd.size,
      borderRadius: "50%",
      background: i % 7 === 0 ? "var(--gold-500)" : "var(--gold-300)",
      opacity: sd.op,
      transform: near ? `translate(${sd.drift}px, -${sd.drift * 0.6}px)` : "translate(0,0)",
      transition: `transform ${1400 + sd.delay * 120}ms var(--ease-breath)`,
      boxShadow: sd.size > 5 ? "0 0 0 4px rgba(184,152,90,0.06)" : "none"
    }
  })), [{
    x: 6,
    y: 40
  }, {
    x: 14,
    y: 62
  }, {
    x: 10,
    y: 24
  }].map((p, i) => /*#__PURE__*/React.createElement("svg", {
    key: `h${i}`,
    width: "34",
    height: "34",
    viewBox: "0 0 34 34",
    style: {
      position: "absolute",
      left: `${p.x}%`,
      top: `${p.y}%`,
      opacity: 0.5,
      transform: near ? "scale(1.04)" : "scale(1)",
      transition: "transform 1600ms var(--ease-breath)"
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "var(--gold-500)",
    strokeWidth: "0.8",
    strokeLinecap: "round"
  }, Array.from({
    length: 12
  }).map((_, k) => {
    const a = k / 12 * Math.PI * 2;
    return /*#__PURE__*/React.createElement("line", {
      key: k,
      x1: "17",
      y1: "17",
      x2: 17 + Math.cos(a) * 13,
      y2: 17 + Math.sin(a) * 13
    });
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "1.4",
    fill: "var(--gold-500)"
  }))));
}

/* --------------------------- Navigation --------------------------- */
function Nav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "22px clamp(24px, 6vw, 88px)",
      background: "rgba(247,243,236,0.82)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 24,
      letterSpacing: "-0.01em",
      color: "var(--text-strong)"
    }
  }, "Dandy", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-700)"
    }
  }, "Lion")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Begin the conversation"));
}

/* ------------------------------- Hero ----------------------------- */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "clamp(24px, 5vw, 72px)",
      alignItems: "center",
      padding: "clamp(56px, 11vw, 140px) clamp(24px, 6vw, 88px) clamp(48px, 8vw, 110px)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(20px,2vw,26px)",
      color: "var(--text-muted)",
      marginBottom: 18
    }
  }, "DandyLion"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 300,
      fontSize: "clamp(48px,7vw,92px)",
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Reflection", /*#__PURE__*/React.createElement("br", null), "in motion"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "clamp(17px,1.4vw,20px)",
      lineHeight: 1.6,
      color: "var(--text-body)",
      maxWidth: "42ch",
      margin: "28px 0 0"
    }
  }, "Growth doesn't come from pressure, but from presence. We help people and systems find direction in complexity \u2014 through orientation, reflection, and acceleration."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "clamp(22px,2.2vw,30px)",
      color: "var(--gold-700)",
      margin: "34px 0 0"
    }
  }, "Wisdom in motion."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Begin the conversation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "stretch",
      minHeight: 340
    }
  }, /*#__PURE__*/React.createElement(SeedField, null)));
}

/* ---------------------------- What we do -------------------------- */
function WhatWeDo() {
  const services = [{
    name: "Keynote",
    line: "The spark. It names something, and opens a question that cannot be unasked."
  }, {
    name: "Masterclass",
    line: "The map. Vocabulary, frameworks, and the relational space to begin working with the material together."
  }, {
    name: "Training",
    line: "The practice. Skills meet real contexts. The body learns what the mind has understood."
  }, {
    name: "Coaching, consulting & long-term programmes",
    line: "The integration. Where orientation, knowledge, and practice weave into a single living trajectory."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px,8vw,110px) clamp(24px,6vw,88px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "gold"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(30px,4vw,52px)",
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "14px 0 clamp(32px,5vw,56px)",
      maxWidth: "18ch"
    }
  }, "Four ways of working, one rhythm"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: 24
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.name,
    variant: "surface",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 26,
      color: "var(--text-strong)",
      marginBottom: 12
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: 0
    }
  }, s.line)))));
}

/* --------------------------- Three pillars ------------------------ */
function Pillars() {
  const pillars = [{
    cue: "Ready",
    name: "Orientation",
    qs: ["Where are we now?", "Are we all here?", "Do we share the same direction?"]
  }, {
    cue: "Set",
    name: "Reflection",
    qs: ["What prompts this desire for change?", "Is it true to our core?", "What adds value now?"]
  }, {
    cue: "Go",
    name: "Acceleration",
    qs: ["What do we need to integrate?", "What slows development?", "What does change require from us?"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px,8vw,110px) clamp(24px,6vw,88px)",
      background: "var(--charcoal-900)",
      color: "var(--ivory-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "clamp(40px,6vw,72px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "gold"
  }, "The three pillars"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 300,
      fontSize: "clamp(34px,5vw,60px)",
      letterSpacing: "-0.02em",
      color: "var(--ivory-50)",
      margin: "14px 0 0"
    }
  }, "Ready. Set. Go.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "clamp(28px,5vw,56px)"
    }
  }, pillars.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--gold-500)"
    }
  }, p.cue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 34,
      color: "var(--ivory-50)",
      margin: "10px 0 22px"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, p.qs.map(q => /*#__PURE__*/React.createElement("p", {
    key: q,
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 17,
      lineHeight: 1.5,
      color: "rgba(247,243,236,0.62)",
      margin: 0
    }
  }, q)))))));
}

/* -------------------------- Three archetypes ---------------------- */
function ArchetypeIcon({
  kind
}) {
  const stroke = "var(--gold-700)";
  const common = {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none"
  };
  if (kind === "dandelion") return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    stroke: stroke,
    strokeWidth: "1",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "28",
    y1: "30",
    x2: "28",
    y2: "50"
  }), Array.from({
    length: 14
  }).map((_, k) => {
    const a = k / 14 * Math.PI * 2;
    return /*#__PURE__*/React.createElement("line", {
      key: k,
      x1: "28",
      y1: "22",
      x2: 28 + Math.cos(a) * 15,
      y2: 22 + Math.sin(a) * 15
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "22",
    r: "1.6",
    fill: stroke
  }));
  if (kind === "lion") return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    stroke: stroke,
    strokeWidth: "1",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "28",
    r: "10"
  }), Array.from({
    length: 16
  }).map((_, k) => {
    const a = k / 16 * Math.PI * 2;
    return /*#__PURE__*/React.createElement("line", {
      key: k,
      x1: 28 + Math.cos(a) * 12,
      y1: 28 + Math.sin(a) * 12,
      x2: 28 + Math.cos(a) * 20,
      y2: 28 + Math.sin(a) * 20
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "27",
    r: "0.9",
    fill: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "27",
    r: "0.9",
    fill: stroke
  }));
  return /*#__PURE__*/React.createElement("svg", _extends({}, common, {
    stroke: stroke,
    strokeWidth: "1",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "28",
    y1: "10",
    x2: "28",
    y2: "46"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 18 C 20 20, 18 30, 26 34"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 24 C 36 26, 38 36, 30 40"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "10",
    r: "1.6",
    fill: stroke
  }));
}
function Archetypes() {
  const arch = [{
    kind: "dandelion",
    name: "The Dandelion",
    line: "Resilience as renewal. It grows even through concrete — letting go so that something else can take root elsewhere."
  }, {
    kind: "lion",
    name: "The Lion",
    line: "Courage, dignity, direction. Power that doesn't need to prove itself."
  }, {
    kind: "dandy",
    name: "The Dandy",
    line: "The art of being different with grace. Refinement without pretension; rebellion without noise."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(48px,8vw,110px) clamp(24px,6vw,88px)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "sage"
  }, "The three archetypes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(30px,4vw,52px)",
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "14px 0 clamp(36px,5vw,60px)",
      maxWidth: "20ch"
    }
  }, "The art of growing strong with grace"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "clamp(28px,4vw,48px)"
    }
  }, arch.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name
  }, /*#__PURE__*/React.createElement(ArchetypeIcon, {
    kind: a.kind
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 28,
      color: "var(--text-strong)",
      margin: "20px 0 12px"
    }
  }, a.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: "34ch"
    }
  }, a.line)))));
}

/* ---------------------------- Who it's for ------------------------ */
function WhoFor() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px,9vw,120px) clamp(24px,6vw,88px)",
      background: "var(--ivory-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "24ch",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "gold"
  }, "Who it's for")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 300,
      fontSize: "clamp(26px,3.4vw,44px)",
      lineHeight: 1.35,
      letterSpacing: "-0.01em",
      color: "var(--text-strong)",
      textAlign: "center",
      maxWidth: "20ch",
      margin: "22px auto 0"
    }
  }, "For those who have felt too much for the rooms they were placed in."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "clamp(16px,1.3vw,18px)",
      lineHeight: 1.7,
      color: "var(--text-body)",
      textAlign: "center",
      maxWidth: "50ch",
      margin: "28px auto 0"
    }
  }, "Professionals and organisations navigating complexity. Those tired of being managed rather than guided. Those who sense that something is missing from the usual playbook \u2014 and are ready to work truer, not faster."));
}

/* ------------------------------ Legacy ---------------------------- */
function Legacy() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px,9vw,120px) clamp(24px,6vw,88px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "sage"
  }, "Legacy"), /*#__PURE__*/React.createElement(SeedDivider, {
    style: {
      margin: "26px auto"
    },
    width: "120px"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 300,
      fontSize: "clamp(24px,3vw,38px)",
      lineHeight: 1.4,
      color: "var(--text-strong)",
      margin: "8px 0 0"
    }
  }, "Real impact isn't what we build. It's what continues to grow after we're gone."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "clamp(20px,2vw,28px)",
      color: "var(--gold-700)",
      margin: "32px 0 0"
    }
  }, "Wisdom in motion.")));
}

/* --------------------------- Call to action ----------------------- */
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(56px,9vw,130px) clamp(24px,6vw,88px)",
      background: "var(--charcoal-900)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 300,
      fontSize: "clamp(34px,5vw,64px)",
      letterSpacing: "-0.02em",
      color: "var(--ivory-50)",
      margin: 0
    }
  }, "Let's begin the conversation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      color: "rgba(247,243,236,0.6)",
      margin: "20px auto 40px",
      maxWidth: "40ch"
    }
  }, "No pitch. No pressure. Just a first, honest conversation about what is alive right now."), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg"
  }, "Begin the conversation"));
}

/* ------------------------------ Footer ---------------------------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "44px clamp(24px,6vw,88px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16,
      borderTop: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 20,
      color: "var(--text-strong)"
    }
  }, "Dandy", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-700)"
    }
  }, "Lion")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Reflection in motion"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    href: "#",
    muted: true
  }, "Coaching"), /*#__PURE__*/React.createElement(TextLink, {
    href: "#",
    muted: true
  }, "Consulting"), /*#__PURE__*/React.createElement(TextLink, {
    href: "#",
    muted: true
  }, "LinkedIn")));
}
function Site() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(SeedDivider, {
    style: {
      margin: "0 clamp(24px,6vw,88px)"
    }
  }), /*#__PURE__*/React.createElement(WhatWeDo, null), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(Archetypes, null), /*#__PURE__*/React.createElement(WhoFor, null), /*#__PURE__*/React.createElement(Legacy, null), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Site,
  SeedField
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.SeedDivider = __ds_scope.SeedDivider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GuidingQuestion = __ds_scope.GuidingQuestion;

})();
