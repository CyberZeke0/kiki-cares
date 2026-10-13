"use client";
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim() !== '') {
      setSubmitted(true);
    }
  };

  return (
    <section style={{
      background: 'linear-gradient(135deg, #E0F5F3 0%, #FFF0F3 100%)',
      padding: '80px 40px',
    }}>
      <div style={{maxWidth: '680px', margin: '0 auto', textAlign: 'center'}}>

        <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>
          Stay connected
        </div>

        <h2 style={{
          fontFamily: 'sans-serif',
          fontSize: '40px',
          fontWeight: '900',
          color: '#1A2A35',
          letterSpacing: '-0.5px',
          marginBottom: '14px',
        }}>
          Get <span style={{color: '#00A699'}}>10% off</span> your first order
        </h2>

        <p style={{
          fontSize: '15px',
          color: '#6B7F8C',
          lineHeight: '1.8',
          marginBottom: '36px',
        }}>
          Join the Kiki Cares® family. Sign up for exclusive deals, parenting tips and be the first to know about new products.
        </p>

        {submitted ? (
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '24px',
            border: '1.5px solid #00A699',
          }}>
            <div style={{fontSize: '40px', marginBottom: '12px'}}>🎉</div>
            <div style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>
              You're in! Welcome to the Kiki Cares® family
            </div>
            <div style={{fontSize: '14px', color: '#6B7F8C'}}>
              Check your inbox for your 10% discount code.
            </div>
          </div>
        ) : (
          <>
            <div style={{display: 'flex', gap: '10px', maxWidth: '480px', margin: '0 auto 16px'}}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  border: '1.5px solid #E5EBF0',
                  borderRadius: '100px',
                  padding: '14px 20px',
                  fontSize: '14px',
                  color: '#1A2A35',
                  outline: 'none',
                  fontFamily: 'sans-serif',
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  backgroundColor: '#00A699',
                  color: 'white',
                  border: 'none',
                  padding: '14px 24px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontFamily: 'sans-serif',
                  whiteSpace: 'nowrap',
                }}
              >
                Claim offer
              </button>
            </div>
            <p style={{fontSize: '12px', color: '#6B7F8C'}}>
              No spam, ever. Unsubscribe at any time.
            </p>
          </>
        )}

      </div>
    </section>
  );
}