import { Sms, Call, Location, ArrowRight } from '../icons'
import { profile } from '../data/portfolio'
import { getIcon } from './iconRegistry'
import './Contact.css'

const channels = [
  { icon: Sms, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Call, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Location, label: 'Localisation', value: profile.location, href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card">
          <div className="contact__intro">
            <span className="eyebrow">Contact</span>
            <h2>Donnons vie à votre prochain projet.</h2>
            <p>
              Un logo, une affiche, un faire-part ou une personnalisation ?
              Parlons-en — je vous réponds avec plaisir.
            </p>

            <div className="contact__socials">
              {profile.socials.map((s) => {
                const Icon = getIcon(s.icon)
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="contact__social"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon size={20} variant="Bold" />
                  </a>
                )
              })}
            </div>
          </div>

          <ul className="contact__channels">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a href={href}>
                  <span className="contact__channel-icon">
                    <Icon size={22} variant="Bold" />
                  </span>
                  <span className="contact__channel-text">
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                  <ArrowRight size={18} className="contact__channel-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
