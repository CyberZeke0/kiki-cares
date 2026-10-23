import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "12-Hour Protection — Kiki Cares®" };

export default function TwelveHourProtection() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #EBF4FF 0%, #E0F5F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>💧</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Our Promise</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>12-Hour Protection</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>Our triple-layer absorbent core keeps your baby dry for up to 12 hours — day and night — so the whole family can rest easy.</p>
          </div>
        </div>
        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px'}}>
            {[
              {layer: 'Layer 1', icon: '🌊', title: 'Rapid Absorption Layer', desc: 'The top layer pulls wetness away from baby\'s skin instantly — keeping the surface dry from the very first second.'},
              {layer: 'Layer 2', icon: '💪', title: 'Super Absorbent Core', desc: 'Our polymer-filled core locks in up to 500ml of liquid and converts it to gel — preventing leaks and keeping wetness locked away.'},
              {layer: 'Layer 3', icon: '🛡️', title: 'Leak Guard Barrier', desc: 'The outer layer and elasticated leg cuffs create a secure barrier that prevents even runny messes from leaking out.'},
            ].map((item, i) => (
              <div key={i} style={{backgroundColor: '#EBF4FF', borderRadius: '16px', padding: '24px', border: '1.5px solid #A0C0E8'}}>
                <div style={{fontSize: '12px', fontWeight: '700', color: '#4A90D9', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px'}}>{item.layer}</div>
                <div style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                  <div style={{fontSize: '36px', flexShrink: 0}}>{item.icon}</div>
                  <div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '800', color: '#1A2A35', marginBottom: '6px'}}>{item.title}</div>
                    <div style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.8'}}>{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
            {[
              {icon: '☀️', label: 'Day protection', value: '12 hours'},
              {icon: '🌙', label: 'Night protection', value: 'All night'},
              {icon: '💧', label: 'Wetness locked', value: 'Up to 500ml'},
            ].map((stat) => (
              <div key={stat.label} style={{backgroundColor: '#F7F8FA', borderRadius: '16px', padding: '20px', textAlign: 'center', border: '1.5px solid #E5EBF0'}}>
                <div style={{fontSize: '32px', marginBottom: '8px'}}>{stat.icon}</div>
                <div style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '900', color: '#00A699', marginBottom: '4px'}}>{stat.value}</div>
                <div style={{fontSize: '12px', color: '#6B7F8C'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}