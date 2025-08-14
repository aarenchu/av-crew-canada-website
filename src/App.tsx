import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import AVServices from './pages/AVServices';
import Installation from './pages/Installation';
import Rentals from './pages/Rentals';
// import DJServices from './pages/DJServices';
import Contact from './pages/Contact';
import Header from './components/Header';
import Section from './components/Section';
// import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState('home');
  return (
    <div className='App'>
      <Header visibleSection={visibleSection} />
      <Section id='home' setVisibleSection={setVisibleSection}>
        <Home />
      </Section>
      <Section id='about-us' setVisibleSection={setVisibleSection}>
        <About />
      </Section>
      <Section id='av-services' setVisibleSection={setVisibleSection}>
        <AVServices />
      </Section>
      <Section id='installation' setVisibleSection={setVisibleSection}>
        <Installation />
      </Section>
      <Section id='rentals' setVisibleSection={setVisibleSection}>
        <Rentals />
      </Section>
      {/* <DJServices /> */}
      <Section id='contact-us' setVisibleSection={setVisibleSection}>
        <Contact />
      </Section>
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default App;
