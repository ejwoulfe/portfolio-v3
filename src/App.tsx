import "./App.css";
import Banner from "./components/banner/banner";
import Navigation from "./components/navigation/navigation";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Banner />
        <Skills />
      </main>
    </div>
  );
}

export default App;
