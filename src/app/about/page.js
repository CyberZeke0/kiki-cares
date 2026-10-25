import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9f9f9', fontFamily: 'Quicksand, sans-serif' }}>

        <div style={{ background: '#00A699', padding: '80px 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: 'white', marginBottom: '16px' }}>About Kiki Cares</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', maxWidth: '540px', margin: '0 auto', lineHeight: '1.7' }}>
            Born in Nigeria. Built for African babies. Driven by love.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px' }}>

          {[
            { title: 'Our Mission', text: 'Kiki Cares exists to give every African baby access to world-class diaper care that fits their climate, their skin, and their family\'s budget. We believe premium baby care should not be a luxury — it should be a standard.' },
            { title: 'Our Story', text: 'Kiki Cares was founded by a Nigerian mother who struggled to find diapers that truly worked for her baby\'s sensitive skin in Lagos\'s humid climate. After years of trial and research, she created a diaper designed from the ground up for African babies.' },
            { title: 'Why We Are Different', text: 'Unlike imported brands designed for colder climates, Kiki Cares diapers use breathable materials that keep babies cool and dry in Nigeria\'s heat. Every product is dermatologist tested, hypoallergenic, and made without harmful chemicals.' },
            { title: 'Our Community', text: 'We are trusted by over 50,000 parents across Nigeria. We partner with local hospitals, paediatricians and midwives to ensure our products meet the highest safety standards for newborns and growing babies.' },
          ].map(section => (
            <div key={section.title} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>{section.title}</h2>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.8' }}>{section.text}</p>
            </div>
          ))}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }} className="about-stats">
            {[
              { number: '50,000+', label: 'Happy Parents' },
              { number: '6', label: 'Product Lines' },
              { number: '36', label: 'States Delivered' },
            ].map(stat => (
              <div key={stat.label} style={{ background: 'white', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '32px', fontWeight: '900', color: '#00A699', marginBottom: '6px' }}>{stat.number}</div>
                <div style={{ fontSize: '13px', color: '#888', fontWeight: '600' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}