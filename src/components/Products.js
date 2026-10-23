'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Newborn Diapers',
    price: 14000,
    description: 'Ultra-soft, 12-hour protection for newborns',
    image: '/kiki-diaper.jpg',
    available: true,
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Baby Soft Diapers',
    price: 8000,
    description: 'Gentle care for sensitive baby skin',
    image: '/kiki-diaper.jpg',
    available: true,
    badge: null,
  },
  {
    id: 3,
    name: 'Baby Feeding Bottle',
    price: 4000,
    description: 'BPA-free, anti-colic system, easy grip design',
    image: '/feeding-bottle.png',
    available: true,
    badge: 'New',
  },
  {
    id: 4,
    name: 'Baby Water Bottle',
    price: 3500,
    description: 'Pure hydration for a healthier tomorrow',
    image: '/water-bottle.png',
    available: true,
    badge: null,
  },
  {
    id: 5,
    name: 'Baby Wipes (80 pack)',
    price: 7500,
    description: 'Hypoallergenic with Aloe Vera & Vitamin E',
    image: '/baby-wipes.png',
    available: true,
    badge: 'Popular',
  },
  {
    id: 6,
    name: 'Overnites Diapers',
    price: 1,
    description: 'Extra protection for peaceful nights',
    image: '/kiki-diaper.jpg',
    available: false,
    badge: null,
  },
  {
    id: 7,
    name: 'Swim Diapers',
    price: 1,
    description: 'Secure fit for water adventures',
    image: '/kiki-diaper.jpg',
    available: false,
    badge: null,
  },
  {
    id: 8,
    name: 'Pull-Ups',
    price: 1,
    description: 'Easy training for active toddlers',
    image: '/kiki-diaper.jpg',
    available: false,
    badge: null,
  },
];

export default function Products() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState({});

  const handleAdd = (product) => {
    addToCart(product);
    setAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

  return (
    <section style={{ padding: '60px 20px', background: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' }}>
            Our Products
          </h2>
          <p style={{ color: '#666', fontSize: '16px' }}>
            Premium baby care made for African babies
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '28px',
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              position: 'relative',
              border: '1px solid #f0f0f0',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
              }}
            >
              {/* Badge */}
              {product.badge && (
                <div style={{
                  position: 'absolute', top: '12px', left: '12px',
                  background: '#FF6B8A', color: 'white',
                  padding: '4px 10px', borderRadius: '20px',
                  fontSize: '11px', fontWeight: '700', zIndex: 2,
                }}>
                  {product.badge}
                </div>
              )}
              {!product.available && (
                <div style={{
                  position: 'absolute', top: '12px', right: '12px',
                  background: '#888', color: 'white',
                  padding: '4px 10px', borderRadius: '20px',
                  fontSize: '11px', fontWeight: '700', zIndex: 2,
                }}>
                  Coming Soon
                </div>
              )}

              {/* Image */}
              <div style={{
                width: '100%', height: '220px',
                background: '#f8f8f8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1a1a1a', marginBottom: '6px' }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#888', marginBottom: '12px', lineHeight: '1.4' }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '18px', fontWeight: '800', color: '#00A699' }}>
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.available ? (
                    <button
                      onClick={() => handleAdd(product)}
                      style={{
                        background: added[product.id] ? '#22c55e' : '#00A699',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}
                    >
                      {added[product.id] ? '✓ Added!' : 'Add to Cart'}
                    </button>
                  ) : (
                    <button disabled style={{
                      background: '#e5e7eb', color: '#9ca3af',
                      border: 'none', padding: '8px 16px',
                      borderRadius: '8px', fontSize: '13px',
                      fontWeight: '600', cursor: 'not-allowed',
                    }}>
                      Notify Me
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