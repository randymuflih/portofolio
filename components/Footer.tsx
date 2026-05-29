import portfolio from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-semibold text-white">{portfolio.name}</p>
        <p className="text-xs text-[#555]">
          © {new Date().getFullYear()} · Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-6">
          <a href={portfolio.socials.github} target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#555] hover:text-white transition-colors">
            GitHub
          </a>
          <a href={portfolio.socials.instagram} target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#555] hover:text-white transition-colors">
            Instagram
          </a>
          <a href="/cv.pdf" download className="text-xs text-[#555] hover:text-white transition-colors">
            Download CV
          </a>
        </div>
      </div>
    </footer>
  )
}
