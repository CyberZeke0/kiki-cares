import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Made for African Babies — Kiki Cares®" };

export default function MadeForAfricanBabies() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #FFF9EC 0%, #E0F5F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🌍</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Our Story</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Made for African Babies</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>Most baby care products are designed for European or American climates. Kiki Cares® was specifically built for Nigerian and West African babies.</p>
          </div>
        </div>
        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          {[
            {icon: '☀️', title: 'Designed for Nigeria\'s heat', desc: 'Our diapers use breathable materials that allow air circulation — keeping babies cool and comfortable even in Nigeria\'s hot weather. Standard diapers trap heat and cause discomfort.'},
            {icon: '💧', title: 'Higher absorbency for humid climates', desc: 'Humidity makes babies sweat more, producing more moisture. Our absorbent core is engineered to handle the higher moisture levels typical in Nigerian conditions.'},
            {icon: '🌿', title: 'Gentle on melanin-rich skin', desc: 'Research shows that melanin-rich skin can have different sensitivities. We have specifically tested our products on Nigerian baby skin types to ensure they are perfectly gentle.'},
            {icon: '🍲', title: 'Accounts for Nigerian diet', desc: 'A mother\'s diet affects her breast milk, which affects baby\'s digestion and stool composition. Our products are tested against the profiles typical of babies raised on Nigerian diets.'},
            {icon: '🚗', title: 'Built for Nigerian lifestyles', desc: 'Long distances, generator fumes, market dust and busy urban environments — our products are tested to perform in real Nigerian conditions, not just laboratory settings.'},
            {icon: '🇳🇬', title: 'Serving Nigeria ', desc: 'While we were founded in Baltimore, our hearts are also in Nigeria. Our primary focus is serving Nigerian families with products that truly fit their lives — at prices that make sense.'},
          ].map((item, i) => (
            <div key={i} style={{display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: i % 2 === 0 ? '#F7F8FA' : 'white', borderRadius: '16px', padding: '24px', marginBottom: '16px', border: '1.5px solid #E5EBF0'}}>
              <div style={{fontSize: '36px', flexShrink: 0}}>{item.icon}</div>
              <div>
                <div style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{item.title}</div>
                <div style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.8'}}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}