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

        {/* Left - Photo */}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <div style={{
            width: '100%',
            maxWidth: '380px',
            aspectRatio: '4/5',
            borderRadius: '28px',
            overflow: 'hidden',
            marginBottom: '16px',
          }}>
            <img
              src="/martha.jpg"
              alt="Martha Ochei Agoro — Founder of Kiki Cares"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
          <div style={{fontSize: '12px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase'}}>
            Martha Ochei Agoro — Founder & CEO, Kiki Cares®
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
            marginBottom: '24px',
            letterSpacing: '-0.5px',
            lineHeight: '1.15',
          }}>
            A Mother's Love in{' '}
            <span style={{color: '#FFD166'}}>Every Pack</span>
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: '1.9',
            marginBottom: '20px',
            borderLeft: '3px solid #00A699',
            paddingLeft: '20px',
            fontStyle: 'italic',
          }}>
            "Kiki Cares®️ was born from a mother's love and a simple belief: every baby deserves to feel comfortable, protected, and cared for."
          </p>

          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.9',
            marginBottom: '16px',
          }}>
            As a mother, I understand that choosing the right diaper is about more than keeping a baby dry. It's about comfort, confidence, and giving parents peace of mind.
          </p>

          <p style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '1.9',
            marginBottom: '36px',
          }}>
            That is why I created Kiki Cares®️ — to bring families thoughtfully designed baby-care products that combine quality, comfort, and affordability.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {[
              {label: 'Founded', value: '2026, Baltimore, MD, USA'},
              {label: 'Primary Market', value: 'Nigeria & West Africa'},
              {label: 'Certified', value: 'Dermatologist Tested ✅'},
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