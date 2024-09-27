import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Benefits from "./components/benefits/Benefits";
import About from "./components/about/About";
import Order from "./components/order/Order";
import Reviews from "./components/reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefits />
      <About />
      <Order />
      <Reviews />
    </div>
  );
}

export default App;
