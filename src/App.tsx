import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Partner from './components/Partner';
import Contact from './components/Contact';
import SpaceBackground from './components/SpaceBackground';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="relative">
      <SpaceBackground />
      <Navigation />
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Partner />
      <Contact />
    </div>
  );
}

export default App;
