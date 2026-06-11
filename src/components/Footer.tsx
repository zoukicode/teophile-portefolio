import { ArrowUp2 } from '../icons'
import { profile } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#accueil" className="footer__brand">
          {profile.name}
          <span>.</span>
        </a>

        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name} — {profile.role}. Tous droits réservés.
        </p>

        <a href="#accueil" className="footer__top" aria-label="Remonter en haut">
          <ArrowUp2 size={20} />
        </a>
      </div>
    </footer>
  )
}
