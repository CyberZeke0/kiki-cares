'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const tips = [
  { icon: '🥦', title: 'Nutrition', desc: 'Eat folate-rich foods like leafy greens, beans and fortified cereals. Take your prenatal vitamins daily.' },
  { icon: '💧', title: 'Stay Hydrated', desc: 'Drink at least 8-10 glasses of water daily. Proper hydration reduces swelling and supports amniotic fluid.' },
  { icon: '🚶‍♀️', title: 'Gentle Exercise', desc: 'Walking and prenatal yoga are great for circulation, mood and preparing your body for labour.' },
  { icon: '😴', title: 'Rest Well', desc: 'Sleep on your left side from the second trimester to improve blood flow to your baby.' },
  { icon: '🏥', title: 'Antenatal Visits', desc: 'Attend all scheduled antenatal appointments. Early checks can catch and prevent complications.' },
  { icon: '🧘‍♀️', title: 'Manage Stress', desc: 'High stress affects your baby. Try breathing exercises, journalling or talking to someone you trust.' },
];

export default function PregnancyPage() {
  const [lmpDate, setLmpDate] = useState('');
  const [dueDate, setDueDate] = useState(null);

  const calculate = () => {
    if (!lmpDate) return;
    const lmp = new Date(lmpDate);
    const due = new Date(lmp);
    due.setDate(due.getDate() + 280);
    setDueDate(due.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }));
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9f9f9', fontFamily: 'Quicksand, sans-serif' }}>

        <div style={{ background: 'linear-gradient(135deg, #00A699, #FF6B8A)', padding: '60px 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: 'white', marginBottom: '16px' }}>
            Pregnancy Guide
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.9)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
            Everything you need for a healthy, happy pregnancy in Nigeria.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px' }}>

          {/* Due Date Calculator */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#1a1a1a', marginBottom: '6px' }}>📅 Due Date Calculator</h2>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>Enter the first day of your last menstrual period.</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <input
                type="date"
                value={lmpDate}
                onChange={e => setLmpDate(e.target.value)}
                style={{ flex: 1, minWidth: '200px', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e0e0e0', fontSize: '14px', fontFamily: 'Quicksand, sans-serif' }}
              />
              <button
                onClick={calculate}
                style={{ background: '#00A699', color: 'white', border: 'none', padding: '12px 28px', borderRadius: '50px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', fontFamily: 'Quicksand, sans-serif' }}
              >
                Calculate
              </button>
            </div>
            {dueDate && (
              <div style={{ marginTop: '20px', background: '#e6f7f6', borderRadius: '10px', padding: '16px 20px' }}>
                <div style={{ fontSize: '13px', color: '#00A699', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>Your Estimated Due Date</div>
                <div style={{ fontSize: '22px', fontWeight: '900', color: '#1a1a1a' }}>{dueDate}</div>
              </div>
            )}
            <p style={{ marginTop: '12px', fontSize: '12px', color: '#aaa' }}>* This is an estimate. Always confirm with your doctor.</p>
          </div>

          {/* Tips */}
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>Pregnancy Tips</h2>
          <div className="preg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
            {tips.map(tip => (
              <div key={tip.title} style={{ background: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{tip.icon}</div>
                <div style={{ fontWeight: '800', fontSize: '15px', color: '#1a1a1a', marginBottom: '6px' }}>{tip.title}</div>
                <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.7' }}>{tip.desc}</div>
              </div>
            ))}
          </div>

          {/* Trimesters */}
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom: '20px' }}>Your Trimesters</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { t: 'First Trimester (Weeks 1–12)', color: '#e6f7f6', border: '#00A699', desc: "Your baby's organs begin forming. You may experience nausea, fatigue and mood changes. Take folic acid daily and avoid alcohol and smoking." },
              { t: 'Second Trimester (Weeks 13–26)', color: '#fff0f3', border: '#FF6B8A', desc: 'Most mums feel better now. Your bump grows and you may feel baby move for the first time. A great time for antenatal scans.' },
              { t: 'Third Trimester (Weeks 27–40)', color: '#fff9ec', border: '#f59e0b', desc: 'Baby is growing fast. You may feel breathless and uncomfortable. Prepare your hospital bag and birth plan. Rest as much as possible.' },
            ].map(item => (
              <div key={item.t} style={{ background: item.color, border: `1.5px solid ${item.border}`, borderRadius: '12px', padding: '18px 20px' }}>
                <div style={{ fontWeight: '800', fontSize: '15px', color: '#1a1a1a', marginBottom: '6px' }}>{item.t}</div>
                <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.7' }}>{item.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .preg-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </>
  );
}