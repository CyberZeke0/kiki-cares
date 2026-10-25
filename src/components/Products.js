'use client';

import { useCart } from '@/context/CartContext';
import { useLang } from '@/context/LanguageContext';
import { useState } from 'react';

const productData = {
  EN: [
    { id: 1, name: 'Newborn Diapers', price: 14000, description: 'Ultra-soft, 12-hour protection for newborns', image: '/kiki-diaper.jpg', available: true, badge: 'Best Seller' },
    { id: 2, name: 'Baby Soft Diapers', price: 8000, description: 'Gentle care for sensitive baby skin', image: '/kiki-diaper.jpg', available: true, badge: null },
    { id: 3, name: 'Baby Feeding Bottle', price: 4000, description: 'BPA-free, anti-colic system, easy grip design', image: '/feeding-bottle.png', available: true, badge: 'New' },
    { id: 4, name: 'Baby Water Bottle', price: 3500, description: 'Pure hydration for a healthier tomorrow', image: '/water-bottle.png', available: true, badge: null },
    { id: 5, name: 'Baby Wipes (80 pack)', price: 7500, description: 'Hypoallergenic with Aloe Vera & Vitamin E', image: '/baby-wipes.png', available: true, badge: 'Popular' },
    { id: 6, name: 'Overnites Diapers', price: 1, description: 'Extra protection for peaceful nights', image: '/kiki-diaper.jpg', available: false, badge: null },
    { id: 7, name: 'Swim Diapers', price: 1, description: 'Secure fit for water adventures', image: '/kiki-diaper.jpg', available: false, badge: null },
    { id: 8, name: 'Pull-Ups', price: 1, description: 'Easy training for active toddlers', image: '/kiki-diaper.jpg', available: false, badge: null },
  ],
  ES: [
    { id: 1, name: 'Pañales para Recién Nacidos', price: 14000, description: 'Ultra suaves, 12 horas de protección', image: '/kiki-diaper.jpg', available: true, badge: 'Más Vendido' },
    { id: 2, name: 'Pañales Baby Soft', price: 8000, description: 'Cuidado suave para piel sensible', image: '/kiki-diaper.jpg', available: true, badge: null },
    { id: 3, name: 'Biberón para Bebé', price: 4000, description: 'Sin BPA, sistema anti-cólico', image: '/feeding-bottle.png', available: true, badge: 'Nuevo' },
    { id: 4, name: 'Botella de Agua para Bebé', price: 3500, description: 'Hidratación pura para un mañana más saludable', image: '/water-bottle.png', available: true, badge: null },
    { id: 5, name: 'Toallitas (80 unidades)', price: 7500, description: 'Hipoalergénicas con Aloe Vera y Vitamina E', image: '/baby-wipes.png', available: true, badge: 'Popular' },
    { id: 6, name: 'Pañales Noche', price: 1, description: 'Protección extra para noches tranquilas', image: '/kiki-diaper.jpg', available: false, badge: null },
    { id: 7, name: 'Pañales de Natación', price: 1, description: 'Ajuste seguro para aventuras acuáticas', image: '/kiki-diaper.jpg', available: false, badge: null },
    { id: 8, name: 'Pull-Ups', price: 1, description: 'Entrenamiento fácil para niños activos', image: '/kiki-diaper.jpg', available: false, badge: null },
  ],
  FR: [
    { id: 1, name: 'Couches Nouveau-né', price: 14000, description: 'Ultra-douces, 12h de protection', image: '/kiki-diaper.jpg', available: true, badge: 'Best-seller' },
    { id: 2, name: 'Couches Baby Soft', price: 8000, description: 'Soin doux pour peau sensible', image: '/kiki-diaper.jpg', available: true, badge: null },
    { id: 3, name: 'Biberon Bébé', price: 4000, description: 'Sans BPA, système anti-colique', image: '/feeding-bottle.png', available: true, badge: 'Nouveau' },
    { id: 4, name: "Bouteille d'eau Bébé", price: 3500, description: 'Hydratation pure pour demain', image: '/water-bottle.png', available: true, badge: null },
    { id: 5, name: 'Lingettes (80 pièces)', price: 7500, description: 'Hypoallergéniques à l\'Aloe Vera', image: '/baby-wipes.png', available: true, badge: 'Populaire' },
    { id: 6, name: 'Couches Nuit', price: 1, description: 'Protection supplémentaire pour nuits paisibles', image: '/kiki-diaper.jpg', available: false, badge: null },
    { id: 7, name: 'Couches de Natation', price: 1, description: 'Ajustement sécurisé pour aventures aquatiques', image: '/kiki-diaper.jpg', available: false, badge: null },
    { id: 8, name: 'Pull-Ups', price: 1, description: 'Apprentissage facile pour tout-petits', image: '/kiki-diaper.jpg', available: false, badge: null },
  ],
  NL: [
    { id: 1, name: 'Pasgeboren Luiers', price: 14000, description: 'Ultrazacht, 12 uur bescherming', image: '/kiki-diaper.jpg', available: true, badge: 'Bestseller' },
    { id: 2, name: 'Baby Soft Luiers', price: 8000, description: 'Zachte verzorging voor gevoelige huid', image: '/kiki-diaper.jpg', available: true, badge: null },
    { id: 3, name: 'Baby Zuigfles', price: 4000, description: 'BPA-vrij, anti-koliek systeem', image: '/feeding-bottle.png', available: true, badge: 'Nieuw' },
    { id: 4, name: 'Baby Waterfles', price: 3500, description: 'Pure hydratatie voor een gezondere toekomst', image: '/water-bottle.png', available: true, badge: null },
    { id: 5, name: 'Babydoekjes (80 stuks)', price: 7500, description: 'Hypoallergeen met Aloë Vera', image: '/baby-wipes.png', available: true, badge: 'Populair' },
    { id: 6, name: 'Nacht Luiers', price: 1, description: 'Extra bescherming voor rustige nachten', image: '/kiki-diaper.jpg', available: false, badge: null },
    { id: 7, name: 'Zwemluiers', price: 1, description: 'Veilige pasvorm voor wateravonturen', image: '/kiki-diaper.jpg', available: false, badge: null },
    { id: 8, name: 'Pull-Ups', price: 1, description: 'Gemakkelijk trainen voor actieve peuters', image: '/kiki-diaper.jpg', available: false, badge: null },
  ],
};

const sectionText = {
  EN: { title: 'Our Products', sub: 'Premium baby care made for African babies', addToCart: 'Add to Cart', added: '✓ Added!', comingSoon: 'Coming Soon', notifyMe: 'Notify Me' },
  ES: { title: 'Nuestros Productos', sub: 'Cuidado premium para bebés africanos', addToCart: 'Añadir al Carrito', added: '✓ Añadido!', comingSoon: 'Próximamente', notifyMe: 'Notificarme' },
  FR: { title: 'Nos Produits', sub: 'Soins premium pour bébés africains', addToCart: 'Ajouter au Panier', added: '✓ Ajouté!', comingSoon: 'Bientôt disponible', notifyMe: 'Me notifier' },
  NL: { title: 'Onze Producten', sub: 'Premium babyverzorging voor Afrikaanse baby\'s', addToCart: 'In Winkelwagen', added: '✓ Toegevoegd!', comingSoon: 'Binnenkort', notifyMe: 'Meld mij aan' },
};

export default function Products() {
  const { addToCart } = useCart();
  const { lang } = useLang();
  const [added, setAdded] = useState({});

  const products = productData[lang];
  const t = sectionText[lang];

  const handleAdd = (product) => {
    addToCart(product);
    setAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

  return (
    <section id="products" style={{ padding: '60px 20px', background: '#fff', fontFamily: 'Quicksand, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>
            {t.title}
          </h2>
          <p style={{ color: '#666', fontSize: '16px' }}>{t.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px' }}>
          {products.map((product) => (
            <div key={product.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', position: 'relative', border: '1px solid #f0f0f0' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'; }}
            >
              {product.badge && (
                <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#FF6B8A', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', zIndex: 2 }}>
                  {product.badge}
                </div>
              )}
              {!product.available && (
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#888', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', zIndex: 2 }}>
                  {t.comingSoon}
                </div>
              )}

              <div style={{ width: '100%', height: '220px', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '6px' }}>{product.name}</h3>
                <p style={{ fontSize: '13px', color: '#888', marginBottom: '12px', lineHeight: '1.4' }}>{product.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '18px', fontWeight: '800', color: '#00A699' }}>
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.available ? (
                    <button onClick={() => handleAdd(product)} style={{ background: added[product.id] ? '#22c55e' : '#00A699', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                      {added[product.id] ? t.added : t.addToCart}
                    </button>
                  ) : (
                    <button disabled style={{ background: '#e5e7eb', color: '#9ca3af', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'not-allowed' }}>
                      {t.notifyMe}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}