import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import { LAB, TEST_CATEGORIES } from '../../utils/constants'
import './CategoryMatrix.css'

/**
 * Futuristic diagnostic category matrix — shared by Home & Services.
 * mode: "link" (to /services) | "whatsapp" (direct enquiry)
 */
export default function CategoryMatrix({
  mode = 'link',
  eyebrow = 'Quick Find',
  title = 'Explore by health focus',
  lead = '',
}) {
  return (
    <section className="section category-matrix">
      <div className="container">
        <ScrollReveal>
          <div className="category-matrix__head">
            <p className="section-label">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            {lead ? <p className="section-lead">{lead}</p> : null}
          </div>
        </ScrollReveal>

        <div className="category-matrix__frame">
          <div className="category-matrix__scan" aria-hidden="true" />
          <div className="category-matrix__grid">
            {TEST_CATEGORIES.map((cat, i) => {
              const content = (
                <>
                  <span className="category-matrix__code">
                    {String(i + 1).padStart(2, '0')}
                    <i>/</i>
                    {String(TEST_CATEGORIES.length).padStart(2, '0')}
                  </span>
                  <strong className="category-matrix__label">{cat.label}</strong>
                  <span className="category-matrix__hint">{cat.hint}</span>
                  <span className="category-matrix__corner category-matrix__corner--tl" aria-hidden="true" />
                  <span className="category-matrix__corner category-matrix__corner--br" aria-hidden="true" />
                </>
              )

              return (
                <ScrollReveal key={cat.id} delay={(i % 4) * 45}>
                  {mode === 'whatsapp' ? (
                    <a
                      className="category-matrix__cell"
                      href={`https://wa.me/91${LAB.whatsapp}?text=${encodeURIComponent(`Hi, I need ${cat.label} related tests.`)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link className="category-matrix__cell" to="/services">
                      {content}
                    </Link>
                  )}
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
