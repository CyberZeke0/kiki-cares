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
  const [openItem, setOpenItem] = useState(null);
  const { totalItems } = useCart();

  const toggleItem = (label) => {
    setOpenItem(openItem === label ? null : label);
  };

  return (
    <>
      <div style={{ background: '#00A699', color: 'white', textAlign: 'center', padding: '10px 16px', fontSize: '13px', fontWeight: '600' }}>
        🚚 Free delivery on orders over ₦10,000
      </div>

      <nav style={{ background: 'white', borderBottom: '1px solid #eee', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>

          {/* Left: Hamburger or X */}
          <button
            onClick={() => { setMenuOpen(!menuOpen); setOpenItem(null); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', padding: '8px', color: '#1a1a1a', fontWeight: '300' }}
            suppressHydrationWarning
          >
            {menuOpen ? '✕' : '☰'}
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

        {/* Full menu dropdown */}
        {menuOpen && (
          <div style={{ background: 'white', borderTop: '1px solid #eee' }}>
            {menuItems.map((item) => (
              <div key={item.label}>
                <div
                  onClick={() => item.children.length > 0 ? toggleItem(item.label) : setMenuOpen(false)}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px', borderBottom: '1px solid #f0f0f0', cursor: 'pointer' }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => { if (item.children.length > 0) e.preventDefault(); else setMenuOpen(false); }}
                    style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '700', fontSize: '16px' }}
                  >
                    {item.label}
                  </Link>
                  {item.children.length > 0 && (
                    <span style={{ color: '#00A699', fontSize: '20px', fontWeight: '300' }}>
                      {openItem === item.label ? '−' : '+'}
                    </span>
                  )}
                </div>

                {/* Submenu */}
                {openItem === item.label && item.children.length > 0 && (
                  <div style={{ background: '#f9f9f9', borderBottom: '1px solid #f0f0f0' }}>
                    {item.children.map((child) => (
                      <Link
                        key={child}
                        href={`${item.href}/${child.toLowerCase().replace(/ /g, '-')}`}
                        onClick={() => setMenuOpen(false)}
                        style={{ display: 'block', padding: '14px 40px', color: '#555', textDecoration: 'none', fontSize: '14px', fontWeight: '600', borderBottom: '1px solid #f0f0f0' }}
                      >
                        {child}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Bottom links */}
            <div style={{ borderTop: '2px solid #eee', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="/account" onClick={() => setMenuOpen(false)} style={{ color: '#00A699', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>My Account</Link>
              <Link href="/account/signup" onClick={() => setMenuOpen(false)} style={{ color: '#00A699', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>Register</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}