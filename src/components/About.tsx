import { TickCircle, Award, Teacher } from '../icons'
import { profile } from '../data/portfolio'
import profilePhoto from '../assets/portfolio/profile.png'
import './About.css'

const highlights = [
  { icon: Award, text: "5 ans d'expérience en infographie" },
  { icon: Teacher, text: 'Formation maquette & impression (2 ans)' },
  { icon: TickCircle, text: 'Du concept à la livraison print & web' },
]

export default function About() {
  return (
    <section id="apropos" className="section about">
      <div className="container about__inner">
        <div className="about__media">
          <div className="about__frame">
            <img src={profilePhoto} alt={`${profile.name}, infographiste`} />
          </div>
          <div className="about__exp">
            <strong>5+</strong>
            <span>années d'expérience</span>
          </div>
        </div>

        <div className="about__content">
          <span className="eyebrow">À propos de moi</span>
          <h2>Un passionné du graphisme, au service de vos idées.</h2>

          {profile.bio.map((p, i) => (
            <p key={i} className="about__text">
              {p}
            </p>
          ))}

          <ul className="about__list">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon size={22} variant="Bold" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
