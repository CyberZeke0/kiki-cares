"use client";

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #E0F5F3 0%, #FFF0F3 50%, #FFF9EC 100%)',
      padding: '80px 40px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}>

        {/* Left side - Text */}
        <div>
          {/* Eyebrow tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'white',
            border: '1.5px solid #00A699',
            color: '#00A699',
            fontSize: '12px',
            fontWeight: '700',
            padding: '6px 14px',
            borderRadius: '100px',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            🌸 Nigeria's most trusted baby care
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: '56px',
            fontWeight: '900',
            lineHeight: '1.1',
            color: '#1A2A35',
            marginBottom: '20px',
            letterSpacing: '-1px',
            fontFamily: 'sans-serif',
          }}>
            Designed for{' '}
            <span style={{color: '#00A699'}}>happy</span>,{' '}
            <span style={{color: '#FF6B8A'}}>comfortable</span>{' '}
            babies
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: '16px',
            color: '#6B7F8C',
            lineHeight: '1.8',
            marginBottom: '32px',
            maxWidth: '440px',
          }}>
            Kiki Cares® nappies are clinically tested, hypoallergenic and engineered for 12-hour leak protection — because every baby deserves the very best.
          </p>

          {/* Buttons */}
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px'}}>
            <button style={{
              backgroundColor: '#00A699',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '100px',
              fontSize: '15px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'sans-serif',
            }}>
              Shop All Products
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#00A699',
              padding: '13px 28px',
              borderRadius: '100px',
              fontSize: '15px',
              fontWeight: '700',
              border: '2px solid #00A699',
              cursor: 'pointer',
              fontFamily: 'sans-serif',
            }}>
              Find My Baby's Size
            </button>
          </div>

          {/* Trust chips */}
          <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            {[
              {icon: '✅', text: 'Dermatologist Tested'},
              {icon: '🌿', text: 'Chemical Free'},
              {icon: '💧', text: '12-hr Protection'},
            ].map((chip) => (
              <div key={chip.text} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#6B7F8C',
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}>
                  {chip.icon}
                </div>
                {chip.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Product card */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '32px',
            padding: '32px',
            boxShadow: '0 20px 60px rgba(0,166,153,0.12)',
            width: '100%',
            maxWidth: '360px',
            position: 'relative',
          }}>
            {/* Product image */}
            <div style={{
              width: '100%',
              height: '220px',
              background: 'linear-gradient(135deg, #E0F5F3, #FFF0F3)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '100px',
              marginBottom: '20px',
            }}>
              🌸
            </div>
            <div style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: '800', color: '#1A2A35', marginBottom: '6px'}}>
              Kiki Cares® Newborn
            </div>
            <div style={{fontSize: '13px', color: '#6B7F8C', marginBottom: '16px'}}>
              Ultra-gentle for ages 0–3 months
            </div>
            <div style={{color: '#FFD166', fontSize: '16px', marginBottom: '16px'}}>
              ★★★★★ <span style={{fontSize: '13px', color: '#6B7F8C'}}>(2,847 reviews)</span>
            </div>
            <div style={{fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '900', color: '#00A699'}}>
              ₦3,500 <span style={{fontSize: '14px', color: '#6B7F8C', fontWeight: '400'}}>/ pack</span>
            </div>

            {/* Badge */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '10px 14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{fontSize: '20px'}}>🏆</span>
              <div>
                <div style={{fontSize: '10px', color: '#6B7F8C', fontFamily: 'sans-serif'}}>Award</div>
                <div style={{fontSize: '12px', fontWeight: '700', color: '#1A2A35', fontFamily: 'sans-serif'}}>Best Baby Brand 2026</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}