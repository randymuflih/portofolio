'use client'

import { motion } from 'framer-motion'
import portfolio from '@/data/portfolio'

export default function Highlights() {
  const exp = portfolio.experiences[0]

  return (
    <section id="highlights" className="bg-[#F5F5F3] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Statement + bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Kiri — heading */}
            <div>
              <p className="text-xs text-[#A8956A] uppercase tracking-widest mb-4">About</p>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight text-[#0A0A0A]">
                {portfolio.stats[0].number} projects.<br />
                {portfolio.stats[1].number} internship.<br />
                Still learning.
              </h2>
            </div>
            {/* Kanan — bio + stats */}
            <div>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{portfolio.bio}</p>
              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[#E5E5E5] pt-6">
                {portfolio.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl font-black text-[#0A0A0A]">{stat.number}</p>
                    <p className="text-[10px] text-[#6B6B6B] uppercase tracking-wide mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Project cards — full width 2x2 ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolio.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border border-[#E8E8E8] hover:border-[#0A0A0A] transition-colors duration-200 group"
            >
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#A8956A]">
                  {project.category}
                </span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#0A0A0A] text-white">
                  {project.client}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#0A0A0A] leading-snug">{project.title}</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed mt-2 line-clamp-2">{project.description}</p>
              <p className="text-[10px] text-[#A8956A]/70 mt-3">{project.tech.join(' · ')}</p>
              <a
                href={`#project-${i}`}
                className="mt-4 inline-block text-xs font-medium text-[#0A0A0A] group-hover:underline underline-offset-2"
              >
                See more →
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Experience — full width ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 pt-12 border-t border-[#E5E5E5]"
        >
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-black text-[#0A0A0A]">Experience</h3>
            <div className="flex-1 h-px bg-[#E5E5E5]" />
            <span className="text-xs text-[#A8956A] font-semibold uppercase tracking-widest">PT Pelindo Jasa Maritim</span>
          </div>

          <div className="flex flex-col gap-6">
            {/* Internship header — full width */}
            <div className="flex gap-4 items-start">
              <div className="shrink-0 w-24 h-32 rounded-xl overflow-hidden">
                <img
                  src="/intern-pelindo.jpeg"
                  alt="Magang PT Pelindo"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A]">{exp.role}</p>
                    <p className="text-xs text-[#6B6B6B] mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs text-[#A8956A] font-medium shrink-0">{exp.year}</span>
                </div>
                <p className="text-xs text-[#6B6B6B] leading-relaxed mt-2">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.learned.map((skill) => (
                    <span key={skill} className="text-[10px] px-2.5 py-1 rounded-full bg-[#F0EDE8] text-[#A8956A] font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Task cards — full width, 2 baris */}
            <div className="flex flex-col gap-3">
              {exp.tasks.map((task, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[#E8E8E8] bg-white flex flex-col sm:flex-row">
                  <div className="shrink-0 w-full h-44 sm:w-56 sm:h-36 overflow-hidden">
                    <img
                      src={i === 0 ? '/pelindo-web.png' : '/pelindo-network.jpeg'}
                      alt={task.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center px-6 py-4 flex-1 min-w-0">
                    <p className="text-sm font-bold text-[#0A0A0A]">{task.title}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {task.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-[#F0EDE8] text-[#A8956A] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed mt-2">{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
