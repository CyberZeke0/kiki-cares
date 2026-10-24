'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ fontFamily: 'Quicksand, sans-serif', overflow: 'hidden' }}>

      <div style={{ position: 'relative', width: '100%', minHeight: '90vh', background: 'linear-gradient(135deg, #e8f8f7 0%, #fef0f4 100%)', display: 'flex', alignItems: 'center' }}>

        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'rgba(0,166,153,0.08)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', background: 'rgba(255,107,138,0.08)', borderRadius: '50%' }}></div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', width: '100%' }} className="hero-grid">

          {/* Text Side */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', border: '1px solid #e0f5f4', borderRadius: '20px', padding: '6px 16px', marginBottom: '24px', fontSize: '13px', fontWeight: '600', color: '#00A699' }}>
              Nigeria's Most Trusted Baby Care
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: '800', lineHeight: '1.1', color: '#1a1a1a', marginBottom: '20px' }}>
              Designed for{' '}
              <span style={{ color: '#00A699' }}>happy,</span>
              <br />
              <span style={{ color: '#FF6B8A' }}>comfortable</span>
              <br />
              babies
            </h1>

            <p style={{ fontSize: '17px', color: '#555', lineHeight: '1.7', marginBottom: '32px', maxWidth: '480px' }}>
              Kiki Cares Diapers are clinically tested, hypoallergenic and engineered for 12-hour leak protection - because every baby deserves the very best.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <Link href="#products" style={{ background: '#00A699', color: 'white', padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', display: 'inline-block' }}>
                Shop All Products
              </Link>
              <Link href="/size-guide" style={{ background: 'white', color: '#00A699', padding: '16px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', border: '2px solid #00A699', display: 'inline-block' }}>
                Find My Baby's Size
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#444' }}>
                <span>Dermatologist Tested</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#444' }}>
                <span>Chemical Free</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#444' }}>
                <span>12-hr Protection</span>
              </div>
            </div>
          </div>

          {/* Image Side - hidden on mobile */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="hero-image">
            <div style={{ width: '100%', maxWidth: '480px', aspectRatio: '4/5', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.15)' }}>
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&auto=format&fit=crop"
                alt="Happy baby"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ position: 'absolute', bottom: '24px', left: '-20px', background: 'white', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div>
                <div style={{ fontWeight: '800', fontSize: '18px', color: '#1a1a1a' }}>4.9/5</div>
                <div style={{ fontSize: '12px', color: '#888' }}>10,000+ Happy Moms</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-image {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}