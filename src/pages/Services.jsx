import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/layout/ScrollReveal'
import {
  LAB,
  SERVICES,
  KEY_TESTS,
  HOME_COLLECTION_PERKS,
} from '../utils/constants'
import { IMAGES, SERVICE_IMAGES } from '../utils/images'
import CategoryMatrix from '../components/layout/CategoryMatrix'
import CareTimeline from '../components/layout/CareTimeline'
import { IconMail, IconPhone, IconWhatsApp } from '../components/ui/Icons'
import './Services.css'

const journeys = [
  {
    title: 'Book Home Collection',
    text: 'Schedule a 24×7 pickup. Our phlebotomy team arrives prepared with proper sample handling protocols.',
    image: IMAGES.homeCollection,
  },
  {
    title: 'Choose Tests & Packages',
    text: 'Pick signature panels, condition-based categories or wellness packages guided by our care team.',
    image: IMAGES.booking,
  },
  {
    title: 'Receive Digital Reports',
    text: 'Get validated reports on WhatsApp, SMS and email with transparent billing support.',
    image: IMAGES.reports,
  },
]

export default function Services() {
  const featuredTest = KEY_TESTS[0]
  const otherTests = KEY_TESTS.slice(1)

  return (
    <div className="services page-shell">
      <section className="page-hero services-hero">
        <div className="services-hero__media" aria-hidden="true">
          <img src={IMAGES.heroServices} alt="" />
          <div className="services-hero__shade" />
        </div>
        <div className="grid-bg" />
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Services & Tests</p>
            <h1 className="page-hero__title">
              Diagnostic depth. <span className="metallic-text">Futuristic clarity.</span>
            </h1>
            <p className="page-hero__lead">
              Explore Queens Laboratory departments, signature tests, condition-wise panels and wellness pathways —
              crafted for Madurai families and clinicians who expect premium precision.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section svc-perks">
        <div className="container">
          <ScrollReveal>
            <div className="svc-perks__head">
              <div>
                <p className="section-label">Home Collection</p>
                <h2 className="section-title">Care that reaches your door</h2>
              </div>
              <figure className="svc-perks__photo">
                <img src={IMAGES.homeCollection} alt="Home collection kit" loading="lazy" />
              </figure>
            </div>
          </ScrollReveal>
          <div className="perk-ribbon scene-3d">
            {HOME_COLLECTION_PERKS.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i * 90} className="perk-ribbon__cell">
                <article className={`perk-ribbon__item tilt-3d tilt-3d--${(i % 3) + 1}`}>
                  <span className="perk-ribbon__num">0{i + 1}</span>
                  <div>
                    <h3>{perk.title}</h3>
                    <p>{perk.text}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dept-deck-section">
        <div className="container dept-deck">
          <ScrollReveal className="dept-deck__intro">
            <p className="section-label">Core Departments</p>
            <h2 className="section-title">Five specialised lab verticals</h2>
            <p className="section-lead">
              A layered diagnostic stack — each vertical opens into focused assays and clinician workflows.
            </p>
            <figure className="dept-deck__photo">
              <img src={IMAGES.microscope} alt="Queens Laboratory diagnostics floor" loading="lazy" />
            </figure>
          </ScrollReveal>
          <div className="dept-deck__stack scene-3d">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 70}>
                <article className="dept-panel" style={{ '--i': i }}>
                  <div className="dept-panel__thumb">
                    <img src={SERVICE_IMAGES[service.id]} alt="" loading="lazy" />
                  </div>
                  <div className="dept-panel__index">{String(i + 1).padStart(2, '0')}</div>
                  <div className="dept-panel__body">
                    <h2>{service.title}</h2>
                    <p>{service.summary}</p>
                    <div className="dept-panel__tags">
                      {service.points.map((point) => (
                        <span key={point}>{point}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section key-tests">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Signature Tests</p>
            <h2 className="section-title">
              High-demand panels with <span className="metallic-text">premium finish</span>
            </h2>
            <p className="section-lead">
              Popular diagnostic journeys reinvented for Queens — clear naming, modern reporting and WhatsApp-ready delivery.
            </p>
          </ScrollReveal>

          <div className="test-mosaic scene-3d">
            <ScrollReveal className="test-mosaic__feature-wrap">
              <article className="test-feature tilt-3d">
                <img src={IMAGES.featuredTest} alt="" className="test-feature__img" loading="lazy" />
                <span className="test-feature__tag">{featuredTest.tag}</span>
                <h3>{featuredTest.title}</h3>
                <p>{featuredTest.summary}</p>
                <a
                  className="test-feature__cta"
                  href={`https://wa.me/91${LAB.whatsapp}?text=${encodeURIComponent(`Hi Queens Laboratory, I want to book: ${featuredTest.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconWhatsApp className="icon--bare" size={15} />
                  WhatsApp book →
                </a>
              </article>
            </ScrollReveal>

            <div className="test-mosaic__grid">
              {otherTests.map((test, i) => (
                <ScrollReveal key={test.id} delay={i * 60}>
                  <article className={`test-slab test-slab--${(i % 3) + 1}`}>
                    <span>{test.tag}</span>
                    <h3>{test.title}</h3>
                    <p>{test.summary}</p>
                    <a
                      href={`https://wa.me/91${LAB.whatsapp}?text=${encodeURIComponent(`Hi Queens Laboratory, I want to book: ${test.title}`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Book →
                    </a>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CategoryMatrix
        mode="whatsapp"
        eyebrow="Browse by Need"
        title="Tests by lifestyle & condition"
        lead="Find the right starting point faster — then our team helps refine the exact panel for you."
      />

      <CareTimeline />

      <section className="section services-flow">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Patient Journey</p>
            <h2 className="section-title">From booking to report — simplified</h2>
          </ScrollReveal>
          <div className="journey-path scene-3d">
            {journeys.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <article className="journey-step">
                  <div className="journey-step__face">
                    <div className="journey-step__img">
                      <img src={item.image} alt="" loading="lazy" />
                    </div>
                    <span>Step {i + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="services-cta">
              <p>{LAB.homeCollection} — reach us for bookings, packages and report assistance.</p>
              <div className="services-cta__contacts">
                <a href={`tel:+91${LAB.phones[0]}`}>
                  <IconPhone size={15} />
                  <span>+91 {LAB.phones[0]}</span>
                </a>
                <a href={`https://wa.me/91${LAB.whatsapp}`} target="_blank" rel="noreferrer">
                  <IconWhatsApp size={15} />
                  <span>+91 {LAB.whatsapp}</span>
                </a>
                <a href={`mailto:${LAB.email}`}>
                  <IconMail size={15} />
                  <span>{LAB.email}</span>
                </a>
              </div>
              <div className="services-cta__actions">
                <a href={`https://wa.me/91${LAB.whatsapp}`} target="_blank" rel="noreferrer">
                  <Button>
                    <IconWhatsApp className="icon--bare" size={15} />
                    WhatsApp Booking
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="ghost">Send Enquiry</Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
