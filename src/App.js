import "./GlobalStyle.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import SpeakerOne from "./components/pages/SpeakerOne";
import SpeakerTwo from "./components/pages/SpeakerTwo";
import Earphone from "./components/pages/Earphone";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Product />
      <SpeakerOne />
      <SpeakerTwo />
      <Earphone />
    </>
  );
}

export default App;
