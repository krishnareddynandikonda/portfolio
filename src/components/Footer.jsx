import { SunDivider } from './shared.jsx'

export default function Footer({ data }) {
  return (
    <footer className="petal-bg texture relative border-t border-saffron/25 py-14 text-center">
      <div className="relative z-10 mx-auto max-w-xl px-6">
        <p className="te text-3xl font-bold text-saffron">{data.blessing}</p>
        <h3 className="mt-2 font-heading text-2xl font-semibold text-maroon">{data.name}</h3>
        <div className="mt-5 flex justify-center">
          <SunDivider />
        </div>
        <p className="mt-5 font-display text-lg italic text-ink/70">{data.line}</p>
      </div>
    </footer>
  )
}
