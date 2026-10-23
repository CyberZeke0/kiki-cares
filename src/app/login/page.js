"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) { setError('Please fill in all fields'); return; }
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    router.push('/account');
  };

  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #E0F5F3 0%, #FFF0F3 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px'}}>
      <div style={{backgroundColor: 'white', borderRadius: '24px', padding: '48px 40px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 60px rgba(0,166,153,0.12)'}}>

        <div style={{textAlign: 'center', marginBottom: '32px'}}>
          <Link href="/" style={{textDecoration: 'none'}}>
            <div style={{fontSize: '32px', fontWeight: '900', color: '#00A699', fontFamily: 'sans-serif'}}>
              Kiki <span style={{color: '#FF6B8A'}}>Cares</span>®
            </div>
          </Link>
          <div style={{fontSize: '14px', color: '#6B7F8C', marginTop: '8px'}}>Sign in to your account</div>
        </div>

        <div style={{marginBottom: '16px'}}>
          <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>Email address</label>
          <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)}
            style={{width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5EBF0', fontSize: '14px', fontFamily: 'sans-serif', outline: 'none', color: '#1A2A35', boxSizing: 'border-box'}} />
        </div>

        <div style={{marginBottom: '8px'}}>
          <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>Password</label>
          <input type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)}
            style={{width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5EBF0', fontSize: '14px', fontFamily: 'sans-serif', outline: 'none', color: '#1A2A35', boxSizing: 'border-box'}} />
        </div>

        <div style={{textAlign: 'right', marginBottom: '24px'}}>
          <Link href="/forgot-password" style={{fontSize: '13px', color: '#00A699', fontWeight: '600', textDecoration: 'none', fontFamily: 'sans-serif'}}>
  Forgot password?
</Link>
        </div>

        {error && (
          <div style={{backgroundColor: '#FFF0F3', border: '1.5px solid #FF6B8A', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px'}}>
            <p style={{fontSize: '13px', color: '#FF6B8A', margin: 0}}>⚠️ {error}</p>
          </div>
        )}

        <button onClick={handleLogin} disabled={loading}
          style={{width: '100%', backgroundColor: loading ? '#A0D8D4' : '#00A699', color: 'white', border: 'none', padding: '14px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'sans-serif', marginBottom: '20px'}}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <p style={{textAlign: 'center', fontSize: '14px', color: '#6B7F8C', fontFamily: 'sans-serif'}}>
          Don't have an account?{' '}
          <Link href="/signup" style={{color: '#00A699', fontWeight: '700', textDecoration: 'none'}}>Create one</Link>
        </p>

      </div>
    </div>
  );
}