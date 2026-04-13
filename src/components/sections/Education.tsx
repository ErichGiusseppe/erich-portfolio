'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { education, certifications } from '@/data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 md:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Education
          </span>
          <h2 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-16 leading-tight">
            Academic background
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="p-8 bg-surface-container rounded-2xl border border-outline-variant/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-label text-lg font-semibold text-on-surface leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="font-label text-sm text-primary mt-1">
                    {edu.institution}
                  </p>
                </div>
                {edu.current && (
                  <span className="shrink-0 font-label text-[10px] px-2.5 py-1 bg-secondary/10 border border-secondary/25 text-secondary rounded tracking-wide mt-0.5">
                    Current
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-headline text-2xl text-on-surface">{edu.gpa}</span>
                <span className="font-label text-xs text-outline uppercase tracking-wide">GPA</span>
              </div>

              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {edu.detail}
              </p>

              <p className="font-label text-xs text-outline mt-4">{edu.period}</p>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="glass-panel rounded-2xl p-8">
            <span className="font-label text-xs tracking-widest text-primary uppercase mb-6 block">
              Certifications
            </span>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-label text-sm ${
                    cert.issuer === 'Amazon Web Services'
                      ? 'bg-secondary/5 border-secondary/20 text-secondary'
                      : 'border-outline-variant/20 text-on-surface-variant'
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 shrink-0 ${
                      cert.issuer === 'Amazon Web Services' ? 'text-secondary' : 'text-outline'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{cert.name}</span>
                  <span className="text-outline text-[10px]">· {cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
