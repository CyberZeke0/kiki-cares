import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = { title: "Newborn Wipes — Kiki Cares®" };

export default function NewbornWipes() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #E0F5F3 0%, #FFF0F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
            <div style={{background: 'white', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,166,153,0.12)', minHeight: '360px'}}>
              <div style={{fontSize: '140px', textAlign: 'center'}}>🍼</div>
            </div>
            <div>
              <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Kiki Cares® Wipes</div>
              <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px', lineHeight: '1.1'}}>Newborn Wipes</h1>
              <div style={{color: '#FFD166', fontSize: '18px', marginBottom: '8px'}}>★★★★★ <span style={{fontSize: '14px', color: '#6B7F8C'}}>2,103 reviews</span></div>
              <div style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#00A699', marginBottom: '20px'}}>₦1,800 <span style={{fontSize: '16px', color: '#6B7F8C', fontWeight: '400'}}>/ pack of 64 wipes</span></div>
              <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.8', marginBottom: '24px'}}>Specially designed for the first 0-3 months of life. Our Newborn Wipes are ultra-soft, hypoallergenic and safe for the most delicate newborn skin from day one.</p>
              {['🌸 Extra gentle for 0-3 months', '✅ Hypoallergenic & dermatologist tested', '💧 99% pure water formula', '🤍 No fragrance, alcohol or parabens', '🌍 Safe even for premature babies'].map(f => (
                <div key={f} style={{fontSize: '14px', color: '#1A2A35', fontWeight: '500', marginBottom: '8px'}}>{f}</div>
              ))}
              <div style={{display: 'flex', gap: '12px', marginTop: '24px'}}>
                <button style={{flex: 1, backgroundColor: '#00A699', color: 'white', border: 'none', padding: '16px', borderRadius: '100px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>Add to Cart</button>
                <button style={{flex: 1, backgroundColor: 'transparent', color: '#00A699', border: '2px solid #00A699', padding: '16px', borderRadius: '100px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '32px', fontWeight: '900', color: '#1A2A35', marginBottom: '32px', textAlign: 'center'}}>Why newborns need special wipes</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {icon: '🧬', title: 'Thinner skin', desc: 'Newborn skin is 5x thinner than adult skin and absorbs everything it touches. Only the purest ingredients are safe.'},
              {icon: '🔬', title: 'Developing immune system', desc: 'Newborns are still building their immunity. Harsh chemicals can cause reactions that a stronger baby might resist.'},
              {icon: '💧', title: 'Higher water content', desc: 'Baby skin loses moisture faster. Our wipes are lightly moisturising to help maintain your newborn\'s skin barrier.'},
            ].map(item => (
              <div key={item.title} style={{backgroundColor: '#E0F5F3', borderRadius: '20px', padding: '28px', border: '1.5px solid #A0D8D4'}}>
                <div style={{fontSize: '36px', marginBottom: '14px'}}>{item.icon}</div>
                <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{item.title}</div>
                <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{padding: '0 40px 80px', maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '900', color: '#1A2A35', marginBottom: '32px'}}>You might also like</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {emoji: '🧴', name: 'Pure Water Wipes', price: '₦1,800', bg: 'linear-gradient(135deg, #E0F5F3, #d0f0ee)', href: '/wipes/pure-water-wipes'},
              {emoji: '🌸', name: 'Sensitive Skin Wipes', price: '₦1,800', bg: 'linear-gradient(135deg, #FFF0F3, #ffd6df)', href: '/wipes/sensitive'},
              {emoji: '🌱', name: 'Biodegradable Wipes', price: '₦2,000', bg: 'linear-gradient(135deg, #E0F5F3, #EBF4FF)', href: '/wipes/biodegradable'},
            ].map(product => (
              <Link key={product.name} href={product.href} style={{textDecoration: 'none'}}>
                <div style={{backgroundColor: 'white', border: '1.5px solid #E5EBF0', borderRadius: '20px', overflow: 'hidden'}}>
                  <div style={{height: '160px', background: product.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px'}}>{product.emoji}</div>
                  <div style={{padding: '16px'}}>
                    <div style={{fontFamily: 'sans-serif', fontSize: '15px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{product.name}</div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '17px', fontWeight: '900', color: '#00A699'}}>{product.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}