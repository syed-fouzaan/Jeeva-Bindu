import { Heart, UserPlus } from 'lucide-react';

export default function RegisterDonor() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for registering as a donor!');
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Heart size={48} color="hsl(var(--primary))" style={{ margin: '0 auto 1rem' }} />
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Become a Donor</h1>
          <p style={{ color: 'hsl(var(--text-muted))' }}>
            Join our community of life-savers. Your single donation can save up to three lives.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" className="input-field" required placeholder="John" />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" className="input-field" required placeholder="Doe" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="input-group">
              <label>Blood Group</label>
              <select className="input-field" required>
                <option value="">Select Blood Group</option>
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
            <div className="input-group">
              <label>Date of Birth</label>
              <input type="date" className="input-field" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" className="input-field" required placeholder="+91" />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" className="input-field" required placeholder="john@example.com" />
            </div>
          </div>

          <div className="input-group">
            <label>City / Location</label>
            <input type="text" className="input-field" required placeholder="e.g. Mumbai, Maharashtra" />
          </div>

          <div className="input-group" style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginTop: '2rem' }}>
            <input type="checkbox" id="terms" required style={{ marginTop: '0.3rem' }} />
            <label htmlFor="terms" style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem', lineHeight: '1.4' }}>
              I confirm that I am over 18 years old, weigh more than 50kg, and am in good health. I consent to my contact details being visible to those requiring blood donations.
            </label>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
            <UserPlus size={20} style={{ marginRight: '0.5rem' }} />
            Register as Donor
          </button>
        </form>
      </div>
    </div>
  );
}
