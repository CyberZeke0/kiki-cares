export default function Founder() {
  return (
    <section style={{backgroundColor: '#1A2A35', padding: '80px 40px'}}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
      }}>

        {/* Left - Image */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <div style={{
            width: '100%',
            maxWidth: '380px',
            aspectRatio: '4/5',
            background: 'linear-gradient(135deg, #00A699, #007A6E)',
            borderRadius: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px',
            marginBottom: '16px',
          }}>
            👩🏾
          </div>
          <div style={{fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
            Martha Ochei Agoro — Baltimore, Maryland, USA
          </div>
        </div>

        {/* Right - Text */}
        <div>
          <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px'}}>
            Meet the founder
          </div>

          <h2 style={{
            fontFamily: 'sans-serif',
            fontSize: '40px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '20px',
            letterSpacing: '-0.5px',
            lineHeight: '1.15',
          }}>
            Built by a mother,{' '}
            <span style={{color: '#FFD166'}}>for every mother</span>
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: '1.8',
            fontStyle: 'italic',
            marginBottom: '20px',
            borderLeft: '3px solid #00A699',
            paddingLeft: '18px',
          }}>
            "I started Kiki Cares® because I couldn't find a nappy brand that truly understood Nigerian babies. Every baby deserves the very best care — and that's what Kiki Cares® delivers."
          </p>

          <p style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: '1.9',
            marginBottom: '32px',
          }}>
            Martha Ochei Agoro is the founder and CEO of Kiki Cares®, a premium baby care brand she built from the ground up in Baltimore, Maryland, USA. With a deep passion for child wellness and a mother's instinct for quality, Martha created Kiki Cares® to give Nigerian families a product they can truly trust.
          </p>

          {/* Facts grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {[
              {label: 'Founded', value: '2026, Baltimore MD 🇺🇸'},
              {label: 'Primary Market', value: 'Nigeria & West Africa'},
              {label: 'Families Served', value: '50,000+ and growing'},
              {label: 'Powered by', value: '14th Tech ⚡'},
            ].map((fact) => (
              <div key={fact.label} style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '16px',
              }}>
                <div style={{fontSize: '10px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'sans-serif', marginBottom: '6px'}}>
                  {fact.label}
                </div>
                <div style={{fontSize: '14px', fontWeight: '700', color: 'white', fontFamily: 'sans-serif'}}>
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}