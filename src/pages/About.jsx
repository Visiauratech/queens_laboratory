import ScrollReveal from '../components/layout/ScrollReveal'
import { LAB } from '../utils/constants'
import { IMAGES } from '../utils/images'
import { IconMail, IconPerson, IconPhone, IconPin, IconWhatsApp } from '../components/ui/Icons'
import './About.css'

const values = [
  {
    title: 'Clinical Precision',
    text: 'Every assay follows disciplined quality checks so clinicians and families receive trustworthy results.',
  },
  {
    title: 'Patient-first Access',
    text: '24×7 home collection, clear communication and multi-channel support remove friction from care.',
  },
  {
    title: 'Madurai Rooted',
    text: 'Based at Bharathi Nilayam, Jaihindpuram — serving neighbourhoods with responsive local diagnostics.',
  },
]

export default function About() {
  return (
    <div className="about page-shell">
      <section className="page-hero about-hero">
        <div className="about-hero__media" aria-hidden="true">
          <img src={IMAGES.heroAbout} alt="" />
          <div className="about-hero__shade" />
        </div>
        <div className="grid-bg" />
        <div className="container">
          <ScrollReveal>
            <p className="section-label">About Us</p>
            <h1 className="page-hero__title">
              Queens Laboratory — <span className="metallic-text">royal standard diagnostics</span>
            </h1>
            <p className="page-hero__lead">
              A Madurai-based diagnostic laboratory delivering accurate investigations, dependable home collection and premium patient support under the guidance of {LAB.contactPerson}.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__grid">
          <ScrollReveal>
            <div className="about-story__copy">
              <p className="section-label">Our Story</p>
              <h2 className="section-title">Built for trustworthy diagnostics in Madurai</h2>
              <p>
                Queens Laboratory was established to make high-quality laboratory medicine accessible without compromising speed or accuracy. From routine blood work to specialised departmental testing, our workflows are designed around clinicians who need clarity and patients who deserve comfort.
              </p>
              <p>
                Operating from <strong>{LAB.address}</strong>, we combine modern analyser-driven processes with a human care team that stays reachable on WhatsApp, phone, SMS and email.
              </p>
              <p>
                Whether you need a scheduled home collection at dawn or urgent report coordination in the evening, our 24×7 collection network and reporting channels keep your diagnostic journey continuous and transparent.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="about-side">
              <figure className="about-side__photo">
                <img src={IMAGES.interior} alt="Modern diagnostic laboratory interior" loading="lazy" />
              </figure>
              <aside className="about-panel">
                <h3>Business Focus</h3>
                <ul>
                  <li>Home collection booking across Madurai</li>
                  <li>Lab test booking across five core departments</li>
                  <li>Verified report sharing via WhatsApp, SMS & email</li>
                  <li>Clear billing support for patients and clinics</li>
                  <li>Responsive customer care for every enquiry</li>
                </ul>
                <div className="about-panel__meta">
                  <div className="contact-row">
                    <IconPerson size={16} />
                    <div className="contact-row__body">
                      <span className="contact-row__label">Lead</span>
                      <p>{LAB.contactPerson}</p>
                    </div>
                  </div>
                  <div className="contact-row">
                    <IconPin size={16} />
                    <div className="contact-row__body">
                      <span className="contact-row__label">Visit</span>
                      <p>{LAB.address}</p>
                    </div>
                  </div>
                  <div className="contact-row">
                    <IconMail size={16} />
                    <div className="contact-row__body">
                      <span className="contact-row__label">Email</span>
                      <a href={`mailto:${LAB.email}`}>{LAB.email}</a>
                    </div>
                  </div>
                  <div className="contact-row">
                    <IconPhone size={16} />
                    <div className="contact-row__body contact-row__stack">
                      <span className="contact-row__label">Phone</span>
                      <a href={`tel:+91${LAB.phones[0]}`}>+91 {LAB.phones[0]}</a>
                      <a href={`tel:+91${LAB.phones[1]}`}>+91 {LAB.phones[1]}</a>
                    </div>
                  </div>
                  <div className="contact-row">
                    <IconWhatsApp size={16} />
                    <div className="contact-row__body">
                      <span className="contact-row__label">WhatsApp</span>
                      <a href={`https://wa.me/91${LAB.whatsapp}`} target="_blank" rel="noreferrer">
                        +91 {LAB.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section about-gallery">
        <div className="container about-gallery__grid">
          <ScrollReveal>
            <figure>
              <img src={IMAGES.microbiology} alt="Microbiology culture diagnostics" loading="lazy" />
              <figcaption>Microbiology cultures</figcaption>
            </figure>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <figure>
              <img src={IMAGES.clinicalPathology} alt="Clinical pathology analysis" loading="lazy" />
              <figcaption>Clinical pathology</figcaption>
            </figure>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <figure>
              <img src={IMAGES.genetics} alt="Genetics molecular diagnostics" loading="lazy" />
              <figcaption>Genetics insights</figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">What Guides Us</p>
            <h2 className="section-title">Premium care with futuristic discipline</h2>
          </ScrollReveal>
          <div className="about-values__grid">
            {values.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <article className="value-block">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
