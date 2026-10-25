'use client';

import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const router = useRouter();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Quicksand, sans-serif' }}>
          <div style={{ fontSize: '64px' }}>🛒</div>
          <h2 style={{ color: '#333', marginTop: '16px' }}>Your cart is empty</h2>
          <p style={{ color: '#888' }}>Add some products to get started!</p>
          <Link href="/" style={{ marginTop: '20px', background: '#00A699', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const freeDeliveryThreshold = 10000;
  const deliveryFee = totalPrice >= freeDeliveryThreshold ? 0 : 1500;
  const orderTotal = totalPrice + deliveryFee;

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: '40px 16px', fontFamily: 'Quicksand, sans-serif' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#222', marginBottom: '32px' }}>
            Shopping Cart ({totalItems} items)
          </h1>

          <div className="cart-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px' }}>

            {/* Cart Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {cartItems.map((item) => (
                <div key={item.id} style={{ background: 'white', borderRadius: '12px', padding: '16px', display: 'flex', gap: '16px', alignItems: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
                  <div style={{ width: '80px', height: '80px', background: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.image
                      ? <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                      : <span style={{ fontSize: '32px' }}>🧷</span>
                    }
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: '600', color: '#222' }}>{item.name}</div>
                    <div style={{ color: '#00A699', fontWeight: '700', marginTop: '4px' }}>₦{item.price?.toLocaleString()}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}>−</button>
                    <span style={{ fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}>+</button>
                  </div>
                  <div style={{ textAlign: 'right', minWidth: '80px' }}>
                    <div style={{ fontWeight: '700', color: '#222' }}>₦{(item.price * item.quantity)?.toLocaleString()}</div>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: '#e53e3e', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer', marginTop: '4px' }}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', height: 'fit-content' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#222', marginBottom: '16px' }}>Order Summary</h2>

              {totalPrice < freeDeliveryThreshold && (
                <div style={{ background: '#e6f7f6', border: '1px solid #00A699', borderRadius: '8px', padding: '12px', marginBottom: '16px', fontSize: '13px', color: '#00A699' }}>
                  Add <strong>₦{(freeDeliveryThreshold - totalPrice).toLocaleString()}</strong> more for FREE delivery!
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
                <span style={{ color: '#666' }}>Subtotal ({totalItems} items)</span>
                <span style={{ fontWeight: '600' }}>₦{totalPrice?.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
                <span style={{ color: '#666' }}>Delivery Fee</span>
                <span style={{ fontWeight: '600', color: deliveryFee === 0 ? 'green' : '#222' }}>
                  {deliveryFee === 0 ? 'FREE' : `₦${deliveryFee.toLocaleString()}`}
                </span>
              </div>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: '700' }}>
                <span>Total</span>
                <span style={{ color: '#00A699' }}>₦{orderTotal?.toLocaleString()}</span>
              </div>

              <button
                onClick={() => router.push('/checkout')}
                style={{ width: '100%', marginTop: '20px', background: '#00A699', color: 'white', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
              >
                Proceed to Checkout
              </button>

              <Link href="/" style={{ display: 'block', textAlign: 'center', color: '#00A699', fontSize: '14px', marginTop: '12px', textDecoration: 'none' }}>
                ← Continue Shopping
              </Link>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .cart-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}