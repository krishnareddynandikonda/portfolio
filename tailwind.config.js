/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wine: '#4A0712',
        maroon: '#6B0F1A',
        gold: '#C9A227',
        'gold-soft': '#E6C766',
        ivory: '#FFF8E7',
        sandalwood: '#D8B98A',
        emerald: '#234D3C',
        espresso: '#24140F',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lora', 'serif'],
        accent: ['Marcellus', 'serif'],
      },
      boxShadow: {
        luxe: '0 24px 60px rgba(74,7,18,0.28), inset 0 1px 0 rgba(255,255,255,0.18)',
        gold: '0 14px 40px rgba(201,162,39,0.35)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '15%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-120vh) translateX(40px)', opacity: '0' },
        },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        shimmer: { '100%': { backgroundPosition: '200% center' } },
      },
      animation: {
        floatUp: 'floatUp linear infinite',
        spinSlow: 'spinSlow 60s linear infinite',
        spinRev: 'spinSlow 90s linear infinite reverse',
      },
    },
  },
  plugins: [],
}
