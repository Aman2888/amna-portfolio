import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10,2,22,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,215,0,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-sm flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #B8860B)',
              boxShadow: '0 0 20px rgba(255,215,0,0.4)',
            }}
          >
            <span className="text-black font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>AI</span>
          </div>
          <span
            className="text-lg font-semibold tracking-widest"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#FFD700' }}
          >
            AMNA<span className="text-purple-300">.</span>IRFAN
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="nav-link text-sm tracking-wider text-purple-200 hover:text-yellow-400 transition-colors duration-300"
              style={{ fontFamily: 'DM Sans', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Contact')}
            className="px-5 py-2 text-sm font-medium tracking-wider transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFD700, #B8860B)',
              color: '#0a0216',
              border: 'none',
              cursor: 'pointer',
              clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            }}
          >
            HIRE ME
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="h-px transition-all duration-300"
              style={{
                width: i === 1 ? (menuOpen ? '24px' : '16px') : '24px',
                background: '#FFD700',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'rgba(10,2,22,0.98)',
          borderBottom: menuOpen ? '1px solid rgba(255,215,0,0.1)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-purple-200 hover:text-yellow-400 transition-colors py-2 text-sm tracking-wider"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
