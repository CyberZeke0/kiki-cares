import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Breastfeeding Tips — Kiki Cares®" };

export default function Breastfeeding() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #FFF0F3 0%, #FFF9EC 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🤱</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Prepare for Baby</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Breastfeeding Tips</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>Practical breastfeeding advice for Nigerian mums. You've got this!</p>
          </div>
        </div>

        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>

          <div style={{backgroundColor: '#E0F5F3', borderRadius: '20px', padding: '28px', border: '1.5px solid #00A699', marginBottom: '40px'}}>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: '800', color: '#1A2A35', marginBottom: '12px'}}>
              🌟 The benefits of breastfeeding
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
              {['Best nutrition for your baby', 'Builds baby\'s immune system', 'Reduces risk of infections', 'Helps mum recover faster', 'Free and always available', 'Promotes bonding with baby'].map((benefit, i) => (
                <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: '#1A2A35'}}>
                  <span style={{color: '#00A699', fontWeight: '700'}}>✓</span> {benefit}
                </div>
              ))}
            </div>
          </div>

          {[
            {icon: '🤱', title: 'Getting a good latch', desc: 'A good latch is the key to successful breastfeeding. Your baby\'s mouth should cover not just the nipple but a large part of the areola. Their lips should be flanged outward like a fish. If it hurts, unlatch and try again.'},
            {icon: '⏰', title: 'How often to feed', desc: 'Newborns need feeding 8-12 times in 24 hours. Feed on demand — whenever baby shows hunger signs like rooting, sucking fists or turning their head. Don\'t watch the clock.'},
            {icon: '🌊', title: 'Establishing your milk supply', desc: 'Your milk comes in 2-5 days after birth. Until then, your body makes colostrum — thick yellow milk packed with antibodies. The more you feed, the more milk you make. Skin-to-skin contact helps.'},
            {icon: '💧', title: 'Staying hydrated', desc: 'Drink plenty of water while breastfeeding — at least 2-3 litres a day in Nigeria\'s heat. Keep a bottle of water next to you when feeding. Nigerian foods like oats, fenugreek and tiger nuts can help boost supply.'},
            {icon: '😰', title: 'Common challenges', desc: 'Sore nipples, engorgement and blocked ducts are all common. Apply breast milk to sore nipples after feeding. Feed frequently to prevent engorgement. Mastitis needs antibiotic treatment — see a doctor.'},
            {icon: '💪', title: 'When to get help', desc: 'See a lactation consultant or your midwife if: baby isn\'t gaining weight, feeding is very painful, you have mastitis symptoms, or you\'re struggling emotionally. Getting help early makes a big difference.'},
          ].map((item, i) => (
            <div key={i} style={{display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: '#F7F8FA', borderRadius: '16px', padding: '24px', marginBottom: '16px', border: '1.5px solid #E5EBF0'}}>
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