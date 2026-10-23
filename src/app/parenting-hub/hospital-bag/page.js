import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Hospital Bag Checklist — Kiki Cares®" };

export default function HospitalBag() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #E0F5F3 0%, #FFF0F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🏥</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Prepare for Baby</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Hospital Bag Checklist</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>Everything you need to pack for your hospital stay in Nigeria. Start packing at 35 weeks — babies can arrive early!</p>
          </div>
        </div>

        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          {[
            {
              title: 'For Mum — During Labour',
              icon: '👩',
              color: '#FFF0F3',
              border: '#FF6B8A',
              items: ['Birth plan (if you have one)', 'Hospital booking card & ID', 'Health insurance card', 'Comfortable loose clothing', 'Slippers or flip flops', 'Snacks and drinks for labour', 'Phone charger', 'Small fan (Nigerian hospitals can be warm)', 'Music or podcasts on your phone'],
            },
            {
              title: 'For Mum — After Birth',
              icon: '🌸',
              color: '#E0F5F3',
              border: '#00A699',
              items: ['Nightgowns or pyjamas (front-opening for breastfeeding)', 'Nursing bra x2', 'Breast pads', 'Maternity pads x2 packs', 'Comfortable underwear x5', 'Toiletries (soap, toothbrush, deodorant)', 'Towels x2', 'Going-home outfit', 'Healthy snacks'],
            },
            {
              title: 'For Baby',
              icon: '👶',
              color: '#FFF9EC',
              border: '#FFD166',
              items: ['Kiki Cares® Newborn Diapers x1 pack', 'Kiki Cares® Baby Wipes x1 pack', 'Vests/bodysuits x3', 'Sleepsuits x3', 'Hats x2', 'Scratch mitts x2', 'Socks x3 pairs', 'Warm blanket', 'Going-home outfit', 'Car seat (must have before leaving hospital)'],
            },
            {
              title: 'Important Documents',
              icon: '📄',
              color: '#EBF4FF',
              border: '#4A90D9',
              items: ['Antenatal card', 'National ID or passport', 'Health insurance documents', 'Birth partner\'s ID', 'Emergency contact numbers', 'Any medication you are taking'],
            },
          ].map((section) => (
            <div key={section.title} style={{marginBottom: '32px'}}>
              <h2 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span>{section.icon}</span> {section.title}
              </h2>
              <div style={{backgroundColor: section.color, borderRadius: '16px', padding: '24px', border: `1.5px solid ${section.border}`}}>
                {section.items.map((item, i) => (
                  <div key={i} style={{display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: i < section.items.length - 1 ? '12px' : '0'}}>
                    <div style={{width: '20px', height: '20px', borderRadius: '4px', border: `2px solid ${section.border}`, flexShrink: 0, marginTop: '2px'}}></div>
                    <div style={{fontSize: '14px', color: '#1A2A35', lineHeight: '1.6'}}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{backgroundColor: '#1A2A35', borderRadius: '20px', padding: '32px', textAlign: 'center', marginTop: '40px'}}>
            <div style={{fontSize: '36px', marginBottom: '12px'}}>🌸</div>
            <h3 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '8px'}}>Stock up on Kiki Cares® before baby arrives</h3>
            <p style={{fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px'}}>Make sure you have enough diapers and wipes for your hospital stay and first weeks at home.</p>
            <a href="/" style={{backgroundColor: '#00A699', color: 'white', padding: '12px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>Shop Now</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}