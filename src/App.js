import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectSection from './components/Projects';

function App() {
  return (
    <div className="App my-0">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <ProjectSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
