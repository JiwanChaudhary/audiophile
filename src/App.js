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
import Features from "./components/pages/Headphone/Features";
import HeadphoneImage from "./components/pages/Headphone/HeadphoneImage";
import SimilarProduct from "./components/pages/Headphone/SimilarProduct";
import Cart from "./components/pages/Cart/Cart";

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

          <Route
            path="/headphones"
            element={
              <>
                <Headphones />
                <Features />
                <HeadphoneImage />
                <SimilarProduct />
                <Product />
                <EarphoneDes />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
