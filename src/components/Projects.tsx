import { useMemo, useState } from 'react'
import { SearchNormal1, CloseCircle, ArrowLeft2, ArrowRight2 } from '../icons'
import { projects, categories, type Project } from '../data/portfolio'
import { Container, SectionHead, heading } from './ui'
import { cn } from '../lib/cn'

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
    <section id="realisations" className="py-[68px] min-[720px]:py-24">
      <Container>
        <SectionHead eyebrow="Portfolio" title="Mes réalisations">
          Une sélection de projets réalisés pour mes clients : identité visuelle,
          print, faire-part et personnalisation.
        </SectionHead>

        <div className="mb-11 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                'cursor-pointer rounded-full border px-[18px] py-[9px] text-[0.88rem] font-medium transition-[color,border-color,background] duration-200',
                active === c
                  ? 'border-transparent bg-brand text-white'
                  : 'border-white/[0.08] bg-surface text-text hover:border-white/15 hover:text-text-h',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-[22px] max-[920px]:grid-cols-2 max-[560px]:grid-cols-1">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => open(p)}
              className="group block cursor-pointer overflow-hidden rounded-[18px] border border-white/[0.08] bg-surface p-0 text-left transition-[transform,border-color] duration-200 hover:-translate-y-1.5 hover:border-white/15"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-soft">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[0.4s] group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 grid place-items-center bg-bg/50 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <SearchNormal1 size={22} />
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 px-[18px] py-4">
                <div>
                  <h3 className={cn(heading, 'text-[1.02rem]')}>{p.title}</h3>
                  <span className="text-[0.82rem] text-text-dim">{p.client}</span>
                </div>
                <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-[5px] text-[0.7rem] font-semibold text-accent">
                  {p.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </Container>

      {current && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] grid animate-[fade_0.2s_ease] place-items-center bg-[rgba(7,5,12,0.9)] p-6 backdrop-blur-[8px]"
        >
          <button
            aria-label="Fermer"
            onClick={close}
            className="absolute right-6 top-[22px] cursor-pointer border-0 bg-transparent text-white opacity-80 transition-opacity duration-200 hover:opacity-100"
          >
            <CloseCircle size={32} />
          </button>
          <button
            aria-label="Précédent"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            className="absolute left-[18px] top-1/2 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/15 bg-surface text-white transition-colors duration-200 hover:bg-surface-2 max-[560px]:left-2 max-[560px]:h-10 max-[560px]:w-10"
          >
            <ArrowLeft2 size={28} />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[86vh] max-w-[min(92vw,760px)] flex-col"
          >
            <img
              src={current.image}
              alt={current.title}
              className="mx-auto max-h-[76vh] w-auto rounded-[14px] border border-white/15 object-contain"
            />
            <figcaption className="mt-4 text-center">
              <strong className="block text-[1.05rem] text-text-h">{current.title}</strong>
              <span className="text-[0.85rem] text-text-dim">
                {current.client} · {current.category}
              </span>
            </figcaption>
          </figure>

          <button
            aria-label="Suivant"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            className="absolute right-[18px] top-1/2 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/15 bg-surface text-white transition-colors duration-200 hover:bg-surface-2 max-[560px]:right-2 max-[560px]:h-10 max-[560px]:w-10"
          >
            <ArrowRight2 size={28} />
          </button>
        </div>
      )}
    </section>
  )
}
