'use client'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
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
  Clock,
  Instagram,
  Youtube,
  Plus,
  Sun,
  Moon,
  User,
  Sparkles,
  X,
  LayoutGrid,
  List,
  FolderOpen,
  Maximize2,
} from 'lucide-react'
import { InteractiveGridPattern } from './InteractiveGridPattern'

// =========================================================================
// 🎬 THEME CONTEXT & HOOK
// =========================================================================
const ThemeContext = createContext({
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {},
})
export const useTheme = () => useContext(ThemeContext)

// =========================================================================
// 🎬 ANANDU PRASAD - VIDEO EDITOR & COLORIST
// Ultra-Minimal Monochrome Portfolio with Google Drive Integration
// =========================================================================
export const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1sV2acpQ12Ff7tiz_OJNOH6e6PONIAK__'

export const PROFILE = {
  name: 'Anandu Prasad',
  headline: 'VIDEO EDITOR · COLOR GRADING · POST-PRODUCTION',
  bio: 'I shape raw footage into cinematic stories through precise editing, thoughtful sound design, and intentional color.',
  tagline: 'Editing with purpose. Storytelling with feeling.',
  aboutBio: 'A video editor focused on storytelling, rhythm, sound design, and cinematic color — creating visuals that feel intentional, immersive, and memorable.',
  heroTags: ['Wedding Films', 'Cinematic Edits', 'Social Content'],
  phone: '+91 8606502102',
  whatsapp: '918606502102',
  email: 'anandugraphy@gmail.com',
  location: 'Kerala, India • Available Worldwide (Remote)',
  
  heroImage: '/anandu-portrait.jpg',
  showreelDriveUrl: DRIVE_FOLDER_URL,

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

export const LogoAfterEffects = ({ size = 20, className = '' }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={`shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Adobe After Effects</title>
    <path d="M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z"/>
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
    viewBox="0 0 87.3 78"
    width={size}
    height={size}
    className={`shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Google Drive</title>
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
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
    name: 'Adobe After Effects',
    category: 'Motion Design & Visual FX',
    badge: 'Motion & Visual FX',
    icon: LogoAfterEffects,
    desc: 'Kinetic typography, 3D camera tracking, seamless rotoscoping, custom VFX clean-ups, dynamic title animations, and cinematic transitions.',
    features: [
      'Advanced Kinetic Typography & Motion Design',
      '3D Camera Tracking & Clean-Plate Rotoscoping',
      'Custom Visual FX & Dynamic Transitions',
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

// 📽️ SELECTED WORKS - 2025/26 SYNCED WITH GOOGLE DRIVE
export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'weddings', label: 'Wedding Films & Highlights' },
  { id: 'cinematic', label: 'Cinematic & Travel Edits' },
  { id: 'reels', label: 'Reels & Social Media Content' },
  { id: 'brand', label: 'Brand Films & Promos' },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Creamin: A Sweet Beginning',
    file: 'A Sweet Beginning',
    driveId: '1qu--RNOXEWenVRXysdAlpjR_deYEG2k4',
    category: 'Brand Films & Promos',
    filterCategory: 'brand',
    software: 'DaVinci Resolve Studio',
    duration: '01:15',
    size: '35.2 MB',
    ratio: '9:16 Vertical Reel',
    desc: 'Upcoming brand commercial for Creamin. Playful pacing, vibrant dessert visuals, rhythmic sound design, and clean pastel color grade.',
    driveUrl: 'https://drive.google.com/file/d/1qu--RNOXEWenVRXysdAlpjR_deYEG2k4/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1qu--RNOXEWenVRXysdAlpjR_deYEG2k4/preview',
    videoUrl: '/projects/creamin.mp4',
    thumbnailImage: '/projects/creamin.jpg',
    tags: ['Brand Film', 'Upcoming Brand', 'DaVinci Resolve'],
  },
  {
    id: 2,
    title: 'Golden Hour: Cinematic Portrait Film',
    file: 'Golden Hour — Cinematic Portrait Film',
    driveId: '1c4-XQAbTFMkh2SknbMIdgNMcRCqgIenJ',
    category: 'Wedding Films & Highlights',
    filterCategory: 'weddings',
    software: 'DaVinci Resolve & CapCut Pro',
    duration: '00:45',
    size: '20.5 MB',
    ratio: '9:16 Vertical Reel',
    desc: 'Golden hour aesthetic portrait film with luminous warm skin tones, soft highlight rolls, rhythmic pacing, and emotional music bed.',
    driveUrl: 'https://drive.google.com/file/d/1c4-XQAbTFMkh2SknbMIdgNMcRCqgIenJ/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1c4-XQAbTFMkh2SknbMIdgNMcRCqgIenJ/preview',
    thumbnailImage: '/projects/cinematic-portrait.jpg',
    tags: ['Golden Hour', 'Portrait Film', 'Skin Tone Color', 'DaVinci Resolve'],
  },
  {
    id: 3,
    title: 'Wagamon Diaries: A Cinematic Road Trip',
    file: 'Wagamon Diaries — A Cinematic Road Trip',
    driveId: '1_GdaevQ-gFKcLTaRFDAgYncYrVOgPHkn',
    category: 'Cinematic & Travel Edits',
    filterCategory: 'cinematic',
    software: 'DaVinci Resolve',
    duration: '01:45',
    size: '95.3 MB',
    ratio: '16:9 Cinematic',
    desc: 'Misty hills and tranquil road journey of Vagamon captured with rich film grain, deep forest greens, ambient soundscapes, and gentle pacing.',
    driveUrl: 'https://drive.google.com/file/d/1_GdaevQ-gFKcLTaRFDAgYncYrVOgPHkn/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1_GdaevQ-gFKcLTaRFDAgYncYrVOgPHkn/preview',
    thumbnailImage: null,
    tags: ['Road Trip', 'Film Grain', 'DaVinci Resolve'],
  },
  {
    id: 4,
    title: 'Timeless Grace: A Saree Film',
    file: 'Timeless Grace — A Saree Film',
    driveId: '1BBdkpSsO3tCH0Pq_lJNo7c5ne8QJajhx',
    category: 'Wedding Films & Highlights',
    filterCategory: 'weddings',
    software: 'DaVinci Resolve',
    duration: '01:10',
    size: '49.4 MB',
    ratio: '16:9 Cinema',
    desc: 'Aesthetic traditional saree film with graceful pacing, rich fabric textures, elegant warmth, and emotive score.',
    driveUrl: 'https://drive.google.com/file/d/1BBdkpSsO3tCH0Pq_lJNo7c5ne8QJajhx/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1BBdkpSsO3tCH0Pq_lJNo7c5ne8QJajhx/preview',
    thumbnailImage: null,
    tags: ['Saree Film', 'Skin Tone Color', 'DaVinci Resolve'],
  },
  {
    id: 5,
    title: 'Beyond the Ride: Road Story',
    file: 'Beyond the Ride',
    driveId: '1QXy1kICMuEbz5HK2UfdHZZA8cG9zEO3N',
    category: 'Cinematic & Travel Edits',
    filterCategory: 'cinematic',
    software: 'Adobe Premiere Pro',
    duration: '01:05',
    size: '47.8 MB',
    ratio: '16:9 Cinematic',
    desc: 'Open-road visual narrative highlighting the rhythm of journey, sweeping landscapes, dynamic speed curves, and emotive acoustic sound design.',
    driveUrl: 'https://drive.google.com/file/d/1QXy1kICMuEbz5HK2UfdHZZA8cG9zEO3N/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1QXy1kICMuEbz5HK2UfdHZZA8cG9zEO3N/preview',
    thumbnailImage: '/projects/beyond-the-ride.jpg',
    tags: ['Road Story', 'Speed Curves', 'Premiere Pro'],
  },
  {
    id: 6,
    title: 'The Art of Beauty: Fashion Aesthetic',
    file: 'The Art of Beauty',
    driveId: '1eRSgnNweBRr38AnYdVB91Gdk-ulWwmqF',
    category: 'Reels & Social Media Content',
    filterCategory: 'reels',
    software: 'CapCut Pro & DaVinci',
    duration: '00:40',
    size: '49.5 MB',
    ratio: '9:16 Vertical Reel',
    desc: 'High-fashion aesthetic reel featuring refined color palette, seamless match cuts, dynamic typography, and crisp beauty grade.',
    driveUrl: 'https://drive.google.com/file/d/1eRSgnNweBRr38AnYdVB91Gdk-ulWwmqF/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1eRSgnNweBRr38AnYdVB91Gdk-ulWwmqF/preview',
    thumbnailImage: null,
    tags: ['Fashion Reel', 'Beauty Grade', 'CapCut Pro'],
  },
  {
    id: 7,
    title: 'Noolab: Motion in Monochrome',
    file: 'NOOLAB — Motion in Monochrome',
    driveId: '1uc4z_qQWK3nlHKzBIodNNHgPa05meSOO',
    category: 'Reels & Social Media Content',
    filterCategory: 'reels',
    software: 'CapCut Pro & Premiere Pro',
    duration: '00:35',
    size: '10.7 MB',
    ratio: '9:16 Vertical Reel',
    desc: 'Modern streetwear apparel campaign designed for viral retention on Instagram Reels and TikTok. Quick punch-ins, kinetic sync, and crisp bass drops.',
    driveUrl: 'https://drive.google.com/file/d/1uc4z_qQWK3nlHKzBIodNNHgPa05meSOO/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1uc4z_qQWK3nlHKzBIodNNHgPa05meSOO/preview',
    thumbnailImage: null,
    tags: ['Motion in Monochrome', 'Streetwear', 'CapCut Pro'],
  },
  {
    id: 8,
    title: 'The Art of Motocross: Action Cut',
    file: 'The Art of Motocross',
    driveId: '1OLQHX3AMpUyk9eSIjNcLYZbjrs_-3dpO',
    category: 'Brand Films & Promos',
    filterCategory: 'brand',
    software: 'Adobe Premiere Pro',
    duration: '01:00',
    size: '77.3 MB',
    ratio: '16:9 Widescreen',
    desc: 'High-octane action sports cut with beat-synchronized jump cuts, dirt-track rev sound design, aggressive whip transitions, and vivid grade.',
    driveUrl: 'https://drive.google.com/file/d/1OLQHX3AMpUyk9eSIjNcLYZbjrs_-3dpO/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1OLQHX3AMpUyk9eSIjNcLYZbjrs_-3dpO/preview',
    thumbnailImage: '/projects/motocross.jpg',
    tags: ['Action Sports', 'Beat Sync', 'Premiere Pro'],
  },
  {
    id: 9,
    title: 'The Art of Performance: Brand Promo',
    file: 'The Art of Performance',
    driveId: '1KY6cCEK0u1MKaH35tgxyUdgHvfMcbUON',
    category: 'Brand Films & Promos',
    filterCategory: 'brand',
    software: 'DaVinci Resolve Studio',
    duration: '01:10',
    size: '59.3 MB',
    ratio: '16:9 Cinema 4K',
    desc: 'Dynamic cinematic commercial focusing on power, elegance, and velocity. Precision speed-ramps, custom audio riser curves, and sleek anamorphic tones.',
    driveUrl: 'https://drive.google.com/file/d/1KY6cCEK0u1MKaH35tgxyUdgHvfMcbUON/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1KY6cCEK0u1MKaH35tgxyUdgHvfMcbUON/preview',
    thumbnailImage: '/projects/porsche-art-of-performance.jpg',
    tags: ['Brand Promo', 'Speed Ramps', 'DaVinci Resolve'],
  },
  {
    id: 10,
    title: 'Dentistree: A Dental Clinic Film',
    file: 'Dentistree — A Dental Clinic Film',
    driveId: '1CcdfrybKr1EegkiIBYjjR92AvGNT1xP9',
    category: 'Brand Films & Promos',
    filterCategory: 'brand',
    software: 'DaVinci Resolve Studio',
    duration: '01:00',
    size: '39.6 MB',
    ratio: '16:9 Widescreen',
    desc: 'Clean, modern corporate brand film for Dentistree Healthcare. Trust-building clean clinical lighting grade, clear voiceover pacing, and warm ambient score.',
    driveUrl: 'https://drive.google.com/file/d/1CcdfrybKr1EegkiIBYjjR92AvGNT1xP9/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1CcdfrybKr1EegkiIBYjjR92AvGNT1xP9/preview',
    thumbnailImage: null,
    tags: ['Dental Clinic Film', 'Clean Grade', 'DaVinci Resolve'],
  },
  {
    id: 11,
    title: 'Noolab: Crafted in Detail',
    file: 'NOOLAB — Crafted in Detail',
    driveId: '1-ihdmbX2TmVRO__EC-H16YndVfWs0rLo',
    category: 'Reels & Social Media Content',
    filterCategory: 'reels',
    software: 'CapCut Pro & Premiere Pro',
    duration: '00:30',
    size: '7.7 MB',
    ratio: '9:16 Vertical Reel',
    desc: 'Detailed streetwear garment showcase highlighting fabric craftsmanship, texture macro cuts, minimal monochrome aesthetic, and tight kinetic cuts.',
    driveUrl: 'https://drive.google.com/file/d/1-ihdmbX2TmVRO__EC-H16YndVfWs0rLo/view?usp=sharing',
    previewUrl: 'https://drive.google.com/file/d/1-ihdmbX2TmVRO__EC-H16YndVfWs0rLo/preview',
    thumbnailImage: null,
    tags: ['Crafted in Detail', 'Streetwear', 'CapCut Pro'],
  },
]

// 📱 CLEAN 5-TAB NAVIGATION
export const TABS = [
  ['home', 'Home', Film],
  ['about', 'About', User],
  ['projects', 'Work', Play],
  ['skills', 'Skills', Sliders],
  ['contact', 'Contact', Mail],
]

// Solid Static Section Container (No vertical translation = zero scroll glitch)
const Sec = ({ id, alternate, isFooter = false, className = '', children }) => {
  const { isDark } = useTheme()
  return (
    <section
      id={id}
      className={`relative px-5 md:px-10 lg:px-16 max-lg:h-[100dvh] max-lg:min-w-full max-lg:w-full max-lg:max-w-full max-lg:snap-start max-lg:overflow-y-auto max-lg:overflow-x-hidden ${
        isFooter
          ? 'pt-24 pb-28 lg:pt-28 lg:pb-6 lg:min-h-0'
          : 'pt-24 pb-28 lg:py-24 lg:min-h-screen'
      } ${
        alternate
          ? isDark
            ? 'bg-neutral-950 text-white border-y border-white/10'
            : 'bg-neutral-50 text-black border-y border-black/10'
          : isDark
          ? 'bg-black text-white'
          : 'bg-white text-black'
      } transition-colors duration-150 ${className}`}
      style={{
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-y pan-x',
      }}
    >
      {children}
    </section>
  )
}

// Basic clean fade for Headings
const H2 = ({ children, className = '' }) => {
  const { isDark } = useTheme()
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={`font-display text-[13vw] font-bold leading-[.88] tracking-tighter md:text-[10vw] lg:text-[7.5rem] ${
        isDark ? 'text-white' : 'text-black'
      } transition-colors duration-150 ${className}`}
    >
      {children}
    </motion.h2>
  )
}

const getSoftwareIcon = (software = '', isDark = true) => {
  const s = (software || '').toLowerCase()
  const iconColor = isDark ? 'text-white' : 'text-black'
  if (s.includes('davinci')) return <LogoDaVinci size={18} className={iconColor} />
  if (s.includes('premiere')) return <LogoPremiere size={18} className={iconColor} />
  if (s.includes('after effects') || s.includes('aftereffects')) return <LogoAfterEffects size={18} className={iconColor} />
  if (s.includes('capcut')) return <LogoCapCut size={18} className={iconColor} />
  return <Film size={18} className={iconColor} />
}

// 🎬 COMPACT VERTICAL VIDEO CARD (MATCHING USER REFERENCE IMAGE)
const VerticalProjectCard = ({ project, isDark, onPlay }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      onClick={() => onPlay(project)}
      className={`group relative aspect-[9/13.5] w-full overflow-hidden rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer select-none shadow-md hover:-translate-y-1.5 hover:shadow-2xl ${
        isDark
          ? 'border-white/15 bg-neutral-900/90 text-white hover:border-white/40 shadow-black/40'
          : 'border-black/15 bg-neutral-100 text-black hover:border-black/40 shadow-black/5'
      }`}
    >
      {/* 1. Background Visual: Thumbnail Image (if provided) OR High-End Reel Placeholder */}
      {project.thumbnailImage ? (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle hover play overlay */}
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
            <div className="h-11 w-11 rounded-full bg-white text-black flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
              <Play size={18} className="fill-current ml-0.5" />
            </div>
          </div>
        </div>
      ) : (
        /* Cinematic Vertical Reel Frame Placeholder */
        <div className="absolute inset-0 flex flex-col justify-between p-3.5 select-none">
          {/* Subtle dot pattern background */}
          <div
            className={`absolute inset-0 opacity-[0.07] ${
              isDark
                ? 'bg-[radial-gradient(#fff_1px,transparent_1px)]'
                : 'bg-[radial-gradient(#000_1px,transparent_1px)]'
            } [background-size:14px_14px] pointer-events-none`}
          />

          {/* Optical Viewfinder Corner Brackets */}
          <div
            className={`absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l transition-colors ${
              isDark ? 'border-white/30 group-hover:border-white/70' : 'border-black/30 group-hover:border-black/70'
            }`}
          />
          <div
            className={`absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r transition-colors ${
              isDark ? 'border-white/30 group-hover:border-white/70' : 'border-black/30 group-hover:border-black/70'
            }`}
          />

          {/* Top Bar inside card */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
            <span
              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border backdrop-blur-md ${
                isDark ? 'border-white/15 bg-black/60 text-white/90' : 'border-black/15 bg-white/80 text-black/90'
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>{project.ratio.includes('9:16') ? '9:16' : '4K'}</span>
            </span>

            <span
              className={`px-2 py-0.5 rounded-full border backdrop-blur-md font-semibold ${
                isDark ? 'border-white/15 bg-black/60 text-white/80' : 'border-black/15 bg-white/80 text-black/80'
              }`}
            >
              {project.duration}
            </span>
          </div>

          {/* Center Play Icon */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center px-2">
            <div
              className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border shadow-lg transition-all duration-300 group-hover:scale-110 ${
                isDark
                  ? 'border-white/30 bg-white/10 text-white group-hover:bg-white group-hover:text-black group-hover:border-white'
                  : 'border-black/30 bg-black/5 text-black group-hover:bg-black group-hover:text-white group-hover:border-black'
              }`}
            >
              <Play size={18} className="fill-current ml-0.5" />
            </div>

            <span
              className={`mt-2 font-mono text-[9px] uppercase tracking-widest font-bold transition-opacity ${
                isDark ? 'text-white/60 group-hover:text-white' : 'text-black/60 group-hover:text-black'
              }`}
            >
              WATCH CUT
            </span>
          </div>

          {/* Empty bottom spacer for gradient overlay */}
          <div />
        </div>
      )}

      {/* 2. Bottom Overlay (Matches user reference image: white dot + Title / Channel Name) */}
      <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-14 pb-3.5 px-3.5 flex flex-col justify-end text-white">
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-2 w-2 rounded-full bg-white shrink-0 shadow-sm" />
          <h4 className="text-xs sm:text-sm font-semibold font-montserrat tracking-tight truncate leading-tight">
            {project.title.split(':')[0]}
          </h4>
        </div>
        <p className="text-[10px] sm:text-[11px] font-montserrat text-white/60 truncate mt-0.5 pl-4">
          {project.title.includes(':') ? project.title.split(':')[1].trim() : project.category}
        </p>
      </div>

      {/* Subtle hover ring */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none ring-1 ring-inset ring-transparent group-hover:ring-white/20 transition-all duration-300" />
    </motion.div>
  )
}

export default function Site() {
  const pager = useRef(null)
  const [active, setActive] = useState(0)
  const [hoveredProject, setHoveredProject] = useState(1)
  const [theme, setTheme] = useState('dark')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [playingVideo, setPlayingVideo] = useState(null)

  const isDark = theme === 'dark'

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.001,
  })

  const lastActiveRef = useRef(active)
  const isProgrammaticScroll = useRef(false)
  const scrollTimeoutRef = useRef(null)

  // Close video modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setPlayingVideo(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Initialize theme from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('anandu-portfolio-theme')
      const initial = saved || 'dark'
      setTheme(initial)
      if (initial === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
    } catch (_) {}
  }, [])

  // Fast, Stutter-Free Theme Toggle
  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    const root = document.documentElement

    root.classList.toggle('dark', nextTheme === 'dark')
    root.classList.toggle('light', nextTheme === 'light')

    setTheme(nextTheme)
    try {
      localStorage.setItem('anandu-portfolio-theme', nextTheme)
    } catch (_) {}
  }

  useEffect(() => {
    lastActiveRef.current = active
  }, [active])

  // Precision Navigation handler with programmatic scroll lock
  const go = (i) => {
    setActive(i)
    lastActiveRef.current = i
    isProgrammaticScroll.current = true
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

    const p = pager.current
    if (window.innerWidth < 1024 && p) {
      p.scrollTo({ left: i * p.clientWidth, behavior: 'smooth' })
    } else {
      const el = document.getElementById(TABS[i][0])
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    // Release programmatic scroll lock after smooth scrolling completes
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScroll.current = false
    }, 600)
  }

  // Throttled scroll listener that does NOT fight with programmatic tab clicks
  useEffect(() => {
    let ticking = false
    let swipeDebounce = null

    const fn = () => {
      if (isProgrammaticScroll.current) return

      // On mobile/iPad horizontal swipe, debounce tab active update so heavy re-renders don't freeze WebKit snap momentum
      if (window.innerWidth < 1024) {
        if (swipeDebounce) clearTimeout(swipeDebounce)
        swipeDebounce = setTimeout(() => {
          const p = pager.current
          if (!p || isProgrammaticScroll.current) return
          const newActive = Math.round(p.scrollLeft / p.clientWidth)
          if (newActive !== lastActiveRef.current && newActive >= 0 && newActive < TABS.length) {
            lastActiveRef.current = newActive
            setActive(newActive)
          }
        }, 50)
        return
      }

      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        ticking = false
        if (isProgrammaticScroll.current) return
        const p = pager.current
        if (!p) return

        // On desktop/tablet, check which section is in view
        const midY = window.innerHeight * 0.4
        for (let idx = 0; idx < TABS.length; idx++) {
          const el = document.getElementById(TABS[idx][0])
          if (el) {
            const r = el.getBoundingClientRect()
            if (r.top <= midY && r.bottom > midY) {
              if (idx !== lastActiveRef.current) {
                lastActiveRef.current = idx
                setActive(idx)
              }
              break
            }
          }
        }
      })
    }

    const p = pager.current
    if (p) {
      p.addEventListener('scroll', fn, { passive: true })
      p.addEventListener('scrollend', fn, { passive: true })
    }
    window.addEventListener('scroll', fn, { passive: true })
    window.addEventListener('resize', fn, { passive: true })

    return () => {
      if (p) {
        p.removeEventListener('scroll', fn)
        p.removeEventListener('scrollend', fn)
      }
      window.removeEventListener('scroll', fn)
      window.removeEventListener('resize', fn)
      if (swipeDebounce) clearTimeout(swipeDebounce)
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    }
  }, [])

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

  const field = `w-full rounded-2xl border px-5 py-4 text-base transition-colors ${
    isDark
      ? 'border-white/20 bg-white/[0.05] text-white placeholder:text-white/40 focus:border-white focus:bg-white/[0.08]'
      : 'border-black/20 bg-black/[0.04] text-black placeholder:text-black/40 focus:border-black focus:bg-white'
  }`

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      <MotionConfig reducedMotion="user">
        {/* Top Minimal Progress Bar */}
        <motion.div
          className={`fixed top-0 left-0 right-0 h-[2.5px] z-50 origin-left transition-colors duration-150 ${
            isDark ? 'bg-white' : 'bg-black'
          }`}
          style={{ scaleX }}
        />

        {/* FIXED HEADER */}
        <header
          className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-3 md:py-4 backdrop-blur-md border-b transition-colors duration-150 md:px-10 lg:px-16 ${
            isDark ? 'bg-black/85 text-white border-white/10' : 'bg-white/85 text-black border-black/10'
          }`}
        >
          <button
            onClick={() => go(0)}
            className="group flex items-center gap-3 text-left cursor-pointer"
            aria-label="Scroll to top"
          >
            {/* Circular mini avatar */}
            <div
              className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-full border transition-transform duration-300 group-hover:scale-105 shadow-sm ${
                isDark
                  ? 'border-white/20 bg-neutral-900 group-hover:border-white/40'
                  : 'border-black/20 bg-neutral-100 group-hover:border-black/40'
              }`}
            >
              <Image
                src={PROFILE.heroImage}
                alt={`${PROFILE.name} - Avatar`}
                fill
                sizes="36px"
                className="object-cover object-center grayscale contrast-[1.08] brightness-[0.98]"
              />
            </div>

            <div>
              <span
                className={`font-display text-base font-bold tracking-tight block leading-tight transition-colors ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                {PROFILE.name}
              </span>
            </div>
          </button>

          {/* Desktop / Tablet Navigation with Active Item Highlighting - Exactly Centered */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
            {TABS.slice(1).map(([id, label], i) => {
              const tabIndex = i + 1
              const isActive = active === tabIndex
              return (
                <button
                  key={id}
                  onClick={() => go(tabIndex)}
                  className={`relative py-1.5 transition-colors cursor-pointer text-sm ${
                    isActive
                      ? isDark
                        ? 'text-white font-semibold'
                        : 'text-black font-semibold'
                      : isDark
                      ? 'text-white/60 hover:text-white'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="desktop-active-indicator"
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isDark ? 'bg-white' : 'bg-black'
                      }`}
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Action Area: Theme Switcher & CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* 🌗 INSTANT & STUTTER-FREE THEME TOGGLE BUTTON */}
            <button
              onClick={toggleTheme}
              type="button"
              title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              aria-label="Toggle Theme"
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-semibold transition-colors cursor-pointer border ${
                isDark
                  ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
                  : 'border-black/20 bg-black/5 text-black hover:bg-black/10'
              }`}
            >
              {isDark ? (
                <Sun size={14} className="text-amber-300 shrink-0" />
              ) : (
                <Moon size={14} className="text-neutral-900 shrink-0" />
              )}
              <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-wider">
                {isDark ? 'Light' : 'Dark'}
              </span>
            </button>

            {/* Quick Google Drive Showreel CTA */}
            <a
              href={PROFILE.showreelDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors shadow-xs ${
                isDark
                  ? 'border-white/15 bg-white/[0.06] text-white hover:border-white hover:bg-white hover:text-black'
                  : 'border-black/15 bg-black/[0.04] text-black hover:border-black hover:bg-black hover:text-white'
              }`}
            >
              <LogoGoogleDrive size={15} />
              <span className="font-semibold">Drive Showreel</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Direct WhatsApp Action */}
            <button
              onClick={() => {
                const contactIndex = TABS.findIndex(([id]) => id === 'contact')
                go(contactIndex >= 0 ? contactIndex : 4)
              }}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer ${
                isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              <span>Let&apos;s Work</span>
            </button>
          </div>
        </header>

        {/* MAIN VIEWPORT */}
        <main
          ref={pager}
          className="no-scrollbar max-lg:flex max-lg:h-[100dvh] max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto will-change-scroll"
          style={{
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x pan-y',
            overscrollBehaviorX: 'contain',
          }}
        >
          {/* =========================================================================
              SECTION 1: HERO
              ========================================================================= */}
          <Sec id="home" className="md:overflow-hidden !pt-20 sm:!pt-24 md:!pt-28 lg:!pt-32 pb-24 sm:pb-28 md:pb-16">
            <InteractiveGridPattern
              width={44}
              height={44}
              className="[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,white_25%,transparent_90%)] opacity-85"
            />

            <div className="relative z-10 flex flex-col justify-between min-h-full">
              {/* Viewfinder HUD Ticker: Desktop Top (Hidden on mobile to prioritize Face & Name) */}
              <div
                className={`mb-6 sm:mb-8 hidden md:flex flex-wrap items-center justify-between gap-3 font-mono text-xs transition-colors ${
                  isDark ? 'text-white/50' : 'text-black/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-[11px] uppercase tracking-widest font-bold ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                    01 / HERO SECTION
                  </span>
                  <span className={isDark ? 'text-white/20' : 'text-black/20'}>|</span>
                  <span className={`flex items-center gap-1.5 font-semibold tracking-wide ${isDark ? 'text-white' : 'text-black'}`}>
                    <span className={`h-2 w-2 rounded-full inline-block animate-ping ${isDark ? 'bg-white' : 'bg-red-500'}`} />
                    REC [●] 00:02:48:19
                  </span>
                  <span className={`hidden sm:inline ${isDark ? 'text-white/20' : 'text-black/20'}`}>|</span>
                  <span className="hidden sm:inline">4K DCI • 23.976 FPS</span>
                  <span className={`hidden md:inline ${isDark ? 'text-white/20' : 'text-black/20'}`}>|</span>
                  <span className={`hidden md:inline ${isDark ? 'text-white/70' : 'text-black/70'}`}>PRORES 422 HQ</span>
                </div>
                <div className={`flex items-center gap-2 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                  <span className={`text-[10px] uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                    COLOR PIPELINE:
                  </span>
                  <span
                    className={`rounded border px-2 py-0.5 text-[11px] font-medium ${
                      isDark ? 'border-white/15 bg-white/[0.06] text-white' : 'border-black/15 bg-black/[0.04] text-black'
                    }`}
                  >
                    DaVinci YRGB Color Managed
                  </span>
                </div>
              </div>

              {/* Responsive Hero Layout:
                  - Mobile (< md): Portrait (order-1) -> Headline Name (order-2) -> CTAs (order-3) -> Badges & Bio (scrollable)
                  - Desktop (>= md): 2-Column Grid (Left: Badges, Name, Bio, CTAs | Right: Large Portrait) */}
              <div className="flex flex-col md:grid md:gap-10 md:grid-cols-12 md:items-center">

                {/* Portrait Column: Renders First on Mobile (order-1), Right Column on Desktop (md:order-2) */}
                <div className="order-1 md:order-2 md:col-span-6 lg:col-span-6 flex justify-center items-center py-4 sm:py-6 md:py-8">
                  <div className="relative w-[230px] sm:w-[270px] md:w-full md:max-w-[420px] lg:max-w-[460px] aspect-square group">
                    {/* Ambient Glow behind circle */}
                    <div
                      className={`absolute inset-4 rounded-full blur-3xl opacity-35 transition-opacity duration-700 group-hover:opacity-70 ${
                        isDark ? 'bg-white/25' : 'bg-black/15'
                      }`}
                    />

                    {/* Rotating Camera Lens Aperture Ring Overlapping the Portrait Edge */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                      className="absolute -inset-5 sm:-inset-7 md:-inset-9 pointer-events-none z-20 flex items-center justify-center select-none"
                    >
                      <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
                        <defs>
                          <path
                            id="lensRingCircle"
                            d="M 250, 250 m -230, 0 a 230,230 0 1,1 460,0 a 230,230 0 1,1 -460,0"
                            fill="none"
                          />
                        </defs>

                        {/* Outer optical lens calibration ring */}
                        <circle
                          cx="250"
                          cy="250"
                          r="244"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeDasharray="2 6"
                          className={isDark ? 'text-white/20' : 'text-black/20'}
                        />

                        {/* Inner focal ring border */}
                        <circle
                          cx="250"
                          cy="250"
                          r="216"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className={isDark ? 'text-white/15' : 'text-black/15'}
                        />

                        {/* Revolving Lens Typography */}
                        <text
                          className={`font-mono text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.28em] fill-current ${
                            isDark ? 'text-white/75' : 'text-black/75'
                          }`}
                        >
                          <textPath href="#lensRingCircle" startOffset="0%">
                            ✦ VIDEO EDITOR ✦ COLOR GRADING ✦ POST-PRODUCTION ✦ ANANDU PRASAD ✦ VIDEO EDITOR ✦ COLOR GRADING ✦ POST-PRODUCTION ✦ ANANDU PRASAD
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>

                    {/* Circular Frame with Border & Shadow */}
                    <div
                      className={`relative w-full h-full overflow-hidden rounded-full border-2 transition-all duration-700 ease-out shadow-2xl group-hover:scale-[1.02] ${
                        isDark
                          ? 'border-white/20 bg-neutral-900 group-hover:border-white/40 shadow-white/5'
                          : 'border-black/15 bg-neutral-100 group-hover:border-black/30 shadow-black/5'
                      }`}
                    >
                      <Image
                        src={PROFILE.heroImage}
                        alt={`${PROFILE.name} - Video Editor Portrait`}
                        fill
                        priority
                        sizes="(max-width: 768px) 270px, (max-width: 1024px) 50vw, 550px"
                        className="object-cover object-center grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Text & Details Column */}
                <div className="order-2 md:order-1 md:col-span-6 lg:col-span-6 flex flex-col justify-center text-center md:text-left items-center md:items-start mt-4 md:mt-0">
                  
                  {/* Mobile Section Tag */}
                  <span className={`md:hidden font-mono text-[11px] uppercase tracking-widest font-semibold mb-2 block ${
                    isDark ? 'text-white/50' : 'text-black/50'
                  }`}>
                    01 / HERO SECTION
                  </span>

                  {/* Stylised Name Headline */}
                  <h1
                    aria-label={PROFILE.name}
                    className="select-none text-[14vw] leading-[0.92] tracking-tight sm:text-[11vw] md:text-[5.5rem] lg:text-[7.2rem] xl:text-[8.2rem]"
                  >
                    <span
                      className={`block overflow-hidden pb-[.06em] font-anton uppercase tracking-[0.02em] transition-colors duration-150 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      ANANDU
                    </span>

                    <span
                      className={`block overflow-hidden pb-[.06em] mt-0.5 sm:mt-1 font-anton uppercase tracking-[0.05em] text-transparent transition-colors duration-150 cursor-default ${
                        isDark
                          ? '[-webkit-text-stroke:2px_#fff] sm:[-webkit-text-stroke:2.4px_#fff] lg:[-webkit-text-stroke:3px_#fff] hover:text-white'
                          : '[-webkit-text-stroke:2px_#000] sm:[-webkit-text-stroke:2.4px_#000] lg:[-webkit-text-stroke:3px_#000] hover:text-black'
                      }`}
                    >
                      PRASAD
                      <span className={`inline-block ml-1 [-webkit-text-stroke:0px] ${isDark ? 'text-white' : 'text-black'}`}>
                        .
                      </span>
                    </span>
                  </h1>

                  {/* Subtitle / Roles: VIDEO EDITOR · COLOR GRADING · POST-PRODUCTION */}
                  <p className={`mt-3 sm:mt-4 font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] sm:tracking-[0.2em] font-bold ${
                    isDark ? 'text-white/90' : 'text-black/90'
                  }`}>
                    {PROFILE.headline}
                  </p>

                  {/* Subtitle Bio */}
                  <p
                    className={`mt-4 sm:mt-5 max-w-xl text-xs sm:text-base md:text-lg leading-relaxed font-normal transition-colors duration-150 ${
                      isDark ? 'text-white/75' : 'text-black/75'
                    }`}
                  >
                    {PROFILE.bio}
                  </p>

                  {/* Focus Areas Chips: Wedding Films · Cinematic Edits · Social Content */}
                  <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5">
                    {PROFILE.heroTags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 sm:px-3.5 py-1 text-xs sm:text-sm font-mono font-medium transition-all ${
                          isDark
                            ? 'border-white/15 bg-white/[0.05] text-white/90'
                            : 'border-black/15 bg-black/[0.04] text-black/90'
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Hero CTAs: VIEW SHOWREEL ↗️ and LET'S WORK ↗️ */}
                  <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                    <a
                      href={PROFILE.showreelDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg ${
                        isDark
                          ? 'bg-white text-black hover:bg-neutral-200 shadow-white/10'
                          : 'bg-black text-white hover:bg-neutral-800 shadow-black/10'
                      }`}
                    >
                      <LogoGoogleDrive size={15} />
                      <span className="whitespace-nowrap">VIEW SHOWREEL</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <button
                      onClick={() => {
                        const contactIndex = TABS.findIndex(([id]) => id === 'contact')
                        go(contactIndex >= 0 ? contactIndex : 4)
                      }}
                      className={`flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full border px-5 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                        isDark
                          ? 'border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10'
                          : 'border-black/25 bg-transparent text-black hover:border-black hover:bg-black/5'
                      }`}
                    >
                      <span className="whitespace-nowrap">LET&apos;S WORK</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>

                  {/* Software Badges */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold ${
                        isDark ? 'border-white/15 bg-white/[0.04] text-white/80' : 'border-black/15 bg-black/[0.03] text-black/80'
                      }`}
                    >
                      <LogoDaVinci size={13} />
                      <span>DaVinci Resolve</span>
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold ${
                        isDark ? 'border-white/15 bg-white/[0.04] text-white/80' : 'border-black/15 bg-black/[0.03] text-black/80'
                      }`}
                    >
                      <LogoPremiere size={13} />
                      <span>Premiere Pro</span>
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold ${
                        isDark ? 'border-white/15 bg-white/[0.04] text-white/80' : 'border-black/15 bg-black/[0.03] text-black/80'
                      }`}
                    >
                      <LogoAfterEffects size={13} />
                      <span>After Effects</span>
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold ${
                        isDark ? 'border-white/15 bg-white/[0.04] text-white/80' : 'border-black/15 bg-black/[0.03] text-black/80'
                      }`}
                    >
                      <LogoCapCut size={13} />
                      <span>CapCut Pro</span>
                    </span>
                  </div>

                  {/* Mobile Ticker */}
                  <div
                    className={`mt-7 sm:mt-9 w-full flex md:hidden flex-col items-center gap-2 border-t pt-4 font-mono text-[11px] sm:text-xs transition-colors ${
                      isDark ? 'text-white/50 border-white/10' : 'text-black/50 border-black/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`flex items-center gap-1.5 font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                        <span className={`h-1.5 w-1.5 rounded-full inline-block animate-ping ${isDark ? 'bg-white' : 'bg-red-500'}`} />
                        REC [●] 00:02:48:19
                      </span>
                      <span>•</span>
                      <span>4K DCI • 24 FPS</span>
                    </div>
                  </div>

                </div>
              </div>

              <p className={`mt-6 sm:mt-8 pb-2 text-center text-xs font-mono lg:hidden ${
                isDark ? 'text-white/40' : 'text-black/40'
              }`}>
                Swipe to explore &rarr;
              </p>
            </div>
          </Sec>

          {/* =========================================================================
              SECTION 2: ABOUT ME
              ========================================================================= */}
          <Sec id="about" alternate>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span
                  className={`font-mono text-xs uppercase tracking-widest block mb-2 font-semibold ${
                    isDark ? 'text-white/50' : 'text-black/50'
                  }`}
                >
                  Who I Am
                </span>
                <H2>About Me</H2>
              </div>
              <p className={`max-w-md text-base md:text-lg font-medium italic ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                &ldquo;Turning ideas into impactful visuals, one frame at a time.&rdquo;
              </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto flex flex-col gap-6">
              {/* Main narrative card */}
              <div
                className={`rounded-3xl border p-7 sm:p-10 transition-colors duration-150 shadow-sm ${
                  isDark ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-black/[0.02]'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full border text-xs font-mono font-bold ${
                    isDark ? 'border-white/20 bg-white/10 text-white' : 'border-black/20 bg-black/5 text-black'
                  }`}>
                    AP
                  </span>
                  <span className={`font-mono text-xs uppercase tracking-wider font-semibold ${
                    isDark ? 'text-white/60' : 'text-black/60'
                  }`}>
                    Anandu Prasad
                  </span>
                </div>

                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold font-display tracking-tight mb-6 leading-snug ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  I’m a passionate Video Editor who transforms ideas into engaging visual stories.
                </h3>

                <div className={`space-y-4 text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-white/75' : 'text-black/75'
                }`}>
                  <p>
                    I’m a creative Video Editor passionate about visual storytelling, cinematic editing, and crafting engaging content that connects with audiences.
                  </p>
                  <p>
                    With a strong eye for detail, rhythm, and creativity, I focus on crafting videos that capture attention, communicate emotions, and leave a lasting impact.
                  </p>
                  <p>
                    From cinematic edits and social media reels to promotional videos and creative content, I aim to bring every vision to life through impactful storytelling, smooth transitions, and compelling visuals.
                  </p>
                </div>
              </div>

              {/* Goal statement callout */}
              <div
                className={`rounded-3xl border p-7 sm:p-8 transition-colors duration-150 flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${
                  isDark
                    ? 'border-white/15 bg-gradient-to-r from-white/[0.06] to-white/[0.02]'
                    : 'border-black/15 bg-gradient-to-r from-black/[0.04] to-black/[0.01]'
                }`}
              >
                <div className="flex items-start sm:items-center gap-4">
                  <Sparkles size={24} className={`shrink-0 mt-1 sm:mt-0 ${isDark ? 'text-amber-300' : 'text-amber-600'}`} />
                  <p className={`text-base sm:text-lg md:text-xl font-semibold tracking-tight ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    My goal is simple — to turn ordinary footage into extraordinary stories.
                  </p>
                </div>

                <button
                  onClick={() => {
                    const contactIndex = TABS.findIndex(([id]) => id === 'contact')
                    go(contactIndex >= 0 ? contactIndex : 4)
                  }}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold font-mono uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer ${
                    isDark
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </Sec>

          {/* =========================================================================
              SECTION 3: WORK SECTION
              ========================================================================= */}
          <Sec id="projects">
            {/* Minimal Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
              <div>
                <span
                  className={`font-mono text-xs uppercase tracking-widest block mb-2 font-semibold ${
                    isDark ? 'text-white/50' : 'text-black/50'
                  }`}
                >
                  03 / WORK SECTION
                </span>
                <H2>Selected Work</H2>
                <p className={`font-montserrat text-xs sm:text-sm uppercase tracking-widest mt-2 font-bold ${
                  isDark ? 'text-white/70' : 'text-black/70'
                }`}>
                  SELECTED WORK — 2025/26
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={DRIVE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-montserrat text-xs font-semibold transition-all hover:scale-105 active:scale-95 ${
                    isDark
                      ? 'border-white/20 bg-white/5 text-white/90 hover:bg-white hover:text-black hover:border-white'
                      : 'border-black/20 bg-black/5 text-black/90 hover:bg-black hover:text-white hover:border-black'
                  }`}
                >
                  <LogoGoogleDrive size={15} />
                  <span>Google Drive Archive</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Clean Minimal Category Tabs */}
            <div className={`mb-8 sm:mb-10 flex flex-wrap items-center gap-2 border-b pb-4 ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}>
              {PROJECT_CATEGORIES.map((cat) => {
                const isCatActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`rounded-full px-4 py-1.5 text-xs font-montserrat font-medium transition-all cursor-pointer ${
                      isCatActive
                        ? isDark
                          ? 'bg-white text-black font-semibold shadow-sm'
                          : 'bg-black text-white font-semibold shadow-sm'
                        : isDark
                        ? 'text-white/70 hover:text-white hover:bg-white/10'
                        : 'text-black/70 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>

            {/* Compact Vertical Video Cards Grid (Direct Match to User Reference Image) */}
            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
              <AnimatePresence>
                {PROJECTS.filter(
                  (p) => selectedCategory === 'all' || p.filterCategory === selectedCategory
                ).map((project) => (
                  <VerticalProjectCard
                    key={project.id}
                    project={project}
                    isDark={isDark}
                    onPlay={setPlayingVideo}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </Sec>

          {/* =========================================================================
              SECTION 4: SOFTWARE & ARSENAL
              ========================================================================= */}
          <Sec id="skills" alternate>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span
                  className={`font-mono text-xs uppercase tracking-widest block mb-2 font-semibold ${
                    isDark ? 'text-white/50' : 'text-black/50'
                  }`}
                >
                  04 / ARSENAL
                </span>
                <H2>The Arsenal</H2>
              </div>
              <p className={`max-w-md text-base md:text-lg ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Specialized mastery across industry-standard video post-production, VFX, and motion graphics tools.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TOOLS.map((tool) => {
                const Icon = tool.icon
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25 }}
                    className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-7 transition-colors duration-150 shadow-sm ${
                      isDark
                        ? 'border-white/10 bg-white/[0.03] hover:border-white/30'
                        : 'border-black/10 bg-black/[0.02] hover:border-black/30'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm p-2.5 transition-colors ${
                            isDark ? 'bg-white text-black' : 'bg-black text-white'
                          }`}
                        >
                          <Icon size={26} className={isDark ? 'text-black' : 'text-white'} />
                        </div>
                        <span
                          className={`rounded-full border px-3 py-1 font-mono text-[11px] font-semibold ${
                            isDark ? 'border-white/15 bg-white/[0.06] text-white' : 'border-black/15 bg-black/[0.04] text-black'
                          }`}
                        >
                          {tool.badge}
                        </span>
                      </div>

                      <h3
                        className={`font-display text-2xl font-bold tracking-tight md:text-3xl ${
                          isDark ? 'text-white' : 'text-black'
                        }`}
                      >
                        {tool.name}
                      </h3>
                      <p className={`font-mono text-xs mt-1 mb-4 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                        {tool.category}
                      </p>

                      <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                        {tool.desc}
                      </p>

                      <div className={`mt-6 space-y-2.5 border-t pt-6 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                        {tool.features.map((feat, idx) => (
                          <div key={idx} className={`flex items-start gap-2.5 text-xs ${isDark ? 'text-white/90' : 'text-black/90'}`}>
                            <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${isDark ? 'text-white' : 'text-black'}`} />
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
              SECTION 5: CONTACT & HIRE ME (WHATSAPP & FOOTAGE LINK)
              ========================================================================= */}
          <Sec id="contact" isFooter>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span
                  className={`font-mono text-xs uppercase tracking-widest block mb-2 font-semibold ${
                    isDark ? 'text-white/50' : 'text-black/50'
                  }`}
                >
                  05 / CONTACT
                </span>
                <H2>Let&apos;s Work</H2>
              </div>
              <p className={`max-w-md text-base md:text-lg ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                Have Google Drive footage ready? Send project details and let&apos;s get cutting.
              </p>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2 items-start w-full max-w-full overflow-hidden">
              {/* Direct Contact Details */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
                className="space-y-8 w-full max-w-full"
              >
                <div className="space-y-4">
                  <h3 className={`font-display text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                    Direct Inquiries
                  </h3>
                  <p className={`text-base max-w-md ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                    Fast response within 2-4 hours. Send your raw footage links via Google Drive or Dropbox.
                  </p>
                </div>

                <div className={`space-y-3 font-mono text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-colors ${
                      isDark
                        ? 'bg-white/[0.04] border-white/15 hover:border-white text-white'
                        : 'bg-black/[0.03] border-black/15 hover:border-black text-black'
                    }`}
                  >
                    <Phone size={18} className={isDark ? 'text-white' : 'text-black'} />
                    <span>{PROFILE.phone}</span>
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-colors ${
                      isDark
                        ? 'bg-white/[0.04] border-white/15 hover:border-white text-white'
                        : 'bg-black/[0.03] border-black/15 hover:border-black text-black'
                    }`}
                  >
                    <Mail size={18} className={isDark ? 'text-white' : 'text-black'} />
                    <span>{PROFILE.email}</span>
                  </a>
                  <a
                    href={PROFILE.showreelDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-colors ${
                      isDark
                        ? 'bg-white/[0.04] border-white/15 hover:border-white text-white'
                        : 'bg-black/[0.03] border-black/15 hover:border-black text-black'
                    }`}
                  >
                    <LogoGoogleDrive size={18} className={isDark ? 'text-white' : 'text-black'} />
                    <span>Google Drive Portfolio Folder</span>
                    <ArrowUpRight size={14} className={`ml-auto ${isDark ? 'text-white/40' : 'text-black/40'}`} />
                  </a>
                  <div
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border ${
                      isDark ? 'bg-white/[0.04] border-white/15 text-white/70' : 'bg-black/[0.03] border-black/15 text-black/70'
                    }`}
                  >
                    <Clock size={18} className={isDark ? 'text-white' : 'text-black'} />
                    <span>{PROFILE.location}</span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-2">
                  <p className={`font-mono text-xs uppercase tracking-wider mb-3 font-semibold ${
                    isDark ? 'text-white/40' : 'text-black/40'
                  }`}>
                    Follow & Connect
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={PROFILE.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors shadow-xs ${
                        isDark
                          ? 'border-white/20 bg-white/[0.04] text-white hover:bg-white hover:text-black'
                          : 'border-black/20 bg-black/[0.04] text-black hover:bg-black hover:text-white'
                      }`}
                    >
                      <Instagram size={15} />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={PROFILE.socials.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-colors shadow-xs ${
                        isDark
                          ? 'border-white/20 bg-white/[0.04] text-white hover:bg-white hover:text-black'
                          : 'border-black/20 bg-black/[0.04] text-black hover:bg-black hover:text-white'
                      }`}
                    >
                      <Youtube size={15} />
                      <span>YouTube</span>
                    </a>
                    <a
                      href={`https://wa.me/${PROFILE.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all shadow-sm ${
                        isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
                      }`}
                    >
                      <LogoWhatsApp size={15} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Inquiry Form */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
                className={`w-full max-w-full overflow-hidden rounded-3xl border p-6 sm:p-8 shadow-sm backdrop-blur-md transition-colors duration-150 ${
                  isDark ? 'border-white/15 bg-white/[0.03]' : 'border-black/10 bg-black/[0.02]'
                }`}
              >
                <h4 className={`font-display text-2xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Send Project Details
                </h4>
                <p className={`text-xs font-mono mb-6 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                  Paste your Google Drive link to send directly to Anandu on WhatsApp.
                </p>

                <form onSubmit={bookOnWhatsApp} className="space-y-4">
                  <div>
                    <label className={`block text-xs font-mono mb-1.5 font-medium ${isDark ? 'text-white/60' : 'text-black/60'}`}>
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
                    <label className={`block text-xs font-mono mb-1.5 font-medium ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                      Project Type
                    </label>
                    <select
                      name="service"
                      className={`${field} cursor-pointer ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-black'}`}
                    >
                      <option value="Wedding Films & Highlights">Wedding Films & Highlights</option>
                      <option value="Cinematic & Travel Edits">Cinematic & Travel Edits</option>
                      <option value="Reels & Social Media Content">Reels & Social Media Content</option>
                      <option value="Brand Films & Promos">Brand Films & Promos</option>
                      <option value="Color Grading & Post-Production">Color Grading & Post-Production</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-1.5 font-medium ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                      Google Drive Footage Link (Optional)
                    </label>
                    <input
                      name="driveLink"
                      placeholder="https://drive.google.com/drive/folders/..."
                      className={field}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-1.5 font-medium ${isDark ? 'text-white/60' : 'text-black/60'}`}>
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
                    className={`w-full flex items-center justify-center gap-2.5 rounded-full px-7 py-4 font-bold hover:scale-[1.01] active:scale-[0.99] shadow-md cursor-pointer transition-all ${
                      isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
                    }`}
                  >
                    <LogoWhatsApp size={18} />
                    <span>Send Details on WhatsApp</span>
                    <ArrowUpRight size={18} />
                  </button>
                </form>
              </motion.div>
            </div>

            {/* FOOTER */}
            <footer
              className={`mt-12 lg:mt-14 border-t pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono w-full max-w-full overflow-hidden ${
                isDark ? 'border-white/10 text-white/50' : 'border-black/10 text-black/50'
              }`}
            >
              <p>© {new Date().getFullYear()} Anandu Prasad. All rights reserved.</p>
              <p className="flex items-center gap-1.5">
                <span>Crafted by</span>
                <a
                  href="https://aethrasolutions.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold tracking-tight hover:underline underline-offset-4 transition-colors ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  Aethra Digital Solutions
                </a>
              </p>
            </footer>
          </Sec>
        </main>

        {/* MOBILE STICKY PILL NAVIGATION */}
        <nav
          aria-label="Sections"
          style={{ bottom: 'max(12px, env(safe-area-inset-bottom))' }}
          className={`fixed inset-x-3 z-50 mx-auto flex max-w-[500px] rounded-full p-1.5 backdrop-blur-2xl lg:hidden shadow-2xl select-none ring-1 transition-colors duration-150 ${
            isDark ? 'bg-neutral-950/90 text-white ring-white/15' : 'bg-white/95 text-black ring-black/15'
          }`}
        >
          {TABS.map(([id, label, Icon], i) => {
            const isActive = active === i
            return (
              <button
                key={id}
                type="button"
                onClick={() => go(i)}
                className={`relative flex flex-1 flex-col items-center gap-0.5 rounded-full py-2 text-[11px] transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? isDark
                      ? 'text-black font-semibold'
                      : 'text-white font-semibold'
                    : isDark
                    ? 'text-white/60'
                    : 'text-black/60'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-pill"
                    className={`absolute inset-0 rounded-full shadow-md ${isDark ? 'bg-white' : 'bg-black'}`}
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <Icon size={18} className="relative z-10" />
                <span className="relative z-10 font-medium tracking-tight text-[10px]">{label}</span>
              </button>
            )
          })}
        </nav>

        {/* =========================================================================
            🎬 GOOGLE DRIVE MASTER VIDEO PLAYER MODAL
            ========================================================================= */}
        <AnimatePresence>
          {playingVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md"
              onClick={() => setPlayingVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full max-w-4xl overflow-hidden rounded-3xl border shadow-2xl transition-colors ${
                  isDark
                    ? 'border-white/20 bg-neutral-950 text-white shadow-black/80'
                    : 'border-black/20 bg-white text-black shadow-2xl'
                }`}
              >
                {/* Modal Header */}
                <div
                  className={`flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 border-b ${
                    isDark ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold border ${
                        isDark ? 'border-white/20 bg-white/10 text-white' : 'border-black/20 bg-black/5 text-black'
                      }`}
                    >
                      {getSoftwareIcon(playingVideo.software, isDark)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-sm sm:text-base md:text-lg font-bold tracking-tight leading-snug truncate">
                        {playingVideo.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                        <p className={`text-xs font-mono truncate ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                          {playingVideo.category} • {playingVideo.duration}
                        </p>
                        {playingVideo.software && (
                          <span
                            className={`hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                              isDark ? 'border-white/15 bg-white/5 text-white/70' : 'border-black/15 bg-black/5 text-black/70'
                            }`}
                          >
                            {playingVideo.software}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setPlayingVideo(null)}
                    aria-label="Close video player"
                    className={`rounded-full p-2 border transition-colors cursor-pointer shrink-0 ${
                      isDark
                        ? 'border-white/20 hover:bg-white/10 text-white'
                        : 'border-black/20 hover:bg-black/10 text-black'
                    }`}
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Video Player */}
                <div className="relative w-full bg-black aspect-video flex items-center justify-center overflow-hidden">
                  {playingVideo.videoUrl ? (
                    <video
                      key={playingVideo.id}
                      src={playingVideo.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <iframe
                      src={playingVideo.previewUrl}
                      title={playingVideo.title}
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  )}
                </div>

                {/* Modal Footer */}
                <div
                  className={`flex items-center justify-between gap-3 px-5 py-3.5 border-t ${
                    isDark ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.02]'
                  }`}
                >
                  <span className={`text-xs font-mono ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                    Direct preview from portfolio drive
                  </span>

                  <div className="flex items-center gap-2.5">
                    <a
                      href={playingVideo.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold font-mono transition-all ${
                        isDark
                          ? 'border-white/20 bg-white/10 text-white hover:bg-white hover:text-black'
                          : 'border-black/20 bg-black/5 text-black hover:bg-black hover:text-white'
                      }`}
                    >
                      <LogoGoogleDrive size={15} />
                      <span>Open in Drive</span>
                      <ArrowUpRight size={14} />
                    </a>
                    <button
                      onClick={() => {
                        setPlayingVideo(null)
                        const contactIndex = TABS.findIndex(([id]) => id === 'contact')
                        go(contactIndex >= 0 ? contactIndex : 4)
                      }}
                      className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all shadow-sm cursor-pointer ${
                        isDark ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
                      }`}
                    >
                      <span>Let&apos;s Work Together</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </ThemeContext.Provider>
  )
}
