export default function Footer() {
  return (
    <footer
      className="py-12 text-center relative"
      style={{ background: '#0a0216', borderTop: '1px solid rgba(255,215,0,0.1)' }}
    >
      <div
        className="text-2xl font-black mb-2"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        <span className="text-white">AMNA </span>
        <span className="shimmer-text">IRFAN</span>
      </div>
      <div
        className="text-xs tracking-widest mb-6"
        style={{ color: 'rgba(200,180,240,0.4)', fontFamily: 'JetBrains Mono' }}
      >
        FRONTEND DEVELOPER · UI ALCHEMIST
      </div>
      <div
        className="text-xs"
        style={{ color: 'rgba(200,180,240,0.3)', fontFamily: 'DM Sans' }}
      >
        © {new Date().getFullYear()} Amna Irfan. All rights reserved.
      </div>
    </footer>
  );
}
