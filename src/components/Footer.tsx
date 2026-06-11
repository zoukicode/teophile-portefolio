import { ArrowUp2 } from '../icons'
import { profile } from '../data/portfolio'
import { Container } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-7">
      <Container className="flex flex-wrap items-center justify-between gap-[18px] max-[560px]:justify-center max-[560px]:text-center">
        <a href="#accueil" className="text-[1.2rem] font-extrabold text-text-h">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <p className="text-[0.85rem] text-text-dim">
          © {new Date().getFullYear()} {profile.name} — {profile.role}. Tous droits réservés.
        </p>

        <a
          href="#accueil"
          aria-label="Remonter en haut"
          className="grid h-[42px] w-[42px] place-items-center rounded-[12px] border border-white/[0.08] bg-surface text-text-h transition-all duration-200 hover:-translate-y-[3px] hover:border-transparent hover:bg-brand"
        >
          <ArrowUp2 size={20} />
        </a>
      </Container>
    </footer>
  )
}
