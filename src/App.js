import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Benefits from "./components/benefits/Benefits";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefits />
      <About/>
    </div>
  );
}

export default App;
