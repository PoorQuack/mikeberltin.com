import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B0B0B5',
          light: '#E5E5E8',
          dark: '#8A8A90',
          metallic: '#C0C0C5',
        },
        charcoal: {
          DEFAULT: 'var(--color-charcoal)',
          light: 'var(--color-charcoal-light)',
          medium: 'var(--color-charcoal-medium)',
        },
        panel: {
          DEFAULT: 'var(--color-panel)',
          hover: 'var(--color-panel-hover)',
          border: 'var(--color-panel-border)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          secondary: 'var(--color-surface-secondary)',
          card: 'var(--color-surface-card)',
          elevated: 'var(--color-surface-elevated)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          dim: 'var(--color-muted-dim)',
          light: 'var(--color-muted-light)',
        },
        dark: {
          DEFAULT: 'var(--color-dark)',
          soft: 'var(--color-dark-soft)',
        },
        yellow: {
          construction: '#facc15',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
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
