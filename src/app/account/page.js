'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push('/login');
      else setUser(data.user);
    });
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (!user) return null;

  const tabs = [
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'orders', label: 'My Orders', icon: '📦' },
    { id: 'wishlist', label: 'Wishlist', icon: '❤️' },
    { id: 'addresses', label: 'Addresses', icon: '📍' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'cart', label: 'My Cart', icon: '🛒' },
  ];

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#f9f9f9', padding: '40px 16px', fontFamily: 'Quicksand, sans-serif' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1a1a1a', marginBottom: '4px' }}>
                Welcome back! 👋
              </h1>
              <p style={{ color: '#888', fontSize: '14px' }}>{user.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              style={{ background: '#fff0f3', color: '#FF6B8A', border: '1px solid #FF6B8A', padding: '10px 20px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', fontSize: '14px' }}
            >
              Sign Out
            </button>
          </div>

          <div className="account-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '24px' }}>

            <div style={{ background: 'white', borderRadius: '16px', padding: '16px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', height: 'fit-content' }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 16px', borderRadius: '10px', border: 'none', cursor: 'pointer',
                    background: activeTab === tab.id ? '#e6f7f6' : 'transparent',
                    color: activeTab === tab.id ? '#00A699' : '#444',
                    fontWeight: '600', fontSize: '14px', marginBottom: '4px',
                    fontFamily: 'Quicksand, sans-serif',
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
              {activeTab === 'profile' && (
                <>
                  <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>My Profile</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                      { label: 'Full Name', value: user.user_metadata?.full_name || 'Not set' },
                      { label: 'Email', value: user.email },
                      { label: 'Member Since', value: new Date(user.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) },
                      { label: 'Account Status', value: user.email_confirmed_at ? '✅ Verified' : '⏳ Unverified' },
                    ].map(item => (
                      <div key={item.label} style={{ background: '#f9f9f9', borderRadius: '10px', padding: '16px' }}>
                        <div style={{ fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>{item.label}</div>
                        <div style={{ fontWeight: '700', color: '#1a1a1a', fontSize: '15px' }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {activeTab === 'orders' && <p style={{ color: '#888' }}>No orders yet.</p>}
              {activeTab === 'wishlist' && <p style={{ color: '#888' }}>Your wishlist is empty.</p>}
              {activeTab === 'addresses' && <p style={{ color: '#888' }}>No saved addresses.</p>}
              {activeTab === 'settings' && <p style={{ color: '#888' }}>Settings coming soon.</p>}
              {activeTab === 'cart' && <p style={{ color: '#888' }}>View your <a href="/cart" style={{ color: '#00A699' }}>cart here</a>.</p>}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .account-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}