import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';

import Designs from './sections/Projects/Designs';

import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Navbar from './sections/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/designs" element={<Designs />} />

        <Route path="/skills" element={<Skills />} />
        {/* You can add more routes here as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
