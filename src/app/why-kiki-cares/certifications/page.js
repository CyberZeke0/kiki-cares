import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: "Our Certifications — Kiki Cares®" };

export default function Certifications() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #FFF9EC 0%, #FFF0F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🏆</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Our Story</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>Our Certifications</h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>Our certifications prove that Kiki Cares® products meet the highest standards of safety, quality and performance.</p>
          </div>
        </div>
        <div style={{padding: '60px 40px', maxWidth: '800px', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px'}}>
            {[
              {icon: '🤍', title: 'Dermatologist Tested', desc: 'All products clinically tested and approved by qualified dermatologists for safety on baby skin.', color: '#FFF0F3', border: '#FF6B8A'},
            {icon: null, image: '/hypoallergenic.png', title: 'Hypoallergenic Certified', desc: 'Formulated and tested to minimise risk of allergic reactions on even the most sensitive skin.', color: '#E0F5F3', border: '#00A699'},
              {icon: null, image: '/ecocert,png.jpg', title: 'Eco Certified Wipes', desc: 'Our biodegradable wipes range is certified to break down naturally within 4-6 weeks.', color: '#EBF4FF', border: '#4A90D9'},
             {icon: null, image: '/nafdac.png', title: 'NAFDAC Registered', desc: 'All Kiki Cares® products are registered with Nigeria\'s National Agency for Food and Drug Administration and Control.', color: '#FFF9EC', border: '#FFD166'},
              {icon: '👶', title: 'Paediatrician Recommended', desc: 'Recommended by Nigerian paediatricians for babies with sensitive skin and skin conditions.', color: '#F0EEFF', border: '#9B8EE8'},
             {icon: null, image: '/iso.png', title: 'ISO Quality Standard', desc: 'Manufactured to international ISO quality standards — guaranteeing consistent quality in every pack.', color: '#E0F5F3', border: '#00A699'},
            ].map((cert) => (
              <div key={cert.title} style={{backgroundColor: cert.color, borderRadius: '20px', padding: '24px', border: `1.5px solid ${cert.border}`}}>
                {cert.image ? (
  <img src={cert.image} alt={cert.title} style={{width: '60px', height: '60px', objectFit: 'contain', marginBottom: '12px'}} />
) : (
  <div style={{fontSize: '36px', marginBottom: '12px'}}>{cert.icon}</div>
)}
                <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{cert.title}</div>
                <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7'}}>{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}