import { ArrowRight, Star1, Location } from '../icons'
import { profile, stats } from '../data/portfolio'
import profilePhoto from '../assets/portfolio/profile.png'
import './Hero.css'

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <Star1 size={15} variant="Bold" />
            {profile.role}
          </span>

          <h1 className="hero__title">
            Bonjour, je suis <span className="hero__name">{profile.name}</span>.
            <br />
            {profile.tagline}
          </h1>

          <p className="hero__desc">
            Infographiste basé à {profile.location}, j'accompagne marques et
            particuliers : logos, affiches, cartes de visite, faire-part et
            personnalisation textile — avec créativité et exigence.
          </p>

          <div className="hero__actions">
            <a href="#realisations" className="btn btn-primary">
              Voir mes réalisations
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Me contacter
            </a>
          </div>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__photo">
            <img src={profilePhoto} alt={`Portrait de ${profile.name}`} />
          </div>
          <div className="hero__chip">
            <Location size={18} variant="Bold" />
            <div>
              <strong>Infographiste à Lomé</strong>
              <span>Disponible pour vos projets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
