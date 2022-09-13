import About from './containers/About/About';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import Skills from './containers/Skills/Skills';
import Work from './containers/Work/Work';
import Navbar from './components/Navbar/Navbar';
import './App.scss';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      
    </div>
  );
}

export default App;
