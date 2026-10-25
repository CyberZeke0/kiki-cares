'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useLang } from '@/context/LanguageContext';

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
    diapersChildren: [
      { label: 'Newborn', href: '/diapers/newborn' },
      { label: 'Baby Soft', href: '/diapers/baby-soft' },
      { label: 'Overnites', href: '/diapers/overnites' },
      { label: 'Swim', href: '/diapers/swim' },
      { label: 'Pull-Ups', href: '/diapers/pull-ups' },
    ],
    wipesChildren: [
      { label: 'Pure Water Wipes', href: '/wipes/pure-water' },
      { label: 'Baby Wipes', href: '/wipes/baby' },
    ],
    pregnancyChildren: [
      { label: 'Due Date Calculator', href: '/pregnancy#calculator' },
      { label: 'Pregnancy Tips', href: '/pregnancy#tips' },
    ],
    parentingChildren: [
      { label: 'Newborn Care', href: '/parenting#newborn' },
      { label: 'Toddler Tips', href: '/parenting#toddler' },
    ],
    whyChildren: [
      { label: 'Our Promise', href: '/why-kiki-cares#promise' },
      { label: 'Ingredients', href: '/why-kiki-cares#ingredients' },
    ],
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
    diapersChildren: [
      { label: 'Recién Nacido', href: '/diapers/newborn' },
      { label: 'Baby Soft', href: '/diapers/baby-soft' },
      { label: 'Noche', href: '/diapers/overnites' },
      { label: 'Natación', href: '/diapers/swim' },
      { label: 'Pull-Ups', href: '/diapers/pull-ups' },
    ],
    wipesChildren: [
      { label: 'Toallitas de Agua', href: '/wipes/pure-water' },
      { label: 'Toallitas de Bebé', href: '/wipes/baby' },
    ],
    pregnancyChildren: [
      { label: 'Calculadora de Fecha', href: '/pregnancy#calculator' },
      { label: 'Consejos de Embarazo', href: '/pregnancy#tips' },
    ],
    parentingChildren: [
      { label: 'Cuidado del Recién Nacido', href: '/parenting#newborn' },
      { label: 'Consejos para Niños', href: '/parenting#toddler' },
    ],
    whyChildren: [
      { label: 'Nuestra Promesa', href: '/why-kiki-cares#promise' },
      { label: 'Ingredientes', href: '/why-kiki-cares#ingredients' },
    ],
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
    diapersChildren: [
      { label: 'Nouveau-né', href: '/diapers/newborn' },
      { label: 'Baby Soft', href: '/diapers/baby-soft' },
      { label: 'Nuit', href: '/diapers/overnites' },
      { label: 'Natation', href: '/diapers/swim' },
      { label: 'Pull-Ups', href: '/diapers/pull-ups' },
    ],
    wipesChildren: [
      { label: "Lingettes à l'eau", href: '/wipes/pure-water' },
      { label: 'Lingettes bébé', href: '/wipes/baby' },
    ],
    pregnancyChildren: [
      { label: 'Calculateur de date', href: '/pregnancy#calculator' },
      { label: 'Conseils grossesse', href: '/pregnancy#tips' },
    ],
    parentingChildren: [
      { label: 'Soins nouveau-né', href: '/parenting#newborn' },
      { label: 'Conseils tout-petits', href: '/parenting#toddler' },
    ],
    whyChildren: [
      { label: 'Notre Promesse', href: '/why-kiki-cares#promise' },
      { label: 'Ingrédients', href: '/why-kiki-cares#ingredients' },
    ],
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
    diapersChildren: [
      { label: 'Pasgeboren', href: '/diapers/newborn' },
      { label: 'Baby Soft', href: '/diapers/baby-soft' },
      { label: 'Nacht', href: '/diapers/overnites' },
      { label: 'Zwemmen', href: '/diapers/swim' },
      { label: 'Pull-Ups', href: '/diapers/pull-ups' },
    ],
    wipesChildren: [
      { label: 'Waterdoekjes', href: '/wipes/pure-water' },
      { label: 'Babydoekjes', href: '/wipes/baby' },
    ],
    pregnancyChildren: [
      { label: 'Bevallingsdatum', href: '/pregnancy#calculator' },
      { label: 'Zwangerschapstips', href: '/pregnancy#tips' },
    ],
    parentingChildren: [
      { label: 'Pasgeborene zorg', href: '/parenting#newborn' },
      { label: 'Peutertips', href: '/parenting#toddler' },
    ],
    whyChildren: [
      { label: 'Onze Belofte', href: '/why-kiki-cares#promise' },
      { label: 'Ingrediënten', href: '/why-kiki-cares#ingredients' },
    ],
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
  const [langOpen, setLangOpen] = useState(false);
  const { cartCount } = useCart();
  const { lang, setLang } = useLang();

  const t = translations[lang];

  const menuItems = [
    { label: t.diapers, href: '/diapers', children: t.diapersChildren },
    { label: t.wipes, href: '/wipes', children: t.wipesChildren },
    { label: t.offers, href: '/offers', children: [] },
    { label: t.pregnancy, href: '/pregnancy', children: t.pregnancyChildren },
    { label: t.parenting, href: '/parenting', children: t.parentingChildren },
    { label: t.whyKiki, href: '/why-kiki-cares', children: t.whyChildren },
    { label: t.founder, href: '/founder', children: [] },
    { label: t.promise, href: '/why-kiki-cares#promise', children: [] },
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

        {/* Right: Lang + Search + Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>

          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              suppressHydrationWarning
              style={{ background: 'none', border: '1px solid #ddd', borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', fontFamily: 'Quicksand, sans-serif', fontWeight: '700', fontSize: '12px', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              {lang} <span style={{ fontSize: '9px' }}>{langOpen ? '▲' : '▼'}</span>
            </button>

            {langOpen && (
              <div style={{ position: 'absolute', top: '36px', right: 0, background: 'white', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden', minWidth: '110px', zIndex: 2000 }}>
                {langs.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    suppressHydrationWarning
                    style={{ width: '100%', textAlign: 'left', padding: '10px 14px', border: 'none', cursor: 'pointer', background: lang === l.code ? '#e6f7f6' : 'white', color: lang === l.code ? '#00A699' : '#444', fontWeight: '600', fontSize: '13px', fontFamily: 'Quicksand, sans-serif', borderBottom: '1px solid #f5f5f5' }}
                  >
                    {lang === l.code ? '✓ ' : ''}{l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button suppressHydrationWarning style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
</button>
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

      {/* Slide-out Menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 999 }}>
          <div onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)' }} />

          <div style={{ position: 'absolute', top: 0, left: 0, width: '280px', height: '100%', background: 'white', overflowY: 'auto', zIndex: 1000, padding: '0 0 40px' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px', borderBottom: '1px solid #eee' }}>
              <span style={{ fontWeight: '800', fontSize: '16px', color: '#1a1a1a' }}>{t.menu}</span>
              <button onClick={() => setMenuOpen(false)} suppressHydrationWarning style={{ background: 'none', border: 'none', fontSize: '22px', cursor: 'pointer', color: '#888' }}>✕</button>
            </div>

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
                  <div key={child.label} style={{ padding: '10px 20px 10px 36px', borderBottom: '1px solid #f9f9f9', background: '#fafafa' }}>
                    <Link href={child.href} onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', fontSize: '14px', color: '#555' }}>
                      {child.label}
                    </Link>
                  </div>
                ))}
              </div>
            ))}

            <div style={{ marginTop: '20px', borderTop: '1px solid #eee', padding: '20px 20px 0' }}>
              <Link href="/account" onClick={() => setMenuOpen(false)} style={{ display: 'block', textDecoration: 'none', fontWeight: '700', fontSize: '15px', color: '#00A699', marginBottom: '14px' }}>
                {t.myProfile}
              </Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)} style={{ display: 'block', textDecoration: 'none', fontWeight: '700', fontSize: '15px', color: '#FF6B8A', marginBottom: '24px' }}>
                {t.register}
              </Link>

              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', position: 'relative' }}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  suppressHydrationWarning
                  style={{ background: 'none', border: '1px solid #ddd', borderRadius: '8px', padding: '10px 14px', cursor: 'pointer', fontFamily: 'Quicksand, sans-serif', fontWeight: '700', fontSize: '14px', color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'space-between' }}
                >
                  <span>{langs.find(l => l.code === lang)?.label}</span>
                  <span style={{ fontSize: '10px' }}>{langOpen ? '▲' : '▼'}</span>
                </button>

                {langOpen && (
                  <div style={{ border: '1px solid #eee', borderRadius: '8px', marginTop: '6px', overflow: 'hidden', background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    {langs.map(l => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        suppressHydrationWarning
                        style={{ width: '100%', textAlign: 'left', padding: '12px 16px', border: 'none', cursor: 'pointer', background: lang === l.code ? '#e6f7f6' : 'white', color: lang === l.code ? '#00A699' : '#444', fontWeight: '600', fontSize: '14px', fontFamily: 'Quicksand, sans-serif', borderBottom: '1px solid #f5f5f5' }}
                      >
                        {lang === l.code ? '✓ ' : ''}{l.label}
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