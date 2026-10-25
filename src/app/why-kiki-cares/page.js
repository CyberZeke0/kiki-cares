'use client';

const certifications = [
  {
    name: 'NAFDAC Approved',
    img: '/nafdac.png',
    color: '#00A699',
    desc: 'Registered and approved by the National Agency for Food and Drug Administration and Control (NAFDAC), Nigeria.',
  },
  {
    name: 'Hypoallergenic',
    img: '/hypoallergenic.png',
    color: '#FF6B8A',
    desc: 'Dermatologically tested and certified hypoallergenic. Safe for the most sensitive newborn skin.',
  },
  {
    name: 'ECOCERT Certified',
    img: '/ecocert.jpg',
    color: '#F7B731',
    desc: 'Certified by ECOCERT — the global standard for organic and natural products. Clean ingredients, responsibly sourced.',
  },
  {
    name: 'ISO Certified',
    img: '/iso.png',
    color: '#555',
    desc: 'ISO certified manufacturing processes ensuring consistent quality and safety standards.',
  },
];

const promises = [
  { icon: '💧', title: 'Pure Ingredients', desc: 'No harsh chemicals, no parabens, no fragrances. Just clean, baby-safe formulas.' },
  { icon: '🧪', title: 'Dermatologist Tested', desc: 'Every product is tested by certified dermatologists before it reaches your baby.' },
  { icon: '♻️', title: 'Eco-Friendly Packaging', desc: 'Our packaging is recyclable and designed to minimize environmental impact.' },
  { icon: '❤️', title: 'Made With Love', desc: 'Founded by a mother, for mothers. Every product is made with your baby in mind.' },
];

const whyPoints = [
  { title: 'Nigerian-Made', desc: 'Proudly made in Nigeria, for Nigerian babies and climate conditions.' },
  { title: 'Affordable Quality', desc: 'Premium baby care that does not cost a fortune. Every family deserves the best.' },
  { title: 'Mother-Founded', desc: "Born from a mother's need for safe, reliable products she could trust for her own child." },
  { title: 'Community First', desc: 'We invest in parenting education and support for Nigerian mothers.' },
];

export default function WhyKikiPage() {
  return (
    <main style={{ fontFamily: 'Quicksand, sans-serif', background: '#fff', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #e6f7f6 0%, #fff0f4 100%)', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>✨</div>
        <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1a1a1a', margin: '0 0 12px' }}>Why Kiki Cares?</h1>
        <p style={{ fontSize: '16px', color: '#555', maxWidth: '520px', margin: '0 auto', lineHeight: '1.7' }}>
          We believe every baby deserves safe, gentle, certified products. Here is our promise to you and your little one.
        </p>
      </section>

      {/* Certifications */}
      <section style={{ padding: '60px 20px', maxWidth: '960px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', textAlign: 'center', marginBottom: '10px' }}>Our Certifications</h2>
        <p style={{ textAlign: 'center', color: '#777', fontSize: '14px', marginBottom: '36px' }}>Trusted by regulators, loved by parents</p>
        <div className="cert-grid">
          {certifications.map(cert => (
            <div key={cert.name} style={{ border: `2px solid ${cert.color}`, borderRadius: '16px', padding: '28px 20px', textAlign: 'center', background: '#fafafa' }}>
              <img
                src={cert.img}
                alt={cert.name}
                style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '14px' }}
              />
              <h3 style={{ fontWeight: '900', fontSize: '17px', color: cert.color, margin: '0 0 10px' }}>{cert.name}</h3>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section id="promise" style={{ background: '#f9f9f9', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', textAlign: 'center', marginBottom: '36px' }}>Our Promise</h2>
          <div className="promise-grid">
            {promises.map(p => (
              <div key={p.title} style={{ background: 'white', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '30px', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontWeight: '800', fontSize: '16px', color: '#1a1a1a', margin: '0 0 6px' }}>{p.title}</h3>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section id="ingredients" style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', textAlign: 'center', marginBottom: '36px' }}>What Makes Us Different</h2>
        <div className="why-grid">
          {whyPoints.map(w => (
            <div key={w.title} style={{ borderLeft: '4px solid #00A699', paddingLeft: '16px' }}>
              <h3 style={{ fontWeight: '800', fontSize: '16px', color: '#1a1a1a', margin: '0 0 6px' }}>{w.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: '1.6' }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #00A699, #FF6B8A)', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '26px', fontWeight: '900', color: 'white', margin: '0 0 14px' }}>Shop with Confidence</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', marginBottom: '28px' }}>Every product, certified and tested for your baby.</p>
        <a href="/diapers" style={{ display: 'inline-block', background: 'white', color: '#00A699', fontWeight: '800', fontSize: '15px', padding: '14px 32px', borderRadius: '30px', textDecoration: 'none', fontFamily: 'Quicksand, sans-serif' }}>
          Shop Now
        </a>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700;800;900&display=swap');
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .promise-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 767px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .promise-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}