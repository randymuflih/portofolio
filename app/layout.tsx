import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Randy Muflih | Portfolio',
  description: 'Portfolio Muhammad Randy Muflih, mahasiswa Informatika Universitas Hasanuddin yang fokus di web development dan data engineering.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full bg-white text-[#0A0A0A] antialiased">
        {children}
      </body>
    </html>
  )
}
