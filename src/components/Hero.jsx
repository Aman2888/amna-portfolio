import { useEffect, useRef } from 'react';
import ThreeCanvas from './ThreeCanvas';

function Stars() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 4,
  }));

  return (
    <div className="stars" aria-hidden="true">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            '--duration': `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    // Animate text in
    if (textRef.current) {
      textRef.current.style.opacity = '0';
      textRef.current.style.transform = 'translateY(30px)';
      setTimeout(() => {
        textRef.current.style.transition = 'opacity 1s ease, transform 1s ease';
        textRef.current.style.opacity = '1';
        textRef.current.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
    >
      <Stars />

      {/* Purple mesh blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,47,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite 2s',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-20">
        {/* Left Text */}
        <div ref={textRef} className="z-10">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs tracking-widest"
            style={{
              background: 'rgba(30,6,77,0.8)',
              border: '1px solid rgba(255,215,0,0.3)',
              color: '#FFD700',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s infinite' }}
            />
            AVAILABLE FOR WORK
          </div>

          {/* Name */}
          <h1
            className="text-6xl md:text-7xl font-black leading-none mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="text-white">AMNA </span>
            <span className="shimmer-text">IRFAN</span>
          </h1>

          {/* Role */}
          <div
            className="text-xl md:text-2xl font-light tracking-widest mb-6 mt-4"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(230,220,255,0.7)' }}
          >
            {/* <span style={{ color: '#FFD700' }}>{'>'}</span> */}
            {' '}Frontend Alchemist<span className="text-yellow-400"> &amp; </span>UI Engineer
            React Artisan
            Code & Craft
          </div>

          {/* Description */}
          <p
            className="text-base leading-relaxed mb-10 max-w-lg"
            style={{ color: 'rgba(200,180,240,0.7)', fontFamily: 'DM Sans' }}
          >
            I build immersive digital experiences where clean code meets captivating design.<br />
            Transforming ambitious ideas into smooth, performant, and accessible interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-8 py-3.5 font-semibold text-sm tracking-widest transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #B8860B)',
                color: '#0a0216',
                border: 'none',
                cursor: 'pointer',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                boxShadow: '0 0 30px rgba(255,215,0,0.3)',
              }}
            >
              VIEW WORK
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 text-sm font-medium tracking-widest transition-all duration-300 hover:bg-white/5"
              style={{
                border: '1px solid rgba(255,215,0,0.4)',
                color: '#FFD700',
                background: 'transparent',
                cursor: 'pointer',
                clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
              }}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Right 3D Canvas */}
        <div
          className="relative h-[500px] md:h-[600px] w-full"
          style={{ zIndex: 5 }}
        >
          <ThreeCanvas />

          {/* Floating tech badges */}
          {[
            { label: 'React.js', x: '5%', y: '10%', delay: '0s' },
            { label: 'Tailwind CSS', x: '70%', y: '15%', delay: '0.5s' },
            { label: 'Material UI', x: '80%', y: '70%', delay: '1s' },
            { label: 'Vite', x: '5%', y: '75%', delay: '1.5s' },
          ].map(({ label, x, y, delay }) => (
            <div
              key={label}
              className="absolute px-3 py-1.5 text-xs font-medium tracking-wider pointer-events-none"
              style={{
                left: x, top: y,
                background: 'rgba(10,2,22,0.85)',
                border: '1px solid rgba(255,215,0,0.3)',
                color: '#FFD700',
                fontFamily: 'JetBrains Mono, monospace',
                animation: `float 5s ease-in-out infinite`,
                animationDelay: delay,
                backdropFilter: 'blur(8px)',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: 'rgba(255,215,0,0.5)' }}
      >
        <span className="text-xs tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>SCROLL</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(255,215,0,0.5), transparent)' }} />
      </div>
    </section>
  );
}
