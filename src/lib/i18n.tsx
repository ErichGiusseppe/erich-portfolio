'use client'

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react'

export type Lang = 'en' | 'es' | 'zh' | 'hi' | 'fr'

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'zh', label: '中文', short: '中文' },
  { code: 'hi', label: 'हिंदी', short: 'हि' },
  { code: 'fr', label: 'Français', short: 'FR' },
]

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      publications: 'Publications',
      cta: "Let's talk →",
    },
    hero: {
      label: 'Researcher & Engineer · Bogotá, Colombia',
      tagline: 'Building ML systems that work in production and publish in ACL.',
      cta: "Let's talk →",
      projects: 'View Projects',
      scroll: 'Scroll',
    },
    about: {
      label: 'About',
      heading1: 'Bridging rigorous research',
      heading2: 'with production ML systems',
      stack: 'Technical Stack',
      bio: [
        'Currently pursuing an M.Sc. in Information Engineering at Universidad de los Andes (GPA 4.63/5.0), with research at the Conecta-TE lab under the Academic Vice-Rectory. My work focuses on educational analytics, NLP, and machine learning applied to real-world systems.',
        'With industry experience at Habi and Duppla, I have built production-grade ML pipelines for real estate price prediction, content forecasting, and automated property valuation. My research has been peer-reviewed and published at ACL 2025 (Mumbai) and Springer/ICICT 2025 (London).',
      ],
      stats: [
        { label: 'Published Researcher', value: "ACL'25" },
        { label: 'Uniandes Scholar', value: 'M.Sc.' },
        { label: 'Cloud Certified', value: 'AWS' },
        { label: 'English Level', value: 'C1' },
      ],
    },
    experience: {
      label: 'Experience',
      heading: 'Professional narrative',
    },
    projects: {
      label: 'Projects',
      heading: 'Selected work',
      github: 'View GitHub →',
    },
    publications: {
      label: 'Publications',
      heading: 'Peer-reviewed research',
    },
    contact: {
      label: 'Contact',
      heading1: "Let's build something",
      heading2: 'intelligent',
      heading3: 'together.',
      sub: 'Open to research collaborations, ML engineering roles, and interesting problems.',
      copy: 'Copy email',
      copied: 'Copied to clipboard',
      sendEmail: 'Send Email',
      available: 'Available for new opportunities',
    },
  },

  es: {
    nav: {
      about: 'Perfil',
      experience: 'Experiencia',
      projects: 'Proyectos',
      publications: 'Publicaciones',
      cta: 'Hablemos →',
    },
    hero: {
      label: 'Investigador e Ingeniero · Bogotá, Colombia',
      tagline: 'Construyendo sistemas de ML que funcionan en producción y publican en ACL.',
      cta: 'Hablemos →',
      projects: 'Ver Proyectos',
      scroll: 'Explorar',
    },
    about: {
      label: 'Perfil',
      heading1: 'Investigación rigurosa',
      heading2: 'aplicada en producción',
      stack: 'Stack Técnico',
      bio: [
        'Actualmente cursando una Maestría en Ingeniería de Información en la Universidad de los Andes (GPA 4.63/5.0), con investigación en el laboratorio Conecta-TE bajo la Vicerrectoría Académica. Mi trabajo se centra en analítica educativa, PLN e inteligencia artificial aplicados a sistemas del mundo real.',
        'Con experiencia en Habi y Duppla, he construido pipelines de ML en producción para predicción de precios inmobiliarios, pronóstico de contenido y avalúo automatizado de propiedades. Mi investigación ha sido publicada en ACL 2025 (Bombay) y Springer/ICICT 2025 (Londres).',
      ],
      stats: [
        { label: 'Investigador Publicado', value: "ACL'25" },
        { label: 'Becario Uniandes', value: 'M.Sc.' },
        { label: 'Certificado Cloud', value: 'AWS' },
        { label: 'Nivel de Inglés', value: 'C1' },
      ],
    },
    experience: {
      label: 'Experiencia',
      heading: 'Trayectoria profesional',
    },
    projects: {
      label: 'Proyectos',
      heading: 'Trabajo seleccionado',
      github: 'Ver GitHub →',
    },
    publications: {
      label: 'Publicaciones',
      heading: 'Investigación arbitrada',
    },
    contact: {
      label: 'Contacto',
      heading1: 'Construyamos algo',
      heading2: 'inteligente',
      heading3: 'juntos.',
      sub: 'Disponible para colaboraciones de investigación, roles en ingeniería ML y problemas interesantes.',
      copy: 'Copiar correo',
      copied: '¡Copiado al portapapeles!',
      sendEmail: 'Enviar correo',
      available: 'Disponible para nuevas oportunidades',
    },
  },

  zh: {
    nav: {
      about: '关于我',
      experience: '工作经历',
      projects: '项目',
      publications: '学术发表',
      cta: '联系我 →',
    },
    hero: {
      label: '研究员与工程师 · 哥伦比亚波哥大',
      tagline: '构建可在生产环境中运行的机器学习系统，并在 ACL 发表论文。',
      cta: '联系我 →',
      projects: '查看项目',
      scroll: '向下滚动',
    },
    about: {
      label: '关于我',
      heading1: '严谨研究',
      heading2: '驱动生产级 ML 系统',
      stack: '技术栈',
      bio: [
        '目前就读于安第斯大学信息工程硕士专业（GPA 4.63/5.0），在学术副校长办公室下的 Conecta-TE 实验室从事研究工作。研究方向涵盖教育数据分析、自然语言处理以及应用于实际系统的机器学习。',
        '在 Habi 和 Duppla 积累的行业经验中，我为房地产价格预测、内容预测和自动化房产估值构建了生产级机器学习流程。研究成果已在 ACL 2025（孟买）和 Springer/ICICT 2025（伦敦）发表。',
      ],
      stats: [
        { label: '已发表研究员', value: "ACL'25" },
        { label: 'Uniandes 学者', value: 'M.Sc.' },
        { label: '云计算认证', value: 'AWS' },
        { label: '英语水平', value: 'C1' },
      ],
    },
    experience: {
      label: '工作经历',
      heading: '职业历程',
    },
    projects: {
      label: '项目',
      heading: '精选作品',
      github: '查看 GitHub →',
    },
    publications: {
      label: '学术发表',
      heading: '同行评审研究',
    },
    contact: {
      label: '联系',
      heading1: '一起构建',
      heading2: '智能',
      heading3: '系统。',
      sub: '欢迎研究合作、ML 工程职位及有趣项目的咨询。',
      copy: '复制邮箱',
      copied: '已复制到剪贴板',
      sendEmail: '发送邮件',
      available: '正在寻找新机会',
    },
  },

  hi: {
    nav: {
      about: 'परिचय',
      experience: 'अनुभव',
      projects: 'परियोजनाएं',
      publications: 'प्रकाशन',
      cta: 'बात करें →',
    },
    hero: {
      label: 'शोधकर्ता एवं इंजीनियर · बोगोटा, कोलंबिया',
      tagline: 'प्रोडक्शन में काम करने वाले ML सिस्टम बनाना और ACL में प्रकाशित करना।',
      cta: 'बात करें →',
      projects: 'प्रोजेक्ट देखें',
      scroll: 'नीचे स्क्रॉल करें',
    },
    about: {
      label: 'परिचय',
      heading1: 'कठोर अनुसंधान को',
      heading2: 'प्रोडक्शन ML से जोड़ना',
      stack: 'तकनीकी स्टैक',
      bio: [
        'वर्तमान में Universidad de los Andes में सूचना इंजीनियरिंग में M.Sc. कर रहे हैं (GPA 4.63/5.0), अकादमिक उप-कुलपति के तहत Conecta-TE लैब में शोध कर रहे हैं। कार्य शैक्षिक विश्लेषण, NLP और वास्तविक दुनिया की प्रणालियों पर लागू मशीन लर्निंग पर केंद्रित है।',
        'Habi और Duppla में अनुभव के साथ, रियल एस्टेट मूल्य पूर्वानुमान, सामग्री पूर्वानुमान और स्वचालित संपत्ति मूल्यांकन के लिए प्रोडक्शन-ग्रेड ML पाइपलाइन बनाए हैं। शोध ACL 2025 (मुंबई) और Springer/ICICT 2025 (लंदन) में प्रकाशित।',
      ],
      stats: [
        { label: 'प्रकाशित शोधकर्ता', value: "ACL'25" },
        { label: 'Uniandes विद्वान', value: 'M.Sc.' },
        { label: 'क्लाउड प्रमाणित', value: 'AWS' },
        { label: 'अंग्रेजी स्तर', value: 'C1' },
      ],
    },
    experience: {
      label: 'अनुभव',
      heading: 'पेशेवर यात्रा',
    },
    projects: {
      label: 'परियोजनाएं',
      heading: 'चयनित कार्य',
      github: 'GitHub देखें →',
    },
    publications: {
      label: 'प्रकाशन',
      heading: 'समीक्षित शोध',
    },
    contact: {
      label: 'संपर्क',
      heading1: 'मिलकर कुछ',
      heading2: 'बुद्धिमान',
      heading3: 'बनाएं।',
      sub: 'शोध सहयोग, ML इंजीनियरिंग भूमिकाओं और रोचक समस्याओं के लिए उपलब्ध।',
      copy: 'ईमेल कॉपी करें',
      copied: 'क्लिपबोर्ड पर कॉपी हो गया',
      sendEmail: 'ईमेल भेजें',
      available: 'नए अवसरों के लिए उपलब्ध',
    },
  },

  fr: {
    nav: {
      about: 'Profil',
      experience: 'Expérience',
      projects: 'Projets',
      publications: 'Publications',
      cta: 'Parlons →',
    },
    hero: {
      label: 'Chercheur & Ingénieur · Bogotá, Colombie',
      tagline: "Construire des systèmes de ML opérationnels et publier à l'ACL.",
      cta: 'Parlons →',
      projects: 'Voir les Projets',
      scroll: 'Défiler',
    },
    about: {
      label: 'Profil',
      heading1: 'Recherche rigoureuse',
      heading2: 'appliquée en production',
      stack: 'Stack Technique',
      bio: [
        "Actuellement en Master d'Ingénierie de l'Information à l'Universidad de los Andes (GPA 4,63/5,0), avec des recherches au laboratoire Conecta-TE sous la Vice-Rectorat Académique. Mes travaux portent sur l'analytique éducative, le TALN et l'apprentissage automatique appliqués à des systèmes réels.",
        "Fort d'une expérience chez Habi et Duppla, j'ai construit des pipelines de ML en production pour la prédiction de prix immobiliers, la prévision de contenu et l'évaluation automatisée de biens. Mes recherches ont été publiées à l'ACL 2025 (Mumbai) et Springer/ICICT 2025 (Londres).",
      ],
      stats: [
        { label: 'Chercheur Publié', value: "ACL'25" },
        { label: 'Boursier Uniandes', value: 'M.Sc.' },
        { label: 'Certifié Cloud', value: 'AWS' },
        { label: "Niveau d'anglais", value: 'C1' },
      ],
    },
    experience: {
      label: 'Expérience',
      heading: 'Parcours professionnel',
    },
    projects: {
      label: 'Projets',
      heading: 'Travaux sélectionnés',
      github: 'Voir GitHub →',
    },
    publications: {
      label: 'Publications',
      heading: 'Recherche évaluée par les pairs',
    },
    contact: {
      label: 'Contact',
      heading1: 'Construisons quelque',
      heading2: 'chose d\'intelligent',
      heading3: 'ensemble.',
      sub: "Ouvert aux collaborations de recherche, aux postes d'ingénierie ML et aux problèmes intéressants.",
      copy: "Copier l'e-mail",
      copied: 'Copié dans le presse-papiers',
      sendEmail: 'Envoyer un e-mail',
      available: 'Disponible pour de nouvelles opportunités',
    },
  },
}

export type TranslationTree = typeof translations.en

type ContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  tr: TranslationTree
}

const LanguageContext = createContext<ContextType>({
  lang: 'en',
  setLang: () => {},
  tr: translations.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-lang') as Lang | null
    if (stored && stored in translations) setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('portfolio-lang', l)
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, tr: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LangSelector() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = LANGS.find(l => l.code === lang)!

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 font-label text-xs text-outline hover:text-on-surface transition-colors py-1 px-2 rounded"
        aria-label="Select language"
      >
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span>{current.short}</span>
        <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 glass-panel rounded-xl py-1.5 min-w-[130px] z-50 shadow-xl">
          {LANGS.map(l => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false) }}
              className={`w-full text-left px-4 py-2 font-label text-xs transition-colors ${
                l.code === lang
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
