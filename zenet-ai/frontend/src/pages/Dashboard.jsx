import { useEffect, useState } from 'react';

export default function Dashboard({ token }) {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/api/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(setProfile);
  }, [token]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {profile ? (
        <div>
          <p>Business: {profile.businessName}</p>
          <p>Contact: {profile.contactEmail}</p>
        </div>
      ) : (
        <p>No profile set up.</p>
      )}
    </div>
  );
}
