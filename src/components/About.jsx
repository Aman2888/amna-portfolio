export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0216 0%, #1a0533 100%)' }}
    >
      {/* Decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className=" items-center">
          {/* Right Text */}
          <div className="reveal-right">
            <h2
              className="text-5xl font-black mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
            >
              Crafting the Future,
              <br />
              <span className="shimmer-text">One Pixel at a Time</span>
            </h2>

            <p className="leading-relaxed mb-6" style={{ color: 'rgba(200,180,240,0.7)' }}>
              Hey! I'm Amna a frontend alchemist who lives for turning ideas into immersive, pixel-perfect realities.
              I breathe life into the browser with React.js, Material UI, Tailwind CSS, 3D magic, creating interfaces that delight and perform.
            </p>

            <p className="leading-relaxed mb-10" style={{ color: 'rgba(200,180,240,0.7)' }}>
              Outside of code, you'll find me experimenting with generative visuals, tweaking typography obsessively,
              or diving into open-source contributions. To me, the best interfaces feel like living art elegant, intuitive, and unforgettable.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                ['Location', 'Pakistan'],
                ['Email', 'amnai1899@gmail.com'],
                ['Availability', 'Freelance / Full-time'],
                ['Languages', 'EN, UR'],
              ].map(([label, val]) => (
                <div key={label}>
                  <div
                    className="text-xs tracking-widest mb-1"
                    style={{ color: '#FFD700', fontFamily: 'JetBrains Mono' }}
                  >
                    {label.toUpperCase()}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(230,220,255,0.8)' }}>{val}</div>
                </div>
              ))}
            </div>

            {/* <button
              className="px-8 py-3.5 text-sm font-semibold tracking-widest transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #B8860B)',
                color: '#0a0216',
                border: 'none',
                cursor: 'pointer',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                boxShadow: '0 0 30px rgba(255,215,0,0.3)',
              }}
            >
              DOWNLOAD RESUME
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
