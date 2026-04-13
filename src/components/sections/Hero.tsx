'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { personal } from '@/data/portfolio'

function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    if (waiting) return
    const word = words[wordIndex % words.length]

    const delay = deleting ? speed * 0.5 : speed
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < word.length) {
          setDisplayed(word.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        } else {
          setWaiting(true)
          setTimeout(() => {
            setWaiting(false)
            setDeleting(true)
          }, pause)
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(word.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        } else {
          setDeleting(false)
          setWordIndex(i => i + 1)
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIndex, deleting, waiting, wordIndex, words, speed, pause])

  return displayed
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    type Particle = { x: number; y: number; vx: number; vy: number; r: number }

    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.4,
    }))

    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(192,193,255,${(1 - dist / 130) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => {
        ctx.fillStyle = 'rgba(192,193,255,0.35)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default function Hero() {
  const typewritten = useTypewriter(personal.roles)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-container/3 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={itemVariants}
          className="font-label text-xs tracking-[0.35em] text-secondary uppercase mb-8 block"
        >
          Researcher &amp; Engineer · Bogotá, Colombia
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-headline text-6xl sm:text-7xl md:text-8xl italic font-bold text-on-surface leading-none tracking-tighter mb-6 text-glow"
        >
          Erich Giusseppe
          <br />
          <span className="text-primary">Soto Parada</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="h-10 flex items-center justify-center mb-8"
        >
          <span className="font-label text-lg md:text-xl text-on-surface-variant">
            {typewritten}
            <span className="animate-pulse text-primary ml-0.5">|</span>
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-body text-on-surface-variant max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="gradient-cta text-on-primary font-label font-semibold px-8 py-3.5 rounded-xl tracking-wide hover:opacity-90 transition-opacity shadow-glow-primary"
          >
            Explore Projects
          </a>
          <a
            href="#publications"
            className="glass-panel font-label font-semibold px-8 py-3.5 rounded-xl tracking-wide text-on-surface hover:bg-surface-container-high transition-colors"
          >
            Publications
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline hover:text-on-surface transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <div className="w-px h-4 bg-outline-variant/40" />
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline hover:text-on-surface transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <div className="w-px h-4 bg-outline-variant/40" />
          <a
            href={`mailto:${personal.email}`}
            className="text-outline hover:text-on-surface transition-colors"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-outline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
