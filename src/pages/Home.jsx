import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/layout/ScrollReveal'
import { LAB, SERVICES, REVIEWS, KEY_TESTS } from '../utils/constants'
import { IMAGES, SERVICE_IMAGES, PILLAR_IMAGES } from '../utils/images'
import CategoryMatrix from '../components/layout/CategoryMatrix'
import { IconClock, IconMail, IconPhone, IconWhatsApp } from '../components/ui/Icons'
import './Home.css'

const pillars = [
  {
    title: 'Home Collection 24×7',
    text: 'Doorstep sample pickup across Madurai, anytime you need reliable diagnostics.',
  },
  {
    title: 'Lab Test Booking',
    text: 'Book biochemistry to genetics panels with guided support from our care team.',
  },
  {
    title: 'Report Delivery',
    text: 'Receive verified reports through WhatsApp, SMS and email — fast and secure.',
  },
  {
    title: 'Billing & Support',
    text: 'Transparent billing with responsive customer care on call, WhatsApp and mail.',
  },
]

function Stars({ count }) {
  return (
    <div className="review-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img src={IMAGES.hero} alt="" className="hero__bg" />
          <div className="hero__shade" />
        </div>
        <div className="grid-bg" />
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />

        <div className="hero__content container">
          <div className="hero__brand-block">
            <div className="logo-frame logo-frame--hero">
              <img src={logo} alt="Queens Laboratory" className="brand-logo" />
            </div>
            <div className="hero__titles">
              <h1 className="hero__name">
                <span className="hero__name-queens">QUEENS</span>
                <span className="hero__name-lab">LABORATORY</span>
              </h1>
            </div>
          </div>

          <p className="hero__tagline">
            Futuristic diagnostics in Madurai — precision testing, royal care, and 24×7 home collection.
          </p>

          <div className="hero__actions">
            <Link to="/contact">
              <Button size="lg">Book a Test</Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="ghost">
                Explore Services
              </Button>
            </Link>
          </div>

          <p className="hero__badge">
            <IconClock className="icon--bare" size={15} />
            {LAB.homeCollection}
          </p>
        </div>

        <div className="hero__scan" aria-hidden="true" />
      </section>

      <section className="section pillars">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Why Queens</p>
            <h2 className="section-title">
              Diagnostics engineered for <span className="metallic-text">clarity & speed</span>
            </h2>
            <p className="section-lead">
              From first booking to final report, every step is built for accuracy, comfort and premium patient experience.
            </p>
          </ScrollReveal>

          <div className="pillars__grid scene-3d">
            {pillars.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 90}>
                <article className={`pillar pillar--media tilt-3d tilt-3d--${(i % 3) + 1}`}>
                  <div className="pillar__img-wrap">
                    <img src={PILLAR_IMAGES[i]} alt="" loading="lazy" className="pillar__img" />
                  </div>
                  <span className="pillar__index">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-visual">
        <div className="container home-visual__grid">
          <ScrollReveal>
            <figure className="home-visual__shot">
              <img src={IMAGES.homeCollection} alt="Home collection sample kit" loading="lazy" />
              <figcaption>24×7 home collection across Madurai</figcaption>
            </figure>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <figure className="home-visual__shot">
              <img src={IMAGES.microscope} alt="Precision laboratory microscopy" loading="lazy" />
              <figcaption>Precision diagnostics with calibrated equipment</figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <ScrollReveal>
            <div className="home-services__head">
              <div>
                <p className="section-label">Core Departments</p>
                <h2 className="section-title">Five specialised lab verticals</h2>
              </div>
              <Link to="/services" className="home-services__link">
                View all services →
              </Link>
            </div>
          </ScrollReveal>

          <div className="home-dept-strip scene-3d">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 60}>
                <article className="home-dept-tile">
                  <div className="home-dept-tile__img">
                    <img src={SERVICE_IMAGES[service.id]} alt="" loading="lazy" />
                  </div>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-tests">
        <div className="container">
          <ScrollReveal>
            <div className="home-services__head">
              <div>
                <p className="section-label">Signature Tests</p>
                <h2 className="section-title">Most requested diagnostic panels</h2>
              </div>
              <Link to="/services" className="home-services__link">
                Browse full menu →
              </Link>
            </div>
          </ScrollReveal>

          <div className="home-tests-bento scene-3d">
            {KEY_TESTS.map((test, i) => (
              <ScrollReveal key={test.id} delay={i * 50} className={`home-tests-bento__cell home-tests-bento__cell--${i + 1}`}>
                <article className="home-bento-card">
                  {i === 0 && (
                    <div className="home-bento-card__media">
                      <img src={IMAGES.featuredTest} alt="" loading="lazy" />
                    </div>
                  )}
                  <span>{test.tag}</span>
                  <h3>{test.title}</h3>
                  <p>{test.summary}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CategoryMatrix
        mode="link"
        eyebrow="Quick Find"
        title="Explore by health focus"
      />

      <section className="section reviews">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Client Reviews</p>
            <h2 className="section-title">
              Trusted by families & <span className="metallic-text">clinicians</span>
            </h2>
            <p className="section-lead">
              Real experiences from Madurai patients and partners who rely on Queens Laboratory for precise diagnostics and care.
            </p>
          </ScrollReveal>

          <div className="reviews__grid scene-3d">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={review.id} delay={i * 80}>
                <article className="review-card tilt-3d">
                  <Stars count={review.rating} />
                  <p className="review-card__text">&ldquo;{review.text}&rdquo;</p>
                  <div className="review-card__meta">
                    <strong>{review.name}</strong>
                    <span>{review.place}</span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <ScrollReveal>
            <div className="cta-band__panel cta-band__panel--media">
              <div className="cta-band__bg" aria-hidden="true">
                <img src={IMAGES.support} alt="" loading="lazy" />
              </div>
              <div className="cta-band__copy">
                <p className="section-label">Ready when you are</p>
                <h2>Need a home collection or urgent report support?</h2>
                <p>Connect instantly on WhatsApp or leave an enquiry — our Madurai team responds promptly.</p>
                <div className="cta-band__contacts">
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
              </div>
              <div className="cta-band__actions">
                <a href={`https://wa.me/91${LAB.whatsapp}`} target="_blank" rel="noreferrer">
                  <Button size="lg">
                    <IconWhatsApp className="icon--bare" size={16} />
                    WhatsApp Us
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="ghost">
                    Enquiry Form
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
