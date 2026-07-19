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
        base: 'var(--color-base)',
        surface: 'var(--color-surface)',
        elevate: 'var(--color-elevate)',
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        accent: {
          primary: 'var(--color-accent-primary)',
          secondary: 'var(--color-accent-secondary)',
        },
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
        '12': '96px',
        '16': '128px',
      },
      fontSize: {
        xs: '0.8rem', // 12.8px
        base: '1rem', // 16px
        xl: '1.25rem', // 20px
        '2xl': '1.563rem', // 25px
        '3xl': '1.953rem', // 31px
        '4xl': '2.441rem', // 39px
        '5xl': '3.052rem', // 49px
        '6xl': '3.815rem', // 61px
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      }
    },
  },
  plugins: [],
};
