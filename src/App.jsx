import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Designs from './sections/Projects/Designs';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Navbar from './sections/Navbar/Navbar';

// Import the specific case study components
import FPC from './sections/case-studies/fpc'; // Ensure this path is correct and the component exists
// import Ikea from './case-studies/Ikea'; // Example for other case studies
// import Riot from './case-studies/Riot'; // Example for other case studies

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/skills" element={<Skills />} />

        {/* Add routes for case studies */}
        <Route path="/case-studies/fpc" element={<FPC />} />
        {/* <Route path="/case-studies/ikea" element={<Ikea />} />
        <Route path="/case-studies/riot" element={<Riot />} />
         */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
