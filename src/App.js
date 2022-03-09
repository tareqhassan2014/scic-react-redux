import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer/>
      <FooterBottom/>
    </>
  );
}

export default App;
