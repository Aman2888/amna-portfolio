import { useEffect, useRef } from 'react';

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Material UI', level: 90 },
  { name: 'Vite', level: 78 },
  { name: ' MongoDB', level: 82 },
  { name: 'Vercel', level: 75 },
  { name: 'Github', level: 70 },
  { name: 'UI/UX Design', level: 85 },
];

const techIcons = [
  'React.js', 'Material UI', 
  'Vite', 'Vercel', 'MongoDB',  'Tailwind CSS', 'Figma', 'Git'
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = sectionRef.current?.querySelectorAll('.skill-fill');
          fills?.forEach(fill => fill.classList.add('animated'));
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d0320 0%, #0a0216 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)' }}
      />

      {/* Background hex grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(rgba(255,215,0,0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <h2
            className="text-5xl font-black"
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
          >
            My <span className="shimmer-text">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Skill bars */}
          <div className="reveal-left space-y-8">
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div className="flex justify-between items-center mb-3">
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'rgba(230,220,255,0.9)', fontFamily: 'DM Sans' }}
                  >
                    {name}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: '#FFD700', fontFamily: 'JetBrains Mono' }}
                  >
                    {level}%
                  </span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ '--fill-width': `${level / 100}` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack grid */}
          <div className="reveal-right">
            <div
              className="text-xs tracking-widest mb-6"
              style={{ color: 'rgba(200,180,240,0.5)', fontFamily: 'JetBrains Mono' }}
            >
              TECH STACK
            </div>
            <div className="grid grid-cols-3 gap-3">
              {techIcons.map(tech => (
                <div
                  key={tech}
                  className="gold-border px-4 py-3 text-center cursor-default transition-all duration-300 hover:bg-white/5"
                  style={{
                    background: 'rgba(30,6,77,0.3)',
                  }}
                >
                  <div
                    className="text-xs font-medium tracking-wide"
                    style={{ color: 'rgba(230,220,255,0.8)', fontFamily: 'JetBrains Mono' }}
                  >
                    {tech}
                  </div>
                </div>
              ))}
            </div>

            {/* Code snippet decoration */}
            <div
              className="mt-8 p-5"
              style={{
                background: 'rgba(10,2,22,0.8)',
                border: '1px solid rgba(255,215,0,0.1)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                lineHeight: '1.8',
              }}
            >
              <div style={{ color: '#7b2fff' }}>const</div>
              <div>
                <span style={{ color: '#FFD700' }}>alex</span>
                <span style={{ color: 'rgba(230,220,255,0.6)' }}> = {'{'}</span>
              </div>
              <div style={{ paddingLeft: '1rem', color: 'rgba(200,180,240,0.7)' }}>
                <span style={{ color: '#B8860B' }}>passion</span>: <span style={{ color: '#4ade80' }}>"building"</span>,
              </div>
              <div style={{ paddingLeft: '1rem', color: 'rgba(200,180,240,0.7)' }}>
                <span style={{ color: '#B8860B' }}>coffee</span>: <span style={{ color: '#4ade80' }}>"required"</span>,
              </div>
              <div style={{ paddingLeft: '1rem', color: 'rgba(200,180,240,0.7)' }}>
                <span style={{ color: '#B8860B' }}>bugs</span>: <span style={{ color: '#f87171' }}>0</span>, <span style={{ color: 'rgba(200,180,240,0.3)' }}>// wishful</span>
              </div>
              <div style={{ color: 'rgba(230,220,255,0.6)' }}>{'}'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
