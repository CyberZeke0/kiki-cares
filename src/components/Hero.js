'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ fontFamily: 'Quicksand, sans-serif' }}>

      {/* Full width image */}
      <div style={{ width: '100%', height: '55vw', maxHeight: '500px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&auto=format&fit=crop"
          alt="Happy baby"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>

      {/* Text below image */}
      <div style={{ background: '#fef9f5', padding: '40px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: '800', lineHeight: '1.2', color: '#1a1a1a', marginBottom: '16px' }}>
          Designed for{' '}
          <span style={{ color: '#00A699' }}>happy,</span>
          {' '}<span style={{ color: '#FF6B8A' }}>comfortable</span>
          {' '}babies
        </h1>

        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.7', marginBottom: '32px', maxWidth: '520px', margin: '0 auto 32px' }}>
          Kiki Cares Diapers are clinically tested, hypoallergenic and engineered for 12-hour leak protection.
        </p>

        <Link href="#products" style={{ background: '#00A699', color: 'white', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          Shop Now →
        </Link>
      </div>

    </section>
  );
}