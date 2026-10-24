'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      {/* Top announcement bar */}
      <div style={{ background: '#00A699', color: 'white', textAlign: 'center', padding: '10px 16px', fontSize: '13px', fontWeight: '600' }}>
        🚚 Free delivery on orders over ₦10,000
      </div>

      {/* Main navbar */}
      <nav style={{ background: 'white', borderBottom: '1px solid #eee', position: 'sticky', top: '0', zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

          {/* Left: Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
            suppressHydrationWarning
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a', opacity: menuOpen ? 0 : 1 }}></span>
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>

          {/* Center: Logo */}
          <Link href="/" style={{ textDecoration: 'none', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            <span style={{ fontSize: '22px', fontWeight: '800', color: '#00A699', fontFamily: 'Quicksand, sans-serif' }}>Kiki </span>
            <span style={{ fontSize: '22px', fontWeight: '800', color: '#FF6B8A', fontFamily: 'Quicksand, sans-serif' }}>Cares®</span>
          </Link>

          {/* Right: Search + Cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px' }}>🔍</button>
            <Link href="/cart" style={{ position: 'relative', textDecoration: 'none', fontSize: '20px' }}>
              🛒
              {totalItems > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#FF6B8A', color: 'white', borderRadius: '50%', width: '18px', height: '18px', fontSize: '11px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div style={{ background: 'white', borderTop: '1px solid #eee', padding: '16px 0' }}>
            {[
              { href: '/diapers', label: 'Diapers' },
              { href: '/wipes', label: 'Wipes' },
              { href: '/offers', label: 'Offers' },
              { href: '/pregnancy', label: 'Pregnancy' },
              { href: '/parenting', label: 'Parenting' },
              { href: '/why-kiki', label: 'Why Kiki Cares?' },
{ href: '/#promise', label: 'Our Promise to Every Baby' },
{ href: '/account', label: 'My Account' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px 24px', color: '#1a1a1a', textDecoration: 'none', fontWeight: '600', fontSize: '15px', borderBottom: '1px solid #f5f5f5' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}