import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import GradientBlobs from '../components/GradientBlobs'
import { personal } from '../data/portfolioData'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Please add a subject.'
  if (!form.message.trim()) {
    errors.message = 'Please write a message.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

const contactInfo = [
  { icon: FiMail, label: 'Email', value: personal.email },
  { icon: FiPhone, label: 'Phone', value: personal.phone },
  { icon: FiMapPin, label: 'Location', value: personal.location },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)
    // Simulated send — wire this up to a real email/API endpoint.
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(initialForm)
      setTimeout(() => setSubmitted(false), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="section-padding relative">
      <GradientBlobs variant="reverse" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="LET'S CONNECT"
          title="Contact"
          subtitle="Have a project in mind, a job opportunity, or just want to connect? Feel free to reach out."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass-card flex items-center gap-4 p-5">
                <span className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-secondary">
                  <info.icon />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">{info.label}</p>
                  <p className="text-sm text-white/90">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="glass-card p-5">
              <p className="mb-4 text-xs uppercase tracking-wide text-muted">Find me elsewhere</p>
              <div className="flex gap-3">
                {personal.socials.map((social) => {
                 const IconComponent = FiIcons[social.icon] || FaIcons[social.icon]
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="glass flex h-11 w-11 items-center justify-center rounded-full text-lg transition-all duration-300 hover:-translate-y-1 hover:text-secondary hover:shadow-glow-cyan"
                    >
                      {typeof IconComponent === 'function' ? <IconComponent /> : null}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="glass-card relative p-8">
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 flex items-center gap-3 rounded-xl border border-secondary/30 bg-secondary/10 px-4 py-3 text-secondary"
                  role="status"
                >
                  <FiCheckCircle className="text-lg" />
                  <span className="text-sm">Message sent — I'll get back to you soon!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/80">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-secondary/60"
                />
                {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/80">Email</label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@email.com"
                  aria-invalid={Boolean(errors.email)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-secondary/60"
                />
                {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="subject" className="mb-2 block text-sm text-white/80">Subject</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                type="text"
                placeholder="What's this about?"
                aria-invalid={Boolean(errors.subject)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-secondary/60"
              />
              {errors.subject && <p className="mt-1 text-xs text-accent">{errors.subject}</p>}
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-sm text-white/80">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me a bit about your project..."
                aria-invalid={Boolean(errors.message)}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-secondary/60"
              />
              {errors.message && <p className="mt-1 text-xs text-accent">{errors.message}</p>}
            </div>

            <button type="submit" disabled={submitting} className="btn-primary mt-8 w-full justify-center sm:w-auto disabled:opacity-60">
              {submitting ? 'Sending...' : (<><FiSend /> Send Message</>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
