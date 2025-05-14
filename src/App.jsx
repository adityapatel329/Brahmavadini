import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import Bestsellers from './components/Bestsellers';
import Essence from './components/Essence';
import Founder from './components/Founder';
import YagyaKundSpecials from './components/YagyaKundSpecials';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <div className="announcement-bar section-gap">
        Free Shipping on Orders Above ₹999 | Same Day Dispatch
      </div>
      <NavigationBar />
      <HeroBanner />
      <Bestsellers />
      <Essence />
      <Founder />
      <YagyaKundSpecials />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
