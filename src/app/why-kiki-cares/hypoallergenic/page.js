import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Hypoallergenic Formula — Kiki Cares®" };

export default function Hypoallergenic() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #E0F5F3 0%, #FFF9EC 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🌿</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Our Promise</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Hypoallergenic Formula</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>Every Kiki Cares® product is made with ingredients chosen specifically to be safe for sensitive baby skin — free from everything that could cause a reaction.</p>
          </div>
        </div>
        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          {[
            {icon: '🧪', title: 'What does hypoallergenic mean?', desc: 'Hypoallergenic means the product is formulated to minimize the risk of allergic reactions. Every ingredient is carefully selected and tested to ensure it is safe for even the most sensitive newborn skin.'},
            {icon: '🚫', title: 'What we leave out', desc: 'Our products contain no parabens, no phthalates, no latex, no alcohol, no artificial fragrances, no dyes and no harsh chemicals. If it could irritate baby skin, it is not in our products.'},
            {icon: '🔬', title: 'How we test', desc: 'Every Kiki Cares® product goes through rigorous dermatological testing before it reaches your baby. We test on sensitive skin panels and work with paediatric dermatologists to verify safety.'},
            {icon: '👶', title: 'Safe from day one', desc: 'Our hypoallergenic formula is safe for premature babies and newborns from their very first day of life. It is gentle enough for babies with eczema, psoriasis or other skin conditions.'},
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