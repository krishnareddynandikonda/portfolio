import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'About', href: '#intro' },
  { label: 'Story', href: '#story' },
  { label: 'Profile', href: '#profile' },
  { label: 'Family', href: '#family' },
  { label: 'Horoscope', href: '#horoscope' },
  { label: 'Contact', href: '#contact' },
]

export default function TopNav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
        solid ? 'border-b border-brass/20 bg-wine-deep/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#hero" className="font-heading text-xl font-semibold tracking-[0.2em] text-brass-soft" aria-label="Home">
          NKR
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[0.72rem] uppercase tracking-[0.22em] text-paper/70 transition-colors hover:text-paper"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
