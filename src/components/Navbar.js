'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const menuItems = [
  { label: 'Diapers', href: '/diapers', children: ['Newborn', 'Baby Soft', 'Overnites', 'Swim', 'Pull-Ups'] },
  { label: 'Wipes', href: '/wipes', children: ['Pure Water Wipes', 'Baby Wipes'] },
  { label: 'Offers', href: '/offers', children: [] },
  { label: 'Pregnancy', href: '/pregnancy', children: ['Due Date Calculator', 'Pregnancy Tips'] },
  { label: 'Parenting', href: '/parenting', children: ['Newborn Care', 'Toddler Tips'] },
  { label: 'Why Kiki Cares?', href: '/why-kiki', children: ['Our Promise', 'Ingredients'] },
  { label: 'Meet the Founder', href: '/founder', children: [] },
  { label: 'Our Promise', href: '/#promise', children: [] },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [activeLang, setActiveLang] = useState('EN');
  const { cartCount } = useCart();

  const toggleExpand = (label) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <nav style={{ fontFamily: 'Quicksand, sans-serif', position: 'relative', zIndex: 1000 }}>

      {/* Top Bar */}
      <div style={{ background: 'white', borderBottom: '1px solid #eee', padding: '0 16px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Left: Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          suppressHydrationWarning
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a' }} />
        </button>

        {/* Center: Logo */}
        <Link href="/" style={{ textDecoration: 'none', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <span style={{ fontSize: '22px', fontWeight: '900', color: '#00A699' }}>kiki</span>
          <span style={{ fontSize: '22px', fontWeight: '900', color: '#FF6B8A' }}>cares</span>
        </Link>

        {/* Right: Search + Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button suppressHydrationWarning style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}>🔍</button>
          <Link href="/cart" style={{ position: 'relative', textDecoration: 'none', fontSize: '18px' }}>
            🛒
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#FF6B8A', color: 'white', borderRadius: '50%', width: '16px', height: '16px', fontSize: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }}>

          {/* Overlay */}
          <div onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)' }} />

          {/* Panel */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '280px', height: '100%', background: 'white', overflowY: 'auto', zIndex: 1000, padding: '0 0 40px' }}>

            {/* Panel Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px', borderBottom: '1px solid #eee' }}>
              <span style={{ fontWeight: '800', fontSize: '16px', color: '#1a1a1a' }}>Menu</span>
              <button onClick={() => setMenuOpen(false)} suppressHydrationWarning style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#888' }}>✕</button>
            </div>

            {/* Menu Items */}
            {menuItems.map(item => (
              <div key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid #f0f0f0' }}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', fontWeight: '600', fontSize: '15px', color: '#1a1a1a' }}>
                    {item.label}
                  </Link>
                  {item.children.length > 0 && (
                    <button onClick={() => toggleExpand(item.label)} suppressHydrationWarning style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#888', fontWeight: '700' }}>
                      {expanded === item.label ? '−' : '+'}
                    </button>
                  )}
                </div>
                {expanded === item.label && item.children.map(child => (
                  <div key={child} style={{ padding: '10px 20px 10px 36px', borderBottom: '1px solid #f9f9f9', background: '#fafafa' }}>
                    <Link href="#" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', fontSize: '14px', color: '#555' }}>
                      {child}
                    </Link>
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom Links */}
            <div style={{ marginTop: '20px', borderTop: '1px solid #eee', padding: '20px 20px 0' }}>
              <Link href="/account" onClick={() => setMenuOpen(false)} style={{ display: 'block', textDecoration: 'none', fontWeight: '700', fontSize: '15px', color: '#00A699', marginBottom: '14px' }}>
                My Profile
              </Link>
              <Link href="/register" onClick={() => setMenuOpen(false)} style={{ display: 'block', textDecoration: 'none', fontWeight: '700', fontSize: '15px', color: '#FF6B8A', marginBottom: '24px' }}>
                Register
              </Link>

              {/* Language Switcher */}
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <p style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>Language</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { code: 'EN', label: 'English' },
                    { code: 'ES', label: 'Español' },
                    { code: 'FR', label: 'Français' },
                    { code: 'NL', label: 'Dutch' },
                  ].map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setActiveLang(lang.code)}
                      suppressHydrationWarning
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                        fontFamily: 'Quicksand, sans-serif', fontSize: '15px', fontWeight: '600',
                        color: activeLang === lang.code ? '#00A699' : '#444',
                        padding: '0',
                      }}
                    >
                      {activeLang === lang.code ? '✓ ' : ''}{lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}