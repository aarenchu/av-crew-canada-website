import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AVServices from './pages/AVServices';
import Installation from './pages/Installation';
import Rentals from './pages/Rentals';
import DJServices from './pages/DJServices';
import Contact from './pages/Contact';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/av-services' element={<AVServices />} />
          <Route path='/installation' element={<Installation />} />
          <Route path='/rentals' element={<Rentals />} />
          <Route path='/dj' element={<DJServices />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
