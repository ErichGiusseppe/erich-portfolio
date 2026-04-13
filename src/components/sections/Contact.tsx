'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { personal } from '@/data/portfolio'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email)
    } catch {
      // fallback for browsers that block clipboard access
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-40 px-6 md:px-10 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-6 block">
            Contact
          </span>
          <h2 className="font-headline text-5xl md:text-6xl italic text-on-surface mb-6 leading-tight">
            Let&apos;s build something
            <br />
            <span className="text-primary">intelligent</span> together.
          </h2>
          <p className="font-body text-on-surface-variant text-lg mb-16 leading-relaxed">
            Open to research collaborations, ML engineering roles, and interesting problems.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="glass-panel rounded-2xl p-10 mb-12">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-2 mx-auto font-label text-sm sm:text-lg md:text-2xl text-primary hover:text-primary-fixed-dim transition-colors max-w-full"
              aria-label="Copy email address"
            >
              <span className="break-all text-left">{personal.email}</span>
              <motion.span
                key={copied ? 'check' : 'copy'}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-outline group-hover:text-primary transition-colors"
              >
                {copied ? (
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </motion.span>
            </button>
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-label text-xs text-secondary mt-3"
              >
                Copied to clipboard
              </motion.p>
            )}

            <div className="mt-10 pt-8 border-t border-outline-variant/15 flex items-center justify-center gap-10">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
              >
                GitHub
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="gradient-cta text-on-primary font-label text-xs font-semibold px-6 py-2.5 rounded-lg tracking-wide hover:opacity-90 transition-opacity"
              >
                Send Email
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-slow" />
            <span className="font-label text-xs uppercase tracking-widest text-secondary">
              Available for new opportunities
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
