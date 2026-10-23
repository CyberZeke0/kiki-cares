import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "First Week at Home — Kiki Cares®" };

export default function FirstWeek() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #F0EEFF 0%, #E0F5F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🏠</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Prepare for Baby</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>First Week at Home</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>What to expect in your first week home with your newborn. Honest advice for Nigerian parents.</p>
          </div>
        </div>

        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          {[
            {icon: '😴', title: 'Sleep — or lack of it', desc: 'Your baby will sleep 16-18 hours a day but wake every 2-3 hours to feed. Sleep when your baby sleeps — household chores can wait. Accept all offers of help from family.'},
            {icon: '🍼', title: 'Feeding every 2-3 hours', desc: 'Newborns have tiny stomachs and need feeding frequently. Whether breastfeeding or bottle feeding, this is completely normal. Your milk supply will establish in the first few days.'},
            {icon: '💛', title: 'The umbilical cord stump', desc: 'Keep it clean and dry. It will fall off in 1-3 weeks. Fold diapers below it to keep it aired. Never pull it off — let it fall naturally.'},
            {icon: '🟡', title: 'Newborn jaundice', desc: 'Many Nigerian babies develop mild jaundice in the first week — the skin looks yellow. This is usually normal but tell your doctor or midwife. Sunlight and feeding frequently helps.'},
            {icon: '😢', title: 'Why is baby crying?', desc: 'Babies cry because they are hungry, need a diaper change, are too hot or cold, need a cuddle, or are overstimulated. You will learn your baby\'s different cries quickly.'},
            {icon: '🩺', title: 'First doctor visit', desc: 'Book your first paediatric appointment within the first week. Your baby will be weighed and checked. Bring your hospital discharge papers and any questions you have.'},
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