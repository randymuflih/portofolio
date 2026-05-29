'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import portfolio from '@/data/portfolio'

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <section id="contact" className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-[#A8956A] uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight text-white">
            Let&apos;s work<br />together.
          </h2>
          <p className="mt-5 text-[#888888] text-sm leading-relaxed max-w-xs">
            Open to new opportunities, freelance work, and collaborations. Drop a message.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:randymuflih@gmail.com"
              className="flex items-center gap-3 text-sm text-[#888888] hover:text-white transition-colors"
            >
              <span className="text-[#A8956A]">→</span>
              randymuflih@gmail.com
            </a>
            <a
              href={portfolio.socials.github}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#888888] hover:text-white transition-colors"
            >
              <span className="text-[#A8956A]"><GithubIcon /></span>
              GitHub
            </a>
            <a
              href={portfolio.socials.instagram}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#888888] hover:text-white transition-colors"
            >
              <span className="text-[#A8956A]"><InstagramIcon /></span>
              @randymuflih_
            </a>
            <a
              href={`tel:${portfolio.socials.phone}`}
              className="flex items-center gap-3 text-sm text-[#888888] hover:text-white transition-colors"
            >
              <span className="text-[#A8956A]">→</span>
              {portfolio.socials.phone}
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {sent ? (
            <div className="h-full flex items-center justify-center py-20">
              <p className="text-white text-lg font-semibold">Message sent. I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="flex flex-col gap-4">
              {[
                { label: 'Name', type: 'text', key: 'name', placeholder: 'Your name' },
                { label: 'Email', type: 'email', key: 'email', placeholder: 'your@email.com' },
              ].map(({ label, type, key, placeholder }) => (
                <div key={key}>
                  <label className="text-[11px] text-[#555] uppercase tracking-widest block mb-1.5">
                    {label}
                  </label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[key as 'name' | 'email']}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full bg-[#161616] border border-[#2A2A2A] rounded-lg text-white text-sm placeholder:text-[#555] px-4 py-3 focus:outline-none focus:border-[#A8956A] transition-colors duration-200"
                  />
                </div>
              ))}
              <div>
                <label className="text-[11px] text-[#555] uppercase tracking-widest block mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#161616] border border-[#2A2A2A] rounded-lg text-white text-sm placeholder:text-[#555] px-4 py-3 focus:outline-none focus:border-[#A8956A] transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#0A0A0A] font-semibold py-3 text-sm rounded-lg hover:bg-[#E5E5E5] transition-colors duration-200 mt-1"
              >
                Send Message →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
