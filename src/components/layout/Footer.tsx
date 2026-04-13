import { personal } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-headline text-base italic text-on-surface">
            Erich Giusseppe<span className="text-primary">.</span>
          </p>
          <p className="font-label text-xs text-outline mt-1 tracking-wide">
            Bogotá, Colombia · {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-8">
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
            className="font-label text-xs uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
