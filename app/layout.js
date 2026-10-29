import './globals.css'

export const metadata = {
  metadataBase: new URL('https://ananduprasad.vercel.app'),
  title: 'Anandu Prasad | Video Editor · Color Grading · Post-Production',
  description: 'Anandu Prasad — Video Editor · Color Grading · Post-Production. I shape raw footage into cinematic stories through precise editing, thoughtful sound design, and intentional color.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Anandu Prasad | Video Editor · Color Grading · Post-Production',
    description: 'Anandu Prasad — Video Editor · Color Grading · Post-Production portfolio. Cinematic storytelling through precise editing, sound design, and intentional color.',
    url: 'https://ananduprasad.vercel.app',
    siteName: 'Anandu Prasad Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anandu Prasad - Video Editor & Colorist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anandu Prasad | Video Editor · Color Grading · Post-Production',
    description: 'Cinematic storytelling through precise editing, sound design, and intentional color.',
    images: ['/og-image.jpg'],
  },
}

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('anandu-portfolio-theme') || 'dark';
                document.documentElement.classList.add(theme);
                if (theme === 'light') document.documentElement.classList.remove('dark');
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
