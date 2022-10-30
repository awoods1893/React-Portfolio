import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadFull } from "tsparticles"
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
    
    <Navbar />
    <Header/>
    <AboutMe />
    <Portfolio />
    <Contact />
    </>
    );
}

export default App;
