const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Virtual Soft',
    period: '2026 — Present',
    location: 'Remote / Sadiqabad, Punjab, PK',
    desc: 'Contributing to real client projects with React.js, Tailwind CSS, and modern frontend tools. Building responsive dashboards, interactive UIs, and optimizing performance for web applications. Collaborating remotely with the team on full features from design to deployment.',
    bullets: [
      'Implemented responsive layouts, animations, and state management best practices',
      'Participated in code reviews, debugging, and delivering budget-friendly, high-quality solutions',
      'Gained hands-on experience in production-level code and agile workflows'
    ],
    highlight: true
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'Various Clients',
    period: '2025',
    desc: 'Handled independent client projects including clinic management systems, e-commerce stores, user profile apps, and resume builders all built with React, Material UI/Bootstrap, and modern tooling.',
    bullets: [
      'Delivered fully responsive, performant frontend solutions for small businesses and startups',
      'Specialized in React components, animations, form handling, PDF generation, and localStorage/state management',
      'Optimized UI/UX for better user experience and faster load times across devices'
    ],
    highlight: true
  },
  {
    role: 'Junior Software Developer',
    company: 'Enovatorz',
    period: '2024',
    location: 'Sadiqabad, Punjab, PK',
    desc: 'Worked on e-commerce and dashboard modules with a focus on frontend development. Delivered client projects with clean, optimized UI/UX using React ecosystem.',
    bullets: [
      'Built software modules for e-commerce dashboards using React.js and Material UI',
      'Contributed to team collaboration, problem-solving, and effective communication',
      'Delivered multiple client projects with emphasis on performance optimization and responsive design'
    ],
    highlight: false
  },
  {
    role: 'Software Developer Intern',
    company: 'Enovatorz',
    period: ' 2023 — 2024',
    location: 'Sadiqabad, Punjab, PK',
    desc: 'Developed and maintained MERN stack web applications with strong emphasis on frontend. Collaborated in a team of 4 to build scalable features and improve application performance.',
    bullets: [
      'Focused on React frontend for MERN-based apps, including dynamic UIs and API integrations',
      'Learned teamwork, version control (Git), and best practices for performance & scalability',
      'Contributed to full application lifecycle from requirement gathering to deployment'
    ],
    highlight: false
  },

];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d0320 0%, #0a0216 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <h2
            className="text-5xl font-black"
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
          >
            Work <span className="shimmer-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative min-h-[1200px]">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #FFD700, rgba(255,215,0,0.1))' }}
          />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-12 pb-24"
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              {/* Dot */}
              <div
                className="absolute left-0 top-2 w-4 h-4 -translate-x-1/2 rounded-full"
                style={{
                  background: exp.highlight ? '#FFD700' : 'rgba(255,215,0,0.3)',
                  border: exp.highlight ? '3px solid rgba(255,215,0,0.6)' : '2px solid rgba(255,215,0,0.3)',
                  boxShadow: exp.highlight ? '0 0 20px rgba(255,215,0,0.6)' : 'none',
                }}
              />

              <div
                className="p-8 rounded-xl border border-yellow-600/30 bg-gradient-to-br from-purple-950/60 to-indigo-950/60 backdrop-blur-md"
              >
                {/* Period */}
                <div className="text-xs tracking-widest mb-4 text-yellow-400 font-mono">
                  {exp.period}
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {exp.role}
                </h3>
                <div className="text-base mb-6 text-yellow-300 font-semibold">
                  {exp.company}
                </div>

                <p className="text-base leading-relaxed text-purple-200/80 mb-6">
                  {exp.desc}
                </p>

                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="space-y-3 text-sm text-purple-100/90">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3 mt-1 text-yellow-400 text-xl">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
