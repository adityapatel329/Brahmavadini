import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Essence from "./components/Essence/Essence";
import Founder from "./components/Founder/Founder";
import YagyaKundSpecials from "./components/YagyaKundSpecials/YagyaKundSpecials";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";

// Layout for the main page components
function HomePageLayout() {
  return (
    <div className="py-8">
      <HeroBanner />
      <Bestsellers />
      <Essence />
      <Founder />
      <YagyaKundSpecials />
      <Reviews />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavigationBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<HomePageLayout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
