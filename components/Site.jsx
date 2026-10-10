'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, MotionConfig, useScroll, useSpring } from 'framer-motion'
import { Home, Sparkles, Users, Star, MapPin, Plus, Phone, ArrowUpRight } from 'lucide-react'

import imgDentalImplants from '../assets/dental implants.jpg'
import imgInvisibleAligners from '../assets/invisible aligners.jpg'
import imgTeethWhitening from '../assets/teeth whitening.jpg'
import imgRootCanalTherapy from '../assets/root canal therapy.jpg'
import imgSmileDesign from '../assets/smile design.jpg'
import imgChildDentistry from '../assets/child dentistry.png'

// ---- Edit your content here ----
const CLINIC = {
  name: 'Smilora Dental Clinic',
  phone: '+91 00000 00000',
  whatsapp: '910000000000',
  email: 'hello@smilora.in',
  address: 'Street name, City, Kerala 000000',
  hours: 'Monday to Saturday, 9:00 am to 7:00 pm',
  mapQuery: 'Smilora Dental Clinic',
}

const TREATMENTS = [
  {
    name: 'Dental implants',
    desc: 'Permanent tooth replacement planned on 3D scans, placed with minimal discomfort.',
    image: imgDentalImplants,
  },
  {
    name: 'Invisible aligners',
    desc: 'Straighten teeth with clear, removable trays and a digitally planned result.',
    image: imgInvisibleAligners,
  },
  {
    name: 'Teeth whitening',
    desc: 'Several shades brighter in a single visit, with enamel-safe gels.',
    image: imgTeethWhitening,
  },
  {
    name: 'Root canal therapy',
    desc: 'Single-sitting, microscope-assisted treatment that saves the natural tooth.',
    image: imgRootCanalTherapy,
  },
  {
    name: 'Smile design',
    desc: 'Veneers and contouring shaped around your face, preview before you commit.',
    image: imgSmileDesign,
  },
  {
    name: 'Children’s dentistry',
    desc: 'Gentle check-ups, sealants and first-visit care in a calm setting.',
    image: imgChildDentistry,
  },
]

const DOCTORS = [
  {
    name: 'Dr. Arun Mohan',
    role: 'Chief Implantologist',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Sarah Elizabeth',
    role: 'Orthodontist & Aligners',
    experience: '9 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dr. Rahul Nair',
    role: 'Endodontist & Smile Specialist',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=800&q=80',
  },
]

const REVIEWS = [
  ['Painless and genuinely calm. My implant was done in one visit.', 'Patient name'],
  ['The aligner plan was shown on screen before we began. Very clear.', 'Patient name'],
  ['Brought my daughter for her first check-up and she asked to come back.', 'Patient name'],
  ['Spotless clinic, on-time appointments, honest pricing.', 'Patient name'],
]

const TABS = [
  ['home', 'Home', Home],
  ['treatments', 'Care', Sparkles],
  ['doctors', 'Doctors', Users],
  ['reviews', 'Reviews', Star],
  ['contact', 'Visit', MapPin],
]

const Sec = ({ id, dark, children }) => (
  <section
    id={id}
    className={`relative px-5 pb-32 pt-24 md:px-10 lg:min-h-screen lg:px-16 lg:py-32 max-lg:h-[100dvh] max-lg:min-w-full max-lg:snap-start max-lg:snap-always max-lg:overflow-y-auto ${
      dark ? 'bg-black text-white' : 'bg-white text-black'
    }`}
  >
    {children}
  </section>
)

const H2 = ({ children, className = '' }) => (
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`font-display text-[14vw] font-bold leading-[.85] tracking-tighter md:text-[12vw] lg:text-[9rem] ${className}`}
  >
    {children}
  </motion.h2>
)

export default function Site() {
  const pager = useRef(null)
  const [active, setActive] = useState(0)
  const [hoveredTreatment, setHoveredTreatment] = useState(0)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const fn = () => {
      const p = pager.current
      if (!p) return
      if (window.innerWidth < 1024) return setActive(Math.round(p.scrollLeft / p.clientWidth))
      const i = TABS.findIndex(([id]) => {
        const el = document.getElementById(id)
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= window.innerHeight / 2 && r.bottom > window.innerHeight / 2
      })
      if (i > -1) setActive(i)
    }
    const p = pager.current
    if (p) p.addEventListener('scroll', fn, { passive: true })
    window.addEventListener('scroll', fn, { passive: true })
    window.addEventListener('resize', fn)
    return () => {
      if (p) p.removeEventListener('scroll', fn)
      window.removeEventListener('scroll', fn)
      window.removeEventListener('resize', fn)
    }
  }, [])

  const navRef = useRef(null)
  const isDraggingNav = useRef(false)
  const lastActiveRef = useRef(active)

  useEffect(() => {
    lastActiveRef.current = active
  }, [active])

  const go = (i) => {
    setActive(i)
    const p = pager.current
    if (window.innerWidth < 1024 && p) p.scrollTo({ left: i * p.clientWidth, behavior: 'smooth' })
    else {
      const el = document.getElementById(TABS[i][0])
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const selectTabFromClientX = (clientX) => {
    if (!navRef.current) return
    const rect = navRef.current.getBoundingClientRect()
    const relX = clientX - rect.left
    if (rect.width <= 0) return
    const tabWidth = rect.width / TABS.length
    const rawIndex = Math.floor(relX / tabWidth)
    const index = Math.max(0, Math.min(rawIndex, TABS.length - 1))
    if (index !== lastActiveRef.current) {
      lastActiveRef.current = index
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        try {
          navigator.vibrate(8)
        } catch (_) {}
      }
      go(index)
    }
  }

  const handleTouchStart = (e) => {
    isDraggingNav.current = true
    if (e.touches && e.touches[0]) {
      selectTabFromClientX(e.touches[0].clientX)
    }
  }

  const handleTouchMove = (e) => {
    if (!isDraggingNav.current) return
    if (e.cancelable) e.preventDefault()
    if (e.touches && e.touches[0]) {
      selectTabFromClientX(e.touches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    isDraggingNav.current = false
  }

  const book = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const msg = `Hi Smilora, I'd like to book an appointment.\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nTreatment: ${f.get('treatment')}`
    window.open(`https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const field =
    'w-full rounded-2xl border border-white/25 bg-transparent px-5 py-4 text-base placeholder:text-white/40 focus:border-white focus:outline-none transition-colors'

  return (
    <MotionConfig reducedMotion="user">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-neutral-400 via-white to-neutral-200 z-50 origin-left"
        style={{ scaleX }}
      />

      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 text-white mix-blend-difference md:px-10 lg:px-16 backdrop-blur-[2px]">
        <button onClick={() => go(0)} className="font-display text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
          Smilora
        </button>
        <nav className="hidden gap-8 text-sm lg:flex">
          {TABS.slice(1).map(([id, l], i) => (
            <button
              key={id}
              onClick={() => go(i + 1)}
              className="relative py-1 hover:text-white/80 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {l === 'Care' ? 'Treatments' : l === 'Visit' ? 'Contact' : l}
            </button>
          ))}
        </nav>
        <a
          href={`tel:${CLINIC.phone}`}
          className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
        >
          <Phone size={16} />
          {CLINIC.phone}
        </a>
      </header>

      <main
        ref={pager}
        className="no-scrollbar max-lg:flex max-lg:h-[100dvh] max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto"
      >
        {/* HERO SECTION */}
        <Sec id="home" dark>
          <div className="relative flex min-h-[calc(100dvh-14rem)] flex-col justify-end lg:min-h-[calc(100vh-16rem)]">
            <svg
              viewBox="0 0 100 120"
              className="absolute right-0 top-0 w-[52%] max-w-[480px] text-white/80 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth=".6"
              aria-hidden
            >
              <motion.path
                d="M20 25C20 10 40 8 50 16C60 8 80 10 80 25C80 45 72 60 70 85C69 100 62 108 58 100C54 90 52 70 50 70C48 70 46 90 42 100C38 108 31 100 30 85C28 60 20 45 20 25Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.6, delay: 0.4, ease: 'easeInOut' }}
              />
              <motion.line
                x1="5"
                x2="95"
                strokeWidth=".4"
                initial={{ y1: 8, y2: 8 }}
                animate={{ y1: [8, 112, 8], y2: [8, 112, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
            <h1
              aria-label="Smilora"
              className="font-display text-[24vw] font-bold leading-[.82] tracking-tighter lg:text-[17vw]"
            >
              {'Smilora'.split('').map((c, i) => (
                <span key={i} aria-hidden className="inline-block overflow-hidden pb-[.08em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {c}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end"
            >
              <p className="max-w-sm text-lg text-white/70 md:text-xl leading-relaxed">
                Dental clinic. Modern care, planned to the millimetre and delivered without the anxiety.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => go(4)}
                  className="rounded-full bg-white px-7 py-4 font-medium text-black hover:bg-neutral-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book an appointment
                </button>
                <button
                  onClick={() => go(1)}
                  className="rounded-full border border-white/30 px-7 py-4 hover:border-white hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Treatments
                </button>
              </div>
            </motion.div>
            <motion.p
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mt-8 text-sm text-white/50 lg:hidden"
            >
              Swipe to explore
            </motion.p>
          </div>
        </Sec>

        {/* TREATMENTS SECTION WITH HOVER REVEAL & SCROLL ANIMATION */}
        <Sec id="treatments">
          <H2>Treatments</H2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-black/70 md:text-xl"
          >
            Hover or tap to explore each treatment, digitally planned from scan to finish.
          </motion.p>

          <div className="mt-12 border-b border-black/20">
            {TREATMENTS.map((treatment, i) => {
              const isRevealed = hoveredTreatment === i
              return (
                <motion.div
                  key={treatment.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                      setHoveredTreatment(i)
                    }
                  }}
                  className={`group relative border-t border-black/20 transition-colors duration-300 ${
                    isRevealed ? 'bg-neutral-50/70 -mx-4 px-4 rounded-3xl' : 'hover:bg-neutral-50/40 -mx-4 px-4 rounded-3xl'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setHoveredTreatment((prev) => (prev === i ? -1 : i))}
                    className="flex w-full items-center justify-between py-7 text-left cursor-pointer select-none"
                    aria-expanded={isRevealed}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-sm font-mono transition-colors duration-300 ${
                          isRevealed ? 'text-black font-semibold' : 'text-black/40'
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={`font-display text-3xl font-semibold tracking-tight transition-all duration-300 md:text-5xl lg:text-6xl ${
                          isRevealed ? 'text-black translate-x-2' : 'text-black/70 group-hover:text-black group-hover:translate-x-1'
                        }`}
                      >
                        {treatment.name}
                      </span>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isRevealed ? 45 : 0,
                        scale: isRevealed ? 1.15 : 1,
                        backgroundColor: isRevealed ? 'rgba(0,0,0,0.08)' : 'transparent',
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-full p-2"
                    >
                      <Plus size={32} className={isRevealed ? 'text-black' : 'text-black/50'} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isRevealed && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 4 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-10 md:grid-cols-2 items-center">
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="space-y-4"
                          >
                            <p className="max-w-md text-lg text-black/80 leading-relaxed font-normal">
                              {treatment.desc}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                go(4)
                              }}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-black underline underline-offset-4 hover:opacity-70 transition-opacity"
                            >
                              Inquire about {treatment.name} <ArrowUpRight size={16} />
                            </button>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-lg ring-1 ring-black/5"
                          >
                            <Image
                              src={treatment.image}
                              alt={treatment.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </Sec>

        {/* DOCTORS SECTION WITH SCROLL ANIMATIONS */}
        <Sec id="doctors" dark>
          <H2>Doctors</H2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-white/70 md:text-xl"
          >
            Specialists who explain every step before they begin treatment.
          </motion.p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {DOCTORS.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group cursor-default"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10 shadow-2xl">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-white group-hover:text-white/90 transition-colors">
                  {doc.name}
                </h3>
                <p className="text-white/60 text-base">
                  {doc.role}, {doc.experience} of practice
                </p>
              </motion.div>
            ))}
          </div>
        </Sec>

        {/* REVIEWS SECTION WITH SCROLL ANIMATIONS */}
        <Sec id="reviews">
          <H2>Reviews</H2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 flex items-end gap-4"
          >
            <span className="font-display text-8xl font-bold leading-none tracking-tighter md:text-9xl">4.9</span>
            <p className="pb-2 text-black/60 font-medium">
              Average Google rating
              <br />
              (replace with your real figure)
            </p>
          </motion.div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {REVIEWS.map(([q, n], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                className="rounded-3xl border border-black/15 p-7 transition-all duration-300"
              >
                <div className="flex gap-1 text-black">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 font-display text-2xl font-medium leading-snug tracking-tight text-black">{q}</p>
                <p className="mt-6 text-sm text-black/50 font-mono tracking-wide">{n}</p>
              </motion.div>
            ))}
          </div>
        </Sec>

        {/* VISIT SECTION WITH SCROLL ANIMATION */}
        <Sec id="contact" dark>
          <H2>Visit us</H2>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-5 text-lg text-white/80">
                <p className="font-medium text-white">{CLINIC.address}</p>
                <p>{CLINIC.hours}</p>
                <p className="pt-2">
                  <a href={`tel:${CLINIC.phone}`} className="text-white hover:underline">
                    {CLINIC.phone}
                  </a>
                  <br />
                  <a href={`mailto:${CLINIC.email}`} className="text-white/70 hover:underline">
                    {CLINIC.email}
                  </a>
                </p>
              </div>
              <form onSubmit={book} className="mt-10 space-y-3">
                <input name="name" required placeholder="Your name" className={field} />
                <input name="phone" required type="tel" placeholder="Phone number" className={field} />
                <select name="treatment" className={`${field} bg-neutral-950 text-white`}>
                  {TREATMENTS.map((treatment) => (
                    <option key={treatment.name} value={treatment.name}>
                      {treatment.name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full rounded-full bg-white px-7 py-4 font-medium text-black hover:bg-neutral-200 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  Request appointment on WhatsApp
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-[420px] w-full overflow-hidden rounded-3xl lg:h-full lg:min-h-[520px] ring-1 ring-white/10 shadow-2xl"
            >
              <iframe
                title="Smilora Dental Clinic location"
                loading="lazy"
                className="h-full w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&output=embed`}
              />
            </motion.div>
          </div>
        </Sec>
      </main>

      {/* Mobile Sticky Pill Navigation (Apple-style interactive slide / scrub gesture) */}
      <nav
        ref={navRef}
        aria-label="Sections"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
        className="fixed inset-x-3 z-50 mx-auto flex max-w-[520px] rounded-full bg-black/80 p-1.5 text-white ring-1 ring-white/25 backdrop-blur-2xl lg:hidden shadow-2xl select-none touch-none active:scale-[0.99] transition-transform duration-200"
      >
        {TABS.map(([id, l, Icon], i) => (
          <button
            key={id}
            type="button"
            onClick={() => go(i)}
            className={`relative flex flex-1 flex-col items-center gap-0.5 rounded-full py-2 text-[11px] transition-colors duration-200 ${
              active === i ? 'text-black font-semibold' : 'text-white/70'
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 rounded-full bg-white shadow-md"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <Icon size={20} className="relative z-10" />
            <span className="relative z-10 font-medium tracking-tight">{l}</span>
          </button>
        ))}
      </nav>
    </MotionConfig>
  )
}


