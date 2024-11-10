import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects"
import Experience from "./pages/Experience";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
