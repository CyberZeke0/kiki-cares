'use client';
import { useState } from 'react';

const tips = [
  {
    id: 'newborn',
    title: 'Newborn Care',
    icon: '👶',
    content: 'Newborns sleep 16–17 hours a day. Feed every 2–3 hours, keep the umbilical stump dry, and always place baby on their back to sleep.',
  },
  {
    id: 'toddler',
    title: 'Toddler Tips',
    icon: '🧒',
    content: 'Toddlers thrive on routine. Encourage independence with simple choices, set clear boundaries, and read together daily to boost language development.',
  },
  {
    id: 'feeding',
    title: 'Feeding & Nutrition',
    icon: '🍼',
    content: 'Breast milk or formula for the first 6 months. Introduce solids gradually — start with purees, then soft finger foods. Avoid honey before age 1.',
  },
  {
    id: 'sleep',
    title: 'Sleep Routines',
    icon: '🌙',
    content: 'A consistent bedtime routine (bath, feed, story) signals sleep time. Newborns need 14–17 hrs; toddlers 11–14 hrs. Avoid screens before bed.',
  },
  {
    id: 'development',
    title: 'Child Development',
    icon: '🌱',
    content: 'Every child develops at their own pace. Tummy time builds neck strength. Talk and sing to your baby constantly — it wires the brain for language.',
  },
  {
    id: 'health',
    title: 'Health & Safety',
    icon: '🏥',
    content: 'Keep up with vaccinations and well-child visits. Babyproof your home by 4 months. Always use a rear-facing car seat until age 2.',
  },
];

const stages = [
  {
    title: 'Newborn (0–3 months)',
    color: '#FF6B8A',
    points: [
      'Feed on demand, every 2–3 hours',
      'Watch for hunger and tired cues',
      'Skin-to-skin contact builds bonding',
      'Track wet diapers to check hydration',
    ],
  },
  {
    title: 'Infant (3–12 months)',
    color: '#00A699',
    points: [
      'Introduce solids at 6 months',
      'Encourage crawling and sitting',
      'Read, sing and talk constantly',
      'First teeth may appear at 6 months',
    ],
  },
  {
    title: 'Toddler (1–3 years)',
    color: '#F7B731',
    points: [
      'Expect tantrums — stay calm',
      'Offer 2 choices to build autonomy',
      'Limit screen time to 1 hr/day',
      'Potty training readiness varies',
    ],
  },
];

export default function ParentingPage() {
  const [active, setActive] = useState(null);

  return (
    <main style={{ fontFamily: 'Quicksand, sans-serif', background: '#fff', minHeight: '100vh' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #e6f7f6 0%, #fff0f4 100%)', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>👨‍👩‍👧</div>
        <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1a1a1a', margin: '0 0 12px' }}>Parenting Guide</h1>
        <p style={{ fontSize: '16px', color: '#555', maxWidth: '500px', margin: '0 auto' }}>
          Practical tips for every stage — from newborn nights to toddler tantrums.
        </p>
      </section>

      {/* Tip Cards */}
      <section id="newborn" style={{ padding: '50px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', marginBottom: '30px', textAlign: 'center' }}>Parenting Tips</h2>
        <div className="par-grid">
          {tips.map(tip => (
            <div
              key={tip.id}
              id={tip.id}
              onClick={() => setActive(active === tip.id ? null : tip.id)}
              style={{ border: '2px solid', borderColor: active === tip.id ? '#00A699' : '#eee', borderRadius: '14px', padding: '20px', cursor: 'pointer', transition: 'all 0.2s', background: active === tip.id ? '#e6f7f6' : '#fafafa' }}
            >
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{tip.icon}</div>
              <h3 style={{ fontWeight: '800', fontSize: '16px', color: '#1a1a1a', margin: '0 0 8px' }}>{tip.title}</h3>
              {active === tip.id && (
                <p style={{ fontSize: '14px', color: '#555', margin: 0, lineHeight: '1.6' }}>{tip.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section id="toddler" style={{ background: '#f9f9f9', padding: '50px 20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1a1a1a', marginBottom: '30px', textAlign: 'center' }}>Stages of Growth</h2>
        <div className="stages-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {stages.map(stage => (
            <div key={stage.title} style={{ background: 'white', borderRadius: '14px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', borderTop: `4px solid ${stage.color}` }}>
              <h3 style={{ fontWeight: '800', fontSize: '17px', color: stage.color, marginBottom: '16px' }}>{stage.title}</h3>
              <ul style={{ margin: 0, paddingLeft: '18px' }}>
                {stage.points.map(p => (
                  <li key={p} style={{ fontSize: '14px', color: '#444', marginBottom: '8px', lineHeight: '1.5' }}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700;800;900&display=swap');
        .par-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .stages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 767px) {
          .par-grid { grid-template-columns: 1fr !important; }
          .stages-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}