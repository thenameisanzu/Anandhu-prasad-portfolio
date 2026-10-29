import './globals.css'

export const metadata = {
  metadataBase: new URL('https://anandhu-prasad-portfolio.vercel.app'),
  title: 'Anandu Prasad | Video Editor · Color Grading · Post-Production',
  description: 'Anandu Prasad — Video Editor · Color Grading · Post-Production. I shape raw footage into cinematic stories through precise editing, thoughtful sound design, and intentional color.',
  icons: {
    icon: [
      { url: '/anandu-comic-icon.png?v=comic-5', type: 'image/png', sizes: '512x512' },
      { url: '/anandu-comic-icon-192.png?v=comic-5', type: 'image/png', sizes: '192x192' },
      { url: '/anandu-comic-favicon.ico?v=comic-5' },
    ],
    shortcut: '/anandu-comic-icon.png?v=comic-5',
    apple: '/anandu-comic-apple-icon.png?v=comic-5',
  },
  openGraph: {
    title: 'Anandu Prasad | Video Editor · Color Grading · Post-Production',
    description: 'Anandu Prasad — Video Editor · Color Grading · Post-Production portfolio. Cinematic storytelling through precise editing, sound design, and intentional color.',
    url: 'https://anandhu-prasad-portfolio.vercel.app',
    siteName: 'Anandu Prasad Portfolio',
    images: [
      {
        url: '/anandu-comic-og.jpg?v=comic-8',
        width: 1200,
        height: 630,
        alt: 'Anandu Prasad - Video Editor & Colorist',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anandu Prasad | Video Editor · Color Grading · Post-Production',
    description: 'Cinematic storytelling through precise editing, sound design, and intentional color.',
    images: ['/anandu-comic-og.jpg?v=comic-8'],
  },
}

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/anandu-comic-icon.png?v=comic-5" type="image/png" sizes="512x512" />
        <link rel="icon" href="/anandu-comic-icon-192.png?v=comic-5" type="image/png" sizes="192x192" />
        <link rel="shortcut icon" href="/anandu-comic-favicon.ico?v=comic-5" />
        <link rel="apple-touch-icon" href="/anandu-comic-apple-icon.png?v=comic-5" sizes="180x180" />
        <meta property="og:image" content="https://anandhu-prasad-portfolio.vercel.app/anandu-comic-og.jpg?v=comic-8" />
        <meta property="og:image:secure_url" content="https://anandhu-prasad-portfolio.vercel.app/anandu-comic-og.jpg?v=comic-8" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Anandu Prasad - Video Editor &amp; Colorist" />
        <meta property="og:updated_time" content="2026-10-30T00:45:00Z" />
        <meta name="twitter:image" content="https://anandhu-prasad-portfolio.vercel.app/anandu-comic-og.jpg?v=comic-8" />
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
