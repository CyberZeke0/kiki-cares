'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      {/* Top bar */}
      <div style={{ background: '#00A699', color: 'white', textAlign: 'center', padding: '8px', fontSize: '13px', fontFamily: 'Quicksand, sans-serif' }}>
        🚚 Free delivery on orders over ₦30,000
      </div>

      {/* Main Navbar */}
      <nav style={{ background: 'white', borderBottom: '1px solid #f0f0f0', position: 'sticky', top: 0, zIndex: 100, fontFamily: 'Quicksand, sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '24px', fontWeight: '800' }}>
              <span style={{ color: '#00A699' }}>Kiki </span>
              <span style={{ color: '#FF6B8A' }}>Cares</span>
              <span style={{ color: '#00A699' }}>®</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
            {['Diapers', 'Wipes', 'Offers', 'Pregnancy', 'Parenting'].map(item => (
              <Link key={item} href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: '600', fontSize: '15px' }}>
                {item}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Cart */}
            <Link href="/cart" style={{ position: 'relative', textDecoration: 'none' }}>
              <span style={{ fontSize: '22px' }}>🛒</span>
              {totalItems > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#FF6B8A', color: 'white', borderRadius: '50%', width: '18px', height: '18px', fontSize: '11px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link href="/account" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#00A699', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '700' }}>
                My Account
              </div>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
              className="hamburger"
            >
              <span style={{ width: '24px', height: '2px', background: menuOpen ? '#FF6B8A' : '#333', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ width: '24px', height: '2px', background: menuOpen ? 'transparent' : '#333', display: 'block', transition: 'all 0.3s' }}></span>
              <span style={{ width: '24px', height: '2px', background: menuOpen ? '#FF6B8A' : '#333', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: 'white', borderTop: '1px solid #f0f0f0', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[
              { label: '🍼 Diapers', href: '#' },
              { label: '🧻 Wipes', href: '#' },
              { label: '🎁 Offers', href: '#' },
              { label: '🤰 Pregnancy', href: '#' },
              { label: '📚 Parenting Hub', href: '#' },
              { label: '💡 Why Kiki Cares?', href: '#' },
              { label: '🛒 My Cart', href: '/cart' },
              { label: '👤 My Account', href: '/account' },
            ].map(item => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ padding: '12px 16px', color: '#333', textDecoration: 'none', fontWeight: '600', fontSize: '16px', borderRadius: '8px', display: 'block' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .hamburger { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}