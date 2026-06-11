import { ArrowRight, Star1, Location } from '../icons'
import { profile, stats } from '../data/portfolio'
import profilePhoto from '../assets/portfolio/profile.png'
import { Container, btn, btnPrimary, btnGhost, heading } from './ui'
import { cn } from '../lib/cn'

export default function Hero() {
  return (
    <section id="accueil" className="relative pb-[90px] pt-[150px]">
      <Container className="grid grid-cols-[1.15fr_0.85fr] items-center gap-[60px] max-[920px]:grid-cols-1 max-[920px]:gap-[50px]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-accent/15 px-4 py-[7px] text-[0.85rem] font-semibold text-text-h">
            <Star1 size={15} variant="Bold" className="text-accent" />
            {profile.role}
          </span>

          <h1 className={cn(heading, 'mt-[22px] text-[clamp(2.1rem,5vw,3.6rem)] font-extrabold')}>
            Bonjour, je suis <span className="text-gradient">{profile.name}</span>.
            <br />
            {profile.tagline}
          </h1>

          <p className="mt-[22px] max-w-[520px] text-[1.05rem] text-text-dim">
            Infographiste basé à {profile.location}, j'accompagne marques et
            particuliers : logos, affiches, cartes de visite, faire-part et
            personnalisation textile — avec créativité et exigence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a href="#realisations" className={cn(btn, btnPrimary)}>
              Voir mes réalisations
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className={cn(btn, btnGhost)}>
              Me contacter
            </a>
          </div>

          <ul className="mt-12 flex gap-10 max-[480px]:gap-[26px]">
            {stats.map((s) => (
              <li key={s.label} className="flex flex-col">
                <strong className="text-[1.9rem] font-extrabold text-text-h max-[480px]:text-[1.5rem]">
                  {s.value}
                </strong>
                <span className="text-[0.85rem] text-text-dim">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative grid place-items-center max-[920px]:order-first">
          <div
            className="absolute inset-[8%_12%] rounded-full bg-brand opacity-45 blur-[60px]"
            aria-hidden="true"
          />
          <div className="relative aspect-[4/5] w-[min(100%,380px)] overflow-hidden rounded-[26px] border border-white/15 bg-surface shadow-card max-[920px]:w-[min(100%,320px)]">
            <img
              src={profilePhoto}
              alt={`Portrait de ${profile.name}`}
              className="h-full w-full origin-[center_15%] scale-[2.4] object-cover object-[top_center]"
            />
          </div>
          <div className="absolute bottom-[18px] left-0 flex items-center gap-3 rounded-[14px] border border-white/15 bg-surface/85 px-4 py-3 shadow-card backdrop-blur-[10px]">
            <Location size={18} variant="Bold" className="text-accent" />
            <div>
              <strong className="block text-[0.9rem] text-text-h">Infographiste à Lomé</strong>
              <span className="text-[0.78rem] text-text-dim">Disponible pour vos projets</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
