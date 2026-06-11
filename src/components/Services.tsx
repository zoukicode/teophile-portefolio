import { services, capabilities } from '../data/portfolio'
import { getIcon } from './iconRegistry'
import './Services.css'

// Réparti les supports en 3 rangées (round-robin) pour le défilement.
const ROWS = 3
const capRows = Array.from({ length: ROWS }, (_, r) =>
  capabilities.filter((_, i) => i % ROWS === r),
)

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Mes services</span>
          <h2>Ce que je peux créer pour vous</h2>
          <p>
            Une gamme complète de services d'infographie pour donner à votre marque
            une image forte, cohérente et professionnelle.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => {
            const Icon = getIcon(s.icon)
            return (
              <article key={s.id} className="service-card">
                <span className="service-card__icon">
                  <Icon size={26} variant="Bold" />
                </span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            )
          })}
        </div>

        <div className="capabilities">
          <div className="capabilities__head">
            <span className="eyebrow">Catalogue complet</span>
            <h3>Tout ce que je peux réaliser pour vous</h3>
            <p>Plus de 80 supports print, numériques et personnalisés — une idée, je la concrétise.</p>
          </div>

          <div className="marquee">
            {capRows.map((row, r) => (
              <div
                key={r}
                className={`marquee__row ${r % 2 ? 'marquee__row--reverse' : ''}`}
              >
                <div className="marquee__track">
                  {[...row, ...row].map((item, i) => (
                    <span key={i} className="cap-chip" aria-hidden={i >= row.length}>
                      <span className="cap-chip__dot" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
