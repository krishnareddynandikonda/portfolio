import { GoldDivider } from './shared.jsx'

export default function Footer({ data }) {
  return (
    <footer className="silk-maroon relative border-t border-gold/20 py-14 text-center">
      <div className="relative z-10 mx-auto max-w-xl px-6">
        <h3 className="font-heading text-2xl font-semibold gold-text">{data.name}</h3>
        <div className="mt-5 flex justify-center">
          <GoldDivider />
        </div>
        <p className="mt-5 font-display text-lg italic text-ivory/70">{data.line}</p>
      </div>
    </footer>
  )
}
