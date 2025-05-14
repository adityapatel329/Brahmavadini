import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Bestsellers from './components/Bestsellers/Bestsellers';
import Essence from './components/Essence/Essence';
import Founder from './components/Founder/Founder';
import YagyaKundSpecials from './components/YagyaKundSpecials/YagyaKundSpecials';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
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
