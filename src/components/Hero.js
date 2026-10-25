'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

const heroText = {
  EN: {
    heading1: 'Designed for',
    happy: 'happy,',
    comfortable: 'comfortable',
    heading2: 'babies',
    sub: 'Kiki Cares Diapers are clinically tested, hypoallergenic and engineered for 12-hour leak protection.',
    cta: 'Shop Now →',
  },
  ES: {
    heading1: 'Diseñado para bebés',
    happy: 'felices',
    comfortable: 'cómodos',
    heading2: '',
    sub: 'Los pañales Kiki Cares son clínicamente probados, hipoalergénicos y diseñados para 12 horas de protección.',
    cta: 'Comprar Ahora →',
  },
  FR: {
    heading1: 'Conçu pour des bébés',
    happy: 'heureux',
    comfortable: 'confortables',
    heading2: '',
    sub: 'Les couches Kiki Cares sont cliniquement testées, hypoallergéniques et conçues pour 12 heures de protection.',
    cta: 'Acheter Maintenant →',
  },
  NL: {
    heading1: 'Ontworpen voor',
    happy: 'blije,',
    comfortable: 'comfortabele',
    heading2: "baby's",
    sub: 'Kiki Cares luiers zijn klinisch getest, hypoallergeen en ontworpen voor 12 uur lekbescherming.',
    cta: 'Nu Winkelen →',
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = heroText[lang];

  return (
    <section style={{ fontFamily: 'Quicksand, sans-serif' }}>

      <div style={{ width: '100%', height: '55vw', maxHeight: '500px', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&auto=format&fit=crop"
          alt="Happy baby"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>

      <div style={{ background: '#fef9f5', padding: '40px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(28px, 6vw, 52px)', fontWeight: '800', lineHeight: '1.2', color: '#1a1a1a', marginBottom: '16px' }}>
          {t.heading1}{' '}
          <span style={{ color: '#00A699' }}>{t.happy}</span>
          {' '}<span style={{ color: '#FF6B8A' }}>{t.comfortable}</span>
          {t.heading2 ? ` ${t.heading2}` : ''}
        </h1>

        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.7', marginBottom: '32px', maxWidth: '520px', margin: '0 auto 32px' }}>
          {t.sub}
        </p>

        <Link href="#products" style={{ background: '#00A699', color: 'white', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          {t.cta}
        </Link>
      </div>

    </section>
  );
}