'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const faqs = [
  { q: 'What sizes do Kiki Cares diapers come in?', a: 'We offer sizes from Newborn (up to 5kg) through to Size 6 (16kg+). Check our Size Guide for the full breakdown.' },
  { q: 'Are Kiki Cares diapers safe for sensitive skin?', a: 'Yes! All our diapers are hypoallergenic, free from parabens and harmful fragrances, and dermatologist tested.' },
  { q: 'How long does delivery take?', a: 'Same-day delivery in Lagos. 1-3 business days across Nigeria. International orders take 5-10 days.' },
  { q: 'What is your return policy?', a: 'We accept returns within 7 days of delivery for unopened products. Contact us at hello@kikicares.com to initiate a return.' },
  { q: 'Do you offer bundle discounts?', a: 'Yes! Buy 3 packs or more and save 10%. Buy 6 or more and save 15%. Discounts apply automatically at checkout.' },
  { q: 'How do I track my order?', a: 'After placing your order you will receive a tracking link via email and SMS. You can also visit our Track My Order page.' },
  { q: 'Are your wipes alcohol-free?', a: 'Yes. All Kiki Cares wipes are alcohol-free, fragrance-free and enriched with Aloe Vera and Vitamin E.' },
  { q: 'Can I subscribe for monthly deliveries?', a: 'Subscriptions are coming soon! Sign up to our newsletter to be the first to know when we launch.' },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: '60px 24px', fontFamily: 'Quicksand, sans-serif' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>Frequently Asked Questions</h1>
          <p style={{ color: '#888', marginBottom: '40px' }}>Everything you need to know about Kiki Cares.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Quicksand, sans-serif', fontWeight: '700', fontSize: '15px', color: '#1a1a1a', textAlign: 'left', gap: '12px' }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '20px', color: '#00A699', flexShrink: 0 }}>{open === i ? '−' : '+'}</span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 20px 18px', fontSize: '14px', color: '#666', lineHeight: '1.7' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}