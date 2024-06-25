import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Project from './Project';
import Experience from './Experience';
import Skills from './Skills';
import POR from './POR';
import Achievements from './Achievements';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/vibha_gupta/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/por" element={<POR />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;



