import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import FindDonors from './pages/FindDonors';
import RequestBlood from './pages/RequestBlood';
import RegisterDonor from './pages/RegisterDonor';
import './index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass" style={{ margin: '1rem', padding: '1rem 2rem', position: 'sticky', top: '1rem', zIndex: 50 }}>
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" style={{ textDecoration: 'none', color: 'white' }}>
          <Heart size={28} color="hsl(var(--primary))" fill="hsl(var(--primary))" />
          <span style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.5px' }}>Jeeva Bindu</span>
        </Link>
        
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/find-donors" className="nav-link">Find Donors</Link>
          <Link to="/request-blood" className="nav-link">Request Blood</Link>
          <Link to="/register" className="btn btn-primary">Become a Donor</Link>
        </div>

        <button className="md:hidden btn-outline" style={{ padding: '0.5rem' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 animate-fade-in" style={{ marginTop: '1rem', padding: '1rem 0', borderTop: '1px solid var(--glass-border)' }}>
          <Link to="/find-donors" className="nav-link" onClick={() => setIsOpen(false)}>Find Donors</Link>
          <Link to="/request-blood" className="nav-link" onClick={() => setIsOpen(false)}>Request Blood</Link>
          <Link to="/register" className="btn btn-primary" onClick={() => setIsOpen(false)}>Become a Donor</Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--glass-border)' }}>
    <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Heart size={20} color="hsl(var(--primary))" />
        <span style={{ fontWeight: '600' }}>Jeeva Bindu</span>
      </div>
      <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Jeeva Bindu Blood Donation. Saving lives together.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 150px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-donors" element={<FindDonors />} />
          <Route path="/request-blood" element={<RequestBlood />} />
          <Route path="/register" element={<RegisterDonor />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
