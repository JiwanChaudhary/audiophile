import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./GlobalStyle.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/common/Home";
import Product from "./components/common/Product";
import SpeakerOne from "./components/common/SpeakerOne";
import SpeakerTwo from "./components/common/SpeakerTwo";
import Earphone from "./components/common/Earphone";
import EarphoneDes from "./components/common/EarphoneDes";
import Footer from "./components/footer/Footer";
import Headphones from "./components/pages/Headphone/Headphones";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Product />
                <SpeakerOne />
                <SpeakerTwo />
                <Earphone />
                <EarphoneDes />
              </>
            }
          />

          <Route path="/headphones" element={<Headphones />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
