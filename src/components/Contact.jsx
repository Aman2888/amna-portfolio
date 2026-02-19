import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0216 0%, #1a0533 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.3), transparent)' }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <h2
            className="text-5xl font-black mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}
          >
            Let's <span className="shimmer-text">Collaborate</span>
          </h2>
          <p style={{ color: 'rgba(200,180,240,0.6)', maxWidth: '500px', margin: '0 auto' }}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <div className="reveal-left space-y-8">
            {[
              { label: 'Email', val: 'amnai1899@gmail.com', icon: '✉' },
              { label: 'LinkedIn', val: 'in/amna-irfan-a16669257', icon: '↗' },
              { label: 'GitHub', val: 'https://github.com/Aman2888', icon: '⌥' },
            ].map(({ label, val, icon }) => (
              <div
                key={label}
                className="flex items-center gap-5 p-4 gold-border cursor-pointer transition-all duration-300 hover:bg-white/5"
                style={{ background: 'rgba(10,2,22,0.5)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-lg"
                  style={{ color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)' }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    className="text-xs tracking-widest mb-0.5"
                    style={{ color: 'rgba(200,180,240,0.4)', fontFamily: 'JetBrains Mono' }}
                  >
                    {label.toUpperCase()}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(230,220,255,0.9)' }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: 'name', label: 'NAME', placeholder: 'Your name' },
                { key: 'email', label: 'EMAIL', placeholder: 'your@email.com' },
              ].map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label
                    className="block text-xs tracking-widest mb-2"
                    style={{ color: '#FFD700', fontFamily: 'JetBrains Mono' }}
                  >
                    {label}
                  </label>
                  <input
                    type={key === 'email' ? 'email' : 'text'}
                    value={form[key]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-yellow-400"
                    style={{
                      background: 'rgba(10,2,22,0.8)',
                      border: '1px solid rgba(255,215,0,0.2)',
                      color: 'rgba(230,220,255,0.9)',
                      fontFamily: 'DM Sans',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(255,215,0,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,215,0,0.2)'}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs tracking-widest mb-2"
                  style={{ color: '#FFD700', fontFamily: 'JetBrains Mono' }}
                >
                  MESSAGE
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 text-sm outline-none resize-none transition-all duration-300"
                  style={{
                    background: 'rgba(10,2,22,0.8)',
                    border: '1px solid rgba(255,215,0,0.2)',
                    color: 'rgba(230,220,255,0.9)',
                    fontFamily: 'DM Sans',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(255,215,0,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,215,0,0.2)'}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 font-semibold text-sm tracking-widest transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg, #4ade80, #22c55e)'
                    : 'linear-gradient(135deg, #FFD700, #B8860B)',
                  color: '#0a0216',
                  border: 'none',
                  cursor: 'pointer',
                  clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                  boxShadow: sent
                    ? '0 0 30px rgba(74,222,128,0.3)'
                    : '0 0 30px rgba(255,215,0,0.3)',
                }}
              >
                {sent ? '✓ MESSAGE SENT!' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
