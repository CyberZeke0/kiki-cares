"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useCart } from '@/context/CartContext';

const megaMenus = {
  Diapers: {
    columns: [
      { title: 'Diapers By Size', links: [
        { label: 'Newborn Diapers (<5kg)', href: '/diapers/newborn' },
        { label: 'Small Diapers (3-6kg)', href: '/diapers/small' },
        { label: 'Medium Diapers (6-9kg)', href: '/diapers/medium' },
        { label: 'Large Diapers (9-14kg)', href: '/diapers/large' },
        { label: 'Extra Large Diapers (14kg+)', href: '/diapers/extra-large' },
      ]},
      { title: 'Diapers By Name', links: [
        { label: 'Kiki Cares® Newborn', href: '/diapers/newborn' },
        { label: 'Kiki Cares® Baby Soft', href: '/diapers/baby-soft' },
        { label: 'Kiki Cares® Overnites', href: '/diapers/overnites' },
        { label: 'Kiki Cares® Snug & Dry', href: '/diapers/snug-dry' },
      ]},
      { title: 'Training & Swim', links: [
        { label: 'Kiki Cares® Pull-Ups', href: '/diapers/pull-ups' },
        { label: 'Kiki Cares® Swim Diapers', href: '/diapers/swim' },
      ]},
    ],
    tools: [
      { label: 'Diaper Size Calculator', action: 'calculator' },
      { label: 'Compare Diapers', href: '/diapers' },
      { label: 'My Diaper Rash Guide', href: '/parenting-hub/nappy-rash-guide' },
    ],
  },
  Wipes: {
    columns: [
      { title: 'By Type', links: [
        { label: 'Pure Water Wipes', href: '/wipes/pure-water-wipes' },
        { label: 'Sensitive Skin Wipes', href: '/wipes/sensitive' },
        { label: 'Antibacterial Wipes', href: '/wipes/antibacterial' },
        { label: 'Biodegradable Wipes', href: '/wipes/biodegradable' },
      ]},
      { title: 'By Use', links: [
        { label: 'Newborn Wipes', href: '/wipes/newborn' },
        { label: 'Baby Wipes', href: '/wipes/baby' },
        { label: 'Toddler Wipes', href: '/wipes/toddler' },
        { label: 'On-the-Go Wipes', href: '/wipes/on-the-go' },
      ]},
    ],
    tools: [
      { label: 'Compare Wipes', href: '/wipes' },
      { label: 'Wipes Guide', href: '/parenting-hub/nappy-rash-guide' },
    ],
  },
  Offers: {
    columns: [
      { title: 'Current Deals', links: [
        { label: '10% Off First Order', href: '/signup' },
        { label: 'Bundle & Save', href: '/#products' },
        { label: 'Subscribe & Save 15%', href: '/signup' },
        { label: 'Free Delivery Over ₦10,000', href: '/#products' },
      ]},
      { title: 'Loyalty', links: [
        { label: 'Join Kiki Rewards', href: '/signup' },
        { label: 'Refer a Friend', href: '/signup' },
        { label: 'Birthday Club', href: '/signup' },
      ]},
    ],
    tools: [],
  },
  Pregnancy: {
    columns: [
      { title: 'Prepare for Baby', links: [
        { label: 'Hospital Bag Checklist', href: '/parenting-hub/hospital-bag' },
        { label: 'Newborn Essentials Guide', href: '/parenting-hub/newborn-essentials' },
        { label: 'First Week at Home', href: '/parenting-hub/first-week' },
        { label: 'Breastfeeding Tips', href: '/parenting-hub/breastfeeding' },
      ]},
      { title: 'Tools', links: [
        { label: 'Due Date Calculator', href: '/pregnancy/due-date-calculator' },
        { label: 'Baby Gender Predictor', href: '/pregnancy/gender-predictor' },
        { label: 'Baby Name Finder', href: '/pregnancy/baby-name-finder' },
        { label: 'Baby Cost Calculator', href: '/pregnancy/cost-calculator' },
      ]},
    ],
    tools: [
      { label: 'Due Date Calculator', href: '/pregnancy/due-date-calculator' },
      { label: 'Baby Name Finder', href: '/pregnancy/baby-name-finder' },
    ],
  },
  Parenting: {
    columns: [
      { title: 'Baby Stages', links: [
        { label: 'Newborn (0-3 months)', href: '/parenting-hub/newborn' },
        { label: 'Baby (3-12 months)', href: '/parenting-hub/baby' },
        { label: 'Toddler (1-3 years)', href: '/parenting-hub/toddler' },
        { label: 'Potty Training', href: '/parenting-hub/potty-training' },
      ]},
      { title: 'Topics', links: [
        { label: 'Sleep Tips', href: '/parenting-hub/sleep' },
        { label: 'Feeding Guide', href: '/parenting-hub/feeding' },
        { label: 'Diaper Rash Guide', href: '/parenting-hub/nappy-rash-guide' },
        { label: 'Baby Development', href: '/parenting-hub/baby-development' },
        { label: 'All Articles', href: '/parenting-hub' },
      ]},
    ],
    tools: [
      { label: 'Baby Development Tracker', href: '/parenting-hub/baby-development' },
      { label: 'Potty Training Guide', href: '/parenting-hub/potty-training' },
    ],
  },
  'Why Kiki Cares?': {
    columns: [
      { title: 'Our Promise', links: [
        { label: 'Hypoallergenic Formula', href: '/why-kiki-cares/hypoallergenic' },
        { label: 'Dermatologist Tested', href: '/why-kiki-cares/dermatologist-tested' },
        { label: 'Chemical Free', href: '/why-kiki-cares/chemical-free' },
        { label: '12-Hour Protection', href: '/why-kiki-cares/12-hour-protection' },
      ]},
      { title: 'Our Story', links: [
        { label: 'Meet the Founder', href: '/why-kiki-cares/meet-the-founder' },
        { label: 'Made for African Babies', href: '/why-kiki-cares/made-for-african-babies' },
        { label: 'Sustainability', href: '/why-kiki-cares/sustainability' },
        { label: 'Our Certifications', href: '/why-kiki-cares/certifications' },
      ]},
    ],
    tools: [],
  },
};

function CartIcon() {
  const { totalItems } = useCart();
  return (
    <Link href="/cart" style={{position: 'relative', width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid #E5EBF0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '18px', textDecoration: 'none'}}>
      🛒
      {totalItems > 0 && (
        <div style={{position: 'absolute', top: '-4px', right: '-4px', width: '18px', height: '18px', borderRadius: '50%', backgroundColor: '#FF6B8A', color: 'white', fontSize: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'}}>
          {totalItems}
        </div>
      )}
    </Link>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const calculateSize = () => {
    const w = parseFloat(weight);
    if (!w || w <= 0) { setResult('Please enter a valid weight'); return; }
    if (w < 3) setResult('Size: Newborn (NB) — Up to 5kg 🌸');
    else if (w < 6) setResult('Size: Small (S) — 3 to 6kg 🍼');
    else if (w < 9) setResult('Size: Medium (M) — 6 to 9kg 🧸');
    else if (w < 14) setResult('Size: Large (L) — 9 to 14kg 🌈');
    else setResult('Size: Extra Large (XL) — 14kg+ 🦋');
  };

  return (
    <>
      {/* Top utility bar */}
      <div style={{backgroundColor: '#1A2A35', padding: '10px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="#" style={{color: 'white', fontSize: '13px', fontWeight: '600', textDecoration: 'none', fontFamily: 'sans-serif'}}>
          👩‍⚕️ Healthcare Professionals →
        </a>
        <div style={{display: 'flex', gap: '32px', alignItems: 'center'}}>
          <a href="#" style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none', fontFamily: 'sans-serif'}}>
            Buy Online / Find Near Me
          </a>
          {user ? (
            <>
              <Link href="/account" style={{color: 'rgba(255,255,255,0.9)', fontSize: '13px', textDecoration: 'none', fontFamily: 'sans-serif', fontWeight: '600'}}>
                👤 My Account
              </Link>
              <button onClick={handleSignOut} style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'sans-serif', padding: 0}}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/signup" style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none', fontFamily: 'sans-serif'}}>
                Register
              </Link>
              <Link href="/login" style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none', fontFamily: 'sans-serif'}}>
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Main navbar */}
      <nav style={{backgroundColor: '#ffffff', borderBottom: '1px solid #E5EBF0', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 60px', display: 'flex', alignItems: 'center', height: '80px'}}>

          <Link href="/" style={{textDecoration: 'none', flexShrink: 0, marginRight: '48px'}}>
            <span style={{fontSize: '32px', fontWeight: '900', color: '#00A699', fontFamily: 'sans-serif', letterSpacing: '-1px'}}>
              Kiki <span style={{color: '#FF6B8A'}}>Cares</span>®
            </span>
          </Link>

          <div style={{display: 'flex', flex: 1}}>
            {Object.keys(megaMenus).map((item) => (
              <div key={item} style={{position: 'relative'}}
                onMouseEnter={() => setOpenMenu(item)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button style={{
                  fontSize: '15px', fontWeight: '600',
                  color: openMenu === item ? '#00A699' : '#1A2A35',
                  background: 'transparent', border: 'none',
                  borderBottom: openMenu === item ? '3px solid #00A699' : '3px solid transparent',
                  padding: '0 20px', cursor: 'pointer', fontFamily: 'sans-serif',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  height: '80px', whiteSpace: 'nowrap',
                }}>
                  {item} <span style={{fontSize: '10px'}}>▾</span>
                </button>

                {openMenu === item && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0,
                    backgroundColor: 'white', boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                    border: '1px solid #E5EBF0', borderTop: '3px solid #00A699',
                    padding: '36px 40px', minWidth: '640px', zIndex: 200,
                    borderRadius: '0 0 16px 16px',
                  }}>
                    <div style={{display: 'grid', gridTemplateColumns: `repeat(${megaMenus[item].columns.length}, 1fr)`, gap: '48px', marginBottom: megaMenus[item].tools.length > 0 ? '28px' : '0'}}>
                      {megaMenus[item].columns.map((col) => (
                        <div key={col.title}>
                          <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px'}}>
                            {col.title}
                          </div>
                          {col.links.map((link) => (
                            <Link key={link.label} href={link.href}
                              style={{display: 'block', fontSize: '15px', color: '#1A2A35', textDecoration: 'none', padding: '9px 0', fontFamily: 'sans-serif', fontWeight: '400', borderBottom: '1px solid #F7F8FA'}}
                              onMouseEnter={e => e.currentTarget.style.color = '#00A699'}
                              onMouseLeave={e => e.currentTarget.style.color = '#1A2A35'}
                              onClick={() => setOpenMenu(null)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    {megaMenus[item].tools.length > 0 && (
                      <div style={{borderTop: '1px solid #E5EBF0', paddingTop: '20px'}}>
                        <div style={{fontSize: '11px', fontWeight: '700', color: '#6B7F8C', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px'}}>
                          Popular Tools
                        </div>
                        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                          {megaMenus[item].tools.map((tool) => (
                            tool.action === 'calculator' ? (
                              <button key={tool.label}
                                onClick={() => { setShowCalculator(true); setOpenMenu(null); }}
                                style={{backgroundColor: '#F7F8FA', border: '1.5px solid #E5EBF0', borderRadius: '100px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#1A2A35', cursor: 'pointer', fontFamily: 'sans-serif'}}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#E0F5F3'; e.currentTarget.style.borderColor = '#00A699'; e.currentTarget.style.color = '#00A699'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F7F8FA'; e.currentTarget.style.borderColor = '#E5EBF0'; e.currentTarget.style.color = '#1A2A35'; }}
                              >
                                {tool.label}
                              </button>
                            ) : (
                              <Link key={tool.label} href={tool.href}
                                onClick={() => setOpenMenu(null)}
                                style={{backgroundColor: '#F7F8FA', border: '1.5px solid #E5EBF0', borderRadius: '100px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', color: '#1A2A35', cursor: 'pointer', fontFamily: 'sans-serif', textDecoration: 'none', display: 'inline-block'}}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#E0F5F3'; e.currentTarget.style.borderColor = '#00A699'; e.currentTarget.style.color = '#00A699'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F7F8FA'; e.currentTarget.style.borderColor = '#E5EBF0'; e.currentTarget.style.color = '#1A2A35'; }}
                              >
                                {tool.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div style={{display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0}}>
            <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '8px'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A2A35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <CartIcon />
            <Link href={user ? '/account' : '/signup'} style={{backgroundColor: '#00A699', color: 'white', padding: '12px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
              {user ? 'My Account' : 'Shop Now'}
            </Link>
          </div>

        </div>
      </nav>

      {/* Diaper Size Calculator Modal */}
      {showCalculator && (
        <div style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}
          onClick={() => { setShowCalculator(false); setResult(''); setWeight(''); }}
        >
          <div style={{backgroundColor: 'white', borderRadius: '24px', padding: '40px', maxWidth: '440px', width: '90%', position: 'relative'}}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => { setShowCalculator(false); setResult(''); setWeight(''); }}
              style={{position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#6B7F8C'}}>
              ✕
            </button>
            <div style={{textAlign: 'center', marginBottom: '28px'}}>
              <div style={{fontSize: '48px', marginBottom: '12px'}}>📏</div>
              <h2 style={{fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '900', color: '#1A2A35', marginBottom: '8px'}}>Diaper Size Calculator</h2>
              <p style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.6'}}>Enter your baby's current weight to find the perfect Kiki Cares® diaper size.</p>
            </div>
            <div style={{marginBottom: '16px'}}>
              <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>Baby's weight (kg)</label>
              <input type="number" placeholder="e.g. 7.5" value={weight}
                onChange={e => { setWeight(e.target.value); setResult(''); }}
                style={{width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5EBF0', fontSize: '16px', fontFamily: 'sans-serif', outline: 'none', color: '#1A2A35'}}
              />
            </div>
            <button onClick={calculateSize}
              style={{width: '100%', backgroundColor: '#00A699', color: 'white', border: 'none', padding: '14px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif', marginBottom: '16px'}}>
              Find My Size
            </button>
            {result && (
              <div style={{backgroundColor: '#E0F5F3', borderRadius: '12px', padding: '16px', textAlign: 'center', border: '1.5px solid #00A699', marginBottom: '20px'}}>
                <div style={{fontSize: '16px', fontWeight: '700', color: '#1A2A35', fontFamily: 'sans-serif'}}>{result}</div>
              </div>
            )}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px'}}>
              {[
                {size: 'NB', weight: 'Up to 5kg', emoji: '🌸'},
                {size: 'S', weight: '3–6kg', emoji: '🍼'},
                {size: 'M', weight: '6–9kg', emoji: '🧸'},
                {size: 'L', weight: '9–14kg', emoji: '🌈'},
                {size: 'XL', weight: '14kg+', emoji: '🦋'},
                {size: 'PT', weight: 'Pull-Ups', emoji: '🏃'},
              ].map((s) => (
                <div key={s.size} style={{backgroundColor: '#F7F8FA', borderRadius: '10px', padding: '10px', textAlign: 'center', border: '1px solid #E5EBF0'}}>
                  <div style={{fontSize: '16px', marginBottom: '4px'}}>{s.emoji}</div>
                  <div style={{fontSize: '13px', fontWeight: '800', color: '#00A699', fontFamily: 'sans-serif'}}>{s.size}</div>
                  <div style={{fontSize: '10px', color: '#6B7F8C'}}>{s.weight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}