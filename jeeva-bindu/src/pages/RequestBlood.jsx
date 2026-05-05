import { Activity, AlertCircle } from 'lucide-react';

export default function RequestBlood() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Blood request submitted successfully. We will notify nearby donors.');
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            Request Blood <br />
            <span className="text-gradient">Urgently</span>
          </h1>
          <p style={{ color: 'hsl(var(--text-muted))', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Fill out the form with patient details. We will immediately broadcast your request to verified donors in your area.
          </p>
          
          <div className="glass" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem', borderLeft: '4px solid hsl(var(--primary))' }}>
            <AlertCircle color="hsl(var(--primary))" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Emergency Priority</h4>
              <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
                All requests are treated with high priority. Please ensure phone numbers provided are reachable 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="glass glass-hover" style={{ padding: '2.5rem' }}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-group">
                <label>Patient Name</label>
                <input type="text" className="input-field" required placeholder="Full Name" />
              </div>
              <div className="input-group">
                <label>Blood Group Required</label>
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
            </div>

            <div className="input-group">
              <label>Hospital Name & Address</label>
              <textarea className="input-field" required rows="3" placeholder="Complete hospital address with ward number"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-group">
                <label>Units Required</label>
                <input type="number" className="input-field" required min="1" max="10" placeholder="e.g. 2" />
              </div>
              <div className="input-group">
                <label>Required By (Date & Time)</label>
                <input type="datetime-local" className="input-field" required />
              </div>
            </div>

            <div className="input-group">
              <label>Contact Person Name</label>
              <input type="text" className="input-field" required placeholder="Name of attendant" />
            </div>

            <div className="input-group">
              <label>Contact Number</label>
              <input type="tel" className="input-field" required placeholder="+91" />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              <Activity size={20} style={{ marginRight: '0.5rem' }} />
              Submit Urgent Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
