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
          DEFAULT: '#ffffff',
          light: '#f3f4f6',
          medium: '#f9fafb',
        },
        panel: {
          DEFAULT: '#ffffff',
          hover: '#f9fafb',
          border: '#e5e7eb',
        },
        surface: {
          DEFAULT: '#ffffff',
          secondary: '#f3f4f6',
          card: '#ffffff',
          elevated: '#f9fafb',
        },
        muted: {
          DEFAULT: '#4b5563',
          dim: '#6b7280',
          light: '#9ca3af',
        },
        dark: {
          DEFAULT: '#111827',
          soft: '#1f2937',
        },
        yellow: {
          construction: '#facc15',
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
