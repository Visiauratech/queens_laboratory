import { useState } from 'react'
import { Formik, Form } from 'formik'
import InputField from '../components/ui/InputField'
import TextAreaField from '../components/ui/TextAreaField'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/layout/ScrollReveal'
import { useContactService } from '../services/contactService'
import { useToast } from '../context/ToastContext'
import { contactSchema } from '../utils/validation'
import { LAB } from '../utils/constants'
import { IconClock, IconMail, IconPerson, IconPhone, IconPin, IconWhatsApp } from '../components/ui/Icons'
import './Contact.css'

const initialValues = {
  name: '',
  email: '',
  number: '',
  address: '',
  description: '',
}

export default function Contact() {
  const { contact } = useContactService()
  const { notifySuccess, notifyFailure } = useToast()
  const [submitting, setSubmitting] = useState(false)

  const fetchContact = async (payload, { resetForm }) => {
    setSubmitting(true)
    try {
      const response = await contact(payload)
      notifySuccess('form submitted', 'successfully')
      resetForm()
      return response
    } catch (error) {
      const message = error?.message || 'submission failed'
      const words = String(message).split(/\s+/).filter(Boolean)
      const line1 = words.slice(0, 2).join(' ') || 'submission failed'
      const line2 = words.slice(2).join(' ') || 'please retry'
      notifyFailure(line1, line2)
    } finally {
      setSubmitting(false)
    }
  }

  const validateOnBlur = async (event, values, handleBlur, setFieldError) => {
    handleBlur(event)
    const { name } = event.target
    try {
      await contactSchema.validateAt(name, values)
      setFieldError(name, undefined)
    } catch (err) {
      setFieldError(name, err.message)
    }
  }

  return (
    <div className="contact page-shell">
      <section className="page-hero">
        <div className="grid-bg" />
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Contact</p>
            <h1 className="page-hero__title">
              Let&apos;s connect for <span className="metallic-text">precise care</span>
            </h1>
            <p className="page-hero__lead">
              Reach Queens Laboratory for home collection, test bookings, report assistance or billing support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          <ScrollReveal>
            <aside className="contact-info">
              <p className="section-label">Get in Touch</p>
              <h2>With Us</h2>
              <p className="contact-info__intro">
                Whether you need a 24×7 home collection, department-wise testing guidance or help reading your report delivery channels — our Madurai team is ready to assist.
              </p>

              <div className="contact-info__list">
                <div className="contact-row">
                  <IconPin size={18} />
                  <div className="contact-row__body">
                    <span className="contact-row__label">Visit</span>
                    <p>{LAB.address}</p>
                  </div>
                </div>
                <div className="contact-row">
                  <IconPhone size={18} />
                  <div className="contact-row__body">
                    <span className="contact-row__label">Call</span>
                    <div className="contact-row__stack">
                      <a href={`tel:+91${LAB.phones[0]}`}>+91 {LAB.phones[0]}</a>
                      <a href={`tel:+91${LAB.phones[1]}`}>+91 {LAB.phones[1]}</a>
                    </div>
                  </div>
                </div>
                <div className="contact-row">
                  <IconWhatsApp size={18} />
                  <div className="contact-row__body">
                    <span className="contact-row__label">WhatsApp</span>
                    <p>
                      <a href={`https://wa.me/91${LAB.whatsapp}`} target="_blank" rel="noreferrer">
                        +91 {LAB.whatsapp}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <IconMail size={18} />
                  <div className="contact-row__body">
                    <span className="contact-row__label">Email</span>
                    <p>
                      <a href={`mailto:${LAB.email}`}>{LAB.email}</a>
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <IconPerson size={18} />
                  <div className="contact-row__body">
                    <span className="contact-row__label">Connect with</span>
                    <p>{LAB.contactPerson}</p>
                  </div>
                </div>
                <div className="contact-row">
                  <IconClock size={18} />
                  <div className="contact-row__body">
                    <span className="contact-row__label">Home collection</span>
                    <p>{LAB.homeCollection}</p>
                  </div>
                </div>
              </div>
            </aside>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="contact-form-wrap">
              <h3>Enquiry Form</h3>
              <p className="contact-form-wrap__hint">
                Fields marked * are mandatory. Validation messages appear when you leave a field — not on submit click.
              </p>

              <Formik
                initialValues={initialValues}
                validateOnBlur={false}
                validateOnChange={false}
                validateOnMount={false}
                onSubmit={async (values, helpers) => {
                  const isValid = await contactSchema.isValid(values)
                  if (!isValid) {
                    return
                  }
                  await fetchContact(values, helpers)
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, setFieldError }) => (
                  <Form className="contact-form" noValidate>
                    <InputField
                      label="Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={(e) => validateOnBlur(e, values, handleBlur, setFieldError)}
                      error={errors.name}
                      touched={touched.name}
                      placeholder="Your full name"
                      maxLength={30}
                      required
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={(e) => validateOnBlur(e, values, handleBlur, setFieldError)}
                      error={errors.email}
                      touched={touched.email}
                      placeholder="name@example.com"
                      required
                    />
                    <InputField
                      label="Number"
                      name="number"
                      type="tel"
                      inputMode="numeric"
                      value={values.number}
                      onChange={handleChange}
                      onBlur={(e) => validateOnBlur(e, values, handleBlur, setFieldError)}
                      error={errors.number}
                      touched={touched.number}
                      placeholder="10 digit mobile number"
                      maxLength={10}
                      required
                    />
                    <InputField
                      label="Address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={(e) => validateOnBlur(e, values, handleBlur, setFieldError)}
                      error={errors.address}
                      touched={touched.address}
                      placeholder="Your address"
                      required
                    />
                    <TextAreaField
                      label="Description"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={(e) => validateOnBlur(e, values, handleBlur, setFieldError)}
                      error={errors.description}
                      touched={touched.description}
                      placeholder="Tell us about the test or support you need (optional)"
                      rows={4}
                    />
                    <Button type="submit" size="lg" loading={submitting} className="contact-form__submit">
                      Submit Enquiry
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
