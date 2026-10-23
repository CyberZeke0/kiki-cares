import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Pure Water Wipes — Kiki Cares®",
  description: "99% pure water wipes. Gentle enough for newborn skin from day one.",
};

export default function PureWaterWipes() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div style={{background: 'linear-gradient(135deg, #E0F5F3 0%, #EBF4FF 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>
            
            {/* Left - Product image */}
            <div style={{background: 'white', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,166,153,0.12)', minHeight: '400px'}}>
              <div style={{fontSize: '160px', textAlign: 'center'}}>🧴</div>
            </div>

            {/* Right - Product info */}
            <div>
              <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
                Kiki Cares® Wipes
              </div>
              <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px', lineHeight: '1.1'}}>
                Pure Water Wipes
              </h1>
              <div style={{color: '#FFD166', fontSize: '18px', marginBottom: '8px'}}>
                ★★★★★ <span style={{fontSize: '14px', color: '#6B7F8C', fontWeight: '400'}}>3,102 reviews</span>
              </div>
              <div style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#00A699', marginBottom: '20px'}}>
                ₦1,800 <span style={{fontSize: '16px', color: '#6B7F8C', fontWeight: '400'}}>/ pack of 64 wipes</span>
              </div>

              <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.8', marginBottom: '24px'}}>
                Made with 99% pure water, Kiki Cares® Pure Water Wipes are the gentlest wipes for your baby's delicate skin. Safe from day one, dermatologist tested and free from all harmful chemicals.
              </p>

              {/* Key features */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
                {[
                  '✅ 99% pure water — nothing harsh',
                  '🌿 Free from alcohol, parabens and fragrance',
                  '🤍 Dermatologist tested for newborn skin',
                  '💧 Extra thick and soft for gentle cleaning',
                  '🌍 Biodegradable — kind to the environment',
                ].map((feature) => (
                  <div key={feature} style={{fontSize: '14px', color: '#1A2A35', fontWeight: '500'}}>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Size selector */}
              <div style={{marginBottom: '24px'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', marginBottom: '10px', fontFamily: 'sans-serif'}}>
                  Pack size
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                  {['64 wipes — ₦1,800', '128 wipes — ₦3,200', '256 wipes — ₦5,800'].map((size, i) => (
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

              {/* Buttons */}
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

        {/* Why Pure Water */}
        <div style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Why choose</div>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px'}}>Pure Water Wipes</h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {icon: '💧', title: '99% Pure Water', desc: 'The closest thing to cotton wool and water. Perfect for cleaning your newborn\'s delicate skin without any irritation.'},
              {icon: '🌿', title: 'Nothing Harmful', desc: 'No alcohol, no parabens, no fragrance, no chlorine. Just pure, gentle cleansing for your baby\'s most sensitive skin.'},
              {icon: '🤍', title: 'Safe from Day 1', desc: 'Specially formulated and dermatologist tested to be safe for premature babies and newborns from their very first day.'},
              {icon: '💪', title: 'Extra Thick', desc: 'Our wipes are extra thick and strong so they don\'t tear during use, giving you full coverage with just one wipe.'},
              {icon: '🌍', title: 'Biodegradable', desc: 'Our wipes are made from plant-based fibres that break down naturally, making them kinder to the environment.'},
              {icon: '🇳🇬', title: 'Made for Nigeria', desc: 'Designed to handle Nigeria\'s warm climate — keeping your baby fresh and clean even in the heat.'},
            ].map((item) => (
              <div key={item.title} style={{backgroundColor: '#F7F8FA', borderRadius: '20px', padding: '28px', border: '1.5px solid #E5EBF0'}}>
                <div style={{fontSize: '36px', marginBottom: '14px'}}>{item.icon}</div>
                <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{item.title}</div>
                <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How to use */}
        <div style={{backgroundColor: '#F7F8FA', padding: '80px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '48px'}}>
              <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px'}}>How to use</h2>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              {[
                {step: '1', title: 'Open the pack', desc: 'Peel back the resealable lid and pull out one wipe. Close the lid firmly after each use to keep wipes moist.'},
                {step: '2', title: 'Clean gently', desc: 'Wipe from front to back for girls. Use gentle circular motions for the bottom and thighs. Never scrub.'},
                {step: '3', title: 'Pat dry', desc: 'After cleaning, pat the skin dry with a soft cloth before putting on a fresh diaper or barrier cream.'},
                {step: '4', title: 'Dispose properly', desc: 'Do not flush wipes down the toilet. Dispose in a bin. Our wipes are biodegradable and will break down naturally.'},
              ].map((item) => (
                <div key={item.step} style={{display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1.5px solid #E5EBF0'}}>
                  <div style={{width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#00A699', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '900', flexShrink: 0}}>
                    {item.step}
                  </div>
                  <div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '6px'}}>{item.title}</div>
                    <div style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.7'}}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '900', color: '#1A2A35', marginBottom: '32px', letterSpacing: '-0.5px'}}>
            You might also like
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {emoji: '🌸', name: 'Kiki Cares® Newborn Diapers', price: '₦3,500', bg: 'linear-gradient(135deg, #E0F5F3, #d0f0ee)'},
              {emoji: '🧴', name: 'Kiki Cares® Sensitive Wipes', price: '₦1,800', bg: 'linear-gradient(135deg, #FFF0F3, #ffd6df)'},
              {emoji: '📦', name: 'Kiki Cares® Bundle Pack', price: '₦18,000', bg: 'linear-gradient(135deg, #FFF0F3, #F0EEFF)'},
            ].map((product) => (
              <div key={product.name} style={{backgroundColor: 'white', border: '1.5px solid #E5EBF0', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer'}}>
                <div style={{height: '160px', background: product.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px'}}>
                  {product.emoji}
                </div>
                <div style={{padding: '16px'}}>
                  <div style={{fontFamily: 'sans-serif', fontSize: '15px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{product.name}</div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{fontFamily: 'sans-serif', fontSize: '17px', fontWeight: '900', color: '#00A699'}}>{product.price}</div>
                    <button style={{backgroundColor: '#00A699', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}