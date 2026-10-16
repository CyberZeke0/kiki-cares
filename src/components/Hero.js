"use client";

export default function Hero() {
  return (
    <section style={{position: 'relative', width: '100%', minHeight: '600px', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>

      {/* Left - Real baby photo */}
      <div style={{
        position: 'relative',
        minHeight: '600px',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80"
          alt="Happy baby"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Right - Text content */}
      <div style={{
        backgroundColor: '#FFF5F7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px',
      }}>
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
          marginBottom: '24px',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          width: 'fit-content',
        }}>
          🌸 Nigeria's most trusted baby care
        </div>

        <h1 style={{
          fontFamily: 'sans-serif',
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: '900',
          lineHeight: '1.1',
          color: '#1A2A35',
          marginBottom: '20px',
          letterSpacing: '-1px',
        }}>
          Designed for{' '}
          <span style={{color: '#00A699'}}>happy</span>,{' '}
          <span style={{color: '#FF6B8A'}}>comfortable</span>{' '}
          babies
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#6B7F8C',
          lineHeight: '1.8',
          marginBottom: '32px',
          maxWidth: '420px',
        }}>
          Kiki Cares® nappies are clinically tested, hypoallergenic and engineered for 12-hour leak protection — because every baby deserves the very best.
        </p>

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

    </section>
  );
}