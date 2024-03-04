import React from 'react';
import Navs from '../Navbar/Navs';
import Footer from '../footer/Footer';
import SliderSection from '../body/SliderSection/SliderSection';
import Introduction from '../body/Introduction/Introduction';
import ServicesWeOffer from '../body/ServicesWeOffer/ServicesWeOffer';
import InformationalBolg from '../body/InformationalBlog/InformationalBolg';
import GetInTouch from '../body/GetInTouch/GetInTouch';


const MainBody = () => {
  return (
   <>
   <Navs/>
   <SliderSection/>
   <Introduction/>
   <ServicesWeOffer/>
   <InformationalBolg/>
   <GetInTouch/>
   <Footer/>
   
   </>
  );
}

export default MainBody;
