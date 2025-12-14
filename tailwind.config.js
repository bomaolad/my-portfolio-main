/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Primary colors - Main brand color (Deep teal/blue)
        primary: {
          DEFAULT: '#0d9488', // teal-600
          light: '#14b8a6',   // teal-500
          dark: '#0f766e',    // teal-700
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Secondary colors - Warm accent (Amber/Gold)
        secondary: {
          DEFAULT: '#d97706', // amber-600
          light: '#f59e0b',   // amber-500
          dark: '#b45309',    // amber-700
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Accent colors - For highlights (Rose/Pink)
        accent: {
          DEFAULT: '#e11d48', // rose-600
          light: '#f43f5e',   // rose-500
          dark: '#be123c',    // rose-700
        },
        // Surface colors - Backgrounds (using CSS variables for theme switching)
        surface: {
          DEFAULT: 'var(--color-surface)',
          light: 'var(--color-surface-light)',
          lighter: 'var(--color-surface-lighter)',
          card: 'var(--color-surface-light)',
          hover: 'var(--color-surface-lighter)',
        },
        // Text colors (using CSS variables for theme switching)
        text: {
          DEFAULT: 'var(--color-text-primary)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: '#0f172a',
        },
        // Border colors (using CSS variables for theme switching)
        border: {
          DEFAULT: 'var(--color-border)',
          light: 'var(--color-border-light)',
          muted: 'var(--color-surface-light)',
        },
        // Muted backgrounds
        muted: {
          DEFAULT: 'var(--color-surface-light)',
          foreground: 'var(--color-text-muted)',
        },
      },
    },
  },
  plugins: [],
};
