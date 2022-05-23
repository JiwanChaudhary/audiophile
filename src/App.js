import "./GlobalStyle.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import SpeakerOne from "./components/pages/SpeakerOne";
import SpeakerTwo from "./components/pages/SpeakerTwo";
import Earphone from "./components/pages/Earphone";
import EarphoneDes from "./components/pages/EarphoneDes";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Product />
      <SpeakerOne />
      <SpeakerTwo />
      <Earphone />
      <EarphoneDes />
      <Footer />
    </>
  );
}

export default App;
