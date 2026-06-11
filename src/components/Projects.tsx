import { useMemo, useState } from 'react'
import { SearchNormal1, CloseCircle, ArrowLeft2, ArrowRight2 } from '../icons'
import { projects, categories, type Project } from '../data/portfolio'
import './Projects.css'

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>('Tous')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      active === 'Tous'
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  )

  const open = (p: Project) => setLightbox(filtered.indexOf(p))
  const close = () => setLightbox(null)
  const step = (dir: number) =>
    setLightbox((i) =>
      i === null ? i : (i + dir + filtered.length) % filtered.length,
    )

  const current = lightbox === null ? null : filtered[lightbox]

  return (
    <section id="realisations" className="section projects">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2>Mes réalisations</h2>
          <p>
            Une sélection de projets réalisés pour mes clients : identité visuelle,
            print, faire-part et personnalisation.
          </p>
        </div>

        <div className="projects__filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter ${active === c ? 'is-active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((p) => (
            <button key={p.id} className="project" onClick={() => open(p)}>
              <div className="project__img">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="project__zoom">
                  <SearchNormal1 size={22} />
                </span>
              </div>
              <div className="project__meta">
                <div>
                  <h3>{p.title}</h3>
                  <span>{p.client}</span>
                </div>
                <span className="project__tag">{p.category}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox__close" aria-label="Fermer" onClick={close}>
            <CloseCircle size={32} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Précédent"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
          >
            <ArrowLeft2 size={28} />
          </button>

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.image} alt={current.title} />
            <figcaption>
              <strong>{current.title}</strong>
              <span>
                {current.client} · {current.category}
              </span>
            </figcaption>
          </figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Suivant"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
          >
            <ArrowRight2 size={28} />
          </button>
        </div>
      )}
    </section>
  )
}
