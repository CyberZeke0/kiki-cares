import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Antibacterial Wipes — Kiki Cares®",
  description: "Powerful yet gentle antibacterial wipes. Kills 99.9% of germs while being safe for baby skin.",
};

export default function AntibacterialWipes() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div style={{background: 'linear-gradient(135deg, #EBF4FF 0%, #E0F5F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>

            <div style={{background: 'white', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,166,153,0.12)', minHeight: '400px'}}>
              <div style={{fontSize: '160px', textAlign: 'center'}}>🛡️</div>
            </div>

            <div>
              <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
                Kiki Cares® Wipes
              </div>
              <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px', lineHeight: '1.1'}}>
                Antibacterial Wipes
              </h1>
              <div style={{color: '#FFD166', fontSize: '18px', marginBottom: '8px'}}>
                ★★★★★ <span style={{fontSize: '14px', color: '#6B7F8C', fontWeight: '400'}}>1,876 reviews</span>
              </div>
              <div style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#00A699', marginBottom: '20px'}}>
                ₦2,200 <span style={{fontSize: '16px', color: '#6B7F8C', fontWeight: '400'}}>/ pack of 60 wipes</span>
              </div>

              <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.8', marginBottom: '24px'}}>
                Kiki Cares® Antibacterial Wipes kill 99.9% of germs while remaining gentle enough for baby skin. Perfect for cleaning hands, surfaces and on-the-go hygiene in Nigeria's busy environment.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
                {[
                  '🛡️ Kills 99.9% of bacteria and germs',
                  '✅ Safe for baby skin — dermatologist tested',
                  '🌿 Alcohol-free antibacterial formula',
                  '💧 Stays moist longer — resealable pack',
                  '🇳🇬 Perfect for Nigeria\'s environment',
                ].map((feature) => (
                  <div key={feature} style={{fontSize: '14px', color: '#1A2A35', fontWeight: '500'}}>
                    {feature}
                  </div>
                ))}
              </div>

              <div style={{marginBottom: '24px'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', marginBottom: '10px', fontFamily: 'sans-serif'}}>Pack size</div>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                  {['60 wipes — ₦2,200', '120 wipes — ₦3,800', '240 wipes — ₦6,500'].map((size, i) => (
                    <div key={size} style={{
                      padding: '10px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                      backgroundColor: i === 0 ? '#00A699' : '#F7F8FA',
                      color: i === 0 ? 'white' : '#1A2A35',
                      border: i === 0 ? '2px solid #00A699' : '2px solid #E5EBF0',
                    }}>
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{display: 'flex', gap: '12px'}}>
                <button style={{flex: 1, backgroundColor: '#00A699', color: 'white', border: 'none', padding: '16px', borderRadius: '100px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>
                  Add to Cart
                </button>
                <button style={{flex: 1, backgroundColor: 'transparent', color: '#00A699', border: '2px solid #00A699', padding: '16px', borderRadius: '100px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* When to use */}
        <div style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Use cases</div>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px'}}>When to use Antibacterial Wipes</h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {icon: '🏥', title: 'Before & After Hospital Visits', desc: 'Keep your baby protected when visiting hospitals, clinics or crowded places where germs spread easily.'},
              {icon: '🛒', title: 'Shopping & Markets', desc: 'Clean hands and surfaces before your baby touches anything in busy Nigerian markets and shopping centres.'},
              {icon: '✈️', title: 'Travel & On-the-Go', desc: 'Essential for long road trips, flights and any time you are far from soap and water.'},
              {icon: '🍽️', title: 'Before Feeding', desc: 'Quickly clean your hands and baby\'s highchair tray before meal times for extra hygiene protection.'},
              {icon: '🤧', title: 'During Illness Season', desc: 'Extra protection during cold and flu season or when there is illness going around in your community.'},
              {icon: '🏠', title: 'Surface Cleaning', desc: 'Safe to use on toys, changing mats, pram handles and other surfaces your baby regularly touches.'},
            ].map((item) => (
              <div key={item.title} style={{backgroundColor: '#EBF4FF', borderRadius: '20px', padding: '28px', border: '1.5px solid #C0D8F0'}}>
                <div style={{fontSize: '36px', marginBottom: '14px'}}>{item.icon}</div>
                <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{item.title}</div>
                <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety info */}
        <div style={{backgroundColor: '#F7F8FA', padding: '80px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
              <h2 style={{fontFamily: 'sans-serif', fontSize: '32px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px'}}>
                Powerful protection. Gentle on skin.
              </h2>
              <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.8', marginTop: '12px'}}>
                Our unique formula kills germs without the harsh chemicals that irritate baby skin.
              </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
              {[
                {icon: '✅', title: 'Contains', items: ['Natural antibacterial agents', 'Aloe vera for skin soothing', 'Vitamin E for skin nourishment', 'Purified water base'], color: '#E0F5F3', border: '#00A699'},
                {icon: '❌', title: 'Free From', items: ['Alcohol', 'Parabens', 'Harsh chemicals', 'Artificial fragrances'], color: '#FFF0F3', border: '#FF6B8A'},
              ].map((section) => (
                <div key={section.title} style={{backgroundColor: section.color, borderRadius: '20px', padding: '24px', border: `1.5px solid ${section.border}`}}>
                  <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '14px'}}>{section.icon} {section.title}</div>
                  {section.items.map((item) => (
                    <div key={item} style={{fontSize: '13px', color: '#1A2A35', marginBottom: '8px', paddingLeft: '8px', borderLeft: `2px solid ${section.border}`}}>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '900', color: '#1A2A35', marginBottom: '32px', letterSpacing: '-0.5px'}}>
            You might also like
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {emoji: '🧴', name: 'Pure Water Wipes', price: '₦24,800', bg: 'linear-gradient(135deg, #E0F5F3, #d0f0ee)', href: '/wipes/pure-water-wipes'},
              {emoji: '🌸', name: 'Sensitive Skin Wipes', price: '₦15,000', bg: 'linear-gradient(135deg, #FFF0F3, #ffd6df)', href: '/wipes/sensitive'},
              {emoji: '🌱', name: 'Biodegradable Wipes', price: '₦16,000', bg: 'linear-gradient(135deg, #E0F5F3, #EBF4FF)', href: '/wipes/biodegradable'},
            ].map((product) => (
              <Link key={product.name} href={product.href} style={{textDecoration: 'none'}}>
                <div style={{backgroundColor: 'white', border: '1.5px solid #E5EBF0', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer'}}>
                  <div style={{height: '160px', background: product.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px'}}>
                    {product.emoji}
                  </div>
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