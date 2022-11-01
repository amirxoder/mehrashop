import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Menu />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
