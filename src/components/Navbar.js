"use client";

export default function Navbar() {
  return (
    <>
      {/* Top announcement bar */}
      <div style={{backgroundColor: '#1A2A35', padding: '10px 0', textAlign: 'center'}}>
        <p style={{color: 'white', fontSize: '13px', fontWeight: '600', margin: 0}}>
          🚚 Free delivery on orders over ₦10,000 &nbsp;
          <span style={{backgroundColor: '#FFD166', color: '#1A2A35', padding: '2px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '700'}}>
            LIMITED TIME
          </span>
        </p>
      </div>

      {/* Main navbar */}
      <nav style={{backgroundColor: '#ffffff', borderBottom: '1px solid #E5EBF0', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', gap: '32px', height: '70px'}}>
          
          {/* Logo */}
          <a href="#" style={{textDecoration: 'none', flexShrink: 0}}>
            <span style={{fontSize: '26px', fontWeight: '900', color: '#00A699', fontFamily: 'sans-serif', letterSpacing: '-0.5px'}}>
              Kiki <span style={{color: '#FF6B8A'}}>Cares</span>®
            </span>
          </a>

          {/* Nav links */}
          <div style={{display: 'flex', gap: '4px', flex: 1}}>
            {['Nappies', 'Wipes', 'Pull-Ups', 'Swim', 'Baby Care', 'Parenting Hub'].map((item) => (
              <a key={item} href="#" style={{
                fontSize: '14px', 
                fontWeight: '600', 
                color: '#1A2A35', 
                textDecoration: 'none', 
                padding: '8px 14px', 
                borderRadius: '100px',
              }}
              onMouseEnter={e => e.target.style.backgroundColor = '#F7F8FA'}
              onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0}}>
            <div style={{width: '38px', height: '38px', borderRadius: '50%', border: '1.5px solid #E5EBF0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px'}}>
              🔍
            </div>
            <button style={{
              backgroundColor: '#00A699', 
              color: 'white', 
              padding: '10px 22px', 
              borderRadius: '100px', 
              fontSize: '14px', 
              fontWeight: '700', 
              border: 'none', 
              cursor: 'pointer',
              fontFamily: 'sans-serif'
            }}>
              Shop Now
            </button>
          </div>

        </div>
      </nav>
    </>
  );
}