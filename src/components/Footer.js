'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

const footerData = {
  EN: {
    tagline: 'Premium baby care made with love for Nigerian babies and their families. Trusted by 50,000+ parents across Nigeria.',
    copyright: '© 2026 Kiki Cares®. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    columns: {
      Products: [
        { label: 'Newborn Diapers', href: '/diapers/newborn' },
        { label: 'Baby Soft', href: '/diapers/baby-soft' },
        { label: 'Active Fit', href: '/diapers/active-fit' },
        { label: 'Overnites', href: '/diapers/overnites' },
        { label: 'Swim Diapers', href: '/diapers/swim' },
        { label: 'Baby Wipes', href: '/wipes/pure-water-wipes' },
        { label: 'Pull-Ups', href: '/diapers/pull-ups' },
        { label: 'Bundle Packs', href: '/#products' },
      ],
      Help: [
        { label: 'Size Guide', href: '/size-guide' },
        { label: 'Track My Order', href: '/track-order' },
        { label: 'Delivery Info', href: '/delivery' },
        { label: 'Returns Policy', href: '/returns' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact Us', href: '/contact' },
      ],
      Company: [
        { label: 'About Kiki Cares', href: '/about' },
        { label: 'Our Story', href: '/founder' },
        { label: 'Parenting Hub', href: '/parenting' },
        { label: 'Sustainability', href: '/why-kiki' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  },
  ES: {
    tagline: 'Cuidado premium para bebés nigerianos y sus familias. Con la confianza de más de 50,000 padres en Nigeria.',
    copyright: '© 2026 Kiki Cares®. Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Uso',
    columns: {
      Productos: [
        { label: 'Pañales Recién Nacido', href: '/diapers/newborn' },
        { label: 'Baby Soft', href: '/diapers/baby-soft' },
        { label: 'Active Fit', href: '/diapers/active-fit' },
        { label: 'Pañales Noche', href: '/diapers/overnites' },
        { label: 'Pañales Natación', href: '/diapers/swim' },
        { label: 'Toallitas', href: '/wipes/pure-water-wipes' },
        { label: 'Pull-Ups', href: '/diapers/pull-ups' },
        { label: 'Packs Combinados', href: '/#products' },
      ],
      Ayuda: [
        { label: 'Guía de Tallas', href: '/size-guide' },
        { label: 'Seguir Pedido', href: '/track-order' },
        { label: 'Info de Entrega', href: '/delivery' },
        { label: 'Política de Devoluciones', href: '/returns' },
        { label: 'Preguntas Frecuentes', href: '/faq' },
        { label: 'Contáctanos', href: '/contact' },
      ],
      Empresa: [
        { label: 'Sobre Kiki Cares', href: '/about' },
        { label: 'Nuestra Historia', href: '/founder' },
        { label: 'Hub de Crianza', href: '/parenting' },
        { label: 'Sostenibilidad', href: '/why-kiki' },
        { label: 'Carreras', href: '/careers' },
      ],
    },
  },
  FR: {
    tagline: "Soins premium pour bébés nigérians et leurs familles. Approuvé par plus de 50 000 parents au Nigeria.",
    copyright: '© 2026 Kiki Cares®. Tous droits réservés.',
    privacy: 'Politique de Confidentialité',
    terms: "Conditions d'Utilisation",
    columns: {
      Produits: [
        { label: 'Couches Nouveau-né', href: '/diapers/newborn' },
        { label: 'Baby Soft', href: '/diapers/baby-soft' },
        { label: 'Active Fit', href: '/diapers/active-fit' },
        { label: 'Couches Nuit', href: '/diapers/overnites' },
        { label: 'Couches Natation', href: '/diapers/swim' },
        { label: 'Lingettes', href: '/wipes/pure-water-wipes' },
        { label: 'Pull-Ups', href: '/diapers/pull-ups' },
        { label: 'Packs Groupés', href: '/#products' },
      ],
      Aide: [
        { label: 'Guide des Tailles', href: '/size-guide' },
        { label: 'Suivre ma Commande', href: '/track-order' },
        { label: 'Info Livraison', href: '/delivery' },
        { label: 'Politique de Retour', href: '/returns' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contactez-nous', href: '/contact' },
      ],
      Entreprise: [
        { label: 'À propos', href: '/about' },
        { label: 'Notre Histoire', href: '/founder' },
        { label: 'Hub Parentalité', href: '/parenting' },
        { label: 'Durabilité', href: '/why-kiki' },
        { label: 'Carrières', href: '/careers' },
      ],
    },
  },
  NL: {
    tagline: "Premium babyverzorging met liefde gemaakt voor Nigeriaanse baby's en hun families. Vertrouwd door 50.000+ ouders.",
    copyright: '© 2026 Kiki Cares®. Alle rechten voorbehouden.',
    privacy: 'Privacybeleid',
    terms: 'Gebruiksvoorwaarden',
    columns: {
      Producten: [
        { label: 'Pasgeboren Luiers', href: '/diapers/newborn' },
        { label: 'Baby Soft', href: '/diapers/baby-soft' },
        { label: 'Active Fit', href: '/diapers/active-fit' },
        { label: 'Nacht Luiers', href: '/diapers/overnites' },
        { label: 'Zwemluiers', href: '/diapers/swim' },
        { label: 'Babydoekjes', href: '/wipes/pure-water-wipes' },
        { label: 'Pull-Ups', href: '/diapers/pull-ups' },
        { label: 'Bundelpakketten', href: '/#products' },
      ],
      Help: [
        { label: 'Maatgids', href: '/size-guide' },
        { label: 'Bestelling Volgen', href: '/track-order' },
        { label: 'Leveringsinfo', href: '/delivery' },
        { label: 'Retourbeleid', href: '/returns' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contacteer Ons', href: '/contact' },
      ],
      Bedrijf: [
        { label: 'Over Kiki Cares', href: '/about' },
        { label: 'Ons Verhaal', href: '/founder' },
        { label: 'Ouderschap Hub', href: '/parenting' },
        { label: 'Duurzaamheid', href: '/why-kiki' },
        { label: 'Carrières', href: '/careers' },
      ],
    },
  },
};

export default function Footer() {
  const { lang } = useLang();
  const d = footerData[lang];

  return (
    <footer style={{ backgroundColor: '#1A2A35' }}>

      <div className="footer-grid" style={{
        maxWidth: '1280px', margin: '0 auto', padding: '60px 24px',
        display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>

        <div>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontSize: '26px', fontWeight: '900', color: 'white', marginBottom: '14px', fontFamily: 'Quicksand, sans-serif' }}>
              Kiki <span style={{ color: '#00A699' }}>Cares</span>®
            </div>
          </Link>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', marginBottom: '20px' }}>
            {d.tagline}
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { label: 'FB', href: 'https://facebook.com' },
              { label: 'IG', href: 'https://instagram.com' },
              { label: 'TW', href: 'https://twitter.com' },
              { label: 'YT', href: 'https://youtube.com' },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', fontWeight: '700', color: 'white', textDecoration: 'none',
              }}>
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(d.columns).map(([title, items]) => (
          <div key={title}>
            <h4 style={{ fontSize: '13px', fontWeight: '800', color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
              {title}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '20px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
          {d.copyright}{' '}
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>{d.privacy}</Link>
          {' · '}
          <Link href="/terms" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>{d.terms}</Link>
        </p>
        <p style={{ fontSize: '12px', color: '#00A699', fontWeight: '600', margin: 0 }}>
          Powered by 14th Tech ⚡
        </p>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </footer>
  );
}