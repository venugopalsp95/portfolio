import Navbar from "./components/navbar/Navbar";
import "./styles/index.css";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <Skills id="skills" />
      <Projects id="project" />
      <Contact id="contact" />
    </>
  );
}

export default App;
