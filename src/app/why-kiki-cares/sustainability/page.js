import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Sustainability — Kiki Cares®" };

export default function Sustainability() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #E0F5F3 0%, #F0EEFF 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>♻️</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Our Story</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Sustainability</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>We believe every baby deserves a clean world to grow up in. Kiki Cares® is committed to reducing our environmental footprint across everything we do.</p>
          </div>
        </div>
        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px'}}>
            {[
              {icon: '🌱', num: '30%', label: 'Plant-based materials in our diapers'},
              {icon: '♻️', num: '100%', label: 'Recyclable packaging by 2027'},
              {icon: '🌍', num: '0', label: 'Microplastics in our wipes range'},
            ].map((stat) => (
              <div key={stat.label} style={{backgroundColor: '#E0F5F3', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1.5px solid #A0D8D4'}}>
                <div style={{fontSize: '32px', marginBottom: '8px'}}>{stat.icon}</div>
                <div style={{fontFamily: 'sans-serif', fontSize: '32px', fontWeight: '900', color: '#00A699', marginBottom: '8px'}}>{stat.num}</div>
                <div style={{fontSize: '12px', color: '#6B7F8C', lineHeight: '1.5'}}>{stat.label}</div>
              </div>
            ))}
          </div>
          {[
            {icon: '📦', title: 'Sustainable packaging', desc: 'We are phasing out all single-use plastic packaging. By 2027, all Kiki Cares® packaging will be made from recycled or recyclable materials.'},
            {icon: '🌱', title: 'Plant-based materials', desc: 'We are increasing the plant-based content in our diapers year on year. Our biodegradable wipes range is already 100% plant-based.'},
            {icon: '🏭', title: 'Responsible manufacturing', desc: 'We work only with manufacturers who meet our environmental standards — minimising water usage, reducing emissions and treating waste responsibly.'},
            {icon: '🇳🇬', title: 'Nigeria-focused impact', desc: 'We are committed to reducing plastic waste in Nigeria\'s rivers and communities. A percentage of every sale goes towards environmental clean-up initiatives across Nigeria.'},
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