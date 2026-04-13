'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-10 bg-surface">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Experience
          </span>
          <h2 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-20 leading-tight">
            Professional narrative
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-14">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-10 md:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div
                  className={`absolute left-[-5px] md:left-[21px] top-1.5 w-3 h-3 rounded-full border-2 border-surface transition-all ${
                    item.current
                      ? 'bg-secondary glow-secondary'
                      : 'bg-surface-container-highest border-outline'
                  }`}
                  style={
                    item.current
                      ? { boxShadow: '0 0 12px rgba(255,185,95,0.5)' }
                      : {}
                  }
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="font-label text-lg font-semibold text-on-surface">
                      {item.title}
                    </h3>
                    <p className="font-label text-sm text-outline mt-0.5">
                      {item.company}
                    </p>
                  </div>
                  <span
                    className={`font-label text-xs tracking-wide shrink-0 ${
                      item.current ? 'text-secondary' : 'text-outline'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {item.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="font-body text-sm text-on-surface-variant leading-relaxed flex gap-3"
                    >
                      <span className="text-outline mt-1.5 shrink-0 text-xs">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
