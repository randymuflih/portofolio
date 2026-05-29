import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#07090D',
        'surface-1': 'rgba(255,255,255,0.05)',
        'surface-2': 'rgba(255,255,255,0.09)',
        muted: '#4E5A6A',
        accent: '#A8956A',
        'text-soft': '#A8B5C4',
        'text-main': '#EEF2F7',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
