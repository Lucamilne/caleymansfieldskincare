import React from 'react';
import './styles/App.css';
import Navigation from "./Navigation";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Products from "./Products";
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Introduction />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
