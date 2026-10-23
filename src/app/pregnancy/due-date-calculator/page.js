"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DueDateCalculator() {
  const [method, setMethod] = useState('lmp');
  const [lmpDate, setLmpDate] = useState('');
  const [conceptionDate, setConceptionDate] = useState('');
  const [ultrasoundDate, setUltrasoundDate] = useState('');
  const [weeksAtScan, setWeeksAtScan] = useState('');
  const [result, setResult] = useState(null);

  const calculateDueDate = () => {
    let dueDate = null;
    let weeksPregnant = null;

    if (method === 'lmp' && lmpDate) {
      const lmp = new Date(lmpDate);
      dueDate = new Date(lmp);
      dueDate.setDate(dueDate.getDate() + 280);
      const today = new Date();
      const diffDays = Math.floor((today - lmp) / (1000 * 60 * 60 * 24));
      weeksPregnant = Math.floor(diffDays / 7);
    } else if (method === 'conception' && conceptionDate) {
      const conception = new Date(conceptionDate);
      dueDate = new Date(conception);
      dueDate.setDate(dueDate.getDate() + 266);
      const today = new Date();
      const diffDays = Math.floor((today - conception) / (1000 * 60 * 60 * 24));
      weeksPregnant = Math.floor(diffDays / 7) + 2;
    } else if (method === 'ultrasound' && ultrasoundDate && weeksAtScan) {
      const scan = new Date(ultrasoundDate);
      const weeksLeft = 40 - parseInt(weeksAtScan);
      dueDate = new Date(scan);
      dueDate.setDate(dueDate.getDate() + (weeksLeft * 7));
      const today = new Date();
      const diffDays = Math.floor((today - scan) / (1000 * 60 * 60 * 24));
      weeksPregnant = parseInt(weeksAtScan) + Math.floor(diffDays / 7);
    }

    if (dueDate) {
      const today = new Date();
      const daysLeft = Math.floor((dueDate - today) / (1000 * 60 * 60 * 24));
      const trimester = weeksPregnant <= 12 ? '1st Trimester' : weeksPregnant <= 27 ? '2nd Trimester' : '3rd Trimester';

      setResult({
        dueDate: dueDate.toLocaleDateString('en-NG', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
        weeksPregnant: Math.min(weeksPregnant, 40),
        daysLeft: Math.max(daysLeft, 0),
        trimester,
        month: dueDate.toLocaleDateString('en-NG', { month: 'long', year: 'numeric' }),
      });
    }
  };

  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <div style={{background: 'linear-gradient(135deg, #FFF0F3 0%, #E0F5F3 100%)', padding: '60px 40px'}}>
          <div style={{maxWidth: '700px', margin: '0 auto', textAlign: 'center'}}>
            <div style={{fontSize: '64px', marginBottom: '16px'}}>🤰</div>
            <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px'}}>Pregnancy Tools</div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '900', color: '#1A2A35', marginBottom: '16px', letterSpacing: '-1px'}}>
              Due Date Calculator
            </h1>
            <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8'}}>
              Find out when your baby is due. Enter your last period, conception date or ultrasound results to calculate your estimated due date.
            </p>
          </div>
        </div>

        {/* Calculator */}
        <div style={{padding: '60px 40px', maxWidth: '700px', margin: '0 auto'}}>

          {/* Method selector */}
          <div style={{marginBottom: '32px'}}>
            <div style={{fontSize: '14px', fontWeight: '700', color: '#1A2A35', marginBottom: '12px', fontFamily: 'sans-serif'}}>
              Calculate by:
            </div>
            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
              {[
                {id: 'lmp', label: '📅 Last Period'},
                {id: 'conception', label: '💕 Conception Date'},
                {id: 'ultrasound', label: '🔊 Ultrasound'},
              ].map((m) => (
                <button key={m.id} onClick={() => { setMethod(m.id); setResult(null); }}
                  style={{padding: '12px 20px', borderRadius: '100px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif', border: '2px solid', borderColor: method === m.id ? '#00A699' : '#E5EBF0', backgroundColor: method === m.id ? '#00A699' : 'white', color: method === m.id ? 'white' : '#1A2A35', transition: 'all 0.2s'}}>
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input fields */}
          <div style={{backgroundColor: '#F7F8FA', borderRadius: '20px', padding: '32px', marginBottom: '24px', border: '1.5px solid #E5EBF0'}}>
            {method === 'lmp' && (
              <div>
                <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>
                  First day of your last period
                </label>
                <input type="date" value={lmpDate} onChange={e => { setLmpDate(e.target.value); setResult(null); }}
                  style={{width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5EBF0', fontSize: '15px', fontFamily: 'sans-serif', outline: 'none', color: '#1A2A35', boxSizing: 'border-box', backgroundColor: 'white'}} />
                <p style={{fontSize: '12px', color: '#6B7F8C', marginTop: '8px'}}>This is the most common way to calculate your due date. Your due date is 40 weeks from the first day of your last period.</p>
              </div>
            )}

            {method === 'conception' && (
              <div>
                <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>
                  Date of conception
                </label>
                <input type="date" value={conceptionDate} onChange={e => { setConceptionDate(e.target.value); setResult(null); }}
                  style={{width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5EBF0', fontSize: '15px', fontFamily: 'sans-serif', outline: 'none', color: '#1A2A35', boxSizing: 'border-box', backgroundColor: 'white'}} />
                <p style={{fontSize: '12px', color: '#6B7F8C', marginTop: '8px'}}>If you know your conception date, your due date is approximately 266 days (38 weeks) from that date.</p>
              </div>
            )}

            {method === 'ultrasound' && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <div>
                  <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>Date of ultrasound scan</label>
                  <input type="date" value={ultrasoundDate} onChange={e => { setUltrasoundDate(e.target.value); setResult(null); }}
                    style={{width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5EBF0', fontSize: '15px', fontFamily: 'sans-serif', outline: 'none', color: '#1A2A35', boxSizing: 'border-box', backgroundColor: 'white'}} />
                </div>
                <div>
                  <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>How many weeks pregnant at scan?</label>
                  <input type="number" placeholder="e.g. 12" min="1" max="40" value={weeksAtScan} onChange={e => { setWeeksAtScan(e.target.value); setResult(null); }}
                    style={{width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5EBF0', fontSize: '15px', fontFamily: 'sans-serif', outline: 'none', color: '#1A2A35', boxSizing: 'border-box', backgroundColor: 'white'}} />
                </div>
              </div>
            )}
          </div>

          <button onClick={calculateDueDate}
            style={{width: '100%', backgroundColor: '#00A699', color: 'white', border: 'none', padding: '16px', borderRadius: '100px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif', marginBottom: '32px'}}>
            Calculate My Due Date 🍼
          </button>

          {/* Result */}
          {result && (
            <div style={{backgroundColor: '#E0F5F3', borderRadius: '24px', padding: '32px', border: '2px solid #00A699', marginBottom: '40px'}}>
              <div style={{textAlign: 'center', marginBottom: '28px'}}>
                <div style={{fontSize: '48px', marginBottom: '12px'}}>🎉</div>
                <div style={{fontSize: '14px', fontWeight: '600', color: '#00A699', marginBottom: '8px', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em'}}>Your estimated due date</div>
                <div style={{fontFamily: 'sans-serif', fontSize: '28px', fontWeight: '900', color: '#1A2A35', marginBottom: '4px'}}>{result.dueDate}</div>
                <div style={{fontSize: '14px', color: '#6B7F8C'}}>Your baby is expected in {result.month}</div>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px'}}>
                {[
                  {label: 'Weeks Pregnant', value: `${result.weeksPregnant} weeks`, icon: '📅'},
                  {label: 'Days Until Birth', value: `${result.daysLeft} days`, icon: '⏱️'},
                  {label: 'Trimester', value: result.trimester, icon: '🤰'},
                ].map((stat) => (
                  <div key={stat.label} style={{backgroundColor: 'white', borderRadius: '16px', padding: '16px', textAlign: 'center', border: '1px solid #A0D8D4'}}>
                    <div style={{fontSize: '24px', marginBottom: '8px'}}>{stat.icon}</div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '4px'}}>{stat.value}</div>
                    <div style={{fontSize: '11px', color: '#6B7F8C'}}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <p style={{fontSize: '12px', color: '#6B7F8C', textAlign: 'center', marginTop: '16px', lineHeight: '1.6'}}>
                ⚠️ This is an estimate. Only about 5% of babies are born on their exact due date. Always confirm with your doctor or midwife.
              </p>
            </div>
          )}

          {/* Trimester guide */}
          <div>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '900', color: '#1A2A35', marginBottom: '20px'}}>
              Your pregnancy journey
            </h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {[
                {trimester: '1st Trimester', weeks: 'Weeks 1-12', emoji: '🌱', desc: 'Your baby grows from a tiny embryo to a fully formed fetus. Morning sickness and fatigue are common.', color: '#E0F5F3', border: '#00A699'},
                {trimester: '2nd Trimester', weeks: 'Weeks 13-27', emoji: '💪', desc: 'The most comfortable trimester for most mums. Baby starts moving and you\'ll feel the first kicks!', color: '#FFF9EC', border: '#FFD166'},
                {trimester: '3rd Trimester', weeks: 'Weeks 28-40', emoji: '🍼', desc: 'Baby grows rapidly and prepares for birth. Time to get your hospital bag ready with Kiki Cares® essentials!', color: '#FFF0F3', border: '#FF6B8A'},
              ].map((t) => (
                <div key={t.trimester} style={{backgroundColor: t.color, borderRadius: '16px', padding: '20px', border: `1.5px solid ${t.border}`, display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                  <div style={{fontSize: '32px', flexShrink: 0}}>{t.emoji}</div>
                  <div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '800', color: '#1A2A35', marginBottom: '2px'}}>{t.trimester}</div>
                    <div style={{fontSize: '12px', fontWeight: '600', color: '#6B7F8C', marginBottom: '6px'}}>{t.weeks}</div>
                    <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.6'}}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}