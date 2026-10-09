import './globals.css'
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google'
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display' })
const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body' })
export const metadata = { title: 'Smilora Dental Clinic', description: 'Precision dental care: implants, aligners, whitening and smile design.' }
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#000000' }
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>)
}
