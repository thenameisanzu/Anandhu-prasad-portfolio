'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, MotionConfig, useScroll, useSpring } from 'framer-motion'
import {
  Film,
  Play,
  Sliders,
  Mail,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  Camera,
  Clock,
  Instagram,
  Youtube,
  Plus
} from 'lucide-react'
import { InteractiveGridPattern } from './InteractiveGridPattern'

// =========================================================================
// 🎬 ANANDU PRASAD - VIDEO EDITOR & COLORIST
// Ultra-Minimal Monochrome Portfolio with Google Drive Integration
// =========================================================================
export const PROFILE = {
  name: 'Anandu Prasad',
  headline: 'Video Editor & Colorist',
  tagline: 'DaVinci Resolve • Premiere Pro • CapCut',
  bio: 'Specializing in high-retention video editing, precision color grading, and dynamic sound design. Delivering polished, high-impact cuts for commercial brands, YouTube creators, and viral short-form content.',
  phone: '+91 8606502102',
  whatsapp: '918606502102', // CountryCode + Number without '+'
  email: 'ananduprasad.edit@gmail.com',
  location: 'Kerala, India • Available Worldwide (Remote)',
  
  // 📸 HERO IMAGE:
  // Drop your photo in /public (e.g. /public/anandu.jpg) and update path below:
  heroImage: '/anandu-portrait.jpg',
  
  // 📁 MAIN GOOGLE DRIVE SHOWREEL / PORTFOLIO FOLDER LINK:
  // Paste your Google Drive video or folder link here:
  showreelDriveUrl: 'https://drive.google.com/',

  socials: {
    instagram: 'https://www.instagram.com/ananduprasad._/',
    youtube: 'https://youtube.com/',
  },
}

// 🎨 OFFICIAL SOFTWARE VECTOR LOGOS
export const LogoDaVinci = ({ size = 20, className = '' }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={`shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>DaVinci Resolve</title>
    <path d="M17.621 0 5.977.004c-1.37 0-2.756.345-3.762 1.11a4.925 4.925 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714 1.075-.605 2.025-1.556 2.497-2.984.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0zm0 .93c1.378 0 2.538.295 3.04.565.977.523 1.544 1.166 1.889 1.96.315.721.47 1.793.473 2.572l.018 11.13c.002 1.013-.097 2.257-.298 2.86-.396 1.202-1.146 1.946-2.063 2.462-.814.457-2.612.593-3.82.588l-11.05-.044c-1.657-.007-2.832-.534-3.626-1.386-.792-.851-1.212-2.06-1.212-3.485L.999 5.95c0-.829.196-1.827.474-2.437.345-.757.75-1.207 1.365-1.674C3.585 1.27 4.868.97 6.08.97zm-5.66 3.423c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864zm4.172 7.922a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001zm-8.432.038a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z"/>
  </svg>
)

export const LogoPremiere = ({ size = 20, className = '' }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={`shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Adobe Premiere Pro</title>
    <path d="M19.75 0H4.25A4.25 4.25 0 0 0 0 4.25v15.5A4.25 4.25 0 0 0 4.25 24h15.5A4.25 4.25 0 0 0 24 19.75V4.25A4.25 4.25 0 0 0 19.75 0zM10.15 8.42a2.93 2.93 0 0 0-1.18-.2 13.9 13.9 0 0 0-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 0 0-.93-1.46zM12.66 11.9a3.86 3.86 0 0 1-1.61 1.22c-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 0 1-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 0 0-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 0 1-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 0 1 .07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 0 1 .13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 0 1 1.52-.39c.07-.01.13.04.14.11z"/>
  </svg>
)

export const LogoCapCut = ({ size = 20, className = '' }) => (
  <svg
    role="img"
    viewBox="0 0 24.5 24"
    width={size}
    height={size}
    fill="currentColor"
    className={`shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>CapCut</title>
    <path d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"/>
  </svg>
)

export const LogoGoogleDrive = ({ size = 18, className = '' }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={`shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Google Drive</title>
    <path d="M7.74 2.25h8.52l7.74 13.5h-8.52L7.74 2.25zm8.12 14.25L11.61 23H3.09l4.25-6.5h8.52zM2.26 15.25L6.51 7.75l4.25 7.5H2.26z"/>
  </svg>
)

export const LogoWhatsApp = ({ size = 20, className = '' }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={`shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/>
  </svg>
)

// 🛠️ PRIMARY TOOLS & SOFTWARE
export const TOOLS = [
  {
    name: 'DaVinci Resolve',
    category: 'Color Grading & Finishing',
    badge: 'Industry Color Standard',
    icon: LogoDaVinci,
    desc: 'Deep color science, ACES/YRGB color management, Log to Rec.709 conversions, custom 3D LUTs, skin-tone preservation, and Fairlight audio mixing.',
    features: [
      'Advanced Node-Based Color Grading',
      'HDR & Rec.709 Cinematic Mastering',
      'Film Halation & Custom Look Development',
    ],
  },
  {
    name: 'Adobe Premiere Pro',
    category: 'Narrative & Commercial Editing',
    badge: 'Precision Pacing',
    icon: LogoPremiere,
    desc: 'Multi-cam synchronization, dynamic visual pacing, seamless audio mixing, speed-ramping, tight J/L cuts, and proxy workflows for 4K/6K raw footage.',
    features: [
      'High-Retention Narrative & Commercial Pacing',
      'Multi-Camera Live & Event Synchronization',
      'Dynamic Transitions & J/L Sound Cuts',
    ],
  },
  {
    name: 'CapCut / CapCut Pro',
    category: 'Viral Short-Form & Vertical Video',
    badge: 'Viral Retention',
    icon: LogoCapCut,
    desc: 'Designed for short-attention spans on Instagram Reels, YouTube Shorts, and TikTok. First 3-second hook optimization, kinetic captions, and sound design.',
    features: [
      'First 3-Second Hook Optimization',
      'Kinetic Styled Captions & Typography',
      'Trending SFX & Audio Impact Sync',
    ],
  },
]

// 📽️ SELECTED WORKS (With Direct Google Drive Links)
// Anandu can easily paste each video's Google Drive link into `driveUrl`!
export const PROJECTS = [
  {
    id: 1,
    title: 'Velocity: Coastal Drive Commercial',
    category: 'Commercial / Color Grading',
    software: 'DaVinci Resolve Studio',
    duration: '01:15',
    ratio: '16:9 Widescreen',
    desc: 'High-end commercial car spot with anamorphic framing, tone separation, aggressive speed ramps, and roaring engine sound design.',
    driveUrl: 'https://drive.google.com/', // Replace with actual Google Drive video link
    image: '/projects/car-commercial.jpg',
  },
  {
    id: 2,
    title: 'Neon Echoes: Tokyo Night Odyssey',
    category: 'Documentary / YouTube Long-Form',
    software: 'Adobe Premiere Pro',
    duration: '18:40',
    ratio: '16:9 Cinema',
    desc: 'Immersive travel documentary cut for maximum retention. Multi-layered ambient foley, textured film grain overlays, and chaptered storytelling.',
    driveUrl: 'https://drive.google.com/', // Replace with actual Google Drive video link
    image: '/projects/tokyo-doc.jpg',
  },
  {
    id: 3,
    title: 'Street Pulse: Kinetic Reels Campaign',
    category: 'Vertical Short-Form (9:16)',
    software: 'CapCut Pro & Premiere Pro',
    duration: '00:45',
    ratio: '9:16 Vertical',
    desc: 'Viral lifestyle short-form series designed to maximize engagement and re-watches. Micro-cuts on 120BPM beats, zoom bursts, and hook typography.',
    driveUrl: 'https://drive.google.com/', // Replace with actual Google Drive video link
    image: '/projects/car-commercial.jpg',
  },
  {
    id: 4,
    title: 'Shadows & Silk: Fashion Film',
    category: 'Editorial / Color Grading',
    software: 'DaVinci Resolve',
    duration: '02:30',
    ratio: '4:3 Vintage Arri',
    desc: 'High-contrast monochrome and gold aesthetic with fine 35mm grain integration, soft halation around highlights, and fluid transitions.',
    driveUrl: 'https://drive.google.com/', // Replace with actual Google Drive video link
    image: '/projects/tokyo-doc.jpg',
  },
]

// 📱 CLEAN 4-TAB NAVIGATION
export const TABS = [
  ['home', 'Home', Film],
  ['projects', 'Work', Play],
  ['skills', 'Skills', Sliders],
  ['contact', 'Contact', Mail],
]

// Reusable Section Container with generous top clearance for fixed header
const Sec = ({ id, alternate, isFooter = false, className = '', children }) => (
  <section
    id={id}
    className={`relative px-5 md:px-10 lg:px-16 max-md:h-[100dvh] max-md:min-w-full max-md:w-full max-md:max-w-full max-md:snap-start max-md:snap-always max-md:overflow-y-auto max-md:overflow-x-hidden ${
      isFooter
        ? 'pt-28 pb-28 md:pt-28 md:pb-6 md:min-h-0'
        : 'pt-28 pb-28 md:py-24 md:min-h-screen'
    } ${
      alternate ? 'bg-neutral-950 text-white border-y border-white/10' : 'bg-black text-white'
    } ${className}`}
  >
    {children}
  </section>
)

const H2 = ({ children, className = '' }) => (
  <motion.h2
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className={`font-display text-[13vw] font-bold leading-[.88] tracking-tighter text-white md:text-[10vw] lg:text-[7.5rem] ${className}`}
  >
    {children}
  </motion.h2>
)

const renderSoftwareBadge = (software, dark = false) => {
  const s = software.toLowerCase()
  let Icon = null
  if (s.includes('davinci')) Icon = LogoDaVinci
  else if (s.includes('premiere')) Icon = LogoPremiere
  else if (s.includes('capcut')) Icon = LogoCapCut

  return (
    <span className="inline-flex items-center gap-1.5">
      {Icon && <Icon size={14} className={dark ? 'text-black' : 'text-white'} />}
      <span>{software}</span>
    </span>
  )
}

export default function Site() {
  const pager = useRef(null)
  const [active, setActive] = useState(0)
  const [hoveredProject, setHoveredProject] = useState(1)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
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
      if (window.innerWidth < 768) return setActive(Math.round(p.scrollLeft / p.clientWidth))
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
    if (window.innerWidth < 768 && p) p.scrollTo({ left: i * p.clientWidth, behavior: 'smooth' })
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
    const driveLink = f.get('driveLink') || ''
    const details = f.get('details') || ''

    const msg = `Hi Anandu,\nI saw your video editing portfolio!\n\nName: ${name}\nProject: ${service}\nFootage / Drive Link: ${driveLink}\nDetails: ${details}\n\nLet's collaborate on this edit!`
    window.open(`https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const field =
    'w-full rounded-2xl border border-white/20 bg-white/[0.05] px-5 py-4 text-base text-white placeholder:text-white/40 focus:border-white focus:bg-white/[0.08] focus:outline-none transition-all'

  return (
    <MotionConfig reducedMotion="user">
      {/* Pure White Minimal Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-white z-50 origin-left"
        style={{ scaleX }}
      />

      {/* FIXED HEADER */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-3 md:py-4 text-white backdrop-blur-md bg-black/85 border-b border-white/10 md:px-10 lg:px-16">
        <button
          onClick={() => go(0)}
          className="group flex items-center gap-3 text-left hover:opacity-75 transition-opacity"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-white text-black font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
            AP
          </div>
          <div>
            <span className="font-display text-base font-bold tracking-tight block leading-tight text-white">
              {PROFILE.name}
            </span>
            <span className="text-[10px] font-mono tracking-wider text-white/60 uppercase block">
              Editor & Colorist
            </span>
          </div>
        </button>

        {/* Desktop / Tablet Navigation */}
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {TABS.slice(1).map(([id, label], i) => (
            <button
              key={id}
              onClick={() => go(i + 1)}
              className="relative py-1 text-white/60 hover:text-white transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Quick Google Drive Showreel CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.showreelDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 font-mono text-xs text-white hover:border-white hover:bg-white hover:text-black transition-all shadow-xs"
          >
            <LogoGoogleDrive size={15} />
            <span className="font-semibold">Drive Showreel</span>
            <ArrowUpRight size={13} />
          </a>
          <button
            onClick={() => go(3)}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-md"
          >
            <span>Let&apos;s Cut</span>
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT */}
      <main
        ref={pager}
        className="no-scrollbar max-md:flex max-md:h-[100dvh] max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto overscroll-x-contain"
      >
        {/* =========================================================================
            SECTION 1: HERO - CLEAN MINIMAL MONOCHROME WITH GOOGLE DRIVE CTA
            ========================================================================= */}
        <Sec id="home" className="overflow-hidden">
          {/* Interactive Dynamic Grid Pattern Background */}
          <InteractiveGridPattern
            width={44}
            height={44}
            className="[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,white_25%,transparent_90%)] opacity-85"
          />

          <div className="relative z-10 flex min-h-[calc(100dvh-12rem)] flex-col justify-center pt-2 sm:pt-6 md:min-h-[calc(100vh-12rem)]">
            
            {/* Viewfinder HUD Ticker */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-white/50 border-b border-white/10 pb-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-white font-semibold tracking-wide">
                  <span className="h-2 w-2 rounded-full bg-white animate-ping inline-block" />
                  REC [●] 00:02:48:19
                </span>
                <span className="hidden sm:inline text-white/20">|</span>
                <span className="hidden sm:inline">4K DCI • 23.976 FPS</span>
                <span className="hidden md:inline text-white/20">|</span>
                <span className="hidden md:inline text-white/70">PRORES 422 HQ</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <span className="text-[10px] uppercase tracking-widest text-white/40">COLOR PIPELINE:</span>
                <span className="rounded border border-white/15 bg-white/[0.06] px-2 py-0.5 text-[11px] text-white font-medium">
                  DaVinci YRGB Color Managed
                </span>
              </div>
            </motion.div>

            {/* Grid Layout: Left Typography | Right Photo Frame - Side-by-side on md (iPad) and lg (Desktop) */}
            <div className="grid gap-8 md:gap-10 md:grid-cols-12 md:items-center">
              
              {/* Left Column: Headline, Bio & Google Drive Button */}
              <div className="md:col-span-7 flex flex-col justify-center">
                
                {/* Official Software Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="mb-5 flex flex-wrap items-center gap-2.5"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white">
                    <LogoDaVinci size={16} />
                    <span>DaVinci Resolve</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white">
                    <LogoPremiere size={16} />
                    <span>Premiere Pro</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white">
                    <LogoCapCut size={16} />
                    <span>CapCut Pro</span>
                  </span>
                </motion.div>

                {/* Animated Stylised Name Headline - Unified Single Outlines */}
                <h1
                  aria-label={PROFILE.name}
                  className="select-none text-[15vw] leading-none tracking-normal sm:text-[12vw] md:text-[5.5rem] lg:text-[7.2rem] xl:text-[8.2rem]"
                >
                  {/* First Name: Solid Pure White */}
                  <span className="block overflow-hidden pb-[.06em] font-anton uppercase tracking-[0.02em] text-white">
                    {'ANANDU'.split('').map((c, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.35, delay: 0.04 + i * 0.02, ease: 'easeOut' }}
                      >
                        {c}
                      </motion.span>
                    ))}
                  </span>

                  {/* Last Name: Stylised Hollow White Outline - Clean Below ANANDU */}
                  <span className="block overflow-hidden pb-[.06em] mt-1 sm:mt-2 font-anton uppercase tracking-[0.05em] text-transparent [-webkit-text-stroke:2px_#fff] sm:[-webkit-text-stroke:2.4px_#fff] lg:[-webkit-text-stroke:3px_#fff] hover:text-white transition-colors duration-300 cursor-default">
                    {'PRASAD'.split('').map((c, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.02em] last:mr-0"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.35, delay: 0.12 + i * 0.02, ease: 'easeOut' }}
                      >
                        {c}
                      </motion.span>
                    ))}
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.25 }}
                      className="inline-block text-white ml-1 [-webkit-text-stroke:0px]"
                    >
                      .
                    </motion.span>
                  </span>
                </h1>

                {/* Subtitle Bio */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.18, ease: 'easeOut' }}
                  className="mt-6 max-w-xl text-base sm:text-lg md:text-lg text-white/75 leading-relaxed font-normal"
                >
                  {PROFILE.bio}
                </motion.p>

                {/* Hero CTAs: Direct Google Drive Link & Hire Button */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.22, ease: 'easeOut' }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <a
                    href={PROFILE.showreelDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-semibold text-black hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
                  >
                    <LogoGoogleDrive size={18} />
                    <span>Watch Drive Showreel</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <button
                    onClick={() => go(3)}
                    className="flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-7 py-4 font-medium text-white hover:border-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                  >
                    <span>Hire For Edit</span>
                    <ArrowUpRight size={18} />
                  </button>
                </motion.div>
              </div>

              {/* Right Column: CLEAN PORTRAIT IMAGE (3:4 Ratio, Rounded Edges, Side-by-Side on Tablet/Desktop) */}
              <div className="md:col-span-5 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
                  className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-none"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-neutral-900 border border-white/15 shadow-2xl">
                    <Image
                      src={PROFILE.heroImage}
                      alt={`${PROFILE.name} - Video Editor Portrait`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 420px"
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>

            </div>

            <motion.p
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mt-8 text-center text-xs font-mono text-white/40 md:hidden"
            >
              Swipe to explore work &rarr;
            </motion.p>
          </div>
        </Sec>

        {/* =========================================================================
            SECTION 2: SELECTED PROJECTS WITH GOOGLE DRIVE BUTTONS
            ========================================================================= */}
        <Sec id="projects" alternate>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-2 font-semibold">
                Portfolio Showcase
              </span>
              <H2>Selected Works</H2>
            </div>
            <p className="max-w-md text-base text-white/70 md:text-lg">
              Click any project to view details or open the master video directly in Google Drive.
            </p>
          </div>

          {/* Project List */}
          <div className="mt-12 divide-y divide-white/10">
            {PROJECTS.map((project) => {
              const isRevealed = hoveredProject === project.id
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={`group relative transition-all duration-300 ${
                    isRevealed ? 'bg-white/[0.06] -mx-4 px-4 rounded-3xl' : 'hover:bg-white/[0.03] -mx-4 px-4 rounded-3xl'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setHoveredProject((prev) => (prev === project.id ? null : project.id))}
                    className="flex w-full items-center justify-between py-6 text-left cursor-pointer select-none"
                    aria-expanded={isRevealed}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <span className="font-mono text-xs text-white/40 font-semibold">
                        0{project.id}
                      </span>
                      <div>
                        <h3
                          className={`font-display text-2xl font-bold tracking-tight text-white transition-all duration-300 md:text-4xl lg:text-5xl ${
                            isRevealed ? 'translate-x-2' : 'group-hover:translate-x-1'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-xs text-white/60">
                          <span className="text-white font-medium">{renderSoftwareBadge(project.software)}</span>
                          <span>•</span>
                          <span>{project.category}</span>
                          <span>•</span>
                          <span>{project.ratio}</span>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      animate={{
                        rotate: isRevealed ? 45 : 0,
                        scale: isRevealed ? 1.15 : 1,
                        backgroundColor: isRevealed ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                      }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
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
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 md:grid-cols-2 items-center">
                          <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                              <span className="rounded-md bg-white text-black px-2.5 py-1 text-xs font-mono inline-flex items-center gap-1.5 font-bold">
                                {renderSoftwareBadge(project.software, true)}
                              </span>
                              <span className="rounded-md bg-white/5 border border-white/15 px-2.5 py-1 text-xs font-mono text-white">
                                Duration: {project.duration}
                              </span>
                            </div>
                            <p className="max-w-md text-base text-white/75 leading-relaxed font-normal">
                              {project.desc}
                            </p>
                            
                            {/* GOOGLE DRIVE ACTION BUTTON */}
                            <div className="flex flex-wrap items-center gap-3 pt-2">
                              <a
                                href={project.driveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-sm"
                              >
                                <LogoGoogleDrive size={15} />
                                <span>Open Video in Google Drive</span>
                                <ArrowUpRight size={14} />
                              </a>
                            </div>
                          </div>

                          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-900 border border-white/15 shadow-md group/img">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-mono text-white">
                              <span className="h-2 w-2 rounded-full bg-white" />
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
            SECTION 3: SOFTWARE & ARSENAL
            ========================================================================= */}
        <Sec id="skills">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-2 font-semibold">
                Software & Workflow
              </span>
              <H2>The Arsenal</H2>
            </div>
            <p className="max-w-md text-base text-white/70 md:text-lg">
              Specialized mastery across the top 3 video post-production tools.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((tool, i) => {
              const Icon = tool.icon
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.25, delay: i * 0.05, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/30 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black shadow-sm p-2.5">
                        <Icon size={26} className="text-black" />
                      </div>
                      <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[11px] font-semibold text-white">
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

                    <div className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                      {tool.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                          <CheckCircle2 size={15} className="text-white shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Sec>

        {/* =========================================================================
            SECTION 4: CONTACT & HIRE ME (WHATSAPP & FOOTAGE LINK)
            ========================================================================= */}
        <Sec id="contact" alternate isFooter>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest block mb-2 font-semibold">
                Collaboration
              </span>
              <H2>Let&apos;s Cut</H2>
            </div>
            <p className="max-w-md text-base text-white/70 md:text-lg">
              Have Google Drive footage ready? Send project details and let&apos;s get cutting.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 items-start w-full max-w-full overflow-hidden">
            {/* Direct Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="space-y-8 w-full max-w-full"
            >
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-bold tracking-tight text-white">
                  Direct Inquiries
                </h3>
                <p className="text-base text-white/70 max-w-md">
                  Fast response within 2-4 hours. Send your raw footage links via Google Drive or Dropbox.
                </p>
              </div>

              <div className="space-y-3 font-mono text-sm text-white">
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/15 hover:border-white transition-all text-white"
                >
                  <Phone size={18} className="text-white" />
                  <span>{PROFILE.phone}</span>
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/15 hover:border-white transition-all text-white"
                >
                  <Mail size={18} className="text-white" />
                  <span>{PROFILE.email}</span>
                </a>
                <a
                  href={PROFILE.showreelDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/15 hover:border-white transition-all text-white"
                >
                  <LogoGoogleDrive size={18} className="text-white" />
                  <span>Google Drive Portfolio Folder</span>
                  <ArrowUpRight size={14} className="ml-auto text-white/40" />
                </a>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/15 text-white/70">
                  <Clock size={18} className="text-white" />
                  <span>{PROFILE.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-3 font-semibold">
                  Follow & Connect
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={PROFILE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white hover:bg-white hover:text-black transition-all shadow-xs"
                  >
                    <Instagram size={15} />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={PROFILE.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white hover:bg-white hover:text-black transition-all shadow-xs"
                  >
                    <Youtube size={15} />
                    <span>YouTube</span>
                  </a>
                  <a
                    href={`https://wa.me/${PROFILE.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-bold hover:bg-neutral-200 transition-all shadow-sm"
                  >
                    <LogoWhatsApp size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.25, delay: 0.05, ease: 'easeOut' }}
              className="w-full max-w-full overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-6 sm:p-8 shadow-sm backdrop-blur-md"
            >
              <h4 className="font-display text-2xl font-bold tracking-tight text-white mb-2">
                Send Project Details
              </h4>
              <p className="text-xs text-white/60 font-mono mb-6">
                Paste your Google Drive link to send directly to Anandu on WhatsApp.
              </p>

              <form onSubmit={bookOnWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5 font-medium">
                    Your Name / Channel
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="e.g. Rahul / Creator"
                    className={field}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5 font-medium">
                    Project Type
                  </label>
                  <select
                    name="service"
                    className={`${field} bg-neutral-900 text-white cursor-pointer`}
                  >
                    <option value="YouTube Long-Form (Retention Edit)">YouTube Long-Form Video</option>
                    <option value="Commercial / Brand Ad Spot">Commercial / Brand Ad</option>
                    <option value="Instagram Reels & TikToks">Viral Reels / TikToks</option>
                    <option value="DaVinci Resolve Color Grading">Color Grading Only</option>
                    <option value="Full Video Post-Production">Complete Post-Production</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5 font-medium">
                    Google Drive Footage Link (Optional)
                  </label>
                  <input
                    name="driveLink"
                    placeholder="https://drive.google.com/drive/folders/..."
                    className={field}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5 font-medium">
                    Project Notes / Deadline
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    placeholder="Brief description of the edit, audio preferences, deadline, etc."
                    className={`${field} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 font-bold text-black hover:bg-neutral-200 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-md cursor-pointer"
                >
                  <LogoWhatsApp size={18} />
                  <span>Send Details on WhatsApp</span>
                  <ArrowUpRight size={18} />
                </button>
              </form>
            </motion.div>
          </div>

          {/* FOOTER */}
          <footer className="mt-12 lg:mt-14 border-t border-white/10 pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50 w-full max-w-full overflow-hidden">
            <p>© {new Date().getFullYear()} Anandu Prasad. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span>Crafted by</span>
              <a
                href="https://aethrasolutions.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white tracking-tight hover:underline underline-offset-4 transition-all"
              >
                Aethra Digital Solutions
              </a>
            </p>
          </footer>
        </Sec>
      </main>

      {/* MOBILE STICKY PILL NAVIGATION */}
      <nav
        ref={navRef}
        aria-label="Sections"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
        className="fixed inset-x-3 z-50 mx-auto flex max-w-[480px] rounded-full bg-neutral-950/90 p-1.5 text-white ring-1 ring-white/15 backdrop-blur-2xl md:hidden shadow-2xl select-none touch-none active:scale-[0.99] transition-transform duration-200"
      >
        {TABS.map(([id, label, Icon], i) => (
          <button
            key={id}
            type="button"
            onClick={() => go(i)}
            className={`relative flex flex-1 flex-col items-center gap-0.5 rounded-full py-2 text-[11px] transition-colors duration-200 ${
              active === i ? 'text-black font-semibold' : 'text-white/60'
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 rounded-full bg-white shadow-md"
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
