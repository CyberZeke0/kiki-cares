import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sizes = [
  { size: 'Newborn', weight: 'Up to 5 kg', age: '0-1 month', count: '36 per pack' },
  { size: 'Size 1', weight: '2 - 5 kg', age: '0-2 months', count: '36 per pack' },
  { size: 'Size 2', weight: '3 - 6 kg', age: '1-3 months', count: '34 per pack' },
  { size: 'Size 3', weight: '4 - 9 kg', age: '2-6 months', count: '30 per pack' },
  { size: 'Size 4', weight: '7 - 14 kg', age: '6-18 months', count: '28 per pack' },
  { size: 'Size 5', weight: '11 - 16 kg', age: '18-36 months', count: '24 per pack' },
  { size: 'Size 6', weight: '16 kg+', age: '3 years+', count: '20 per pack' },
];

export default function SizeGuidePage() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: '60px 24px', fontFamily: 'Quicksand, sans-serif' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>Diaper Size Guide</h1>
          <p style={{ color: '#888', marginBottom: '40px' }}>Find the perfect fit for your baby. When in doubt, size up for more comfort.</p>

          <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', background: '#00A699', padding: '16px 20px', gap: '8px' }}>
              {['Size', 'Weight', 'Age', 'Pack Count'].map(h => (
                <div key={h} style={{ fontSize: '12px', fontWeight: '800', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</div>
              ))}
            </div>
            {sizes.map((row, i) => (
              <div key={row.size} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '16px 20px', gap: '8px', background: i % 2 === 0 ? 'white' : '#f9fffe', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ fontWeight: '800', color: '#00A699', fontSize: '15px' }}>{row.size}</div>
                <div style={{ fontSize: '14px', color: '#444' }}>{row.weight}</div>
                <div style={{ fontSize: '14px', color: '#444' }}>{row.age}</div>
                <div style={{ fontSize: '14px', color: '#444' }}>{row.count}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', background: '#fff9ec', border: '1px solid #ffe4a0', borderRadius: '12px', padding: '20px 24px' }}>
            <div style={{ fontWeight: '800', color: '#1a1a1a', marginBottom: '8px' }}>💡 Tip</div>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7', margin: 0 }}>
              If your baby is between sizes or has chunky thighs, always go up a size. A good fit means no red marks on the legs and the waistband sits flat without gaps.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}