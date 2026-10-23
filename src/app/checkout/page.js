"use client";
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const countries = {
  'Nigeria': ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'],
  'Ghana': ['Ahafo', 'Ashanti', 'Bono', 'Bono East', 'Central', 'Eastern', 'Greater Accra', 'North East', 'Northern', 'Oti', 'Savannah', 'Upper East', 'Upper West', 'Volta', 'Western', 'Western North'],
  'Kenya': ['Baringo', 'Bomet', 'Bungoma', 'Busia', 'Elgeyo Marakwet', 'Embu', 'Garissa', 'Homa Bay', 'Isiolo', 'Kajiado', 'Kakamega', 'Kericho', 'Kiambu', 'Kilifi', 'Kirinyaga', 'Kisii', 'Kisumu', 'Kitui', 'Kwale', 'Laikipia', 'Lamu', 'Machakos', 'Makueni', 'Mandera', 'Marsabit', 'Meru', 'Migori', 'Mombasa', 'Nairobi', 'Nakuru', 'Nandi', 'Narok', 'Nyamira', 'Nyandarua', 'Nyeri', 'Samburu', 'Siaya', 'Taita Taveta', 'Tana River', 'Tharaka Nithi', 'Trans Nzoia', 'Turkana', 'Uasin Gishu', 'Vihiga', 'Wajir', 'West Pokot'],
  'South Africa': ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'],
  'United Kingdom': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
  'United States': ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
  'Canada': ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan'],
};

export default function CheckoutPage() {
  const { cartItems, totalPrice, totalItems, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [payment, setPayment] = useState('card');

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', country: 'Nigeria', landmark: '',
  });

  const deliveryFee = totalPrice >= 10000 ? 0 : 1500;
  const total = totalPrice + deliveryFee;

  const handleInput = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleCountryChange = (e) => {
    setForm(prev => ({ ...prev, country: e.target.value, state: '' }));
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '10px',
    border: '1.5px solid #E5EBF0', fontSize: '14px', fontFamily: 'sans-serif',
    outline: 'none', color: '#1A2A35', boxSizing: 'border-box',
  };

  const labelStyle = {
    fontSize: '13px', fontWeight: '700', color: '#1A2A35',
    display: 'block', marginBottom: '8px', fontFamily: 'sans-serif',
  };

  if (orderPlaced) return (
    <>
      <Navbar />
      <main style={{minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 40px'}}>
        <div style={{textAlign: 'center', maxWidth: '500px'}}>
          <div style={{fontSize: '80px', marginBottom: '20px'}}>🎉</div>
          <h1 style={{fontFamily: 'sans-serif', fontSize: '32px', fontWeight: '900', color: '#1A2A35', marginBottom: '12px', letterSpacing: '-1px'}}>
            Order Placed!
          </h1>
          <p style={{fontSize: '16px', color: '#6B7F8C', lineHeight: '1.8', marginBottom: '12px'}}>
            Thank you for shopping with Kiki Cares®! Your order has been received and will be delivered soon.
          </p>
          <div style={{backgroundColor: '#E0F5F3', borderRadius: '16px', padding: '20px', border: '1.5px solid #00A699', marginBottom: '32px'}}>
            <div style={{fontSize: '14px', color: '#00A699', fontWeight: '700', fontFamily: 'sans-serif', marginBottom: '4px'}}>Estimated Delivery</div>
            <div style={{fontSize: '16px', fontWeight: '800', color: '#1A2A35', fontFamily: 'sans-serif'}}>2-3 business days 🚚</div>
          </div>
          <div style={{display: 'flex', gap: '12px', justifyContent: 'center'}}>
            <Link href="/" style={{backgroundColor: '#00A699', color: 'white', padding: '14px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
              Continue Shopping
            </Link>
            <Link href="/account" style={{backgroundColor: '#F7F8FA', color: '#1A2A35', padding: '14px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif', border: '1.5px solid #E5EBF0'}}>
              My Orders
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );

  if (cartItems.length === 0) return (
    <>
      <Navbar />
      <main style={{minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 40px'}}>
        <div style={{textAlign: 'center'}}>
          <div style={{fontSize: '60px', marginBottom: '16px'}}>🛒</div>
          <h2 style={{fontFamily: 'sans-serif', fontSize: '24px', fontWeight: '800', color: '#1A2A35', marginBottom: '12px'}}>Your cart is empty</h2>
          <Link href="/" style={{backgroundColor: '#00A699', color: 'white', padding: '12px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
            Shop Now
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <main style={{padding: '40px', maxWidth: '1280px', margin: '0 auto'}}>

        <h1 style={{fontFamily: 'sans-serif', fontSize: '32px', fontWeight: '900', color: '#1A2A35', marginBottom: '8px', letterSpacing: '-1px'}}>Checkout</h1>

        {/* Steps */}
        <div style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '40px'}}>
          {['Delivery', 'Payment', 'Review'].map((s, i) => (
            <div key={s} style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: step > i + 1 ? 'pointer' : 'default'}} onClick={() => step > i + 1 && setStep(i + 1)}>
                <div style={{width: '28px', height: '28px', borderRadius: '50%', backgroundColor: step >= i + 1 ? '#00A699' : '#E5EBF0', color: step >= i + 1 ? 'white' : '#6B7F8C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '700', fontFamily: 'sans-serif'}}>
                  {step > i + 1 ? '✓' : i + 1}
                </div>
                <span style={{fontSize: '14px', fontWeight: '600', color: step >= i + 1 ? '#1A2A35' : '#6B7F8C', fontFamily: 'sans-serif'}}>{s}</span>
              </div>
              {i < 2 && <div style={{width: '40px', height: '1px', backgroundColor: '#E5EBF0'}} />}
            </div>
          ))}
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', alignItems: 'flex-start'}}>

          {/* Left */}
          <div>

            {/* Step 1 */}
            {step === 1 && (
              <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '1.5px solid #E5EBF0'}}>
                <h2 style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: '800', color: '#1A2A35', marginBottom: '24px'}}>Delivery Information</h2>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>

                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input name="firstName" type="text" placeholder="Martha" value={form.firstName} onChange={handleInput} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input name="lastName" type="text" placeholder="Ochei" value={form.lastName} onChange={handleInput} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input name="email" type="email" placeholder="martha@email.com" value={form.email} onChange={handleInput} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input name="phone" type="text" placeholder="0801 234 5678" value={form.phone} onChange={handleInput} style={inputStyle} />
                  </div>

                  <div style={{gridColumn: '1 / -1'}}>
                    <label style={labelStyle}>Delivery Address</label>
                    <input name="address" type="text" placeholder="House number, street name" value={form.address} onChange={handleInput} style={inputStyle} />
                  </div>

                  <div style={{gridColumn: '1 / -1'}}>
                    <label style={labelStyle}>Country</label>
                    <select name="country" value={form.country} onChange={handleCountryChange} style={{...inputStyle, backgroundColor: 'white'}}>
                      {Object.keys(countries).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>City</label>
                    <input name="city" type="text" placeholder="Lagos" value={form.city} onChange={handleInput} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>State / Province</label>
                    <select name="state" value={form.state} onChange={handleInput} style={{...inputStyle, backgroundColor: 'white'}}>
                      <option value="">Select state</option>
                      {(countries[form.country] || []).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div style={{gridColumn: '1 / -1'}}>
                    <label style={labelStyle}>Landmark (optional)</label>
                    <input name="landmark" type="text" placeholder="Nearest bus stop or landmark" value={form.landmark} onChange={handleInput} style={inputStyle} />
                  </div>
                </div>
                <button onClick={() => setStep(2)}
                  style={{width: '100%', backgroundColor: '#00A699', color: 'white', border: 'none', padding: '14px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif', marginTop: '24px'}}>
                  Continue to Payment →
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '1.5px solid #E5EBF0'}}>
                <h2 style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: '800', color: '#1A2A35', marginBottom: '24px'}}>Payment Method</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px'}}>
                  {[
                    {id: 'card', icon: '💳', label: 'Debit / Credit Card', desc: 'Visa, Mastercard, Verve'},
                    {id: 'transfer', icon: '🏦', label: 'Bank Transfer', desc: 'Transfer directly to our account'},
                    {id: 'paystack', icon: '🔒', label: 'Paystack', desc: 'Pay securely with Paystack'},
                    {id: 'cod', icon: '💵', label: 'Pay on Delivery', desc: 'Cash or POS on delivery'},
                  ].map((method) => (
                    <div key={method.id} onClick={() => setPayment(method.id)}
                      style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '12px', border: `2px solid ${payment === method.id ? '#00A699' : '#E5EBF0'}`, backgroundColor: payment === method.id ? '#E0F5F3' : 'white', cursor: 'pointer'}}>
                      <span style={{fontSize: '24px'}}>{method.icon}</span>
                      <div style={{flex: 1}}>
                        <div style={{fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '700', color: '#1A2A35'}}>{method.label}</div>
                        <div style={{fontSize: '12px', color: '#6B7F8C'}}>{method.desc}</div>
                      </div>
                      <div style={{width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${payment === method.id ? '#00A699' : '#E5EBF0'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                        {payment === method.id && <div style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#00A699'}} />}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{display: 'flex', gap: '12px'}}>
                  <button onClick={() => setStep(1)} style={{flex: 1, backgroundColor: '#F7F8FA', color: '#1A2A35', border: '1.5px solid #E5EBF0', padding: '14px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>← Back</button>
                  <button onClick={() => setStep(3)} style={{flex: 2, backgroundColor: '#00A699', color: 'white', border: 'none', padding: '14px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>Review Order →</button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '1.5px solid #E5EBF0'}}>
                <h2 style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: '800', color: '#1A2A35', marginBottom: '24px'}}>Review Your Order</h2>

                <div style={{backgroundColor: '#F7F8FA', borderRadius: '12px', padding: '16px', marginBottom: '16px', border: '1.5px solid #E5EBF0'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
                    <div style={{fontFamily: 'sans-serif', fontSize: '13px', fontWeight: '700', color: '#1A2A35'}}>📍 Delivery Address</div>
                    <button onClick={() => setStep(1)} style={{fontSize: '12px', color: '#00A699', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600'}}>Edit</button>
                  </div>
                  <div style={{fontSize: '13px', color: '#6B7F8C', lineHeight: '1.7'}}>
                    {form.firstName} {form.lastName} · {form.phone}<br/>
                    {form.address}, {form.city}, {form.state}<br/>
                    {form.country}
                  </div>
                </div>

                <div style={{backgroundColor: '#F7F8FA', borderRadius: '12px', padding: '16px', marginBottom: '24px', border: '1.5px solid #E5EBF0'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{fontFamily: 'sans-serif', fontSize: '13px', fontWeight: '700', color: '#1A2A35'}}>💳 Payment Method</div>
                    <button onClick={() => setStep(2)} style={{fontSize: '12px', color: '#00A699', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600'}}>Edit</button>
                  </div>
                  <div style={{fontSize: '13px', color: '#6B7F8C', marginTop: '4px'}}>
                    {payment === 'card' ? 'Debit/Credit Card' : payment === 'transfer' ? 'Bank Transfer' : payment === 'paystack' ? 'Paystack' : 'Pay on Delivery'}
                  </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px'}}>
                  {cartItems.map(item => (
                    <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F7F8FA'}}>
                      <div style={{fontSize: '14px', color: '#1A2A35', fontWeight: '500'}}>{item.name} × {item.quantity}</div>
                      <div style={{fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '700', color: '#1A2A35'}}>₦{(parseInt(item.price.replace(/[₦,]/g, '')) * item.quantity).toLocaleString()}</div>
                    </div>
                  ))}
                </div>

                <div style={{display: 'flex', gap: '12px'}}>
                  <button onClick={() => setStep(2)} style={{flex: 1, backgroundColor: '#F7F8FA', color: '#1A2A35', border: '1.5px solid #E5EBF0', padding: '14px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>← Back</button>
                  <button onClick={handlePlaceOrder} style={{flex: 2, backgroundColor: '#00A699', color: 'white', border: 'none', padding: '14px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'sans-serif'}}>Place Order 🎉</button>
                </div>
              </div>
            )}
          </div>

          {/* Right - Summary */}
          <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '28px', border: '1.5px solid #E5EBF0', position: 'sticky', top: '100px'}}>
            <h2 style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '800', color: '#1A2A35', marginBottom: '20px'}}>Order Summary</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px'}}>
              {cartItems.map(item => (
                <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6B7F8C'}}>
                  <span>{item.name} × {item.quantity}</span>
                  <span style={{fontWeight: '600', color: '#1A2A35'}}>₦{(parseInt(item.price.replace(/[₦,]/g, '')) * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div style={{borderTop: '1px solid #E5EBF0', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6B7F8C'}}>
                <span>Subtotal ({totalItems} items)</span>
                <span style={{fontWeight: '600', color: '#1A2A35'}}>₦{totalPrice.toLocaleString()}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6B7F8C'}}>
                <span>Delivery</span>
                <span style={{fontWeight: '600', color: deliveryFee === 0 ? '#00A699' : '#1A2A35'}}>{deliveryFee === 0 ? 'FREE 🎉' : `₦${deliveryFee.toLocaleString()}`}</span>
              </div>
            </div>
            <div style={{borderTop: '1px solid #E5EBF0', paddingTop: '14px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '900', color: '#1A2A35'}}>
                <span>Total</span>
                <span style={{color: '#00A699'}}>₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}