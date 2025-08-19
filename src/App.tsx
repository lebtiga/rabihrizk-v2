import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AKAWireframe from './components/AKAWireframe';
import SpaceBackground from './components/SpaceBackground';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="relative">
        <SpaceBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aka-seo-wireframe" element={<AKAWireframe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
