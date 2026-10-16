"use client";
import { useState } from 'react';

const megaMenus = {
  Nappies: {
    columns: [
      { title: 'Nappies By Size', links: ['Newborn Nappies (<5kg)', 'Small Nappies (3-6kg)', 'Medium Nappies (6-9kg)', 'Large Nappies (9-14kg)', 'Extra Large Nappies (14kg+)'] },
      { title: 'Nappies By Name', links: ['Kiki Cares® Newborn', 'Kiki Cares® Baby Soft', 'Kiki Cares® Active Fit', 'Kiki Cares® Overnites', 'Kiki Cares® Snug & Dry'] },
      { title: 'Training & Swim', links: ['Kiki Cares® Pull-Ups', 'Kiki Cares® Swim Nappies'] },
    ],
    tools: ['Nappy Size Calculator', 'Compare Nappies', 'My Nappy Rash Guide'],
  },
  Wipes: {
    columns: [
      { title: 'By Type', links: ['Pure Water Wipes', 'Sensitive Skin Wipes', 'Antibacterial Wipes', 'Biodegradable Wipes'] },
      { title: 'By Use', links: ['Newborn Wipes', 'Baby Wipes', 'Toddler Wipes', 'On-the-Go Wipes'] },
    ],
    tools: ['Compare Wipes', 'Wipes Guide'],
  },
  Offers: {
    columns: [
      { title: 'Current Deals', links: ['10% Off First Order', 'Bundle & Save', 'Subscribe & Save 15%', 'Free Delivery Over ₦10,000'] },
      { title: 'Loyalty', links: ['Join Kiki Rewards', 'Refer a Friend', 'Birthday Club'] },
    ],
    tools: [],
  },
  Pregnancy: {
    columns: [
      { title: 'Prepare for Baby', links: ['Hospital Bag Checklist', 'Newborn Essentials Guide', 'First Week at Home', 'Breastfeeding Tips'] },
      { title: 'Tools', links: ['Due Date Calculator', 'Baby Gender Predictor', 'Baby Name Finder', 'Baby Cost Calculator'] },
    ],
    tools: ['Due Date Calculator', 'Baby Name Finder'],
  },
  Parenting: {
    columns: [
      { title: 'Baby Stages', links: ['Newborn (0-3 months)', 'Baby (3-12 months)', 'Toddler (1-3 years)', 'Potty Training'] },
      { title: 'Topics', links: ['Sleep Tips', 'Feeding Guide', 'Nappy Rash Guide', 'Baby Development', 'All Articles'] },
    ],
    tools: ['Baby Development Tracker', 'Potty Training Guide'],
  },
  'Why Kiki Cares?': {
    columns: [
      { title: 'Our Promise', links: ['Hypoallergenic Formula', 'Dermatologist Tested', 'Chemical Free', '12-Hour Protection'] },
      { title: 'Our Story', links: ['Meet the Founder', 'Made for African Babies', 'Sustainability', 'Our Certifications'] },
    ],
    tools: [],
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

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
          <a href="#" style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none', fontFamily: 'sans-serif'}}>Buy Online / Find Near Me</a>
          <a href="#" style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none', fontFamily: 'sans-serif'}}>Register</a>
          <a href="#" style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', textDecoration: 'none', fontFamily: 'sans-serif'}}>Sign In</a>
        </div>
      </div>

      {/* Main navbar */}
      <nav style={{backgroundColor: '#ffffff', borderBottom: '1px solid #E5EBF0', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 60px', display: 'flex', alignItems: 'center', height: '80px'}}>

          {/* Logo */}
          <a href="#" style={{textDecoration: 'none', flexShrink: 0, marginRight: '48px'}}>
            <span style={{fontSize: '32px', fontWeight: '900', color: '#00A699', fontFamily: 'sans-serif', letterSpacing: '-1px'}}>
              Kiki <span style={{color: '#FF6B8A'}}>Cares</span>®
            </span>
          </a>

          {/* Nav links */}
          <div style={{display: 'flex', flex: 1}}>
            {Object.keys(megaMenus).map((item) => (
              <div
                key={item}
                style={{position: 'relative'}}
                onMouseEnter={() => setOpenMenu(item)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  color: openMenu === item ? '#00A699' : '#1A2A35',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: openMenu === item ? '3px solid #00A699' : '3px solid transparent',
                  padding: '0 20px',
                  cursor: 'pointer',
                  fontFamily: 'sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  height: '80px',
                  whiteSpace: 'nowrap',
                }}>
                  {item} <span style={{fontSize: '10px'}}>▾</span>
                </button>

                {/* Mega menu */}
                {openMenu === item && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'white',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                    border: '1px solid #E5EBF0',
                    borderTop: '3px solid #00A699',
                    padding: '36px 40px',
                    minWidth: '640px',
                    zIndex: 200,
                    borderRadius: '0 0 16px 16px',
                  }}>

                    {/* Columns */}
                    <div style={{display: 'grid', gridTemplateColumns: `repeat(${megaMenus[item].columns.length}, 1fr)`, gap: '48px', marginBottom: megaMenus[item].tools.length > 0 ? '28px' : '0'}}>
                      {megaMenus[item].columns.map((col) => (
                        <div key={col.title}>
                          <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px'}}>
                            {col.title}
                          </div>
                          {col.links.map((link) => (
                            <a key={link} href="#" style={{
                              display: 'block',
                              fontSize: '15px',
                              color: '#1A2A35',
                              textDecoration: 'none',
                              padding: '9px 0',
                              fontFamily: 'sans-serif',
                              fontWeight: '400',
                              borderBottom: '1px solid transparent',
                            }}
                            onMouseEnter={e => { e.target.style.color = '#00A699'; }}
                            onMouseLeave={e => { e.target.style.color = '#1A2A35'; }}
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Popular tools */}
                    {megaMenus[item].tools.length > 0 && (
                      <div style={{borderTop: '1px solid #E5EBF0', paddingTop: '20px'}}>
                        <div style={{fontSize: '11px', fontWeight: '700', color: '#6B7F8C', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px'}}>
                          Popular Tools
                        </div>
                        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                          {megaMenus[item].tools.map((tool) => (
                            <button
                              key={tool}
                              onClick={() => { if (tool === 'Nappy Size Calculator') { setShowCalculator(true); setOpenMenu(null); } }}
                              style={{
                                backgroundColor: '#F7F8FA',
                                border: '1.5px solid #E5EBF0',
                                borderRadius: '100px',
                                padding: '10px 20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#1A2A35',
                                cursor: 'pointer',
                                fontFamily: 'sans-serif',
                              }}
                              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#E0F5F3'; e.currentTarget.style.borderColor = '#00A699'; e.currentTarget.style.color = '#00A699'; }}
                              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#F7F8FA'; e.currentTarget.style.borderColor = '#E5EBF0'; e.currentTarget.style.color = '#1A2A35'; }}
                            >
                              {tool}
                            </button>
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
          <div style={{display: 'flex', gap: '16px', alignItems: 'center', flexShrink: 0}}>
            <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '8px'}}>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A2A35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
</div>
            <button style={{backgroundColor: '#00A699', color: 'white', padding: '12px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', border: 'none', cursor: 'pointer', fontFamily: 'sans-serif'}}>
              Shop Now
            </button>
          </div>

        </div>
      </nav>

      {/* Nappy Size Calculator Modal */}
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
              <h2 style={{fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '900', color: '#1A2A35', marginBottom: '8px'}}>
                Nappy Size Calculator
              </h2>
              <p style={{fontSize: '14px', color: '#6B7F8C', lineHeight: '1.6'}}>
                Enter your baby's current weight to find the perfect Kiki Cares® nappy size.
              </p>
            </div>

            <div style={{marginBottom: '16px'}}>
              <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>
                Baby's weight (kg)
              </label>
              <input
                type="number"
                placeholder="e.g. 7.5"
                value={weight}
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