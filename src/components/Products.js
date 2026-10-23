"use client";
import { useCart } from '@/context/CartContext';

const products = [
  { id: 1, emoji: '🌸', image: '/kiki-diaper.jpg', name: "Kiki Cares® Newborn", desc: "Ultra-soft for 0-3 months. Hypoallergenic & gentle on delicate skin.", price: '₦3,500', stars: 5, reviews: 2847, badge: 'Bestseller', badgeColor: '#FF6B8A', bg: 'linear-gradient(135deg, #E0F5F3, #d0f0ee)', comingSoon: false },
  { id: 2, emoji: '🧸', image: '/feeding-bottle.jpg', name: "Kiki Cares® Baby Soft", desc: "Triple-layer absorbent core. Keeps skin dry all day and night.", price: '₦4,200', stars: 5, reviews: 1923, badge: null, bg: 'linear-gradient(135deg, #FFF0F3, #ffd6df)', comingSoon: false },
  { id: 3, emoji: '💧', image: '/water-bottle.png', name: "Kiki Cares® Baby Water Bottle", desc: "BPA-free, leak-proof water bottle designed for babies and toddlers.", price: '₦2,500', stars: 5, reviews: 634, badge: null, bg: 'transparent', comingSoon: false },
  { id: 4, emoji: '🌙', image: null, name: "Kiki Cares® Overnites", desc: "Maximum overnight protection. 3x more absorbent for peaceful nights.", price: '₦5,200', stars: 5, reviews: 1204, badge: null, bg: 'linear-gradient(135deg, #FFF9EC, #ffe8b0)', comingSoon: true },
  { id: 5, emoji: '🏊', image: null, name: "Kiki Cares® Swim", desc: "Reusable and water-resistant. Perfect for bath time and swimming.", price: '₦2,800', stars: 4, reviews: 634, badge: null, bg: 'linear-gradient(135deg, #F0EEFF, #ddd8ff)', comingSoon: true },
  { id: 6, emoji: '🧴', image: null, name: "Kiki Cares® Baby Wipes", desc: "99% pure water wipes. Gentle enough for newborn skin from day one.", price: '₦1,800', stars: 5, reviews: 3102, badge: 'Save 20%', badgeColor: '#FF6B8A', bg: 'linear-gradient(135deg, #E0F5F3, #FFF0F3)', comingSoon: false },
  { id: 7, emoji: '🎀', image: null, name: "Kiki Cares® Pull-Ups", desc: "Training pants with easy pull-up design. Great for potty training.", price: '₦4,500', stars: 5, reviews: 987, badge: null, bg: 'linear-gradient(135deg, #FFF9EC, #EBF4FF)', comingSoon: true },
  { id: 8, emoji: '📦', image: null, name: "Kiki Cares® Bundle Pack", desc: "Mix & match all sizes and types. A full month of care at one great price.", price: '₦18,000', stars: 5, reviews: 2341, badge: null, bg: 'linear-gradient(135deg, #FFF0F3, #F0EEFF)', comingSoon: true },
];

export default function Products() {
  const { addToCart } = useCart();

  return (
    <section style={{padding: '80px 40px', maxWidth: '1280px', margin: '0 auto'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px'}}>
        <div>
          <div style={{fontSize: '11px', fontWeight: '700', color: '#00A699', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px'}}>Our Collection</div>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', letterSpacing: '-0.5px', margin: 0}}>Products for every stage</h2>
        </div>
        <a href="#" style={{fontSize: '14px', fontWeight: '700', color: '#00A699', textDecoration: 'none'}}>See all products →</a>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px'}}>
        {products.map((product) => (
          <div key={product.id} style={{
            backgroundColor: 'white', border: '1.5px solid #E5EBF0', borderRadius: '20px',
            overflow: 'hidden', cursor: product.comingSoon ? 'default' : 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s', opacity: product.comingSoon ? 0.85 : 1,
          }}
          onMouseEnter={e => { if (!product.comingSoon) { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,166,153,0.12)'; }}}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            {/* Product image */}
            <div style={{height: '180px', background: product.id === 3 ? 'transparent' : product.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px', position: 'relative', overflow: 'hidden'}}>
              {product.image ? (
                product.id === 3 ? (
                  <img src={product.image} alt={product.name} style={{width: '100%', height: '100%', objectFit: 'contain', transform: 'rotate(-15deg)'}} />
                ) : (
                  <img src={product.image} alt={product.name} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}} />
                )
              ) : product.emoji}

              {product.comingSoon && (
                <div style={{position: 'absolute', top: '10px', left: '10px', backgroundColor: '#1A2A35', color: 'white', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '100px', fontFamily: 'sans-serif', textTransform: 'uppercase'}}>
                  Coming Soon
                </div>
              )}
              {!product.comingSoon && product.badge && (
                <div style={{position: 'absolute', top: '10px', left: '10px', backgroundColor: product.badgeColor, color: 'white', fontSize: '10px', fontWeight: '700', padding: '3px 8px', borderRadius: '100px', fontFamily: 'sans-serif'}}>
                  {product.badge}
                </div>
              )}
            </div>

            {/* Product body */}
            <div style={{padding: '16px'}}>
              <div style={{fontFamily: 'sans-serif', fontSize: '15px', fontWeight: '800', color: '#1A2A35', marginBottom: '6px'}}>{product.name}</div>
              <div style={{fontSize: '12px', color: '#6B7F8C', marginBottom: '10px', lineHeight: '1.5'}}>{product.desc}</div>
              {product.comingSoon ? (
                <div style={{backgroundColor: '#F7F8FA', borderRadius: '8px', padding: '10px 14px', fontSize: '12px', color: '#6B7F8C', fontWeight: '600', textAlign: 'center'}}>
                  🔔 Notify me when available
                </div>
              ) : (
                <>
                  <div style={{color: '#FFD166', fontSize: '12px', marginBottom: '10px'}}>
                    {'★'.repeat(product.stars)}{'☆'.repeat(5 - product.stars)}
                    <span style={{color: '#6B7F8C', marginLeft: '4px'}}>({product.reviews.toLocaleString()})</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{fontFamily: 'sans-serif', fontSize: '17px', fontWeight: '900', color: '#00A699'}}>{product.price}</div>
                    <button
                      onClick={() => addToCart(product)}
                      style={{backgroundColor: '#00A699', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>
                      Add to Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}