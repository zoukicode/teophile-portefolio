import { useEffect, useState } from 'react'
import { HambergerMenu, CloseCircle } from '../icons'
import { profile } from '../data/portfolio'
import { Container, btn, btnPrimary } from './ui'
import { cn } from '../lib/cn'

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
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background,border-color,padding] duration-300',
        scrolled
          ? 'border-b-white/[0.08] bg-bg/[0.78] py-2.5 backdrop-blur-[14px]'
          : 'py-4',
      )}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#accueil"
          className="text-[1.35rem] font-extrabold tracking-[-0.03em] text-text-h"
          onClick={() => setOpen(false)}
        >
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <nav
          className={cn(
            'flex items-center gap-[30px]',
            'max-[860px]:fixed max-[860px]:inset-y-0 max-[860px]:left-auto max-[860px]:right-0 max-[860px]:w-[min(78vw,320px)] max-[860px]:flex-col max-[860px]:items-start max-[860px]:justify-center max-[860px]:gap-[26px] max-[860px]:border-l max-[860px]:border-white/[0.08] max-[860px]:bg-bg-soft max-[860px]:p-10 max-[860px]:transition-transform max-[860px]:duration-300',
            open ? 'max-[860px]:translate-x-0' : 'max-[860px]:translate-x-full',
          )}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[0.95rem] font-medium text-text transition-colors hover:text-text-h max-[860px]:text-[1.1rem]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(btn, btnPrimary, 'px-5 py-2.5 text-[0.9rem] max-[860px]:mt-1.5')}
            onClick={() => setOpen(false)}
          >
            Travaillons ensemble
          </a>
        </nav>

        <button
          className="hidden cursor-pointer border-0 bg-transparent text-text-h max-[860px]:inline-flex"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseCircle size={26} /> : <HambergerMenu size={26} />}
        </button>
      </Container>
    </header>
  )
}
