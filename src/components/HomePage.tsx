import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Technologies from './Technologies';
import Projects from './Projects';
import Partner from './Partner';
import Contact from './Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Partner />
      <Contact />
    </>
  );
}

export default HomePage;