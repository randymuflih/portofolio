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
          className="text-[clamp(1.8rem,4.5vw,4rem)] font-black leading-[1.05] tracking-tight text-[#0A0A0A] whitespace-nowrap"
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
        <div
          className="w-full aspect-[3/4] rounded-2xl overflow-hidden flex flex-col items-center justify-end pb-10 relative"
          style={{
            background: 'linear-gradient(160deg, #E8E0D4 0%, #C4B499 45%, #7A6A52 100%)',
          }}
        >
          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
              backgroundSize: '150px',
            }}
          />
          {/* Silhouette initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-[9rem] font-black leading-none select-none"
              style={{ color: 'rgba(255,255,255,0.15)' }}
            >
              {portfolio.name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          {/* Name tag */}
          <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
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
