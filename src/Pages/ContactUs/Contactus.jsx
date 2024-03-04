import React, { useEffect } from 'react';
import Navs from '../../../Components/Navbar/Navs';
import Footer from '../../../Components/footer/Footer';
import GetInTouch from '../../../Components/body/GetInTouch/GetInTouch'
import "./contactus.css";

const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <>
      <Navs />
      <div className="containerSlider4">
            <div className="front3">
              <img
                src="/public/Images/Contact-us/Capture.PNG"
                alt="Slider"
              />
              <div className="text-overlay">CONTACT US</div>
          </div>
          </div>
      <GetInTouch/>
      <Footer />
    </>
  );
};

export default Contactus;
