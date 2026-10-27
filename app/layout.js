import './globals.css'
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google'
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' })
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body' })
export const metadata = {
  title: 'Anandhu Prasad | Video Editor & Colorist',
  description: 'Portfolio of Anandhu Prasad — Video Editor & Colorist specializing in DaVinci Resolve, Adobe Premiere Pro, and CapCut. Crafting cinematic stories and viral high-retention edits.',
}
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#000000' }
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>)
}
