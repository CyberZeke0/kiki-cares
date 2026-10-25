'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: '60px 24px', fontFamily: 'Quicksand, sans-serif' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>Contact Us</h1>
          <p style={{ color: '#888', marginBottom: '40px' }}>We'd love to hear from you. Fill the form below and we'll respond within 24 hours.</p>

          <div style={{ background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            {[
              { label: 'Full Name', type: 'text', placeholder: 'Your name' },
              { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              { label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' },
            ].map(field => (
              <div key={field.label} style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#444', marginBottom: '6px' }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '14px', fontFamily: 'Quicksand, sans-serif', boxSizing: 'border-box' }} />
              </div>
            ))}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#444', marginBottom: '6px' }}>Message</label>
              <textarea placeholder="How can we help?" rows={5} style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '14px', fontFamily: 'Quicksand, sans-serif', boxSizing: 'border-box', resize: 'vertical' }} />
            </div>
            <button style={{ width: '100%', background: '#00A699', color: 'white', border: 'none', padding: '14px', borderRadius: '50px', fontWeight: '700', fontSize: '15px', cursor: 'pointer', fontFamily: 'Quicksand, sans-serif' }}>
              Send Message
            </button>
          </div>

          <div style={{ marginTop: '32px', background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            {[
              { icon: '📧', label: 'Email', value: 'hello@kikicares.com' },
              { icon: '📞', label: 'Phone', value: '+234 800 KIKI CARE' },
              { icon: '📍', label: 'Address', value: 'Lagos, Nigeria' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '12px', color: '#999', fontWeight: '700', textTransform: 'uppercase' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: '600' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}