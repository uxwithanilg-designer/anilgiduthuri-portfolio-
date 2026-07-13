import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-inter',
  display: 'swap'
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-space',
  display: 'swap'
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400','500','700'],
  variable: '--font-jetbrains',
  display: 'swap'
})

export const metadata = {
  title: 'Anil Kumar Giduthuri — Senior UX/UI Designer & AI Front-End',
  description: '8+ years designing B2B SaaS, enterprise AI, and consumer products. Design Systems, AI-Assisted Front-End, React & Next.js. Based in Hyderabad.',
  keywords: ['UX Designer','UI Designer','Design Systems','B2B SaaS','AI UX','Enterprise Design','Hyderabad','Next.js','React','Figma'],
  openGraph: {
    title: 'Anil Kumar Giduthuri — Senior UX/UI Designer',
    description: 'Senior UX/UI Designer with 8+ years building products people actually enjoy using. From AI orchestration platforms to global payment flows.',
    url: 'https://anilkumarg.design',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
