import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Dermatologist Tested — Kiki Cares®" };

export default function DermatologistTested() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #FFF0F3 0%, #E0F5F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🤍</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Our Promise</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Dermatologist Tested</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>Every Kiki Cares® product is clinically tested and approved by dermatologists before it reaches your baby's skin.</p>
          </div>
        </div>
        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          {[
            {icon: '👩‍⚕️', title: 'What dermatologist tested means', desc: 'Our products are tested by qualified dermatologists and paediatricians on real skin panels — including sensitive skin — to confirm they are safe, gentle and non-irritating.'},
            {icon: '🏥', title: 'Tested in Nigerian conditions', desc: 'We specifically test our products in Nigeria\'s warm, humid climate. Standard tests done in Europe or North America don\'t account for how skin behaves in our heat. We test here, for babies here.'},
            {icon: '📋', title: 'Our testing process', desc: 'Products go through patch testing, repeated use testing and sensitivity testing before approval. Only products that pass every stage earn the Kiki Cares® dermatologist tested seal.'},
            {icon: '✅', title: 'Recommended by paediatricians', desc: 'Nigerian paediatricians recommend Kiki Cares® for babies with sensitive skin, eczema and nappy rash. We work directly with children\'s health professionals to ensure our products meet clinical standards.'},
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