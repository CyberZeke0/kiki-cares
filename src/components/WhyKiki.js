const features = [
  { icon: '🌿', title: 'Hypoallergenic Formula', desc: 'Free from parabens, fragrances and harmful dyes. Every ingredient is chosen with your baby\'s safety as the top priority.', bg: '#E0F5F3' },
  { icon: '💧', title: '12-Hour Leak Lock', desc: 'Our triple-layer absorbent core locks in wetness and keeps your baby\'s skin dry for up to 12 hours day and night.', bg: '#FFF0F3' },
  { icon: '🤍', title: 'Dermatologist Approved', desc: 'Clinically tested and certified safe for even the most sensitive newborn skin. Recommended by Nigerian paediatricians.', bg: '#FFF9EC' },
  { icon: '🎯', title: 'Perfect Fit Technology', desc: 'Stretchy waistband and leg cuffs with our Snug & Dry design prevents leaks without leaving red marks on delicate skin.', bg: '#EBF4FF' },
  { icon: '🌍', title: 'Made for African Babies', desc: 'Breathable materials specifically designed for Nigeria\'s warm climate. Keeps babies cool, dry and comfortable all day.', bg: '#F0EEFF' },
  { icon: '🚚', title: 'Fast Nigeria Delivery', desc: 'Same-day delivery in Lagos. 1–3 days across Nigeria. Free shipping on orders over ₦10,000. Track your order in real time.', bg: '#E0F5F3' },
];

export default function WhyKiki() {
  return (
    <section style={{background: '#F7F8FA', padding: '80px 40px'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto'}}>

        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '52px'}}>
          <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
            Why Kiki Cares®
          </div>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px', margin: 0}}>
            Our promise to every baby
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}>
          {features.map((feature) => (
            <div key={feature.title} style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '28px',
              border: '1.5px solid #E5EBF0',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                backgroundColor: feature.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginBottom: '16px',
              }}>
                {feature.icon}
              </div>
              <div style={{fontFamily: 'sans-serif', fontSize: '17px', fontWeight: '800', color: '#1A2A35', marginBottom: '10px'}}>
                {feature.title}
              </div>
              <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7'}}>
                {feature.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}