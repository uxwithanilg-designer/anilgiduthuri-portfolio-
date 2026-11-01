import '@fontsource-variable/inter-tight/wght.css'
import '@fontsource-variable/jetbrains-mono/wght.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import Nav from '@/components/site/Nav'
import Footer from '@/components/site/Footer'
import SmoothScroll from '@/components/site/SmoothScroll'
import CommandPalette from '@/components/site/CommandPalette'
import Cursor from '@/components/site/Cursor'
import './globals.css'

const description =
  'Senior product and UX designer with 8+ years across enterprise AI, payments, education and consumer apps. I design calm interfaces for complex systems and prototype them in React and Next.js.'

export const metadata = {
  metadataBase: new URL('https://resume.bubird.com'),
  title: {
    default: 'Anil Kumar Giduthuri · Senior Product & UX Designer',
    template: '%s · Anil Kumar Giduthuri',
  },
  description,
  keywords: [
    'Senior UX Designer',
    'Senior Product Designer',
    'UI UX Designer Hyderabad',
    'Enterprise AI UX',
    'Agentic AI design',
    'Design systems',
    'Vibe coding',
    'React',
    'Next.js',
    'Figma',
  ],
  authors: [{ name: 'Anil Kumar Giduthuri' }],
  openGraph: {
    title: 'Anil Kumar Giduthuri · Senior Product & UX Designer',
    description,
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport = {
  themeColor: '#f5f4ef',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <SmoothScroll />
        <Nav />
        <CommandPalette />
        <Cursor />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
