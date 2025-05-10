import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import HowItWorks from "../Components/HowItWorks";

const AppLayout = () => {
  return (
    <div className='bg-[#f8fafc] dark:bg-gray-900'>
      <Header />
      <Home />
      <HowItWorks />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppLayout;
