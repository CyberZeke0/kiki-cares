import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Sensitive Skin Wipes — Kiki Cares®",
  description: "Extra gentle wipes specially formulated for babies with sensitive or eczema-prone skin.",
};

export default function SensitiveWipes() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div style={{background: 'linear-gradient(135deg, #FFF0F3 0%, #F0EEFF 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center'}}>

            {/* Left - Product image */}
            <div style={{background: 'white', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(255,107,138,0.12)', minHeight: '400px'}}>
              <div style={{fontSize: '160px', textAlign: 'center'}}>🌸</div>
            </div>

            {/* Right - Product info */}
            <div>
              <div style={{fontSize: '11px', fontWeight: '700', color: '#FF6B8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
                Kiki Cares® Wipes
              </div>
              <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px', lineHeight: '1.1'}}>
                Sensitive Skin Wipes
              </h1>
              <div style={{color: '#FFD166', fontSize: '18px', marginBottom: '8px'}}>
                ★★★★★ <span style={{fontSize: '14px', color: '#6B7F8C', fontWeight: '400'}}>2,541 reviews</span>
              </div>
              <div style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#FF6B8A', marginBottom: '20px'}}>
                ₦1,800 <span style={{fontSize: '16px', color: '#6B7F8C', fontWeight: '400'}}>/ pack of 64 wipes</span>
              </div>

              <p style={{fontSize: '15px', color: '#6B7F8C', lineHeight: '1.8', marginBottom: '24px'}}>
                Specially formulated for babies with sensitive, eczema-prone or allergy-prone skin. Kiki Cares® Sensitive Skin Wipes are extra gentle, ultra-soft and clinically proven to be safe for the most delicate skin.
              </p>

              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
                {[
                  '✅ Clinically proven for sensitive & eczema-prone skin',
                  '🌿 Free from alcohol, parabens, fragrance & dyes',
                  '🤍 Extra soft — no harsh fibres',
                  '💧 Lightly moisturising — leaves skin soft',
                  '👩‍⚕️ Recommended by Nigerian paediatricians',
                ].map((feature) => (
                  <div key={feature} style={{fontSize: '14px', color: '#1A2A35', fontWeight: '500'}}>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Size selector */}
              <div style={{marginBottom: '24px'}}>
                <div style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', marginBottom: '10px', fontFamily: 'sans-serif'}}>Pack size</div>
                <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                  {['64 wipes — ₦1,800', '128 wipes — ₦3,200', '256 wipes — ₦5,800'].map((size, i) => (
                    <div key={size} style={{
                      padding: '10px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                      backgroundColor: i === 0 ? '#FF6B8A' : '#F7F8FA',
                      color: i === 0 ? 'white' : '#1A2A35',
                      border: i === 0 ? '2px solid #FF6B8A' : '2px solid #E5EBF0',
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

        {/* Who is it for */}
        <div style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
          <div style={{textAlign: 'center', marginBottom: '48px'}}>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#FF6B8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Perfect for</div>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px'}}>
              Who are Sensitive Skin Wipes for?
            </h2>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {icon: '👶', title: 'Newborns', desc: 'The most gentle wipe for newborn skin in their first weeks of life when skin is at its most delicate.'},
              {icon: '🌡️', title: 'Eczema-Prone Skin', desc: 'Specially tested and approved for babies who suffer from eczema or other skin conditions.'},
              {icon: '🌿', title: 'Allergy-Prone Babies', desc: 'Free from all common allergens — safe for babies who react to standard wipes or skincare products.'},
              {icon: '☀️', title: 'Hot Weather', desc: 'Extra soothing for skin irritated by Nigeria\'s warm climate and heat rashes.'},
              {icon: '💊', title: 'After Antibiotics', desc: 'Gentle enough to use when baby\'s skin is extra sensitive after a course of antibiotics.'},
              {icon: '🏥', title: 'Hospital-Safe', desc: 'Safe to use on premature babies and recommended for use in NICU and maternity wards.'},
            ].map((item) => (
              <div key={item.title} style={{backgroundColor: '#FFF0F3', borderRadius: '20px', padding: '28px', border: '1.5px solid #FFD6DF'}}>
                <div style={{fontSize: '36px', marginBottom: '14px'}}>{item.icon}</div>
                <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>{item.title}</div>
                <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Compare with Pure Water */}
        <div style={{backgroundColor: '#F7F8FA', padding: '80px 40px'}}>
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
              <h2 style={{fontFamily: 'sans-serif', fontSize: '32px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px'}}>
                Which wipe is right for my baby?
              </h2>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
              {[
                {
                  name: 'Pure Water Wipes', emoji: '🧴', color: '#E0F5F3', border: '#00A699', text: '#00A699',
                  points: ['99% pure water', 'Best for newborns 0-6 months', 'No added ingredients', 'Perfect for daily use'],
                  href: '/wipes/pure-water-wipes',
                },
                {
                  name: 'Sensitive Skin Wipes', emoji: '🌸', color: '#FFF0F3', border: '#FF6B8A', text: '#FF6B8A',
                  points: ['Lightly moisturising', 'Best for eczema-prone skin', 'Extra soft fibres', 'Clinically proven gentle'],
                  href: '/wipes/sensitive',
                },
              ].map((wipe) => (
                <div key={wipe.name} style={{backgroundColor: wipe.color, borderRadius: '20px', padding: '28px', border: `2px solid ${wipe.border}`}}>
                  <div style={{fontSize: '40px', marginBottom: '12px'}}>{wipe.emoji}</div>
                  <div style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '800', color: wipe.text, marginBottom: '16px'}}>{wipe.name}</div>
                  {wipe.points.map((point) => (
                    <div key={point} style={{fontSize: '13px', color: '#1A2A35', marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                      <span style={{color: wipe.text, fontWeight: '700'}}>✓</span> {point}
                    </div>
                  ))}
                  <Link href={wipe.href} style={{display: 'inline-block', marginTop: '16px', backgroundColor: wipe.border, color: 'white', padding: '10px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
                    Shop now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '900', color: '#1A2A35', marginBottom: '32px', letterSpacing: '-0.5px'}}>
            What parents say
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
            {[
              {name: 'Adaeze O.', location: 'Lagos', text: 'My daughter has eczema and these are the only wipes that don\'t make her skin flare up. Absolutely love them!', stars: 5},
              {name: 'Fatima K.', location: 'Abuja', text: 'Softer than any other brand I\'ve tried. My newborn\'s skin has never looked better since I switched to these.', stars: 5},
              {name: 'Ngozi E.', location: 'Port Harcourt', text: 'The paediatrician recommended Kiki Cares® sensitive wipes for my baby\'s skin condition. Best decision ever!', stars: 5},
            ].map((review) => (
              <div key={review.name} style={{backgroundColor: 'white', borderRadius: '20px', padding: '24px', border: '1.5px solid #E5EBF0'}}>
                <div style={{color: '#FFD166', fontSize: '16px', marginBottom: '12px', letterSpacing: '2px'}}>{'★'.repeat(review.stars)}</div>
                <p style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '16px'}}>"{review.text}"</p>
                <div style={{fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '800', color: '#1A2A35'}}>{review.name}</div>
                <div style={{fontSize: '12px', color: '#6B7F8C'}}>{review.location} · ✓ Verified purchase</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{backgroundColor: '#1A2A35', margin: '0 40px 80px', borderRadius: '24px', padding: '48px', textAlign: 'center'}}>
          <div style={{fontSize: '40px', marginBottom: '16px'}}>🌸</div>
          <h3 style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '900', color: 'white', marginBottom: '12px'}}>
            Gentle care for every baby
          </h3>
          <p style={{fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px'}}>
            Try Kiki Cares® Sensitive Skin Wipes and feel the difference from the very first wipe.
          </p>
          <Link href="/" style={{backgroundColor: '#00A699', color: 'white', padding: '14px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
            Shop All Wipes
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}