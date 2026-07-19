/**
 * Design tokens — single source of truth.
 * Values mirror tailwind.config.js and index.css.
 * Use these when you need raw values outside of Tailwind classes (e.g. Framer Motion styles).
 */

export const tokens = {
  colors: {
    dark: {
      base: '#0B1121',
      surface: '#131B2F',
      elevate: '#1E293B',
      textPrimary: '#F8FAFC',
      textSecondary: '#94A3B8',
      textMuted: '#64748B',
      accentPrimary: '#2DD4BF',
      accentSecondary: '#FBBF24',
    },
    light: {
      base: '#FAFAFA',
      surface: '#FFFFFF',
      elevate: '#F1F5F9',
      textPrimary: '#0F172A',
      textSecondary: '#475569',
      textMuted: '#CBD5E1',
      accentPrimary: '#0D9488',
      accentSecondary: '#D97706',
    },
  },
  spacing: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    6: '48px',
    8: '64px',
    12: '96px',
    16: '128px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  fontSize: {
    xs: '0.8rem',
    base: '1rem',
    xl: '1.25rem',
    '2xl': '1.563rem',
    '3xl': '1.953rem',
    '4xl': '2.441rem',
    '5xl': '3.052rem',
    '6xl': '3.815rem',
  },
};

/** Shared Framer Motion variants — import from here to keep animation consistent */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
