/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // editorial luxury palette
        paper: '#F6F1E7',
        ink: '#1E1A17',
        wine: { DEFAULT: '#4E141B', deep: '#360D12' },
        brass: { DEFAULT: '#B08D4C', soft: '#CBB07A' },
        blush: '#E8C9C2',
        olive: '#7E8A6A',
        // legacy aliases remapped to the new palette so older markup stays calm
        maroon: '#4E141B',
        gold: '#B08D4C',
        'gold-soft': '#CBB07A',
        cream: '#F6F1E7',
        ivory: '#F6F1E7',
        sunflower: '#CBB07A',
        sunshine: '#CBB07A',
        turmeric: '#B08D4C',
        saffron: '#B08D4C',
        kumkum: '#8C2B2F',
        peacock: '#5A6B6B',
        lotus: '#E8C9C2',
        emerald: '#7E8A6A',
      },
      fontFamily: {
        heading: ['Fraunces', '"Cormorant Garamond"', 'serif'],
        display: ['Fraunces', '"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        accent: ['Inter', 'system-ui', 'sans-serif'],
        telugu: ['"Noto Serif Telugu"', '"Noto Sans Telugu"', 'serif'],
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
        sway: {
          '0%, 100%': { transform: 'translateY(0) rotate(-6deg)' },
          '50%': { transform: 'translateY(-10px) rotate(6deg)' },
        },
        fall: {
          '0%': { transform: 'translateY(-12vh) translateX(0) rotate(0deg)', opacity: '0' },
          '8%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(112vh) translateX(60px) rotate(320deg)', opacity: '0' },
        },
        fallAlt: {
          '0%': { transform: 'translateY(-12vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(112vh) translateX(-50px) rotate(-300deg)', opacity: '0' },
        },
        drift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '120px 0' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 70s linear infinite',
        spinRev: 'spinSlow 95s linear infinite reverse',
        glow: 'glow 3.5s ease-in-out infinite',
        sway: 'sway 6s ease-in-out infinite',
        spin12: 'spinSlow 12s linear infinite',
      },
    },
  },
  plugins: [],
}
