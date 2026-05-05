import { Link } from 'react-router-dom';
import { Activity, Users, ShieldPlus, Droplet } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            A Single Drop of Life <br />
            Can <span className="text-gradient">Save a World</span>
          </h1>
          <p style={{ color: 'hsl(var(--text-muted))', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Jeeva Bindu connects blood donors with those in urgent need. 
            Register today and become someone's hero.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Donate Blood Now
            </Link>
            <Link to="/request-blood" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Request Blood
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "10,000+", desc: "Registered Donors" },
            { icon: Droplet, title: "25,000+", desc: "Lives Saved" },
            { icon: Activity, title: "24/7", desc: "Emergency Support" },
            { icon: ShieldPlus, title: "100%", desc: "Verified Donors" }
          ].map((stat, i) => (
            <div key={i} className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
              <stat.icon size={48} color="hsl(var(--primary))" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{stat.title}</h3>
              <p style={{ color: 'hsl(var(--text-muted))' }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '6rem 0', backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'hsl(var(--primary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
              <h3 style={{ marginBottom: '1rem' }}>Register</h3>
              <p style={{ color: 'hsl(var(--text-muted))' }}>Create an account and provide your blood group and location details.</p>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'hsl(var(--primary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
              <h3 style={{ marginBottom: '1rem' }}>Get Notified</h3>
              <p style={{ color: 'hsl(var(--text-muted))' }}>Receive alerts when someone in your area urgently needs your blood group.</p>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'hsl(var(--primary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
              <h3 style={{ marginBottom: '1rem' }}>Save a Life</h3>
              <p style={{ color: 'hsl(var(--text-muted))' }}>Donate blood to the recipient and become a real-life hero.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
