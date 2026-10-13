export default function Footer() {
  const links = {
    Products: ['Newborn Nappies', 'Baby Soft', 'Active Fit', 'Overnites', 'Swim Nappies', 'Baby Wipes', 'Pull-Ups', 'Bundle Packs'],
    Help: ['Size Guide', 'Track My Order', 'Delivery Info', 'Returns Policy', 'FAQ', 'Contact Us'],
    Company: ['About Kiki Cares®', 'Our Story', 'Parenting Hub', 'Sustainability', 'Careers', 'Powered by 14th Tech'],
  };

  return (
    <footer style={{backgroundColor: '#1A2A35'}}>

      {/* Main footer */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 40px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '48px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>

        {/* Brand column */}
        <div>
          <div style={{
            fontFamily: 'sans-serif',
            fontSize: '26px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '14px',
          }}>
            Kiki <span style={{color: '#00A699'}}>Cares</span>®
          </div>
          <p style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '1.7',
            marginBottom: '20px',
            fontWeight: '300',
          }}>
            Premium baby care founded in Baltimore, Maryland, USA. Made with love for Nigerian babies and their families. Trusted by 50,000+ parents across Nigeria.
          </p>

          {/* Social icons */}
          <div style={{display: 'flex', gap: '10px'}}>
            {['📘', '📸', '🐦', '▶️'].map((icon) => (
              <div key={icon} style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                cursor: 'pointer',
              }}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 style={{
              fontFamily: 'sans-serif',
              fontSize: '13px',
              fontWeight: '800',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}>
              {title}
            </h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {items.map((item) => (
                <li key={item}>
                  <a href="#" style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    fontWeight: '300',
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0}}>
          © 2026 Kiki Cares®. All rights reserved. Baltimore, Maryland, USA · Privacy Policy · Terms of Use
        </p>
        <p style={{fontSize: '12px', color: '#00A699', fontWeight: '600', fontFamily: 'sans-serif', margin: 0}}>
          Powered by 14th Tech ⚡
        </p>
      </div>

    </footer>
  );
}