import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import TrialPopup from "./components/TrialPopup";
import Stats from "./components/Stats";
import Gallery from "./components/Gallery";


function App() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Navbar/>
      <Hero openPopup={() => setShowPopup(true)} />
      <Stats/>
      <Programs/>
      <Trainers/>
      <Pricing/>
      <Gallery/>
      <Footer/>


      <a
        href="https://wa.me/918668961856?text=Hello%20PowerFit%20Gym!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        Chat on WhatsApp
      </a>

    {showPopup && <TrialPopup closePopup={() => setShowPopup(false)} />}
    </>
  );
}

export default App;