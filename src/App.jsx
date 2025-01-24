import Hero from "./components/Hero"
import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import About from "./components/About"
 import Skills from "./components/Skills"
 import Experience from "./components/Experience"
 import Contact from "./components/Contact"

const App = () => {
  console.log("Navbar component is rendering");

  return (
    <div>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Hero />
        <Skills />
        <About />
        <Project />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
