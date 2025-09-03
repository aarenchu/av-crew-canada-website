import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Home from './pages/Home';
import DesktopAbout from './pages/About/DesktopAbout';
import MobileAbout from './pages/About/MobileAbout';
import AVServices from './pages/AVServices';
import Installation from './pages/Installation';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Header from './components/Header';
import Section from './components/Section';

const App: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState('home');
  // for smaller screens
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div className='App'>
      <Header visibleSection={visibleSection} />
      <Section id='home' setVisibleSection={setVisibleSection}>
        <Home />
      </Section>
      <Section id='about-us' setVisibleSection={setVisibleSection}>
        {isSmallerScreen ? <MobileAbout /> : <DesktopAbout />}
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
      <Section id='contact-us' setVisibleSection={setVisibleSection}>
        <Contact />
      </Section>
    </div>
  );
};

export default App;
