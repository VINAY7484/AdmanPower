import React from 'react';
import Navbar from './components/Navbar';
import SliderSection from './components/slider/SliderSection';
import Features from './components/features/Features';
import Services from './components/Services';
import AboutSection from './components/about/AboutSection';
import Vendors from './components/vendors/Vendors';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Industries from './pages/Industries';
import FindJob from './pages/FindJob';
import EmployerPage from './pages/EmployerPage';
import CandidatePage from './pages/CandidatePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>

    <Route  element={<Layout/>}>
    
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<ContactPage/>} />
    <Route path='/services' element={<Service/>} />
    <Route path='/industries' element={<Industries/>} />
    <Route path='/jobs' element={<FindJob/>} />
    <Route path='/employers' element={<EmployerPage />} />
    <Route path='/candidates' element={<CandidatePage />} />
    <Route path='*' element={<div>404 Not Found</div>} />
    
    </Route>
      </Routes>
    </Router>
  );
}

export default App;