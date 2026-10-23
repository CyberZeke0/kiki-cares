import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Diaper Rash Guide — Kiki Cares®",
  description: "Everything you need to know about preventing and treating Diaper rash in babies.",
};

export default function DiaperRashGuide() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div style={{background: 'linear-gradient(135deg, #E0F5F3 0%, #FFF0F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
              Parenting Hub
            </div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px', lineHeight: '1.1'}}>
              My Diaper Rash Guide
            </h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8', marginBottom: '24px'}}>
              Everything you need to know about preventing and treating Diaper rash — written for Nigerian parents by our team of paediatric experts.
            </p>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <div style={{backgroundColor: 'white', borderRadius: '100px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', color: '#6B7F8C', border: '1px solid #E5EBF0'}}>
                ⏱ 5 min read
              </div>
              <div style={{backgroundColor: 'white', borderRadius: '100px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', color: '#6B7F8C', border: '1px solid #E5EBF0'}}>
                👶 All ages
              </div>
              <div style={{backgroundColor: 'white', borderRadius: '100px', padding: '8px 16px', fontSize: '13px', fontWeight: '600', color: '#6B7F8C', border: '1px solid #E5EBF0'}}>
                ✅ Expert reviewed
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '60px 40px'}}>

          {/* What is Diaper rash */}
          <div style={{marginBottom: '48px'}}>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '800', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-0.5px'}}>
              What is Diaper rash?
            </h2>
            <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.9', marginBottom: '16px'}}>
              Diaper rash is a common skin condition that affects babies and toddlers. It appears as red, sore skin in the Diaper area — including the bottom, genitals and thighs. It can range from mild redness to painful, broken skin with spots or blisters.
            </p>
            <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.9'}}>
              Most babies get Diaper rash at some point, especially between 9 and 12 months. It is not a sign of bad parenting — it happens even with the most careful parents.
            </p>
          </div>

          {/* Causes */}
          <div style={{marginBottom: '48px'}}>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '800', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-0.5px'}}>
              What causes Diaper rash?
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
              {[
                {icon: '💧', title: 'Prolonged wetness', desc: 'Leaving a wet or dirty Diaper on too long is the most common cause. Urine and faeces irritate delicate baby skin.'},
                {icon: '🧴', title: 'Sensitive skin', desc: 'Some babies have more sensitive skin and react to chemicals in Diapers, wipes or washing powder.'},
                {icon: '🍼', title: 'Diet changes', desc: 'When babies start solid foods or a new food is introduced, the content of their stools changes and can cause irritation.'},
                {icon: '💊', title: 'Antibiotics', desc: 'Antibiotics can disrupt the balance of bacteria and cause diarrhoea, which can lead to Diaper rash.'},
                {icon: '🌡️', title: 'Hot weather', desc: 'Nigeria\'s warm climate means babies sweat more, which can make Diaper rash worse. Extra breathability is key.'},
              ].map((cause) => (
                <div key={cause.title} style={{display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#F7F8FA', borderRadius: '16px', padding: '20px'}}>
                  <div style={{fontSize: '28px', flexShrink: 0}}>{cause.icon}</div>
                  <div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '15px', fontWeight: '700', color: '#1A2A35', marginBottom: '6px'}}>{cause.title}</div>
                    <div style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.7'}}>{cause.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention */}
          <div style={{marginBottom: '48px'}}>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '800', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-0.5px'}}>
              How to prevent Diaper rash
            </h2>
            <div style={{backgroundColor: '#E0F5F3', borderRadius: '20px', padding: '28px', border: '1.5px solid #00A699'}}>
              {[
                'Change Diapers frequently — every 2-3 hours or as soon as they are soiled',
                'Clean the Diaper area gently with warm water or alcohol-free wipes',
                'Pat the skin dry — never rub, as this causes more irritation',
                'Use a thin layer of barrier cream like zinc oxide or petroleum jelly at each change',
                'Let your baby have regular Diaper-free time to let the skin breathe',
                'Use hypoallergenic Diapers like Kiki Cares® that are free from harmful chemicals',
                'Avoid using talcum powder — it can irritate airways and sensitive skin',
              ].map((tip, i) => (
                <div key={i} style={{display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: i < 6 ? '14px' : '0'}}>
                  <div style={{width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#00A699', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700', flexShrink: 0, marginTop: '2px'}}>
                    {i + 1}
                  </div>
                  <div style={{fontSize: '14px', color: '#1A2A35', lineHeight: '1.7'}}>{tip}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Treatment */}
          <div style={{marginBottom: '48px'}}>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '800', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-0.5px'}}>
              Treating Diaper rash at home
            </h2>
            <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.9', marginBottom: '20px'}}>
              Most Diaper rash clears up within 3-4 days with proper home care. Here's what to do:
            </p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
              {[
                {icon: '✅', title: 'DO', items: ['Change Diapers more frequently', 'Use warm water to clean the area', 'Apply zinc oxide barrier cream', 'Let skin air dry before putting on new Diaper', 'Use gentle hypoallergenic wipes'], color: '#E0F5F3', border: '#00A699', text: '#00A699'},
                {icon: '❌', title: 'DON\'T', items: ['Use scented wipes or soaps', 'Rub the skin dry — pat gently', 'Use tight fitting Diapers', 'Apply hydrocortisone without doctor advice', 'Ignore rash if it lasts more than 4 days'], color: '#FFF0F3', border: '#FF6B8A', text: '#FF6B8A'},
              ].map((section) => (
                <div key={section.title} style={{backgroundColor: section.color, borderRadius: '16px', padding: '20px', border: `1.5px solid ${section.border}`}}>
                  <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: section.text, marginBottom: '14px'}}>
                    {section.icon} {section.title}
                  </div>
                  {section.items.map((item, i) => (
                    <div key={i} style={{fontSize: '13px', color: '#1A2A35', lineHeight: '1.7', marginBottom: i < 4 ? '8px' : '0', paddingLeft: '8px', borderLeft: `2px solid ${section.border}`}}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* When to see doctor */}
          <div style={{marginBottom: '48px'}}>
            <div style={{backgroundColor: '#FFF9EC', borderRadius: '20px', padding: '28px', border: '1.5px solid #FFD166'}}>
              <h2 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '14px'}}>
                ⚠️ When to see a doctor
              </h2>
              <p style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.7', marginBottom: '14px'}}>
                See a doctor or pharmacist if:
              </p>
              {[
                'The rash does not improve after 4 days of home treatment',
                'The rash spreads to the tummy, back or legs',
                'There are blisters, pus or yellow crusting on the skin',
                'Your baby has a fever alongside the rash',
                'The skin is broken or bleeding',
                'Your baby seems very uncomfortable or in pain',
              ].map((item, i) => (
                <div key={i} style={{display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: i < 5 ? '10px' : '0'}}>
                  <div style={{color: '#FFD166', fontSize: '16px', flexShrink: 0}}>•</div>
                  <div style={{fontSize: '14px', color: '#1A2A35', lineHeight: '1.7'}}>{item}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product CTA */}
          <div style={{backgroundColor: '#1A2A35', borderRadius: '24px', padding: '40px', textAlign: 'center'}}>
            <div style={{fontSize: '40px', marginBottom: '16px'}}>🌸</div>
            <h3 style={{fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '12px'}}>
              Prevent Diaper rash with Kiki Cares®
            </h3>
            <p style={{fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px'}}>
              Our hypoallergenic Diapers are free from harmful chemicals and feature a breathable design — helping keep your baby's skin dry and rash-free.
            </p>
            <Link href="/" style={{backgroundColor: '#00A699', color: 'white', padding: '14px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
              Shop Kiki Cares® Diapers
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}