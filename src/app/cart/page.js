"use client";
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      <Navbar />
      <main style={{minHeight: '60vh', padding: '60px 40px', maxWidth: '1280px', margin: '0 auto'}}>

        <h1 style={{fontFamily: 'sans-serif', fontSize: '36px', fontWeight: '900', color: '#1A2A35', marginBottom: '8px', letterSpacing: '-1px'}}>
          Your Cart
        </h1>
        <p style={{fontSize: '14px', color: '#6B7F8C', marginBottom: '40px'}}>
          {totalItems === 0 ? 'Your cart is empty' : `${totalItems} item${totalItems > 1 ? 's' : ''} in your cart`}
        </p>

        {cartItems.length === 0 ? (
          <div style={{textAlign: 'center', padding: '80px 40px'}}>
            <div style={{fontSize: '80px', marginBottom: '20px'}}>🛒</div>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '800', color: '#1A2A35', marginBottom: '12px'}}>Your cart is empty</h2>
            <p style={{fontSize: '15px', color: '#6B7F8C', marginBottom: '32px'}}>Add some Kiki Cares® products to get started!</p>
            <Link href="/" style={{backgroundColor: '#00A699', color: 'white', padding: '14px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
              Shop Now
            </Link>
          </div>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', alignItems: 'flex-start'}}>

            {/* Cart items */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              {cartItems.map((item) => (
                <div key={item.id} style={{backgroundColor: 'white', borderRadius: '20px', padding: '20px', border: '1.5px solid #E5EBF0', display: 'flex', gap: '16px', alignItems: 'center'}}>
                  <div style={{width: '80px', height: '80px', borderRadius: '12px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', flexShrink: 0, overflow: 'hidden'}}>
                    {item.image ? (
                      <img src={item.image} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    ) : item.emoji}
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{fontFamily: 'sans-serif', fontSize: '15px', fontWeight: '800', color: '#1A2A35', marginBottom: '4px'}}>{item.name}</div>
                    <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '900', color: '#00A699'}}>{item.price}</div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #E5EBF0', backgroundColor: 'white', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#1A2A35'}}>
                      −
                    </button>
                    <span style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '700', color: '#1A2A35', minWidth: '20px', textAlign: 'center'}}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid #E5EBF0', backgroundColor: 'white', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#1A2A35'}}>
                      +
                    </button>
                  </div>
                  <div style={{fontFamily: 'sans-serif', fontSize: '16px', fontWeight: '900', color: '#1A2A35', minWidth: '80px', textAlign: 'right'}}>
                    ₦{(parseInt(item.price.replace(/[₦,]/g, '')) * item.quantity).toLocaleString()}
                  </div>
                  <button onClick={() => removeFromCart(item.id)}
                    style={{width: '32px', height: '32px', borderRadius: '50%', border: 'none', backgroundColor: '#FFF0F3', color: '#FF6B8A', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700'}}>
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '28px', border: '1.5px solid #E5EBF0', position: 'sticky', top: '100px'}}>
              <h2 style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: '800', color: '#1A2A35', marginBottom: '20px'}}>Order Summary</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6B7F8C'}}>
                  <span>Subtotal ({totalItems} items)</span>
                  <span style={{fontWeight: '600', color: '#1A2A35'}}>₦{totalPrice.toLocaleString()}</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6B7F8C'}}>
                  <span>Delivery</span>
                  <span style={{fontWeight: '600', color: totalPrice >= 10000 ? '#00A699' : '#1A2A35'}}>
                    {totalPrice >= 10000 ? 'FREE 🎉' : '₦1,500'}
                  </span>
                </div>
                {totalPrice < 10000 && (
                  <div style={{backgroundColor: '#E0F5F3', borderRadius: '8px', padding: '10px 12px', fontSize: '12px', color: '#00A699', fontWeight: '600'}}>
                    Add ₦{(10000 - totalPrice).toLocaleString()} more for free delivery!
                  </div>
                )}
              </div>
              <div style={{borderTop: '1px solid #E5EBF0', paddingTop: '16px', marginBottom: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '900', color: '#1A2A35'}}>
                  <span>Total</span>
                  <span style={{color: '#00A699'}}>₦{(totalPrice + (totalPrice >= 10000 ? 0 : 1500)).toLocaleString()}</span>
                </div>
              </div>
             <Link href="/checkout" style={{display: 'block', width: '100%', backgroundColor: '#00A699', color: 'white', border: 'none', padding: '16px', borderRadius: '100px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif', marginBottom: '12px', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>
  Checkout →
</Link>
              <Link href="/" style={{display: 'block', textAlign: 'center', fontSize: '14px', color: '#6B7F8C', textDecoration: 'none', fontFamily: 'sans-serif'}}>
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}