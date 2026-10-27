'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, MotionConfig, useScroll, useSpring } from 'framer-motion'
import {
  Film,
  Play,
  Sliders,
  Scissors,
  Sparkles,
  Star,
  Mail,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  Camera,
  Layers,
  Video,
  Volume2,
  Clock,
  Instagram,
  Youtube,
  Plus,
  Tv,
  Share2
} from 'lucide-react'

// =========================================================================
// 🎬 ANANDHU PRASAD - VIDEO EDITOR & COLORIST CONFIGURATION
// Customize your details, images, and links right here!
// =========================================================================
export const PROFILE = {
  name: 'Anandhu Prasad',
  headline: 'Video Editor & Colorist',
  tagline: 'DaVinci Resolve • Premiere Pro • CapCut',
  bio: 'Transforming raw clips into hypnotic visual stories. Specializing in high-retention pacing, narrative flow, dynamic sound design, and cinematic color grading.',
  phone: '+91 98765 43210',
  whatsapp: '919876543210', // format: CountryCode + Number (e.g., 919876543210)
  email: 'anandhuprasad.edit@gmail.com',
  location: 'Kerala, India • Available Worldwide (Remote)',
  
  // 📸 HERO IMAGE PLACEHOLDER:
  // To use your own photo, place your picture in the 'public' folder (e.g. public/anandhu.jpg)
  // and update the heroImage path below:
  heroImage: '/anandhu-portrait.jpg',
  
  socials: {
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
    behance: 'https://behance.net/',
  },
  
  stats: [
    { label: 'Videos Delivered', value: '180+' },
    { label: 'Total Views Generated', value: '45M+' },
    { label: 'Client Satisfaction', value: '99.4%' },
    { label: 'Avg Turnaround', value: '24-48h' },
  ],
}

// 🛠️ PRIMARY SOFTWARE & SPECIALTIES
export const TOOLS = [
  {
    name: 'DaVinci Resolve',
    category: 'Color Grading & Finishing',
    level: 'Advanced Master',
    badge: 'Industry Standard Color',
    icon: Sliders,
    accent: 'from-amber-500/20 to-orange-600/10',
    border: 'border-orange-500/30',
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    desc: 'Deep color science, ACES/YRGB color management, S-Log3/Arri Log to Rec.709 conversions, custom 3D LUTs, skin-tone isolation, and Fairlight audio mixing.',
    features: [
      'Advanced Node-Based Color Grading',
      'HDR & Rec.709 Cinematic Mastering',
      'Film Halation, Grain & Look Development',
      'Fairlight Studio Audio Restoration',
    ],
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Narrative & Commercial Editing',
    level: 'Expert Workflow',
    badge: 'Precision Pacing',
    icon: Scissors,
    accent: 'from-purple-500/20 to-indigo-600/10',
    border: 'border-purple-500/30',
    tagColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    desc: 'Seamless multi-cam switching, dynamic visual pacing, audio synchronization, speed-ramping, tight J/L cuts, and proxy workflows for high-resolution 4K/6K footage.',
    features: [
      'High-Retention YouTube & Docu-Style Pacing',
      'Multi-Camera Live & Event Sync',
      'Dynamic Transitions & J/L Sound Cuts',
      'After Effects Dynamic Link Integration',
    ],
  },
  {
    name: 'CapCut / CapCut Pro',
    category: 'Viral Short-Form & Vertical Video',
    level: 'High Velocity',
    badge: 'Viral Retention',
    icon: Sparkles,
    accent: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/30',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    desc: 'Engineered specifically for short-attention spans on Instagram Reels, YouTube Shorts, and TikTok. Snappy 3-second hooks, kinetic subtitles, trending sound design, and motion presets.',
    features: [
      'First 3-Second Hook Optimization',
      'Kinetic Styled Captions & Typography',
      'Trending SFX & Audio Impact Sync',
      'Ultra-Fast Turnaround Batch Editing',
    ],
  },
]

// 📽️ SELECTED WORKS & SHOWREEL
export const PROJECTS = [
  {
    id: 1,
    title: 'Velocity: Coastal Drive Commercial',
    category: 'Commercial / Color Grading',
    software: 'DaVinci Resolve Studio',
    tag: 'Commercial',
    views: '2.4M Views',
    duration: '01:15',
    ratio: '16:9 Widescreen',
    desc: 'High-end commercial car spot with anamorphic framing, teal & amber palette separation, aggressive speed ramps, and roaring engine sound design.',
    image: '/projects/car-commercial.jpg',
  },
  {
    id: 2,
    title: 'Neon Echoes: Tokyo Night Odyssey',
    category: 'Documentary / YouTube Long-Form',
    software: 'Adobe Premiere Pro',
    tag: 'YouTube Docu',
    views: '1.1M Views',
    duration: '18:40',
    ratio: '16:9 Cinema',
    desc: 'Immersive travel documentary cut for maximum retention (68% average percentage viewed). Multi-layered ambient foley, textured overlays, and chaptered storytelling.',
    image: '/projects/tokyo-doc.jpg',
  },
  {
    id: 3,
    title: 'Street Pulse: Kinetic Reels Campaign',
    category: 'Vertical Short-Form (9:16)',
    software: 'CapCut Pro & Premiere Pro',
    tag: 'Viral Reels',
    views: '14.8M Views',
    duration: '00:45',
    ratio: '9:16 Vertical',
    desc: 'A viral 6-part lifestyle short-form series designed to maximize engagement and re-watches. Micro-cuts on 120BPM beats, zoom bursts, and hook typography.',
    image: '/projects/car-commercial.jpg',
  },
  {
    id: 4,
    title: 'Shadows & Silk: Fashion Film',
    category: 'Editorial / Color Grading',
    software: 'DaVinci Resolve',
    tag: 'Fashion & Art',
    views: '850K Views',
    duration: '02:30',
    ratio: '4:3 Vintage Arri',
    desc: 'High-contrast black & gold aesthetic with fine 35mm grain integration, soft halation around highlights, and fluid transitions matched to orchestral beats.',
    image: '/projects/tokyo-doc.jpg',
  },
  {
    id: 5,
    title: 'Tech Unboxed: The Studio Setup',
    category: 'Creator / Long-Form',
    software: 'Adobe Premiere Pro',
    tag: 'Creator Video',
    views: '3.2M Views',
    duration: '12:15',
    ratio: '16:9 4K UHD',
    desc: 'Clean, punchy desk-setup breakdown featuring smooth B-roll camera pans, custom sound effects on product reveals, and color-matched dual-angle cameras.',
    image: '/projects/car-commercial.jpg',
  },
  {
    id: 6,
    title: 'Midnight Beats: Official Music Cut',
    category: 'Music Video / Motion VFX',
    software: 'DaVinci Resolve & Premiere',
    tag: 'Music Video',
    views: '4.7M Views',
    duration: '03:45',
    ratio: '2.39:1 Anamorphic',
    desc: 'Heavy rhythmic editing aligned with kick drums, strobe transitions, hue shifts during the drops, and film burn overlays.',
    image: '/projects/tokyo-doc.jpg',
  },
]

// 💬 CLIENT REVIEWS & TESTIMONIALS
export const REVIEWS = [
  {
    quote: 'Anandhu transformed our raw podcast footage into viral gold. His pacing in Premiere Pro and CapCut gained our channel over 4 million views in 60 days.',
    client: 'Rahul Menon',
    role: 'Creator & Media Host (1.2M Subs)',
    rating: 5,
  },
  {
    quote: 'The color grading in DaVinci Resolve blew our production team away. He matched Arri Log and Sony FX3 footage seamlessly under a tight 48-hour deadline.',
    client: 'Sophia Rodriguez',
    role: 'Creative Director, Studio Axis',
    rating: 5,
  },
  {
    quote: 'Fast communication, spot-on music choices, and an incredible sense of comic & narrative timing. Anandhu is our go-to video editor for every commercial.',
    client: 'Karthik Pillai',
    role: 'Founder, BrandMotion Agency',
    rating: 5,
  },
  {
    quote: 'His sound design is what elevates his cuts above everyone else. Every whoosh, hit, and atmospheric layer feels intentional and theatrical.',
    client: 'Nikhil Varma',
    role: 'Independent Filmmaker',
    rating: 5,
  },
]

// 📱 NAVIGATION TABS
export const TABS = [
  ['home', 'Home', Film],
  ['projects', 'Work', Play],
  ['skills', 'Skills', Sliders],
  ['reviews', 'Reviews', Star],
  ['contact', 'Hire Me', Mail],
]

// Reusable Section Container
const Sec = ({ id, dark, children }) => (
  <section
    id={id}
    className={`relative px-5 pb-32 pt-24 md:px-10 lg:min-h-screen lg:px-16 lg:py-28 max-lg:h-[100dvh] max-lg:min-w-full max-lg:snap-start max-lg:snap-always max-lg:overflow-y-auto ${
      dark ? 'bg-black text-white' : 'bg-neutral-950 text-white border-y border-white/5'
    }`}
  >
    {children}
  </section>
)

const H2 = ({ children, className = '' }) => (
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={`font-display text-[13vw] font-bold leading-[.88] tracking-tighter md:text-[10vw] lg:text-[7.5rem] ${className}`}
  >
    {children}
  </motion.h2>
)

export default function Site() {
  const pager = useRef(null)
  const [active, setActive] = useState(0)
  const [hoveredProject, setHoveredProject] = useState(0)
  const [selectedTag, setSelectedTag] = useState('All')

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const navRef = useRef(null)
  const isDraggingNav = useRef(false)
  const dragTimeoutRef = useRef(null)
  const lastActiveRef = useRef(active)

  useEffect(() => {
    lastActiveRef.current = active
  }, [active])

  useEffect(() => {
    const fn = () => {
      if (isDraggingNav.current) return
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
      if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current)
    }
  }, [])

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
    if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current)
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
    if (navRef.current && pager.current && window.innerWidth < 1024) {
      pager.current.scrollTo({ left: lastActiveRef.current * pager.current.clientWidth, behavior: 'smooth' })
    }
    if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current)
    dragTimeoutRef.current = setTimeout(() => {
      isDraggingNav.current = false
    }, 250)
  }

  const bookOnWhatsApp = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const name = f.get('name') || 'Client'
    const service = f.get('service') || 'Video Editing'
    const software = f.get('software') || 'DaVinci / Premiere / CapCut'
    const details = f.get('details') || ''

    const msg = `Hi Anandhu,\nI saw your video editing portfolio!\n\nName: ${name}\nProject Type: ${service}\nPreferred Tool: ${software}\nDetails: ${details}\n\nLet's collaborate on this edit!`
    window.open(`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const field =
    'w-full rounded-2xl border border-white/20 bg-neutral-900/60 px-5 py-4 text-base placeholder:text-white/40 focus:border-amber-400 focus:bg-neutral-900 focus:outline-none transition-all'

  const filteredProjects =
    selectedTag === 'All'
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.tag.toLowerCase().includes(selectedTag.toLowerCase()) ||
            p.software.toLowerCase().includes(selectedTag.toLowerCase())
        )

  return (
    <MotionConfig reducedMotion="user">
      {/* Cinematic Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* FIXED HEADER WITH TIMECODE TICKER & BRAND */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 text-white backdrop-blur-md bg-black/40 border-b border-white/5 md:px-10 lg:px-16">
        <button
          onClick={() => go(0)}
          className="group flex items-center gap-3 text-left hover:opacity-90 transition-opacity"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-black font-bold text-xs shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            AP
          </div>
          <div>
            <span className="font-display text-base font-bold tracking-tight block leading-tight">
              {PROFILE.name}
            </span>
            <span className="text-[10px] font-mono tracking-wider text-amber-400/90 uppercase block">
              Editor & Colorist
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-sm font-medium lg:flex">
          {TABS.slice(1).map(([id, label], i) => (
            <button
              key={id}
              onClick={() => go(i + 1)}
              className="relative py-1 text-white/70 hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Quick CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Projects</span>
          </div>
          <button
            onClick={() => go(4)}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <span>Let&apos;s Cut</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT / PAGER */}
      <main
        ref={pager}
        className="no-scrollbar max-lg:flex max-lg:h-[100dvh] max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto"
      >
        {/* =========================================================================
            SECTION 1: HERO - WITH CINEMATIC EDITING SUITE & IMAGE PLACEHOLDER
            ========================================================================= */}
        <Sec id="home" dark>
          <div className="relative flex min-h-[calc(100dvh-12rem)] flex-col justify-center pt-8 lg:min-h-[calc(100vh-14rem)]">
            
            {/* Top Viewfinder HUD Ticker */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-white/50 border-b border-white/10 pb-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-rose-400 font-semibold tracking-wide">
                  <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping inline-block" />
                  REC [●] 00:02:48:19
                </span>
                <span className="hidden sm:inline text-white/20">|</span>
                <span className="hidden sm:inline">4K DCI • 23.976 FPS</span>
                <span className="hidden md:inline text-white/20">|</span>
                <span className="hidden md:inline text-white/60">PRORES 422 HQ</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="text-[10px] uppercase tracking-widest text-white/40">LUT:</span>
                <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-amber-300">
                  Davinci_Teal_Gold.cube
                </span>
              </div>
            </motion.div>

            {/* Grid Layout: Left Typography & Bio | Right Portrait Placeholder */}
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              
              {/* Left Column: Huge Headline & Bio */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                
                {/* Software Badges Strip */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-4 flex flex-wrap items-center gap-2"
                >
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                    DaVinci Resolve
                  </span>
                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    Premiere Pro
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    CapCut Pro
                  </span>
                </motion.div>

                {/* Animated Name Headline */}
                <h1
                  aria-label={PROFILE.name}
                  className="font-display text-[15vw] font-bold leading-[.85] tracking-tighter sm:text-[12vw] lg:text-[7.2rem]"
                >
                  <span className="block overflow-hidden pb-[.06em]">
                    {'Anandhu'.split('').map((c, i) => (
                      <motion.span
                        key={i}
                        className="inline-block text-white"
                        initial={{ y: '110%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {c}
                      </motion.span>
                    ))}
                  </span>
                  <span className="block overflow-hidden pb-[.06em] text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">
                    {'Prasad'.split('').map((c, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ y: '110%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {c}
                      </motion.span>
                    ))}
                  </span>
                </h1>

                {/* Subtitle Bio */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed md:text-xl font-normal"
                >
                  {PROFILE.bio}
                </motion.p>

                {/* Hero CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <button
                    onClick={() => go(1)}
                    className="flex items-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-black hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
                  >
                    <Play size={18} fill="currentColor" />
                    <span>Watch Showreel</span>
                  </button>
                  <button
                    onClick={() => go(4)}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-medium text-white hover:border-amber-400 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Hire For Edit</span>
                    <ArrowUpRight size={18} />
                  </button>
                </motion.div>

                {/* Quick Stats Grid under Hero */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 1 }}
                  className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4"
                >
                  {PROFILE.stats.map((s, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {s.value}
                      </p>
                      <p className="font-mono text-xs text-white/50">{s.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column: CINEMATIC PORTRAIT FRAME & PLACEHOLDER */}
              <div className="lg:col-span-5 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-[420px] group"
                >
                  {/* Subtle Glowing Aura */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-rose-500/10 to-cyan-500/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

                  {/* Main Viewfinder Frame */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-neutral-900 border border-white/15 shadow-2xl">
                    
                    {/* Viewfinder Target / Crosshair Overlay */}
                    <div className="absolute inset-4 pointer-events-none z-20 flex flex-col justify-between">
                      {/* Top Bar with Timecode & Audio Bars */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                        <span className="flex items-center gap-1 rounded bg-black/60 px-2 py-0.5 backdrop-blur-md border border-white/10">
                          <Camera size={12} className="text-amber-400" />
                          <span>ISO 800</span>
                        </span>
                        <div className="flex items-center gap-1">
                          {[16, 24, 12, 28, 20, 10].map((h, i) => (
                            <motion.span
                              key={i}
                              className="w-1 rounded-full bg-emerald-400"
                              animate={{ height: [6, h, 6] }}
                              transition={{ duration: 0.8 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Viewfinder Corner Brackets */}
                      <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-amber-400" />
                      <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-amber-400" />
                      <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-amber-400" />
                      <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-amber-400" />

                      {/* Center Focus Reticle */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-40">
                        <div className="h-8 w-8 rounded-full border border-white/40" />
                        <div className="absolute h-3 w-3 rounded-full bg-white/50" />
                      </div>

                      {/* Bottom Info Pill */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/80">
                        <span className="rounded bg-black/70 px-2.5 py-1 backdrop-blur-md border border-white/10">
                          {PROFILE.name}
                        </span>
                        <span className="rounded bg-amber-400/90 text-black px-2 py-0.5 font-bold text-[10px]">
                          HERO IMAGE
                        </span>
                      </div>
                    </div>

                    {/* Editor Portrait Image */}
                    <Image
                      src={PROFILE.heroImage}
                      alt={`${PROFILE.name} - Video Editor Portrait`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                  </div>

                  {/* Image Placeholder Helper Tooltip / Badge */}
                  <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-white/50">
                    <span>✦ Profile Photo Frame</span>
                    <span className="text-amber-400/80">
                      public{PROFILE.heroImage}
                    </span>
                  </div>
                </motion.div>
              </div>

            </div>

            {/* Mobile Swipe prompt */}
            <motion.p
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mt-8 text-center text-xs font-mono text-white/40 lg:hidden"
            >
              Swipe to explore work &rarr;
            </motion.p>
          </div>
        </Sec>

        {/* =========================================================================
            SECTION 2: SELECTED PROJECTS & SHOWREEL (DA VINCI, PREMIERE, CAPCUT)
            ========================================================================= */}
        <Sec id="projects">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
                Portfolio Showcase
              </span>
              <H2>Selected Works</H2>
            </div>
            <p className="max-w-md text-base text-white/70 md:text-lg">
              Cinematic color grading, retention-focused narrative pacing, and viral short-form edits.
            </p>
          </div>

          {/* Tag Filter Strip */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-6">
            {['All', 'Commercial', 'YouTube Docu', 'Viral Reels', 'Color Grading'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-400/20'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Interactive Project Accordion List */}
          <div className="mt-8 divide-y divide-white/15">
            {filteredProjects.map((project, i) => {
              const isRevealed = hoveredProject === project.id
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => {
                    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
                      setHoveredProject(project.id)
                    }
                  }}
                  className={`group relative transition-all duration-300 ${
                    isRevealed ? 'bg-white/[0.04] -mx-4 px-4 rounded-3xl' : 'hover:bg-white/[0.02] -mx-4 px-4 rounded-3xl'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setHoveredProject((prev) => (prev === project.id ? null : project.id))}
                    className="flex w-full items-center justify-between py-6 text-left cursor-pointer select-none"
                    aria-expanded={isRevealed}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <span className="font-mono text-xs text-amber-400/80">
                        0{project.id}
                      </span>
                      <div>
                        <h3
                          className={`font-display text-2xl font-bold tracking-tight transition-all duration-300 md:text-4xl lg:text-5xl ${
                            isRevealed
                              ? 'text-white translate-x-2'
                              : 'text-white/80 group-hover:text-white group-hover:translate-x-1'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-white/50">
                          <span className="text-white/80">{project.software}</span>
                          <span>•</span>
                          <span>{project.views}</span>
                          <span>•</span>
                          <span>{project.ratio}</span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isRevealed ? 45 : 0,
                        scale: isRevealed ? 1.15 : 1,
                        backgroundColor: isRevealed ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-full p-2.5 border border-white/20 text-white"
                    >
                      <Plus size={24} />
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
                        <div className="grid gap-6 pb-8 md:grid-cols-2 items-center">
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              <span className="rounded-md bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 text-xs font-mono text-amber-300">
                                {project.software}
                              </span>
                              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-mono text-white/80">
                                Duration: {project.duration}
                              </span>
                            </div>
                            <p className="max-w-md text-base text-white/80 leading-relaxed font-normal">
                              {project.desc}
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  go(4)
                                }}
                                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-300 transition-all hover:scale-105 active:scale-95"
                              >
                                <Play size={14} fill="currentColor" />
                                <span>Request Similar Edit</span>
                              </button>
                            </div>
                          </div>

                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/15 shadow-2xl group/img">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-mono text-white/90">
                              <span className="h-2 w-2 rounded-full bg-emerald-400" />
                              <span>{project.category}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </Sec>

        {/* =========================================================================
            SECTION 3: SKILLS & ARSENAL (DAVINCI RESOLVE, PREMIERE PRO, CAPCUT)
            ========================================================================= */}
        <Sec id="skills" dark>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
                Software & Workflow
              </span>
              <H2>The Arsenal</H2>
            </div>
            <p className="max-w-md text-base text-white/70 md:text-lg">
              Specialized mastery across the top 3 video post-production tools. Every cut is engineered with purpose.
            </p>
          </div>

          {/* Software Spotlight Grid */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TOOLS.map((tool, i) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className={`relative flex flex-col justify-between rounded-3xl border bg-gradient-to-b ${tool.accent} ${tool.border} p-8 backdrop-blur-sm transition-all duration-300 shadow-2xl`}
                >
                  <div>
                    {/* Header with Icon & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/60 border border-white/20 text-white shadow-inner">
                        <Icon size={24} />
                      </div>
                      <span className={`rounded-full border px-3 py-1 font-mono text-[11px] font-semibold ${tool.tagColor}`}>
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {tool.name}
                    </h3>
                    <p className="font-mono text-xs text-white/50 mt-1 mb-4">
                      {tool.category}
                    </p>

                    <p className="text-sm text-white/70 leading-relaxed">
                      {tool.desc}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                      {tool.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                          <CheckCircle2 size={15} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/40">
                    <span>Proficiency Level</span>
                    <span className="text-white font-semibold">{tool.level}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Workflow Pipeline Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
          >
            <h4 className="font-display text-xl font-bold tracking-tight text-white mb-6">
              Post-Production Pipeline: From Raw Footage to Final Export
            </h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: '01', title: 'Ingest & Assembly', desc: 'Sync multi-cam, organize bins, select best takes, and build the story backbone.' },
                { step: '02', title: 'Pacing & Micro-Cuts', desc: 'Cut dead weight, balance dialogue pauses, design J/L cuts for seamless rhythm.' },
                { step: '03', title: 'Sound & Foley Design', desc: 'Layer whooshes, ambient room tone, bass drops, and master clear vocals.' },
                { step: '04', title: 'Color Science & Master', desc: 'Shot-matching, film emulation, power grades, and multi-format renders.' },
              ].map((p, idx) => (
                <div key={idx} className="rounded-2xl border border-white/5 bg-black/40 p-5">
                  <span className="font-mono text-xs text-amber-400 block mb-2">{p.step} // PHASE</span>
                  <h5 className="font-display text-base font-bold text-white mb-2">{p.title}</h5>
                  <p className="text-xs text-white/60 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Sec>

        {/* =========================================================================
            SECTION 4: CLIENT REVIEWS & METRICS
            ========================================================================= */}
        <Sec id="reviews">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
                Client Feedback
              </span>
              <H2>Reputation</H2>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-display text-7xl font-bold leading-none tracking-tighter text-white">
                5.0
              </span>
              <div className="space-y-1">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-mono text-xs text-white/60">
                  Flawless Delivery Rating
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {REVIEWS.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-6">
                    {[...Array(rev.rating)].map((_, k) => (
                      <Star key={k} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-display text-xl font-medium leading-snug tracking-tight text-white md:text-2xl">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <p className="font-display text-base font-semibold text-white">
                    {rev.client}
                  </p>
                  <p className="font-mono text-xs text-white/50">{rev.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Sec>

        {/* =========================================================================
            SECTION 5: CONTACT & HIRE ME (WHATSAPP & FORM)
            ========================================================================= */}
        <Sec id="contact" dark>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
                Collaboration
              </span>
              <H2>Let&apos;s Cut</H2>
            </div>
            <p className="max-w-md text-base text-white/70 md:text-lg">
              Have footage ready or planning an upcoming production? Send me your project specs and let&apos;s build something memorable.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 items-start">
            {/* Contact Details & Socials */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-bold tracking-tight text-white">
                  Direct Inquiries
                </h3>
                <p className="text-base text-white/70 max-w-md">
                  I typically respond within 2-4 hours. Whether it is a single YouTube video, a viral reel campaign, or a full commercial grade, I am ready.
                </p>
              </div>

              <div className="space-y-3 font-mono text-sm text-white/80">
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400 hover:text-white transition-all"
                >
                  <Phone size={18} className="text-amber-400" />
                  <span>{PROFILE.phone}</span>
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400 hover:text-white transition-all"
                >
                  <Mail size={18} className="text-amber-400" />
                  <span>{PROFILE.email}</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-white/60">
                  <Clock size={18} className="text-amber-400" />
                  <span>{PROFILE.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-3">
                  Follow & Connect
                </p>
                <div className="flex gap-3">
                  <a
                    href={PROFILE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:border-amber-400 hover:bg-white/10 transition-all"
                  >
                    <Instagram size={15} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={PROFILE.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white hover:border-amber-400 hover:bg-white/10 transition-all"
                  >
                    <Youtube size={15} />
                    <span>YouTube</span>
                  </a>
                  <a
                    href={`https://wa.me/${PROFILE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all"
                  >
                    <Phone size={15} />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Inquiry / WhatsApp Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/15 bg-neutral-900/60 p-8 shadow-2xl backdrop-blur-md"
            >
              <h4 className="font-display text-2xl font-bold tracking-tight text-white mb-2">
                Book an Edit / Consultation
              </h4>
              <p className="text-xs text-white/60 font-mono mb-6">
                Fill the details below to start an instant WhatsApp conversation with Anandhu.
              </p>

              <form onSubmit={bookOnWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5">
                    Your Name / Channel / Company
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="e.g. Rahul / Studio Axis"
                    className={field}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-1.5">
                      Project Format
                    </label>
                    <select
                      name="service"
                      className={`${field} bg-neutral-900 text-white cursor-pointer`}
                    >
                      <option value="YouTube Long-Form (Retention Edit)">YouTube Long-Form Video</option>
                      <option value="Commercial / Brand Ad Spot">Commercial / Brand Ad</option>
                      <option value="Instagram Reels & TikToks (Batch)">Viral Reels / TikToks</option>
                      <option value="DaVinci Resolve Color Grading">Color Grading Only</option>
                      <option value="Music Video Post-Production">Music Video</option>
                      <option value="Full Post-Production Package">Full Post-Production</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-1.5">
                      Editing Software
                    </label>
                    <select
                      name="software"
                      className={`${field} bg-neutral-900 text-white cursor-pointer`}
                    >
                      <option value="DaVinci Resolve Studio">DaVinci Resolve Studio</option>
                      <option value="Adobe Premiere Pro">Adobe Premiere Pro</option>
                      <option value="CapCut / CapCut Pro">CapCut Pro</option>
                      <option value="Editor's Choice (Best for Project)">Editor&apos;s Recommendation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5">
                    Project Details / Footage Link / Timeline
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    placeholder="Brief description of your video, footage source (Google Drive, Frame.io), deadline, etc."
                    className={`${field} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-4 font-bold text-black hover:opacity-90 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-orange-500/20"
                >
                  <span>Send Project Details on WhatsApp</span>
                  <ArrowUpRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </Sec>
      </main>

      {/* MOBILE STICKY PILL NAVIGATION (Interactive slide / scrub gesture) */}
      <nav
        ref={navRef}
        aria-label="Sections"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
        className="fixed inset-x-3 z-50 mx-auto flex max-w-[520px] rounded-full bg-black/85 p-1.5 text-white ring-1 ring-white/20 backdrop-blur-2xl lg:hidden shadow-2xl select-none touch-none active:scale-[0.99] transition-transform duration-200"
      >
        {TABS.map(([id, label, Icon], i) => (
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
                className="absolute inset-0 rounded-full bg-amber-400 shadow-md"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
              />
            )}
            <Icon size={18} className="relative z-10" />
            <span className="relative z-10 font-medium tracking-tight text-[10px]">{label}</span>
          </button>
        ))}
      </nav>
    </MotionConfig>
  )
}
