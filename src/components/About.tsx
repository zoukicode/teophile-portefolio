import { TickCircle, Award, Teacher } from '../icons'
import { profile } from '../data/portfolio'
import profilePhoto from '../assets/portfolio/profile.png'
import { Container, Eyebrow, heading, section } from './ui'
import { cn } from '../lib/cn'

const highlights = [
  { icon: Award, text: "5 ans d'expérience en infographie" },
  { icon: Teacher, text: 'Formation maquette & impression (2 ans)' },
  { icon: TickCircle, text: 'Du concept à la livraison print & web' },
]

export default function About() {
  return (
    <section id="apropos" className={section}>
      <Container className="grid grid-cols-[0.9fr_1.1fr] items-center gap-16 max-[880px]:grid-cols-1 max-[880px]:gap-[54px]">
        <div className="relative max-[880px]:mx-auto max-[880px]:max-w-[380px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/[0.08] shadow-card after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent_55%,rgba(12,10,18,0.55))] after:content-['']">
            <img
              src={profilePhoto}
              alt={`${profile.name}, infographiste`}
              className="h-full w-full object-cover object-[top_center] origin-[center_15%] scale-[2.4]"
            />
          </div>
          <div className="absolute -right-[18px] bottom-7 flex flex-col items-center rounded-[18px] bg-brand px-[22px] py-[18px] text-white shadow-[0_18px_40px_-14px_rgba(139,92,246,0.7)]">
            <strong className="text-[2rem] font-extrabold leading-none">5+</strong>
            <span className="mt-1 max-w-[90px] text-center text-[0.72rem] opacity-90">
              années d'expérience
            </span>
          </div>
        </div>

        <div>
          <Eyebrow>À propos de moi</Eyebrow>
          <h2 className={cn(heading, 'mt-1.5 max-w-[480px] text-[clamp(1.7rem,3.5vw,2.4rem)]')}>
            Un passionné du graphisme, au service de vos idées.
          </h2>

          {profile.bio.map((p, i) => (
            <p key={i} className="mt-[18px] text-text-dim">
              {p}
            </p>
          ))}

          <ul className="mt-7 grid gap-3.5">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 font-medium text-text-h">
                <Icon size={22} variant="Bold" className="shrink-0 text-accent" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
