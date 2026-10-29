import './globals.css'

export const metadata = {
  title: 'Anandu Prasad | Video Editor · Color Grading · Post-Production',
  description: 'Anandu Prasad — Video Editor · Color Grading · Post-Production. I shape raw footage into cinematic stories through precise editing, thoughtful sound design, and intentional color.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
