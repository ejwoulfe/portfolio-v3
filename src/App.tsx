import "./App.css";
import Banner from "./components/banner/banner";
import Navigation from "./components/navigation/navigation";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Banner />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
