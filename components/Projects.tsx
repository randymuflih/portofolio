'use client'

import { motion } from 'framer-motion'
import portfolio from '@/data/portfolio'

const themes = [
  { bg: '#0F0F0F', text: '#FFFFFF', muted: '#888888', accent: '#A8956A', card: '#1A1A1A' },
  { bg: '#0D1B38', text: '#FFFFFF', muted: '#7A8FAA', accent: '#6B9FD4', card: '#071029' },
  { bg: '#0F1A10', text: '#FFFFFF', muted: '#6A8A6C', accent: '#72B577', card: '#162018' },
  { bg: '#1C1218', text: '#FFFFFF', muted: '#8A7A88', accent: '#C4879A', card: '#261A22' },
]

const projectMeta: Record<number, { context: string; stats: Array<{ value: string; label: string }> }> = {
  0: {
    context: 'Tugas Kuliah · Full-Stack · Informatika UNHAS',
    stats: [
      { value: 'Next.js', label: 'Frontend' },
      { value: 'Laravel', label: 'Backend' },
      { value: 'MySQL', label: 'Database' },
    ],
  },
  1: {
    context: 'Client · Universitas Hasanuddin',
    stats: [
      { value: 'Next.js', label: 'Framework' },
      { value: 'Sanity', label: 'CMS' },
      { value: 'TypeScript', label: 'Language' },
    ],
  },
  2: {
    context: 'Lomba · IYREF ITB',
    stats: [
      { value: 'Next.js', label: 'Framework' },
      { value: 'Prisma', label: 'ORM' },
      { value: 'PostgreSQL', label: 'Database' },
    ],
  },
  3: {
    context: 'In Progress · UNHAS × Stanford University',
    stats: [
      { value: 'WordPress', label: 'Platform' },
      { value: 'PHP', label: 'Language' },
      { value: 'CMS', label: 'Architecture' },
    ],
  },
}

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      {/* Section header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-[#A8956A] uppercase tracking-widest mb-2">Selected Work</p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight text-[#0A0A0A]">
            4 projects,<br />built for real.
          </h2>
          <p className="mt-3 text-sm text-[#6B6B6B] max-w-md">
            Dari tugas kuliah sampai hackathon — semua dikerjakan sungguhan.
          </p>
        </motion.div>
      </div>

      {/* Case study cards — all 4 */}
      <div className="flex flex-col">
        {portfolio.projects.map((project, i) => {
          const theme = themes[i % themes.length]
          const meta = projectMeta[i]

          return (
            <motion.div
              key={project.title}
              id={`project-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full py-16 px-6"
              style={{ backgroundColor: theme.bg }}
            >
              <div className="max-w-5xl mx-auto">
                {/* Label row */}
                <div className="flex items-center gap-3 mb-8 flex-wrap">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: theme.card, color: theme.accent }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs uppercase tracking-widest" style={{ color: theme.muted }}>
                    {project.category}
                  </span>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: theme.accent + '22',
                      color: theme.accent,
                      border: `1px solid ${theme.accent}55`,
                    }}
                  >
                    {project.client}
                  </span>
                  <span
                    className="ml-auto text-xs font-bold px-3 py-1 rounded-full"
                    style={project.year === 'Ongoing' ? {
                      backgroundColor: theme.accent,
                      color: '#0A0A0A',
                    } : {
                      backgroundColor: theme.card,
                      color: theme.text,
                      border: `1px solid rgba(255,255,255,0.15)`,
                    }}
                  >
                    {project.year === 'Ongoing' ? '● Ongoing' : project.year}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Left: text */}
                  <div>
                    <h3
                      className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight"
                      style={{ color: theme.text }}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed" style={{ color: theme.muted }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: theme.card,
                            color: theme.accent,
                            border: `1px solid ${theme.accent}33`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-8">
                      {/* Live Site */}
                      <a
                        href={project.liveUrl !== '#' ? project.liveUrl : undefined}
                        target={project.liveUrl !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
                        style={project.liveUrl !== '#' ? {
                          backgroundColor: theme.accent,
                          color: '#0A0A0A',
                          cursor: 'pointer',
                        } : {
                          backgroundColor: 'rgba(255,255,255,0.06)',
                          color: 'rgba(255,255,255,0.25)',
                          cursor: 'not-allowed',
                          border: `1px solid rgba(255,255,255,0.08)`,
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        {project.liveUrl !== '#' ? 'Live Site' : 'Coming Soon'}
                      </a>

                      {/* GitHub */}
                      <a
                        href={project.githubUrl !== '#' ? project.githubUrl : undefined}
                        target={project.githubUrl !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200"
                        style={project.githubUrl !== '#' ? {
                          backgroundColor: theme.card,
                          color: theme.text,
                          border: `1px solid rgba(255,255,255,0.15)`,
                          cursor: 'pointer',
                        } : {
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          color: 'rgba(255,255,255,0.25)',
                          cursor: 'not-allowed',
                          border: `1px solid rgba(255,255,255,0.08)`,
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Right: mockup + stats */}
                  <div>
                    {/* Mockup window */}
                    <div
                      className="rounded-xl overflow-hidden aspect-video relative"
                      style={{ backgroundColor: theme.card }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-8 z-10 flex items-center px-4 gap-1.5"
                        style={{ backgroundColor: theme.card, borderBottom: `1px solid rgba(255,255,255,0.05)` }}
                      >
                        {[0, 1, 2].map((d) => (
                          <span key={d} className="w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: theme.text }} />
                        ))}
                        {project.liveUrl !== '#' && (
                          <span className="ml-3 text-[10px] opacity-30 truncate" style={{ color: theme.text }}>
                            {project.liveUrl.replace('https://', '')}
                          </span>
                        )}
                      </div>
                      {project.screenshot ? (
                        <div className="absolute inset-0 top-8">
                          <img
                            src={project.screenshot}
                            alt={`Screenshot ${project.title}`}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl font-black leading-none select-none opacity-[0.06]" style={{ color: theme.text }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Stats row */}
                    <div
                      className="grid grid-cols-3 mt-3 rounded-xl overflow-hidden"
                      style={{ backgroundColor: theme.card }}
                    >
                      {meta.stats.map((stat, si) => (
                        <div
                          key={si}
                          className="p-4 text-center"
                          style={{
                            borderRight: si < meta.stats.length - 1 ? `1px solid rgba(255,255,255,0.05)` : 'none',
                          }}
                        >
                          <p className="text-base font-black" style={{ color: theme.text }}>{stat.value}</p>
                          <p className="text-[10px] uppercase tracking-wide mt-0.5" style={{ color: theme.muted }}>{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
