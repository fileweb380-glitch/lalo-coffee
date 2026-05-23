import React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Heritage from "./components/Heritage";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";
import Footer from "./components/Footer";

import Soon from "./components/Soon";

import "./App.css";

function App() {
  return (
    <>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="font-poppins">
              <Navbar />
              <Hero />
              <About />
              <Products />
              <WhyChooseUs />
              <Heritage />
              <Gallery />
              <Testimonials />
              <Vision />
              <Footer />
            </div>
          }
        />

        {/* Soon Page */}
        <Route path="/soon" element={<Soon />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </>
  );
}

export default App;