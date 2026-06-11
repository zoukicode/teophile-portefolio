import { Sms, Call, Location, ArrowRight } from '../icons'
import { profile } from '../data/portfolio'
import { getIcon } from './iconRegistry'
import { Container, Eyebrow, heading, section } from './ui'
import { cn } from '../lib/cn'

const channels = [
  { icon: Sms, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Call, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Location, label: 'Localisation', value: profile.location, href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className={section}>
      <Container>
        <div className="grid grid-cols-[1fr_0.85fr] items-center gap-[50px] rounded-[28px] border border-white/[0.08] bg-[radial-gradient(40rem_30rem_at_100%_0%,rgba(236,72,153,0.12),transparent_60%),#191523] p-[54px] shadow-card max-[820px]:grid-cols-1 max-[820px]:gap-9 max-[820px]:p-[34px] max-[480px]:p-5">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className={cn(heading, 'mt-1.5 max-w-[420px] text-[clamp(1.7rem,3.5vw,2.4rem)]')}>
              Donnons vie à votre prochain projet.
            </h2>
            <p className="mt-4 max-w-[420px] text-text-dim">
              Un logo, une affiche, un faire-part ou une personnalisation ?
              Parlons-en — je vous réponds avec plaisir.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {profile.socials.map((s) => {
                const Icon = getIcon(s.icon)
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-[46px] w-[46px] place-items-center rounded-[12px] border border-white/[0.08] bg-surface-2 text-text-h transition-all duration-200 hover:-translate-y-[3px] hover:border-transparent hover:bg-brand"
                  >
                    <Icon size={20} variant="Bold" />
                  </a>
                )
              })}
            </div>
          </div>

          <ul className="grid gap-3.5">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-4 rounded-[12px] border border-white/[0.08] bg-bg-soft p-[18px_20px] transition-all duration-200 hover:translate-x-1 hover:border-white/15 max-[480px]:gap-3 max-[480px]:px-4 max-[480px]:py-3.5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] bg-accent/15 text-accent">
                    <Icon size={22} variant="Bold" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <small className="text-[0.78rem] text-text-dim">{label}</small>
                    <strong className="break-words text-[0.98rem] text-text-h max-[480px]:text-[0.9rem]">
                      {value}
                    </strong>
                  </span>
                  <ArrowRight size={18} className="ml-auto shrink-0 text-text-dim" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
