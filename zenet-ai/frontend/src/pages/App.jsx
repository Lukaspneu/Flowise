import { useState } from 'react';
import Landing from './Landing';
import Dashboard from './Dashboard';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  return token ? <Dashboard token={token} /> : <Landing onAuth={setToken} />;
}
