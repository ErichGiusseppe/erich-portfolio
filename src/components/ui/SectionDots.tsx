'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/i18n'

const SECTIONS = [
  { id: 'hero' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'projects' },
  { id: 'publications' },
  { id: 'contact' },
]

export default function SectionDots() {
  const { tr } = useLanguage()
  const [active, setActive] = useState('hero')

  const labels: Record<string, string> = {
    hero: 'Erich Giusseppe',
    about: tr.nav.about,
    experience: tr.nav.experience,
    projects: tr.nav.projects,
    publications: tr.nav.publications,
    contact: tr.contact.label,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
      aria-label="Section navigation"
    >
      {SECTIONS.map(({ id }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-2.5 justify-end"
          aria-label={labels[id]}
        >
          <span className="font-label text-[10px] text-on-surface-variant opacity-0 group-hover:opacity-70 transition-all duration-200 tracking-widest uppercase whitespace-nowrap">
            {labels[id]}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? 'w-2 h-2 bg-primary shadow-[0_0_6px_rgba(192,193,255,0.6)]'
                : 'w-1.5 h-1.5 bg-outline/30 group-hover:bg-outline/60'
            }`}
          />
        </a>
      ))}
    </nav>
  )
}
