import React from 'react';
import './styles/App.css';
import Navigation from "./Navigation";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Range from "./Range"
import Contact from "./Contact"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Introduction />
      <Range />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
