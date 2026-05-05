import { useState } from 'react';
import { Search, MapPin, Droplet } from 'lucide-react';

const MOCK_DONORS = [
  { id: 1, name: 'Rahul Sharma', bloodGroup: 'O+', location: 'Mumbai', lastDonated: '2023-10-15' },
  { id: 2, name: 'Priya Patel', bloodGroup: 'A-', location: 'Delhi', lastDonated: '2024-01-20' },
  { id: 3, name: 'Vikram Singh', bloodGroup: 'B+', location: 'Bangalore', lastDonated: '2023-11-05' },
  { id: 4, name: 'Ananya Gupta', bloodGroup: 'AB+', location: 'Mumbai', lastDonated: '2024-02-10' },
  { id: 5, name: 'Arjun Kumar', bloodGroup: 'O-', location: 'Chennai', lastDonated: '2023-09-22' },
  { id: 6, name: 'Neha Reddy', bloodGroup: 'B-', location: 'Bangalore', lastDonated: '2024-03-01' },
];

export default function FindDonors() {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  
  const filteredDonors = MOCK_DONORS.filter(donor => {
    return (
      (bloodGroup === '' || donor.bloodGroup === bloodGroup) &&
      (location === '' || donor.location.toLowerCase().includes(location.toLowerCase()))
    );
  });

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      <div className="glass" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Find Blood Donors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label>Blood Group</label>
            <div style={{ position: 'relative' }}>
              <Droplet size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'hsl(var(--text-muted))' }} />
              <select 
                className="input-field" 
                style={{ paddingLeft: '2.5rem' }}
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="">Any Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label>Location</label>
            <div style={{ position: 'relative' }}>
              <MapPin size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: 'hsl(var(--text-muted))' }} />
              <input 
                type="text" 
                className="input-field" 
                placeholder="City or Area" 
                style={{ paddingLeft: '2.5rem' }}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-end" style={{ marginBottom: 0 }}>
            <button className="btn btn-primary" style={{ width: '100%', height: '48px' }}>
              <Search size={20} style={{ marginRight: '0.5rem' }} />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDonors.map(donor => (
          <div key={donor.id} className="glass" style={{ padding: '1.5rem' }}>
            <div className="flex justify-between items-start" style={{ marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{donor.name}</h3>
                <div className="flex items-center gap-2" style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
                  <MapPin size={16} />
                  {donor.location}
                </div>
              </div>
              <div style={{ background: 'hsl(var(--primary))', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                {donor.bloodGroup}
              </div>
            </div>
            
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Last Donated: {donor.lastDonated}
            </p>
            
            <button className="btn btn-outline" style={{ width: '100%' }}>Contact Donor</button>
          </div>
        ))}
        {filteredDonors.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'hsl(var(--text-muted))' }}>
            No donors found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
