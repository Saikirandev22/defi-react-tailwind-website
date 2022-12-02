import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Developer from './Components/Developer';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
function App() {
  return (
    <div className=' bg-black'>
      <Navbar></Navbar>
      <Hero/>
      <About></About>
      <Developer></Developer>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
