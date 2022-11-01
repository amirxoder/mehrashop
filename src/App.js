import "./App.css";
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import Menu from "./components/menu/Menu";
import Offerce from "./components/offerce/Offerce";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Menu />
        <HeroSection />
        <Products />
        <Offerce />
      </div>
    </div>
  );
}

export default App;
