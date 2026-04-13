'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { projects } from '@/data/portfolio'

const iconMap: Record<string, JSX.Element> = {
  psychology: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  gavel: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  neurology: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  auto_stories: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-10 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Projects
            </span>
            <h2 className="font-headline text-4xl md:text-5xl italic text-on-surface leading-tight">
              Selected work
            </h2>
          </div>
          <a
            href={`https://github.com/${projects[0].githubUrl.split('/').pop()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs text-secondary underline underline-offset-4 decoration-secondary/30 hover:decoration-secondary/80 transition-all shrink-0"
          >
            View GitHub →
          </a>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group relative glass-panel rounded-2xl p-8 card-hover overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start justify-between mb-6">
                <div className="text-primary">{iconMap[project.icon]}</div>
                <div className="flex items-center gap-2">
                  {project.badge && (
                    <span className="font-label text-[10px] px-2.5 py-1 bg-secondary/10 border border-secondary/25 text-secondary rounded tracking-wide">
                      {project.badge}
                    </span>
                  )}
                  {project.metric && (
                    <div className="text-right">
                      <span className="block font-headline text-xl text-primary">{project.metric.value}</span>
                      <span className="font-label text-[9px] text-outline uppercase tracking-wider">{project.metric.label}</span>
                    </div>
                  )}
                </div>
              </div>

              <span className="font-label text-[10px] uppercase tracking-widest text-outline mb-3 block">
                {project.category}
              </span>

              <h3 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-label text-[10px] uppercase tracking-wider text-outline"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label text-xs text-outline hover:text-primary transition-colors group/link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="group-hover/link:translate-x-0.5 transition-transform">
                  View on GitHub
                </span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
