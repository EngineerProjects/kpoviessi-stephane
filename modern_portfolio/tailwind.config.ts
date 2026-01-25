import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: 'var(--primary-light)',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: 'var(--primary)',
          600: 'var(--primary)',
          700: 'var(--primary-hover)',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        'secondary': {
          50: 'var(--secondary-light)',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: 'var(--secondary)',
          600: 'var(--secondary)',
          700: 'var(--secondary-hover)',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        'accent': {
          50: 'var(--accent-light)',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: 'var(--accent)',
          600: 'var(--accent)',
          700: 'var(--accent-hover)',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        'dark': {
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#808080',
          600: '#666666',
          700: '#4d4d4d',
          800: '#333333',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        'light': {
          100: '#ffffff',
          200: '#fafafa',
          300: '#f5f5f5',
          400: '#f0f0f0',
          500: '#e6e6e6',
          600: '#d9d9d9',
          700: '#cccccc',
          800: '#b3b3b3',
          900: '#999999',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      backgroundColor: {
        'page': 'var(--background)',
      },
      textColor: {
        'page': 'var(--foreground)',
      },
    },
  },
  plugins: [],
}

export default config