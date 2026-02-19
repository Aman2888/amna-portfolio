const projects = [
  {
    id: '01',
    title: 'Dev Spots',
    category: 'SaaS Platform',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    desc: 'A captivating browser-based 3D design tool that empowers creators to sculpt, visualize, and export complex geometries. Built with React + Vite + Tailwind, featuring immersive WebGL rendering, animated gradients, smooth carousel interactions, and seamless multi-page navigation.',
    color: '#FFD700',
  },
  {
    id: '02',
    title: 'Clinic Management System',
    category: 'Frontend Application / CRUD Dashboard',
    tech: ['React.js', 'Bootstrap 5', 'LocalStorage'],
    desc: 'A clean, fully client-side Clinic Management dashboard built with React & Bootstrap. Enables clinic staff to add, view, edit, delete patient records and appointments all persisted in localStorage. Features responsive tables, modals for forms, real-time updates, and customizable print functionality for prescriptions/reports.',
    color: '#4a90e2',
  },
  {
    id: '03',
    title: 'TrendyEra',
    category: 'Full-Stack E-Commerce Platform',
    tech: ['React.js', 'Material UI', 'Node.js', 'Express.js', 'MongoDB'],
    desc: 'A modern full-stack e-commerce store built with MERN stack and Material UI. Features curated collections for Interior Design, Men Fashion, Women Fashion, Kids Wear, and Makeup with seamless product browsing, detailed views, responsive cart management, real-time updates, and MongoDB-powered backend for persistent product data.',
    color: '#E91E63',
  },
  {
    id: '04',
    title: 'Live News App',
    category: 'API-Driven News Aggregator',
    tech: ['React.js', 'Bootstrap 5', 'Axios', 'NewsAPI'],
    desc: 'A clean, responsive news dashboard fetching real-time headlines from NewsAPI. Browse top stories by categories (Business, Tech, Sports, Entertainment), search topics, view article cards with images/descriptions/sources all powered by React state management, Axios API calls, loading spinners, and error handling.',
    color: '#00BFA5',
  },
  {
    id: '05',
    title: 'VisualNest',
    category: 'Full-Stack Auth & Profile App',
    tech: ['React.js', 'Material UI', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    desc: 'A secure MERN-based user profile management app with registration, JWT authentication, profile picture upload, and full CRUD for personal details. Features signup/login flow, protected dashboard, post-signup profile completion, edit functionality, and private data handling built to master authentication, file uploads, and full-stack integration.',
    color: '#6366f1',
  },
  {
    id: '06',
    title: 'Resume Builder',
    category: 'Frontend Tool / PDF Generator',
    tech: ['React.js', 'Material UI', 'html2pdf.js', 'LocalStorage'],
    desc: 'A intuitive, client-side resume builder with Material UI-powered multi-step forms for personal info, education, experience, skills & projects. Choose from multiple themes, enjoy real-time preview, start fresh resumes, and export polished PDFs instantly perfect for quick, customizable professional resumes without any backend.',
    color: '#6366f1',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0216 0%, #1a0533 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <h2
              className="text-5xl font-black"
              style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            >
              Featured <span className="shimmer-text">Projects</span>
            </h2>
          </div>
          <div
            className="hidden md:block text-sm tracking-wider"
            style={{ color: 'rgba(200,180,240,0.4)', fontFamily: 'JetBrains Mono' }}
          >
            {projects.length} PROJECTS
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className="project-card gold-border p-6 cursor-pointer reveal group"
              style={{
                background: 'rgba(10,2,22,0.7)',
                transitionDelay: `${i * 0.1}s`,
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Project number */}
              <div
                className="text-xs mb-4 font-medium"
                style={{
                  fontFamily: 'JetBrains Mono',
                  color: p.color,
                  opacity: 0.6,
                }}
              >
                {p.id} / {String(projects.length).padStart(2, '0')}
              </div>

              {/* Category */}
              <div
                className="inline-block px-3 py-1 text-xs tracking-wider mb-4"
                style={{
                  background: `${p.color}18`,
                  border: `1px solid ${p.color}40`,
                  color: p.color,
                  fontFamily: 'JetBrains Mono',
                }}
              >
                {p.category}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors"
                style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'rgba(200,180,240,0.6)', fontFamily: 'DM Sans' }}
              >
                {p.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1"
                    style={{
                      background: 'rgba(255,215,0,0.07)',
                      color: 'rgba(255,215,0,0.7)',
                      fontFamily: 'JetBrains Mono',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
