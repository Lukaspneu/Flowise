import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Landing({ onAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signup = async () => {
    const res = await fetch('http://localhost:4000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      onAuth(data.token);
    } else {
      setError(data.error);
    }
  };

  return (
    <div className="p-8 text-center">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold mb-4">Zenet AI</motion.h1>
      <p className="mb-6">Configure your AI voice agent in minutes.</p>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input className="border p-2 mr-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 mr-2" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={signup}>Sign Up</button>
    </div>
  );
}
