import Link from 'next/link';

export default function Footer() {
  const links = {
    Products: [
      { label: 'Newborn Diapers', href: '/diapers/newborn' },
      { label: 'Baby Soft', href: '/diapers/baby-soft' },
      { label: 'Active Fit', href: '/diapers/active-fit' },
      { label: 'Overnites', href: '/diapers/overnites' },
      { label: 'Swim Diapers', href: '/diapers/swim' },
      { label: 'Baby Wipes', href: '/wipes/pure-water-wipes' },
      { label: 'Pull-Ups', href: '/diapers/pull-ups' },
      { label: 'Bundle Packs', href: '/#products' },
    ],
    Help: [
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Track My Order', href: '/track-order' },
      { label: 'Delivery Info', href: '/delivery' },
      { label: 'Returns Policy', href: '/returns' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
    Company: [
      { label: 'About Kiki Cares®', href: '/about' },
      { label: 'Our Story', href: '/why-kiki-cares/meet-the-founder' },
      { label: 'Parenting Hub', href: '/parenting-hub/nappy-rash-guide' },
      { label: 'Sustainability', href: '/why-kiki-cares/sustainability' },
      { label: 'Careers', href: '/careers' },
      { label: 'Powered by 14th Tech', href: 'https://14thtech.com' },
    ],
  };

  return (
    <footer style={{backgroundColor: '#1A2A35'}}>

      {/* Main footer */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '60px 40px',
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>

        {/* Brand column */}
        <div>
          <Link href="/" style={{textDecoration: 'none'}}>
            <div style={{fontFamily: 'sans-serif', fontSize: '26px', fontWeight: '900', color: 'white', marginBottom: '14px'}}>
              Kiki <span style={{color: '#00A699'}}>Cares</span>®
            </div>
          </Link>
          <p style={{fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginBottom: '20px', fontWeight: '300'}}>
            Premium baby care founded in Baltimore, Maryland, USA. Made with love for Nigerian babies and their families. Trusted by 50,000+ parents across Nigeria.
          </p>
          <div style={{display: 'flex', gap: '10px'}}>
            {[
              {icon: '📘', href: 'https://facebook.com'},
              {icon: '📸', href: 'https://instagram.com'},
              {icon: '🐦', href: 'https://twitter.com'},
              {icon: '▶️', href: 'https://youtube.com'},
            ].map((social) => (
              <a key={social.icon} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px', textDecoration: 'none',
              }}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 style={{fontFamily: 'sans-serif', fontSize: '13px', fontWeight: '800', color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px'}}>
              {title}
            </h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontWeight: '300'}}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '20px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0}}>
          © 2026 Kiki Cares®. All rights reserved. Baltimore, Maryland, USA ·{' '}
          <Link href="/privacy" style={{color: 'rgba(255,255,255,0.3)', textDecoration: 'none'}}>Privacy Policy</Link>
          {' · '}
          <Link href="/terms" style={{color: 'rgba(255,255,255,0.3)', textDecoration: 'none'}}>Terms of Use</Link>
        </p>
        <p style={{fontSize: '12px', color: '#00A699', fontWeight: '600', fontFamily: 'sans-serif', margin: 0}}>
          Powered by 14th Tech ⚡
        </p>
      </div>

    </footer>
  );
}