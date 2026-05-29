'use client'

import { motion } from 'framer-motion'
import portfolio from '@/data/portfolio'

const categoryConfig = {
  Frontend: { label: 'Frontend', color: '#A8956A' },
  Backend: { label: 'Backend', color: '#6B9FD4' },
  Tools: { label: 'Tools', color: '#72B577' },
}

const categories = ['Frontend', 'Backend', 'Tools'] as const

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F5F5F3] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-[#A8956A] uppercase tracking-widest mb-2">Technical Skills</p>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-black leading-tight text-[#0A0A0A]">
            Tools of the trade.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {categories.map((cat, ci) => {
            const skills = portfolio.skills.filter((s) => s.category === cat)
            const config = categoryConfig[cat]
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: config.color }}
                  />
                  <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: config.color }}>
                    {config.label}
                  </span>
                  <div className="flex-1 h-px bg-[#E5E5E5]" />
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ci * 0.1 + i * 0.06 }}
                      className="group relative"
                    >
                      <div
                        className="px-6 py-3 rounded-full bg-white border-2 text-sm font-bold text-[#0A0A0A] transition-all duration-200 hover:text-white cursor-default select-none"
                        style={{
                          borderColor: config.color + '55',
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLDivElement
                          el.style.backgroundColor = config.color
                          el.style.borderColor = config.color
                          el.style.color = '#fff'
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLDivElement
                          el.style.backgroundColor = '#fff'
                          el.style.borderColor = config.color + '55'
                          el.style.color = '#0A0A0A'
                        }}
                      >
                        {skill.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
