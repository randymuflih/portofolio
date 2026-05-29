'use client'

import { useEffect, useState } from 'react'
import portfolio from '@/data/portfolio'

const navLinks = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Get in touch', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-[#E5E5E5]' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold text-[#0A0A0A] tracking-tight">
          {portfolio.name.split(' ').slice(1).join(' ')}
        </a>
        <ul className="flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
