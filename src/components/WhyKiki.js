'use client';

import { useLang } from '@/context/LanguageContext';

const featuresData = {
  EN: [
    { icon: '🌿', title: 'Hypoallergenic Formula', desc: "Free from parabens, fragrances and harmful dyes. Every ingredient is chosen with your baby's safety as the top priority.", bg: '#E0F5F3' },
    { icon: '💧', title: '12-Hour Leak Lock', desc: "Our triple-layer absorbent core locks in wetness and keeps your baby's skin dry for up to 12 hours day and night.", bg: '#FFF0F3' },
    { icon: '🤍', title: 'Dermatologist Approved', desc: 'Clinically tested and certified safe for even the most sensitive newborn skin. Recommended by Nigerian paediatricians.', bg: '#FFF9EC' },
    { icon: '🎯', title: 'Perfect Fit Technology', desc: "Stretchy waistband and leg cuffs with our Snug & Dry design prevents leaks without leaving red marks on delicate skin.", bg: '#EBF4FF' },
    { icon: '🌍', title: 'Made for African Babies', desc: "Breathable materials specifically designed for Nigeria's warm climate. Keeps babies cool, dry and comfortable all day.", bg: '#F0EEFF' },
    { icon: '🚚', title: 'Fast Nigeria Delivery', desc: 'Same-day delivery in Lagos. 1-3 days across Nigeria. Free shipping on orders over ₦10,000. Track your order in real time.', bg: '#E0F5F3' },
  ],
  ES: [
    { icon: '🌿', title: 'Fórmula Hipoalergénica', desc: 'Sin parabenos, fragancias ni tintes dañinos. Cada ingrediente se elige priorizando la seguridad de tu bebé.', bg: '#E0F5F3' },
    { icon: '💧', title: 'Protección 12 Horas', desc: 'Nuestro núcleo absorbente de triple capa mantiene la piel de tu bebé seca hasta 12 horas.', bg: '#FFF0F3' },
    { icon: '🤍', title: 'Aprobado por Dermatólogos', desc: 'Clínicamente probado y certificado seguro para la piel más sensible. Recomendado por pediatras.', bg: '#FFF9EC' },
    { icon: '🎯', title: 'Tecnología de Ajuste Perfecto', desc: 'Cintura elástica y puños para piernas que previenen fugas sin dejar marcas en la piel delicada.', bg: '#EBF4FF' },
    { icon: '🌍', title: 'Hecho para Bebés Africanos', desc: 'Materiales transpirables diseñados para climas cálidos. Mantiene a los bebés frescos y cómodos todo el día.', bg: '#F0EEFF' },
    { icon: '🚚', title: 'Entrega Rápida', desc: 'Entrega el mismo día en Lagos. 1-3 días en toda Nigeria. Envío gratis en pedidos mayores a ₦10,000.', bg: '#E0F5F3' },
  ],
  FR: [
    { icon: '🌿', title: 'Formule Hypoallergénique', desc: 'Sans parabènes, parfums ni colorants nocifs. Chaque ingrédient est choisi pour la sécurité de votre bébé.', bg: '#E0F5F3' },
    { icon: '💧', title: 'Protection 12 Heures', desc: 'Notre noyau absorbant triple couche garde la peau de votre bébé au sec pendant 12 heures.', bg: '#FFF0F3' },
    { icon: '🤍', title: 'Approuvé par les Dermatologues', desc: 'Cliniquement testé et certifié sûr pour les peaux les plus sensibles. Recommandé par des pédiatres.', bg: '#FFF9EC' },
    { icon: '🎯', title: 'Technologie Ajustement Parfait', desc: "Ceinture élastique et manchettes qui empêchent les fuites sans laisser de marques sur la peau délicate.", bg: '#EBF4FF' },
    { icon: '🌍', title: 'Fait pour les Bébés Africains', desc: "Matériaux respirants conçus pour les climats chauds. Garde les bébés frais et à l'aise toute la journée.", bg: '#F0EEFF' },
    { icon: '🚚', title: 'Livraison Rapide', desc: 'Livraison le jour même à Lagos. 1-3 jours dans tout le Nigeria. Livraison gratuite au-dessus de ₦10,000.', bg: '#E0F5F3' },
  ],
  NL: [
    { icon: '🌿', title: 'Hypoallergene Formule', desc: 'Vrij van parabenen, geuren en schadelijke kleurstoffen. Elk ingrediënt is gekozen met de veiligheid van uw baby als prioriteit.', bg: '#E0F5F3' },
    { icon: '💧', title: '12-Uur Lekbescherming', desc: 'Onze drielaagse absorberende kern houdt de huid van uw baby droog tot 12 uur.', bg: '#FFF0F3' },
    { icon: '🤍', title: 'Dermatoloog Goedgekeurd', desc: 'Klinisch getest en gecertificeerd veilig voor de meest gevoelige huid. Aanbevolen door kinderartsen.', bg: '#FFF9EC' },
    { icon: '🎯', title: 'Perfecte Pasvorm Technologie', desc: 'Elastische taille en beenboorden voorkomen lekken zonder rode strepen op de tere huid.', bg: '#EBF4FF' },
    { icon: '🌍', title: "Gemaakt voor Afrikaanse Baby's", desc: 'Ademende materialen ontworpen voor warme klimaten. Houdt baby koel en comfortabel de hele dag.', bg: '#F0EEFF' },
    { icon: '🚚', title: 'Snelle Levering', desc: 'Zelfde dag levering in Lagos. 1-3 dagen door heel Nigeria. Gratis verzending boven ₦10,000.', bg: '#E0F5F3' },
  ],
};

const headingText = {
  EN: { tag: 'Why Kiki Cares', title: 'Our promise to every baby' },
  ES: { tag: 'Por qué Kiki Cares', title: 'Nuestra promesa a cada bebé' },
  FR: { tag: 'Pourquoi Kiki Cares', title: 'Notre promesse à chaque bébé' },
  NL: { tag: 'Waarom Kiki Cares', title: "Onze belofte aan elke baby" },
};

export default function WhyKiki() {
  const { lang } = useLang();
  const features = featuresData[lang];
  const h = headingText[lang];

  return (
    <section style={{ background: '#F7F8FA', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
            {h.tag}
          </div>
          <h2 style={{ fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px', margin: 0 }}>
            {h.title}
          </h2>
        </div>

        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {features.map((feature) => (
            <div key={feature.title} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '28px', border: '1.5px solid #E5EBF0' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: feature.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '16px' }}>
                {feature.icon}
              </div>
              <div style={{ fontFamily: 'Quicksand, sans-serif', fontSize: '17px', fontWeight: '800', color: '#1A2A35', marginBottom: '10px' }}>
                {feature.title}
              </div>
              <div style={{ fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7' }}>
                {feature.desc}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 767px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}