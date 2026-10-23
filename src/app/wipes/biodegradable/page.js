import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Biodegradable Wipes — Kiki Cares®",
  description: "Eco-friendly biodegradable wipes. Gentle on baby skin and kind to the environment.",
};

export default function BiodegradableWipes() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div style={{background: 'linear-gradient(135deg, #E0F5F3 0%, #F0EEFF 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>

            <div style={{background: 'white', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,166,153,0.12)', minHeight: '400px'}}>
              <div style={{fontSize: '160px', textAlign: 'center'}}>🌱</div>
            </div>

            <div>
              <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
                Kiki Cares® Wipes
              </div>
              <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px', lineHeight: '1.1'}}>
                Biodegradable Wipes
              </h1>
              <div style={{color: '#FFD166', fontSize: '18px', marginBottom: '8px'}}>
                ★★★★★ <span style={{fontSize: '14px', color: '#6B7F8C', fontWeight: '400'}}>1,432 reviews</span>
              </div>
              <div style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#00A699', marginBottom: '20px'}}>
                ₦2,000 <span style={{fontSize: '16px', color: '#6B7F8C', fontWeight: '400'}}>/ pack of 60 wipes</span>
              </div>

              <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.8', marginBottom: '24px'}}>
                Kiki Cares® Biodegradable Wipes are made from 100% plant-based fibres that break down naturally. Gentle on your baby's skin and kind to Nigeria's environment — because every baby deserves a clean world to grow up in.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
                {[
                  '🌱 100% plant-based biodegradable fibres',
                  '✅ Breaks down naturally in 4-6 weeks',
                  '🌿 Free from plastic — no microplastics',
                  '🤍 Gentle on baby skin — dermatologist tested',
                  '🌍 Helps protect Nigeria\'s environment',
                ].map((feature) => (
                  <div key={feature} style={{fontSize: '14px', color: '#1A2A35', fontWeight: '500'}}>
                    {feature}
                  </div>
                ))}
              </div>

              <div style={{marginBottom: '24px'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', marginBottom: '10px', fontFamily: 'sans-serif'}}>Pack size</div>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                  {['60 wipes — ₦2,000', '120 wipes — ₦3,600', '240 wipes — ₦6,200'].map((size, i) => (
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

        {/* Why biodegradable */}
        <div style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Our mission</div>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px'}}>
              Why choose biodegradable?
            </h2>
            <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.8', marginTop: '12px', maxWidth: '600px', margin: '12px auto 0'}}>
              Standard wipes can take up to 100 years to break down. Our biodegradable wipes break down in just 4-6 weeks, leaving no harmful waste behind.
            </p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {icon: '🌍', title: 'Better for Nigeria', desc: 'Helps reduce plastic waste in Nigeria\'s rivers, oceans and landfills. A small change that makes a big difference.'},
              {icon: '⏱️', title: 'Breaks Down in 4-6 Weeks', desc: 'Our plant-based fibres decompose naturally in weeks, compared to 100 years for standard plastic-based wipes.'},
              {icon: '🌿', title: 'No Microplastics', desc: 'Standard wipes shed microplastics into our water supply. Ours leave nothing harmful behind.'},
              {icon: '👶', title: 'Still Gentle on Baby', desc: 'Being eco-friendly doesn\'t mean compromising on softness. Our wipes are just as gentle as our standard range.'},
              {icon: '♻️', title: 'Sustainable Packaging', desc: 'Our packaging is made from recycled materials and is fully recyclable — reducing waste at every step.'},
              {icon: '🏆', title: 'Eco Certified', desc: 'Certified by leading environmental bodies for biodegradability and sustainability standards.'},
            ].map((item) => (
              <div key={item.title} style={{backgroundColor: '#E0F5F3', borderRadius: '20px', padding: '28px', border: '1.5px solid #A0D8D4'}}>
                <div style={{fontSize: '36px', marginBottom: '14px'}}>{item.icon}</div>
                <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{item.title}</div>
                <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact section */}
        <div style={{backgroundColor: '#1A2A35', padding: '80px 40px'}}>
          <div style={{maxWidth: '1000px', margin: '0 auto', textAlign: 'center'}}>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: 'white', marginBottom: '12px', letterSpacing: '-0.5px'}}>
              Our environmental impact
            </h2>
            <p style={{fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '48px', lineHeight: '1.8'}}>
              Every pack of Kiki Cares® Biodegradable Wipes you buy makes a difference.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
              {[
                {icon: '🌱', num: '100%', label: 'Plant-based fibres'},
                {icon: '⏱️', num: '4-6', label: 'Weeks to biodegrade'},
                {icon: '🌍', num: '0', label: 'Microplastics released'},
              ].map((stat) => (
                <div key={stat.label} style={{backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.1)'}}>
                  <div style={{fontSize: '36px', marginBottom: '12px'}}>{stat.icon}</div>
                  <div style={{fontFamily: 'sans-serif', fontSize: '40px', fontWeight: '900', color: '#00A699', marginBottom: '8px'}}>{stat.num}</div>
                  <div style={{fontSize: '14px', color: 'rgba(255,255,255,0.6)'}}>{stat.label}</div>
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
              {emoji: '🧴', name: 'Pure Water Wipes', price: '₦1,800', bg: 'linear-gradient(135deg, #E0F5F3, #d0f0ee)', href: '/wipes/pure-water-wipes'},
              {emoji: '🌸', name: 'Sensitive Skin Wipes', price: '₦1,800', bg: 'linear-gradient(135deg, #FFF0F3, #ffd6df)', href: '/wipes/sensitive'},
              {emoji: '🛡️', name: 'Antibacterial Wipes', price: '₦2,200', bg: 'linear-gradient(135deg, #EBF4FF, #d0e7ff)', href: '/wipes/antibacterial'},
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