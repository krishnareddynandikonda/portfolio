/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sunflower: '#F5B700',
        sunshine: '#FFC93C',
        saffron: '#EE7B0C',
        peacock: '#0E7C9B',
        lotus: '#E5639B',
        emerald: '#1E7A52',
        maroon: '#7A1220',
        gold: '#C9A227',
        'gold-soft': '#E6C766',
        cream: '#FFFBEF',
        ink: '#3A2412',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Lora', 'serif'],
        accent: ['Cinzel', 'serif'],
        telugu: ['"Baloo Tammudu 2"', '"Noto Sans Telugu"', 'sans-serif'],
        'telugu-body': ['"Noto Sans Telugu"', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 18px 50px rgba(238, 123, 12, 0.18), inset 0 1px 0 rgba(255,255,255,0.7)',
        sun: '0 14px 40px rgba(245, 183, 0, 0.35)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '0' },
          '12%': { opacity: '0.9' },
          '88%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-115vh) translateX(50px) rotate(220deg)', opacity: '0' },
        },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        glow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 70s linear infinite',
        spinRev: 'spinSlow 95s linear infinite reverse',
        glow: 'glow 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
