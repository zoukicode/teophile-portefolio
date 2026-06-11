import { useEffect, useState } from 'react'
import { HambergerMenu, CloseCircle } from '../icons'
import { profile } from '../data/portfolio'
import './Navbar.css'

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#accueil" className="nav__brand" onClick={() => setOpen(false)}>
          {profile.name}
          <span>.</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>
            Travaillons ensemble
          </a>
        </nav>

        <button
          className="nav__burger"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseCircle size={26} /> : <HambergerMenu size={26} />}
        </button>
      </div>
    </header>
  )
}
