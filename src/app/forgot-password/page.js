"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleReset = async () => {
    if (!email) { setError('Please enter your email address'); return; }
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/reset-password',
    });
    setLoading(false);
    if (error) { setError(error.message); return; }
    setSuccess(true);
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
          <div style={{fontSize: '14px', color: '#6B7F8C', marginTop: '8px'}}>Reset your password</div>
        </div>

        {success ? (
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '48px', marginBottom: '16px'}}>📧</div>
            <h3 style={{fontFamily: 'sans-serif', fontSize: '20px', fontWeight: '800', color: '#1A2A35', marginBottom: '8px'}}>
              Check your email!
            </h3>
            <p style={{fontSize: '14px', color: '#6B7F8C', marginBottom: '24px', lineHeight: '1.6'}}>
              We sent a password reset link to <strong>{email}</strong>. Click the link to reset your password.
            </p>
            <Link href="/login" style={{backgroundColor: '#00A699', color: 'white', padding: '12px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', fontFamily: 'sans-serif'}}>
              Back to Login
            </Link>
          </div>
        ) : (
          <>
            <p style={{fontSize: '14px', color: '#6B7F8C', marginBottom: '24px', lineHeight: '1.6', textAlign: 'center'}}>
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <div style={{marginBottom: '24px'}}>
              <label style={{fontSize: '13px', fontWeight: '700', color: '#1A2A35', display: 'block', marginBottom: '8px', fontFamily: 'sans-serif'}}>
                Email address
              </label>
              <input type="email" placeholder="you@email.com" value={email}
                onChange={e => setEmail(e.target.value)}
                style={{width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #E5EBF0', fontSize: '14px', fontFamily: 'sans-serif', outline: 'none', color: '#1A2A35', boxSizing: 'border-box'}}
              />
            </div>

            {error && (
              <div style={{backgroundColor: '#FFF0F3', border: '1.5px solid #FF6B8A', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px'}}>
                <p style={{fontSize: '13px', color: '#FF6B8A', margin: 0}}>⚠️ {error}</p>
              </div>
            )}

            <button onClick={handleReset} disabled={loading}
              style={{width: '100%', backgroundColor: loading ? '#A0D8D4' : '#00A699', color: 'white', border: 'none', padding: '14px', borderRadius: '100px', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'sans-serif', marginBottom: '20px'}}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>

            <p style={{textAlign: 'center', fontSize: '14px', color: '#6B7F8C', fontFamily: 'sans-serif'}}>
              Remember your password?{' '}
              <Link href="/login" style={{color: '#00A699', fontWeight: '700', textDecoration: 'none'}}>Sign in</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}