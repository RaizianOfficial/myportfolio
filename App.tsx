import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificate from './components/certificate';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Certificate />
        <About />
        <Contact />
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default App;
