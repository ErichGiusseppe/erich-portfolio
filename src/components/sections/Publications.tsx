'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { publications } from '@/data/portfolio'

export default function Publications() {
  return (
    <section id="publications" className="py-32 px-6 md:px-10 bg-surface-container-low">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
            Publications
          </span>
          <h2 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-16 leading-tight">
            Peer-reviewed research
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              className="group relative flex gap-8 p-7 rounded-2xl hover:bg-surface-container/60 transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full transition-colors duration-300 ${
                  pub.current
                    ? 'bg-primary group-hover:bg-primary'
                    : 'bg-outline-variant/40 group-hover:bg-outline'
                }`}
              />

              <div className="shrink-0 pt-0.5">
                <span
                  className={`font-headline text-2xl ${
                    pub.current ? 'text-secondary' : 'text-outline'
                  }`}
                >
                  {pub.year}
                </span>
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`font-label text-[10px] px-2.5 py-1 rounded tracking-widest uppercase ${
                      pub.current
                        ? 'bg-primary/10 border border-primary/25 text-primary'
                        : 'bg-surface-container border border-outline-variant/25 text-outline'
                    }`}
                  >
                    {pub.publisher}
                  </span>
                  {pub.badge && (
                    <span className="font-label text-[10px] px-2.5 py-1 bg-secondary/10 border border-secondary/25 text-secondary rounded tracking-wide">
                      {pub.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-body text-lg font-semibold text-on-surface mb-2 leading-snug">
                  {pub.title}
                </h3>

                <p className="font-label text-xs text-outline mb-1">
                  {pub.authors}
                </p>

                <p className="font-label text-xs text-outline/70">
                  {pub.venue} · {pub.location}
                  {pub.isbn && <span className="ml-2">{pub.isbn}</span>}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
