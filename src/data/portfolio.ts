export const personal = {
  name: 'Erich Giusseppe Soto Parada',
  roles: ['Data Scientist', 'ML Engineer', 'NLP Researcher', 'Graduate Researcher'],
  tagline: 'Building ML systems that work in production and publish in ACL.',
  email: 'erichgiusseppesotop@gmail.com',
  github: 'ErichGiusseppe',
  githubUrl: 'https://github.com/ErichGiusseppe',
  linkedinUrl: 'https://www.linkedin.com/in/erichgiusseppe',
  location: 'Bogotá, Colombia',
  bio: [
    'Currently pursuing an M.Sc. in Information Engineering at Universidad de los Andes (GPA 4.63/5.0), with research at the Conecta-TE lab under the Academic Vice-Rectory. My work focuses on educational analytics, NLP, and machine learning applied to real-world systems.',
    'With industry experience at Habi and Duppla, I have built production-grade ML pipelines for real estate price prediction, content forecasting, and automated property valuation. My research has been peer-reviewed and published at ACL 2025 (Mumbai) and Springer/ICICT 2025 (London).',
  ],
  stats: [
    { label: 'Published Researcher', value: 'ACL\'25' },
    { label: 'Uniandes Scholar', value: 'M.Sc.' },
    { label: 'Cloud Certified', value: 'AWS' },
    { label: 'English Level', value: 'C1' },
  ],
}

export const skills = {
  'ML / DL': [
    'PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost',
    'HuggingFace', 'DSPy', 'LangChain',
  ],
  'Data & Cloud': [
    'Python', 'SQL', 'R', 'Bash', 'JavaScript',
    'Pandas', 'NumPy', 'Spark', 'Databricks',
  ],
  'MLOps & Infra': [
    'Airflow', 'Docker', 'Git', 'GCP', 'AWS',
  ],
  'BI & Viz': [
    'Power BI', 'Domo', 'Tableau',
  ],
}

export const experience = [
  {
    title: 'Graduate Research Assistant',
    company: 'Universidad de los Andes — Conecta-TE',
    period: 'Aug 2025 – Present',
    current: true,
    bullets: [
      'Built educational analytics dashboards (Domo, Power BI, Databricks) tracking LMS adoption across 50+ institutional programs, informing data-driven decisions for the Academic Vice-Rectory.',
      'Designed and executed statistical hypothesis tests (Mann-Whitney U, Wilcoxon signed-rank, Jarque-Bera) to measure the impact of AI-based educational resources on academic outcomes.',
      'Engineered SQL pipelines and ETL processes for legacy educational systems, reducing data retrieval time and enabling automated institutional reporting.',
    ],
  },
  {
    title: 'Teaching Assistant — M.Sc. Artificial Intelligence (MaIA)',
    company: 'Universidad de los Andes',
    period: 'Aug 2025 – Present',
    current: true,
    bullets: [
      'Evaluated and mentored graduate students in ML/AI research projects and applied capstone work across two cohorts (Aug–Oct 2025, Jan 2026–Present).',
    ],
  },
  {
    title: 'Data Specialist',
    company: 'Duppla',
    period: 'Oct 2024 – Apr 2025',
    current: false,
    bullets: [
      'Developed and improved ML models (ensemble methods, gradient boosting, feature engineering) for real estate price prediction across the Bogotá metropolitan area.',
      'Designed a hedonic pricing methodology that quantified price adjustments by property attributes (parking, amenities), enabling automated comparative market analysis.',
      'Built a similarity-based scoring system with optimized variable weighting, reducing valuation turnaround and contributing to the internal pricing product roadmap.',
    ],
  },
  {
    title: 'Analytics Intern',
    company: 'Habi',
    period: 'Jan – Jul 2024',
    current: false,
    bullets: [
      'Developed a predictive model for publication view forecasting, enabling the content team to prioritize high-impact real estate reports.',
      'Created statistical summaries and market analysis reports from major sources (The Economist, industry portals), driving user engagement.',
      'Performed quality assurance on analytical processes, ensuring accuracy and consistency of published content.',
    ],
  },
]

export const projects = [
  {
    title: 'Document QA with RAG',
    category: 'NLP / LLM',
    description:
      'Retrieval-augmented generation system using chunking, embeddings, and vector storage paired with an LLM for accurate document question answering. Deployed on GCP with REST API.',
    tags: ['Python', 'LangChain', 'Vector DB', 'GCP'],
    githubUrl: 'https://github.com/ErichGiusseppe',
    icon: 'psychology',
  },
  {
    title: 'Legal Text Summarization',
    category: 'NLP / Research',
    description:
      'Hybrid extractive-abstractive pipeline using PACSUM + LLM prompting, outperforming fine-tuned Legal-Pegasus and BART models. Ranked 7th internationally at JUST-NLP 2025, published in ACL proceedings.',
    tags: ['PyTorch', 'HuggingFace', 'PACSUM', 'NLP'],
    badge: '7th Place · ACL 2025',
    githubUrl: 'https://github.com/ErichGiusseppe',
    icon: 'gavel',
  },
  {
    title: 'EEG Brain Pattern Detection',
    category: 'Deep Learning',
    description:
      'CNN + BiLSTM model for early detection of 6 harmful brain patterns from EEG signals (Kaggle HMS dataset), achieving 63.98% accuracy (F1: 0.6282) using bipolar montage preprocessing.',
    tags: ['PyTorch', 'CNN', 'BiLSTM', 'Signal Processing'],
    metric: { label: 'Accuracy', value: '63.98%' },
    githubUrl: 'https://github.com/ErichGiusseppe',
    icon: 'neurology',
  },
  {
    title: 'Semantic Book Recommender',
    category: 'ML / NLP',
    description:
      'Content-based recommendation engine using sentence embeddings and cosine similarity for semantic matching between user prompts and book summaries. Deployed on GCP.',
    tags: ['Sentence Embeddings', 'Cosine Similarity', 'GCP'],
    githubUrl: 'https://github.com/ErichGiusseppe',
    icon: 'auto_stories',
  },
]

export const publications = [
  {
    year: '2025',
    authors: 'E. G. Soto Parada, C. M. Muñoz Almeida, D. Cuevas Alba',
    title: 'Combining Extractive and Generative Methods for Legal Summarization: Tayronas Trigrams at JUST-NLP 2025',
    venue: 'Proc. JUST-NLP Workshop @ ACL 2025, pp. 155–161',
    location: 'Mumbai, India',
    publisher: 'ACL',
    badge: '7th Place · International Competition',
    current: true,
  },
  {
    year: '2025',
    authors: 'E. G. Soto Parada, G. A. Montoya, C. Lozano-Garzón',
    title: 'DoS Attack Detection using a Machine Learning and Multi-Objective Optimization Approach in IoT Networks',
    venue: 'Proc. ICICT 2025',
    location: 'London, UK',
    publisher: 'Springer Nature',
    isbn: 'ISBN 978-981-96-6441-2',
    current: false,
  },
]

export const education = [
  {
    degree: 'M.Sc. Information Engineering (MINE)',
    institution: 'Universidad de los Andes',
    period: 'Jan 2025 – Present',
    gpa: '4.63 / 5.0',
    detail: 'Focus: ML, NLP, Educational Analytics · Graduate Research Assistant at Conecta-TE',
    current: true,
  },
  {
    degree: 'B.Sc. Systems and Computing Engineering',
    institution: 'Universidad de los Andes',
    period: 'Feb 2020 – Nov 2024',
    gpa: '4.13 / 5.0',
    detail: 'Thesis in Machine Learning graded 5.0/5.0 · TA: Modeling & Simulation, Data Structures & Algorithms',
    current: false,
  },
]

export const certifications = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', period: '2025–2028' },
  { name: 'Deep Learning Fundamentals', issuer: 'NVIDIA' },
  { name: 'Transformer-Based NLP', issuer: 'NVIDIA' },
  { name: 'LLM Applications', issuer: 'NVIDIA' },
  { name: 'Efficient LLM Customization', issuer: 'NVIDIA' },
  { name: 'IELTS Academic 7.0 (C1)', issuer: 'British Council', period: 'Nov 2024' },
]

export const researchInterests = [
  'Natural Language Processing',
  'Machine Learning',
  'Educational Data Analytics',
  'Information Retrieval',
  'Deep Learning for Signal Processing',
]
