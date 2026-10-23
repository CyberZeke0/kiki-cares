import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Chemical Free — Kiki Cares®" };

export default function ChemicalFree() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #E0F5F3 0%, #EBF4FF 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🌱</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Our Promise</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Chemical Free</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>We believe what you leave out is just as important as what you put in. Kiki Cares® products are free from all harmful chemicals.</p>
          </div>
        </div>
        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px'}}>
            {[
              {chemical: 'Parabens', why: 'Hormone disruptors linked to skin irritation'},
              {chemical: 'Phthalates', why: 'Can affect hormonal development in babies'},
              {chemical: 'Chlorine', why: 'Bleaching agent that dries and irritates skin'},
              {chemical: 'Alcohol', why: 'Dries out delicate baby skin'},
              {chemical: 'Artificial Fragrances', why: 'Common cause of allergic reactions'},
              {chemical: 'Latex', why: 'Can cause severe allergic reactions'},
              {chemical: 'Dyes', why: 'Artificial colours that irritate sensitive skin'},
              {chemical: 'Formaldehyde', why: 'Toxic preservative harmful to baby skin'},
            ].map((item) => (
              <div key={item.chemical} style={{backgroundColor: '#FFF0F3', borderRadius: '12px', padding: '16px', border: '1.5px solid #FFD6DF'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px'}}>
                  <span style={{color: '#FF6B8A', fontWeight: '700', fontSize: '16px'}}>✕</span>
                  <span style={{fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '800', color: '#1A2A35'}}>{item.chemical}</span>
                </div>
                <div style={{fontSize: '12px', color: '#6B7F8C', lineHeight: '1.5'}}>{item.why}</div>
              </div>
            ))}
          </div>
          <div style={{backgroundColor: '#E0F5F3', borderRadius: '20px', padding: '32px', border: '1.5px solid #00A699', textAlign: 'center'}}>
            <div style={{fontSize: '48px', marginBottom: '12px'}}>🌿</div>
            <h3 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>What we use instead</h3>
            <p style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.8'}}>We use plant-based ingredients, pure water, natural aloe vera, vitamin E and carefully selected safe preservatives — all tested and approved for baby skin.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}