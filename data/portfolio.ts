export interface Stat {
  number: string
  label: string
}

export interface ExpTask {
  title: string
  description: string
  tech: string[]
  placeholder: { label: string; gradient: string }
}

export interface Experience {
  role: string
  company: string
  year: string
  description: string
  learned: string[]
  tasks: ExpTask[]
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools'
  proficiency: number
}

export interface Project {
  title: string
  description: string
  tech: string[]
  category: 'Frontend' | 'Backend' | 'Full-Stack' | 'CMS'
  client: string
  year: string
  screenshot: string
  liveUrl: string
  githubUrl: string
}

export interface Social {
  github: string
  instagram: string
  phone: string
}

export interface PortfolioData {
  name: string
  firstName: string
  tagline: string
  bio: string
  socials: Social
  stats: Stat[]
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
}

const portfolio: PortfolioData = {
  name: 'Muhammad Randy Muflih',
  firstName: 'Randy',
  tagline: 'Mahasiswa Informatika yang antusias di bidang data — siap belajar, berkolaborasi, dan berkontribusi.',
  bio: 'Mahasiswa Informatika Universitas Hasanuddin dengan pengalaman magang di PT Pelindo. Terbiasa bekerja dalam tim, cepat belajar teknologi baru, dan sedang mendalami dunia data engineering.',
  socials: {
    github: 'https://github.com/randymuflih',
    instagram: 'https://instagram.com/randymuflih_',
    phone: '081998201039',
  },
  stats: [
    { number: '4', label: 'Projects' },
    { number: '1', label: 'Internship' },
    { number: '5+', label: 'Tech Stacks' },
    { number: '2024', label: 'Started Coding' },
  ],
  experiences: [
    {
      role: 'Information Technology Intern',
      company: 'PT Pelindo Jasa Maritim',
      year: 'Jul – Agt 2025',
      description:
        'Menjalani magang di divisi IT PT Pelindo, berkontribusi langsung pada pengembangan sistem internal berbasis Laravel serta mendukung pengelolaan infrastruktur jaringan perusahaan. Pengalaman ini melatih saya untuk bekerja sama dalam tim profesional, berkomunikasi lintas divisi, dan terus belajar di lingkungan industri yang sesungguhnya.',
      learned: ['Laravel', 'SQL', 'UI/UX', 'Networking', 'Excel', 'Data Visualization'],
      tasks: [
        {
          title: 'Web Pemantauan Kapal',
          description:
            'Membantu pengembangan aplikasi web internal khusus pegawai PT Pelindo untuk memantau posisi dan status kapal secara real-time. Dibangun dengan Laravel dan terintegrasi dengan data operasional pelabuhan.',
          tech: ['Laravel', 'PHP', 'MySQL', 'Figma'],
          placeholder: {
            label: 'Web Development',
            gradient: 'linear-gradient(135deg, #0D1B38 0%, #1A3560 50%, #0A4D7A 100%)',
          },
        },
        {
          title: 'Network Monitoring',
          description:
            'Melakukan pemantauan jaringan dan infrastruktur di ruang server PT Pelindo. Memastikan konektivitas jaringan berjalan stabil, membantu troubleshooting, dan mendokumentasikan kondisi perangkat jaringan.',
          tech: ['Network', 'LAN', 'Troubleshooting'],
          placeholder: {
            label: 'Network & Server',
            gradient: 'linear-gradient(135deg, #111111 0%, #1C1C1C 50%, #2A2A2A 100%)',
          },
        },
      ],
    },
  ],
  skills: [
    { name: 'JavaScript', category: 'Frontend', proficiency: 80 },
    { name: 'Next.js', category: 'Frontend', proficiency: 70 },
    { name: 'HTML & CSS', category: 'Frontend', proficiency: 90 },
    { name: 'Python', category: 'Backend', proficiency: 75 },
    { name: 'MySQL', category: 'Backend', proficiency: 80 },
    { name: 'Laravel', category: 'Backend', proficiency: 70 },
    { name: 'Node.js', category: 'Backend', proficiency: 60 },
    { name: 'Git & GitHub', category: 'Tools', proficiency: 80 },
    { name: 'VS Code', category: 'Tools', proficiency: 90 },
    { name: 'Figma', category: 'Tools', proficiency: 60 },
    { name: 'Vercel', category: 'Tools', proficiency: 70 },
  ],
  projects: [
    {
      title: 'Sistem Informasi Magang',
      description: 'Tugas kuliah Informatika UNHAS — aplikasi web full-stack untuk manajemen magang mahasiswa. Mencakup fitur pengajuan, monitoring progress, dan laporan magang. Dikerjakan mandiri sebagai bagian dari mata kuliah.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Laravel', 'MySQL'],
      category: 'Full-Stack',
      client: 'Tugas Kuliah',
      year: '2025',
      screenshot: '/project-magang.png',
      liveUrl: 'https://project-pbo.vercel.app/',
      githubUrl: 'https://github.com/randymuflih/project-PBO',
    },
    {
      title: 'Website Unhas Model United Nations',
      description: 'Berkontribusi di sisi backend untuk website organisasi mahasiswa dengan klien Universitas Hasanuddin. Menangani API, manajemen konten, dan database untuk profil organisasi, berita, dan agenda kegiatan.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity'],
      category: 'Backend',
      client: 'UNHAS MUN',
      year: '2026',
      screenshot: '/project-unhasmun.png',
      liveUrl: 'https://www.unhasmun.org/',
      githubUrl: 'https://github.com/randymuflih/unhasmun-website',
    },
    {
      title: 'Waste2Worth Website Hackathon',
      description: 'Berkontribusi di sisi backend untuk website lomba hackathon yang diselenggarakan IYREF ITB. Menangani registrasi tim, autentikasi peserta, dan manajemen data lomba yang dikonsumsi oleh tim frontend.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      category: 'Backend',
      client: 'IYREF ITB',
      year: '2026',
      screenshot: '/project-waste2worth.png',
      liveUrl: 'https://waste-to-worth-eosin.vercel.app/',
      githubUrl: 'https://github.com/randymuflih/waste-to-worth',
    },
    {
      title: 'Website Unhas - Stanford University',
      description: 'Bagian dari tim pengembang website kolaborasi penelitian Universitas Hasanuddin dan Stanford University menggunakan WordPress. Melakukan kustomisasi tema, pengaturan plugin, dan manajemen konten. Proyek sedang dalam pengerjaan.',
      tech: ['WordPress'],
      category: 'CMS',
      client: 'Tim TRG UNHAS',
      year: 'Ongoing',
      screenshot: '/project-trg.png',
      liveUrl: '#',
      githubUrl: '#',
    },
  ],
}

export default portfolio
