import { services, capabilities } from '../data/portfolio'
import { getIcon } from './iconRegistry'
import { Container, Eyebrow, SectionHead, heading, section } from './ui'
import { cn } from '../lib/cn'

// Réparti les supports en 3 rangées (round-robin) pour le défilement.
const ROWS = 3
const capRows = Array.from({ length: ROWS }, (_, r) =>
  capabilities.filter((_, i) => i % ROWS === r),
)

export default function Services() {
  return (
    <section id="services" className={section}>
      <Container>
        <SectionHead eyebrow="Mes services" title="Ce que je peux créer pour vous">
          Une gamme complète de services d'infographie pour donner à votre marque
          une image forte, cohérente et professionnelle.
        </SectionHead>

        <div className="grid grid-cols-3 gap-[22px] max-[920px]:grid-cols-2 max-[560px]:grid-cols-1">
          {services.map((s) => {
            const Icon = getIcon(s.icon)
            return (
              <article
                key={s.id}
                className="group relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-surface p-[30px] transition-[transform,border-color,background] duration-200 hover:-translate-y-1.5 hover:border-white/15 hover:bg-surface-2 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-[linear-gradient(120deg,#8b5cf6,#ec4899)] before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100"
              >
                <span className="mb-5 inline-grid h-14 w-14 place-items-center rounded-[16px] bg-accent/15 text-accent">
                  <Icon size={26} variant="Bold" />
                </span>
                <h3 className={cn(heading, 'mb-2.5 text-[1.18rem]')}>{s.title}</h3>
                <p className="text-[0.95rem] text-text-dim">{s.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-[72px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[radial-gradient(50rem_24rem_at_50%_-20%,rgba(139,92,246,0.16),transparent_60%),#14111d] py-[46px]">
          <div className="mx-auto mb-[34px] max-w-[580px] px-6 text-center">
            <div className="mb-3">
              <Eyebrow>Catalogue complet</Eyebrow>
            </div>
            <h3 className={cn(heading, 'text-[clamp(1.35rem,2.8vw,1.8rem)]')}>
              Tout ce que je peux réaliser pour vous
            </h3>
            <p className="mt-2.5 text-[0.95rem] text-text-dim">
              Plus de 80 supports print, numériques et personnalisés — une idée, je la concrétise.
            </p>
          </div>

          <div className="group flex flex-col gap-3.5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
            {capRows.map((row, r) => (
              <div key={r} className="flex overflow-hidden motion-reduce:overflow-x-auto">
                <div
                  className={cn(
                    'flex w-max shrink-0 gap-3 pr-3 animate-[cap-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused] max-[560px]:[animation-duration:42s]',
                    r % 2 ? '[animation-direction:reverse]' : '',
                  )}
                >
                  {[...row, ...row].map((item, i) => (
                    <span
                      key={i}
                      aria-hidden={i >= row.length}
                      className="inline-flex items-center gap-[9px] whitespace-nowrap rounded-full border border-white/[0.08] bg-surface px-4 py-[9px] text-[0.88rem] font-medium text-text transition-[color,border-color,background] duration-200 hover:border-accent hover:bg-accent/15 hover:text-text-h max-[560px]:px-[13px] max-[560px]:py-2 max-[560px]:text-[0.82rem]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
