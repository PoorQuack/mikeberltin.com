import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d4af37',
          light: '#e8c94d',
          dark: '#b8960f',
          metallic: '#c9a84c',
        },
        charcoal: {
          DEFAULT: '#0a0a0a',
          light: '#111111',
          medium: '#1a1a1a',
        },
        panel: {
          DEFAULT: '#1f1f1f',
          hover: '#252525',
          border: '#2a2a2a',
        },
        surface: {
          DEFAULT: '#0a0a0a',
          secondary: '#111111',
          card: '#1f1f1f',
          elevated: '#252525',
        },
        muted: {
          DEFAULT: '#888888',
          dim: '#555555',
          light: '#aaaaaa',
        },
      },
      fontFamily: {
        sans: ["'Inter'", 'system-ui', 'sans-serif'],
        display: ["'Inter'", 'system-ui', 'sans-serif'],
        body: ["'Inter'", 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
