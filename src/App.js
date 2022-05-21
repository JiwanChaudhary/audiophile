import "./GlobalStyle.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Product />
    </>
  );
}

export default App;
