import { useState } from 'react';
import { Search, MapPin, Droplet } from 'lucide-react';

const FIRST_NAMES = ['Rahul', 'Priya', 'Vikram', 'Ananya', 'Arjun', 'Neha', 'Rohan', 'Sneha', 'Aditya', 'Kavya', 'Karan', 'Pooja', 'Amit', 'Riya', 'Siddharth', 'Aisha', 'Ravi', 'Swati', 'Vishal', 'Nisha'];
const LAST_NAMES = ['Sharma', 'Patel', 'Singh', 'Gupta', 'Kumar', 'Reddy', 'Mehta', 'Joshi', 'Das', 'Verma', 'Chauhan', 'Nair', 'Iyer', 'Bose', 'Yadav', 'Pandey', 'Mishra', 'Desai', 'Shah', 'Malhotra'];
const CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat'];
const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const generateMockDonors = () => {
  const donors = [];
  let id = 1;
  BLOOD_GROUPS.forEach(bg => {
    for (let i = 0; i < 10; i++) {
      const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
      const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      const year = 2023 + Math.floor(Math.random() * 2);
      const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
      const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
      
      donors.push({
        id: id++,
        name: `${firstName} ${lastName}`,
        bloodGroup: bg,
        location: city,
        lastDonated: `${year}-${month}-${day}`
      });
    }
  });
  // Shuffle the array for a natural list view
  return donors.sort(() => Math.random() - 0.5);
};

const MOCK_DONORS = generateMockDonors();

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
          <div key={donor.id} className="glass glass-hover" style={{ padding: '1.5rem' }}>
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
            
            <button 
              className="btn btn-outline hover-glow" 
              style={{ width: '100%' }}
              onClick={() => alert(`Contacting ${donor.name}...\nAn SMS and Email notification has been sent.`)}
            >
              Contact Donor
            </button>
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
