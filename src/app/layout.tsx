import type { Metadata } from 'next'
import { Inter, Noto_Serif, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-label',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Erich Giusseppe Soto Parada',
  description:
    'Data Scientist & ML Engineer. Published researcher at ACL 2025 and Springer. M.Sc. student at Universidad de los Andes.',
  keywords: [
    'Data Scientist', 'Machine Learning', 'NLP', 'Deep Learning',
    'Universidad de los Andes', 'ACL 2025', 'Bogotá', 'Colombia',
  ],
  authors: [{ name: 'Erich Giusseppe Soto Parada' }],
  openGraph: {
    title: 'Erich Giusseppe Soto Parada — Data Scientist & ML Engineer',
    description: 'Published researcher (ACL, Springer). Building ML systems in production.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" translate="no" className={`dark ${inter.variable} ${notoSerif.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta name="google" content="notranslate" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body bg-surface text-on-surface antialiased">
        {children}
      </body>
    </html>
  )
}
