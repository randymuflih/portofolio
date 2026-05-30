'use client'

import { motion } from 'framer-motion'
import portfolio from '@/data/portfolio'

export default function Hero() {
  return (
    <section className="min-h-screen pt-14 flex flex-col items-center justify-start bg-white">
      {/* Text block */}
      <div className="w-full max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-[#6B6B6B] mb-6 tracking-wide"
        >
          Informatics Student · Available for Hire
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(1.8rem,4.5vw,4rem)] font-black leading-[1.05] tracking-tight text-[#0A0A0A] sm:whitespace-nowrap"
        >
          {portfolio.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-[#6B6B6B] text-base max-w-md mx-auto leading-relaxed"
        >
          {portfolio.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-[#0A0A0A] text-white text-sm px-6 py-2.5 rounded-full hover:bg-[#333] transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="text-sm px-6 py-2.5 rounded-full border border-[#E0E0E0] text-[#6B6B6B] hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors duration-200"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Photo / visual placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-sm mx-auto px-6"
      >
        <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden relative">
          <img
            src="/photo-randy.jpeg"
            alt={portfolio.name}
            className="w-full h-full object-cover object-top"
          />
          {/* Name tag */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3 text-center w-max">
            <p className="text-xs text-[#6B6B6B] uppercase tracking-widest">Informatics Student</p>
            <p className="text-sm font-semibold text-[#0A0A0A] mt-0.5">{portfolio.name}</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom divider */}
      <div className="w-full max-w-5xl mx-auto px-6 mt-16 border-t border-[#E5E5E5]" />
    </section>
  )
}
