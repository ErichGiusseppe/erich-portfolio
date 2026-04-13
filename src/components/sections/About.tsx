'use client'

import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { skills } from '@/data/portfolio'
import { useLanguage } from '@/lib/i18n'

export default function About() {
  const { tr } = useLanguage()
  return (
    <section id="about" className="pt-40 pb-32 px-6 md:px-10 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

        <div className="lg:col-span-7">
          <AnimatedSection>
            <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              {tr.about.label}
            </span>
            <h2 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-10 leading-tight">
              {tr.about.heading1}
              <br />
              {tr.about.heading2}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-5" staggerDelay={0.12}>
            {tr.about.bio.map((para, i) => (
              <StaggerItem key={i}>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  {para}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 pt-10 border-t border-outline-variant/20 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {tr.about.stats.map(stat => (
                <div key={stat.label}>
                  <span className="block font-headline text-2xl text-secondary mb-1">
                    {stat.value}
                  </span>
                  <span className="font-label text-xs uppercase tracking-wide text-outline">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="lg:col-span-5">
          <AnimatedSection delay={0.2} direction="left">
            <div className="glass-panel p-8 rounded-2xl">
              <span className="font-label text-xs uppercase tracking-widest text-primary mb-8 block">
                {tr.about.stack}
              </span>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="font-label text-[10px] uppercase tracking-widest text-outline mb-3">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-surface-container-highest border border-outline-variant/20 rounded-full font-label text-xs text-on-surface-variant"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
