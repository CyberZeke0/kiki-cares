import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Meet the Founder — Kiki Cares®" };

export default function MeetTheFounder() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{backgroundColor: '#1A2A35', padding: '80px 40px'}}>
          <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
            <div style={{borderRadius: '28px', overflow: 'hidden', aspectRatio: '4/5'}}>
              <img src="/martha.jpg" alt="Martha Ochei Agoro" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />
            </div>
            <div>
              <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '14px'}}>Our Story</div>
              <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: 'white', marginBottom: '20px', letterSpacing: '-1px', lineHeight: '1.15'}}>
                Martha Ochei Agoro
              </h1>
              <p style={{fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', marginBottom: '20px', fontStyle: 'italic', borderLeft: '3px solid #00A699', paddingLeft: '18px'}}>
                "I started Kiki Cares® because I couldn't find a diaper brand that truly understood Nigerian babies. Every baby deserves the very best care — and that's what Kiki Cares® delivers."
              </p>
              <p style={{fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.9', marginBottom: '16px'}}>
                As a mother, I understand that choosing the right diaper is about more than keeping a baby dry. It's about comfort, confidence, and giving parents peace of mind.
              </p>
              <p style={{fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.9', marginBottom: '32px'}}>
                That is why I created Kiki Cares® — to bring families thoughtfully designed baby-care products that combine quality, comfort and affordability.
              </p>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px'}}>
                {[
                  {label: 'Founded', value: '2026, Baltimore MD 🇺🇸'},
                  {label: 'Primary Market', value: 'Nigeria & West Africa'},
                  {label: 'Certified', value: 'Dermatologist Tested ✅'},
                  {label: 'Powered by', value: '14th Tech ⚡'},
                ].map((fact) => (
                  <div key={fact.label} style={{backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px'}}>
                    <div style={{fontSize: '10px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'sans-serif', marginBottom: '6px'}}>{fact.label}</div>
                    <div style={{fontSize: '14px', fontWeight: '700', color: 'white', fontFamily: 'sans-serif'}}>{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}