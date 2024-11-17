// src/App.jsx
import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Navbar from './sections/Navbar/Navbar';

function App() {
  return (
    <>
      {/* <Navbar /> */}
        <Hero />
        <Projects />
        {/* <div style={{ paddingTop: '10px' }}></div> */}
        <Skills />
        {/* <Contact /> */}
        <Footer />
      
    </>
  ); 
}

export default App;
