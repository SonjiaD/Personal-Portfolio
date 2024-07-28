import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (<>
    <Hero/>
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </>
  ); 
}

// just a combination of js and html file, 
// writing them in the same file, which makes the react component

export default App;



