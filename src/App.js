import React from 'react';
import './styles/App.css';
import Navigation from "./Navigation";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Showcase from "./Showcase";
import Products from "./Products";
import Technologies from "./Technologies"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Introduction />
      <Showcase />
      <Products />
      <Technologies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
