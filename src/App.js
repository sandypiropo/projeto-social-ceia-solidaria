import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/HowToHelp";
import Help from "./Components/Help";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home id="home" />
      <About id="about" />
      <Work id="work" />
      <Help id="help" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
