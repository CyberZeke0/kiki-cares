"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login'); return; }
      setUser(session.user);
      setLoading(false);
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) return (
    <>
      <Navbar />
      <div style={{minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{fontSize: '16px', color: '#6B7F8C'}}>Loading your account...</div>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <main style={{minHeight: '60vh', padding: '60px 40px', maxWidth: '1280px', margin: '0 auto'}}>

        {/* Header */}
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px'}}>
          <div>
            <h1 style={{fontFamily: 'sans-serif', fontSize: '32px', fontWeight: '900', color: '#1A2A35', marginBottom: '4px', letterSpacing: '-1px'}}>
              Welcome back! 👋
            </h1>
            <p style={{fontSize: '14px', color: '#6B7F8C'}}>{user?.email}</p>
          </div>
          <button onClick={handleSignOut}
            style={{backgroundColor: '#FFF0F3', color: '#FF6B8A', border: '1.5px solid #FFD6DF', padding: '10px 20px', borderRadius: '100px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif'}}>
            Sign Out
          </button>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '240px 1fr', gap: '32px', alignItems: 'flex-start'}}>

          {/* Sidebar */}
          <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '16px', border: '1.5px solid #E5EBF0'}}>
            {[
              {id: 'profile', icon: '👤', label: 'My Profile'},
              {id: 'orders', icon: '📦', label: 'My Orders'},
              {id: 'wishlist', icon: '❤️', label: 'Wishlist'},
              {id: 'addresses', icon: '📍', label: 'Addresses'},
              {id: 'settings', icon: '⚙️', label: 'Settings'},
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '600', textAlign: 'left', marginBottom: '4px',
                  backgroundColor: activeTab === tab.id ? '#E0F5F3' : 'transparent',
                  color: activeTab === tab.id ? '#00A699' : '#1A2A35',
                }}>
                <span style={{fontSize: '18px'}}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
            <div style={{borderTop: '1px solid #E5EBF0', marginTop: '8px', paddingTop: '8px'}}>
              <Link href="/cart" style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: '600', color: '#1A2A35', textDecoration: 'none', fontFamily: 'sans-serif'}}>
                <span style={{fontSize: '18px'}}>🛒</span> My Cart
              </Link>
            </div>
          </div>

          {/* Content */}
          <div>
            {activeTab === 'profile' && (
              <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '1.5px solid #E5EBF0'}}>
                <h2 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '24px'}}>My Profile</h2>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
                  {[
                    {label: 'Full Name', value: user?.user_metadata?.full_name || 'Not set'},
                    {label: 'Email', value: user?.email},
                    {label: 'Member Since', value: new Date(user?.created_at).toLocaleDateString('en-NG', {day: 'numeric', month: 'long', year: 'numeric'})},
                    {label: 'Account Status', value: user?.email_confirmed_at ? '✅ Verified' : '⚠️ Not verified'},
                  ].map((field) => (
                    <div key={field.label} style={{backgroundColor: '#F7F8FA', borderRadius: '12px', padding: '16px', border: '1.5px solid #E5EBF0'}}>
                      <div style={{fontSize: '11px', color: '#6B7F8C', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'sans-serif', marginBottom: '6px'}}>{field.label}</div>
                      <div style={{fontSize: '15px', fontWeight: '600', color: '#1A2A35', fontFamily: 'sans-serif'}}>{field.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '1.5px solid #E5EBF0'}}>
                <h2 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '24px'}}>My Orders</h2>
                <div style={{textAlign: 'center', padding: '60px 20px'}}>
                  <div style={{fontSize: '60px', marginBottom: '16px'}}>📦</div>
                  <div style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '700', color: '#1A2A35', marginBottom: '8px'}}>No orders yet</div>
                  <div style={{fontSize: '14px', color: '#6B7F8C', marginBottom: '24px'}}>Your order history will appear here once you make a purchase.</div>
                  <Link href="/" style={{backgroundColor: '#00A699', color: 'white', padding: '12px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
                    Start Shopping
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '1.5px solid #E5EBF0'}}>
                <h2 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '24px'}}>Wishlist</h2>
                <div style={{textAlign: 'center', padding: '60px 20px'}}>
                  <div style={{fontSize: '60px', marginBottom: '16px'}}>❤️</div>
                  <div style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '700', color: '#1A2A35', marginBottom: '8px'}}>Your wishlist is empty</div>
                  <div style={{fontSize: '14px', color: '#6B7F8C', marginBottom: '24px'}}>Save your favourite products here for easy access later.</div>
                  <Link href="/" style={{backgroundColor: '#00A699', color: 'white', padding: '12px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
                    Browse Products
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '1.5px solid #E5EBF0'}}>
                <h2 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '24px'}}>Saved Addresses</h2>
                <div style={{textAlign: 'center', padding: '60px 20px'}}>
                  <div style={{fontSize: '60px', marginBottom: '16px'}}>📍</div>
                  <div style={{fontFamily: 'sans-serif', fontSize: '18px', fontWeight: '700', color: '#1A2A35', marginBottom: '8px'}}>No addresses saved</div>
                  <div style={{fontSize: '14px', color: '#6B7F8C', marginBottom: '24px'}}>Add a delivery address to speed up checkout.</div>
                  <button style={{backgroundColor: '#00A699', color: 'white', padding: '12px 24px', borderRadius: '100px', fontSize: '14px', fontWeight: '700', border: 'none', cursor: 'pointer', fontFamily: 'sans-serif'}}>
                    Add Address
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div style={{backgroundColor: 'white', borderRadius: '20px', padding: '32px', border: '1.5px solid #E5EBF0'}}>
                <h2 style={{fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '800', color: '#1A2A35', marginBottom: '24px'}}>Settings</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  {[
                    {label: 'Email Notifications', desc: 'Receive updates about your orders and offers', enabled: true},
                    {label: 'SMS Notifications', desc: 'Get delivery updates via SMS', enabled: false},
                    {label: 'Newsletter', desc: 'Receive parenting tips and exclusive deals', enabled: true},
                  ].map((setting) => (
                    <div key={setting.label} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: '#F7F8FA', borderRadius: '12px', border: '1.5px solid #E5EBF0'}}>
                      <div>
                        <div style={{fontFamily: 'sans-serif', fontSize: '14px', fontWeight: '700', color: '#1A2A35', marginBottom: '4px'}}>{setting.label}</div>
                        <div style={{fontSize: '12px', color: '#6B7F8C'}}>{setting.desc}</div>
                      </div>
                      <div style={{width: '44px', height: '24px', borderRadius: '100px', backgroundColor: setting.enabled ? '#00A699' : '#E5EBF0', position: 'relative', cursor: 'pointer', flexShrink: 0}}>
                        <div style={{width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'white', position: 'absolute', top: '3px', left: setting.enabled ? '23px' : '3px', transition: 'left 0.2s'}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}