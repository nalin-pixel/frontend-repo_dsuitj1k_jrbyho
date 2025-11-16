import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,0,0.08),transparent_60%)]" />
      <Navbar />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
