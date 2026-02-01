import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import VideoSection from './components/VideoSection';
import ParallaxSection from './components/ParallaxSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Founders from './components/Founders';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <VideoSection />
      <ParallaxSection />
      <Features />
      <Testimonials />
      <Founders />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
