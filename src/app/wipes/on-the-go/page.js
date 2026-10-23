import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = { title: "On-the-Go Wipes — Kiki Cares®" };

export default function OnTheGoWipes() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{background: 'linear-gradient(135deg, #F0EEFF 0%, #E0F5F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
            <div style={{background: 'white', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,166,153,0.12)', minHeight: '360px'}}>
              <div style={{fontSize: '140px', textAlign: 'center'}}>👜</div>
            </div>
            <div>
              <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Kiki Cares® Wipes</div>
              <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px', lineHeight: '1.1'}}>On-the-Go Wipes</h1>
              <div style={{color: '#FFD166', fontSize: '18px', marginBottom: '8px'}}>★★★★★ <span style={{fontSize: '14px', color: '#6B7F8C'}}>987 reviews</span></div>
              <div style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#00A699', marginBottom: '20px'}}>₦1,500 <span style={{fontSize: '16px', color: '#6B7F8C', fontWeight: '400'}}>/ pack of 20 wipes</span></div>
              <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.8', marginBottom: '24px'}}>Compact, travel-sized wipes designed for busy Nigerian parents on the move. Fits perfectly in your nappy bag, handbag or glove compartment — ready whenever you need them.</p>
              {['👜 Compact travel-size pack', '✅ Fits in any bag or pocket', '💧 Stays moist with resealable lid', '🚗 Perfect for car trips & outings', '🛒 Ideal for markets & shopping'].map(f => (
                <div key={f} style={{fontSize: '14px', color: '#1A2A35', fontWeight: '500', marginBottom: '8px'}}>{f}</div>
              ))}
              <div style={{display: 'flex', gap: '12px', marginTop: '24px'}}>
                <button style={{flex: 1, backgroundColor: '#00A699', color: 'white', border: 'none', padding: '16px', borderRadius: '100px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>Add to Cart</button>
                <button style={{flex: 1, backgroundColor: 'transparent', color: '#00A699', border: '2px solid #00A699', padding: '16px', borderRadius: '100px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{padding: '0 40px 80px', maxWidth: '1280px', margin: '80px auto 0'}}>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '900', color: '#1A2A35', marginBottom: '32px'}}>You might also like</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {emoji: '🧴', name: 'Pure Water Wipes', price: '₦1,800', bg: 'linear-gradient(135deg, #E0F5F3, #d0f0ee)', href: '/wipes/pure-water-wipes'},
              {emoji: '🛡️', name: 'Antibacterial Wipes', price: '₦2,200', bg: 'linear-gradient(135deg, #EBF4FF, #d0e7ff)', href: '/wipes/antibacterial'},
              {emoji: '🌈', name: 'Toddler Wipes', price: '₦1,800', bg: 'linear-gradient(135deg, #FFF9EC, #EBF4FF)', href: '/wipes/toddler'},
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