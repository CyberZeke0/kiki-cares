'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const translations = {
  EN: {
    menu: 'Menu',
    diapers: 'Diapers',
    wipes: 'Wipes',
    offers: 'Offers',
    pregnancy: 'Pregnancy',
    parenting: 'Parenting',
    whyKiki: 'Why Kiki Cares?',
    founder: 'Meet the Founder',
    promise: 'Our Promise',
    myProfile: 'My Profile',
    register: 'Register',
    language: 'Language',
    diapersChildren: ['Newborn', 'Baby Soft', 'Overnites', 'Swim', 'Pull-Ups'],
    wipesChildren: ['Pure Water Wipes', 'Baby Wipes'],
    pregnancyChildren: ['Due Date Calculator', 'Pregnancy Tips'],
    parentingChildren: ['Newborn Care', 'Toddler Tips'],
    whyChildren: ['Our Promise', 'Ingredients'],
  },
  ES: {
    menu: 'Menú',
    diapers: 'Pañales',
    wipes: 'Toallitas',
    offers: 'Ofertas',
    pregnancy: 'Embarazo',
    parenting: 'Crianza',
    whyKiki: '¿Por qué Kiki Cares?',
    founder: 'Conoce a la Fundadora',
    promise: 'Nuestra Promesa',
    myProfile: 'Mi Perfil',
    register: 'Regístrate',
    language: 'Idioma',
    diapersChildren: ['Recién Nacido', 'Baby Soft', 'Noche', 'Natación', 'Pull-Ups'],
    wipesChildren: ['Toallitas de Agua', 'Toallitas de Bebé'],
    pregnancyChildren: ['Calculadora de Fecha', 'Consejos de Embarazo'],
    parentingChildren: ['Cuidado del Recién Nacido', 'Consejos para Niños'],
    whyChildren: ['Nuestra Promesa', 'Ingredientes'],
  },
  FR: {
    menu: 'Menu',
    diapers: 'Couches',
    wipes: 'Lingettes',
    offers: 'Offres',
    pregnancy: 'Grossesse',
    parenting: 'Parentalité',
    whyKiki: 'Pourquoi Kiki Cares?',
    founder: 'Rencontrez la Fondatrice',
    promise: 'Notre Promesse',
    myProfile: 'Mon Profil',
    register: "S'inscrire",
    language: 'Langue',
    diapersChildren: ['Nouveau-né', 'Baby Soft', 'Nuit', 'Natation', 'Pull-Ups'],
   wipesChildren: ["Lingettes à l'eau", 'Lingettes bébé'],
    pregnancyChildren: ['Calculateur de date', 'Conseils grossesse'],
    parentingChildren: ['Soins nouveau-né', 'Conseils tout-petits'],
    whyChildren: ['Notre Promesse', 'Ingrédients'],
  },
  NL: {
    menu: 'Menu',
    diapers: 'Luiers',
    wipes: 'Doekjes',
    offers: 'Aanbiedingen',
    pregnancy: 'Zwangerschap',
    parenting: 'Ouderschap',
    whyKiki: 'Waarom Kiki Cares?',
    founder: 'Ontmoet de Oprichtster',
    promise: 'Onze Belofte',
    myProfile: 'Mijn Profiel',
    register: 'Registreren',
    language: 'Taal',
    diapersChildren: ['Pasgeboren', 'Baby Soft', 'Nacht', 'Zwemmen', 'Pull-Ups'],
    wipesChildren: ['Waterdoekjes', 'Babydoekjes'],
    pregnancyChildren: ['Bevallingsdatum', 'Zwangerschapstips'],
    parentingChildren: ['Pasgeborene zorg', 'Peutertips'],
    whyChildren: ['Onze Belofte', 'Ingrediënten'],
  },
};

const langs = [
  { code: 'EN', label: 'English' },
  { code: 'ES', label: 'Español' },
  { code: 'FR', label: 'Français' },
  { code: 'NL', label: 'Dutch' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [activeLang, setActiveLang] = useState('EN');
  const [langOpen, setLangOpen] = useState(false);
  const { cartCount } = useCart();

  const t = translations[activeLang];

  const menuItems = [
    { label: t.diapers, href: '/diapers', children: t.diapersChildren },
    { label: t.wipes, href: '/wipes', children: t.wipesChildren },
    { label: t.offers, href: '/offers', children: [] },
    { label: t.pregnancy, href: '/pregnancy', children: t.pregnancyChildren },
    { label: t.parenting, href: '/parenting', children: t.parentingChildren },
    { label: t.whyKiki, href: '/why-kiki', children: t.whyChildren },
    { label: t.founder, href: '/founder', children: [] },
    { label: t.promise, href: '/#promise', children: [] },
  ];

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
              <span style={{ fontWeight: '800', fontSize: '16px', color: '#1a1a1a' }}>{t.menu}</span>
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
                    <button onClick={() => setExpanded(expanded === item.label ? null : item.label)} suppressHydrationWarning style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', color: '#888', fontWeight: '700' }}>
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
                {t.myProfile}
              </Link>
              <Link href="/register" onClick={() => setMenuOpen(false)} style={{ display: 'block', textDecoration: 'none', fontWeight: '700', fontSize: '15px', color: '#FF6B8A', marginBottom: '24px' }}>
                {t.register}
              </Link>

              {/* Language Dropdown */}
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', position: 'relative' }}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  suppressHydrationWarning
                  style={{ background: 'none', border: '1px solid #ddd', borderRadius: '8px', padding: '10px 14px', cursor: 'pointer', fontFamily: 'Quicksand, sans-serif', fontWeight: '700', fontSize: '14px', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'space-between' }}
                >
                  <span>{langs.find(l => l.code === activeLang)?.label}</span>
                  <span style={{ fontSize: '10px' }}>{langOpen ? '▲' : '▼'}</span>
                </button>

                {langOpen && (
                  <div style={{ border: '1px solid #eee', borderRadius: '8px', marginTop: '6px', overflow: 'hidden', background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    {langs.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => { setActiveLang(lang.code); setLangOpen(false); }}
                        suppressHydrationWarning
                        style={{
                          width: '100%', textAlign: 'left', padding: '12px 16px', border: 'none', cursor: 'pointer',
                          background: activeLang === lang.code ? '#e6f7f6' : 'white',
                          color: activeLang === lang.code ? '#00A699' : '#444',
                          fontWeight: '600', fontSize: '14px', fontFamily: 'Quicksand, sans-serif',
                          borderBottom: '1px solid #f5f5f5',
                        }}
                      >
                        {activeLang === lang.code ? '✓ ' : ''}{lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}