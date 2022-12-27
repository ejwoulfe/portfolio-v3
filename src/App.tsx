import "./App.css";
import Banner from "./components/banner/banner";
import Navigation from "./components/navigation/navigation";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
