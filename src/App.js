import React from 'react';
import './styles/App.css';
import Navigation from "./Navigation";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Showcase from "./Showcase";
import Products from "./Products";
import Testimonials from "./Testimonials"
import ContactForm from "./ContactForm"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Introduction />
      <Showcase />
      <Products />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
