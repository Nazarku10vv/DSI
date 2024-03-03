import './App.css';
import Box from './components/Box';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Info/>
     <Box/>
     <Contact/>
     <Footer/>  

    </div>
  );
}

export default App;
