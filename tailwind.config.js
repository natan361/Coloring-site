/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F0F10',
          2: '#18181A',
          3: '#232327',
        },
        paper: {
          DEFAULT: '#F3F2EE',
          card: '#FFFFFF',
          panel: '#EBEAE5',
        },
        ember: {
          DEFAULT: '#C6F53D',
          deep: '#AEE028',
          soft: '#E4FA9E',
        },
        rust: '#4F6010',
        line: {
          DEFAULT: '#E3E1D9',
          dark: 'rgba(255,255,255,0.08)',
        },
        muted: {
          onlight: '#585754',
          ondark: '#ADACA8',
        },
      },
      fontFamily: {
        display: ['"Rubik"', '"Assistant"', 'sans-serif'],
        body: ['"Assistant"', 'sans-serif'],
      },
      borderRadius: {
        card: '28px',
        pill: '999px',
      },
      boxShadow: {
        ember: '0 18px 40px -12px rgba(198, 245, 61, 0.45)',
        card: '0 24px 60px -24px rgba(15, 15, 16, 0.35)',
        soft: '0 12px 30px -14px rgba(15, 15, 16, 0.16)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
