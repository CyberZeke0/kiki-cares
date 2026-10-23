import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Newborn Essentials Guide — Kiki Cares®" };

export default function NewbornEssentials() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #FFF9EC 0%, #E0F5F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🍼</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Prepare for Baby</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Newborn Essentials Guide</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>Everything you actually need for your newborn — and what you can skip. A practical guide for Nigerian parents.</p>
          </div>
        </div>

        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          {[
            {
              title: 'Diapering Essentials',
              icon: '🌸',
              color: '#E0F5F3',
              border: '#00A699',
              items: [
                {name: 'Newborn diapers', note: 'Buy 2-3 packs of newborn size — babies grow fast!'},
                {name: 'Baby wipes', note: 'Pure water wipes are best for newborn skin'},
                {name: 'Changing mat', note: 'Waterproof and easy to clean'},
                {name: 'Barrier cream', note: 'Zinc oxide cream to prevent diaper rash'},
                {name: 'Diaper bin or bag', note: 'For easy disposal'},
              ],
            },
            {
              title: 'Feeding',
              icon: '🍼',
              color: '#FFF9EC',
              border: '#FFD166',
              items: [
                {name: 'Nursing bras x3', note: 'Front-opening for easy breastfeeding'},
                {name: 'Breast pads', note: 'Disposable or reusable'},
                {name: 'Nipple cream', note: 'Lanolin cream for sore nipples'},
                {name: 'Feeding bottles x2', note: 'Even if breastfeeding, good to have'},
                {name: 'Bottle brush & steriliser', note: 'Essential for hygiene'},
                {name: 'Nursing pillow', note: 'Helps with positioning during feeds'},
              ],
            },
            {
              title: 'Clothing',
              icon: '👚',
              color: '#FFF0F3',
              border: '#FF6B8A',
              items: [
                {name: 'Bodysuits/vests x6', note: 'Short and long sleeve'},
                {name: 'Sleepsuits x6', note: 'With poppers for easy diaper changes'},
                {name: 'Hats x3', note: 'Newborns lose heat through their heads'},
                {name: 'Scratch mitts x4', note: 'Babies scratch their faces'},
                {name: 'Socks x6 pairs', note: 'They fall off easily so buy extra'},
                {name: 'Warm cardigan x2', note: 'For cooler Nigerian evenings'},
              ],
            },
            {
              title: 'Sleeping',
              icon: '😴',
              color: '#EBF4FF',
              border: '#4A90D9',
              items: [
                {name: 'Moses basket or cot', note: 'Baby should sleep in same room for first 6 months'},
                {name: 'Firm flat mattress', note: 'Never use soft or second-hand mattresses'},
                {name: 'Fitted sheets x3', note: 'Cotton is best in Nigeria\'s climate'},
                {name: 'Lightweight blanket x2', note: 'Avoid heavy blankets for newborns'},
                {name: 'Baby monitor', note: 'Optional but useful'},
              ],
            },
          ].map((section) => (
            <div key={section.title} style={{marginBottom: '32px'}}>
              <h2 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span>{section.icon}</span> {section.title}
              </h2>
              <div style={{backgroundColor: section.color, borderRadius: '16px', padding: '24px', border: `1.5px solid ${section.border}`}}>
                {section.items.map((item, i) => (
                  <div key={i} style={{display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: i < section.items.length - 1 ? '16px' : '0', paddingBottom: i < section.items.length - 1 ? '16px' : '0', borderBottom: i < section.items.length - 1 ? `1px solid ${section.border}40` : 'none'}}>
                    <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: section.border, flexShrink: 0, marginTop: '6px'}}></div>
                    <div>
                      <div style={{fontSize: '14px', fontWeight: '700', color: '#1A2A35', marginBottom: '2px'}}>{item.name}</div>
                      <div style={{fontSize: '12px', color: '#6B7F8C'}}>{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}