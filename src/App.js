import React from 'react';
import './styles/App.css';
import Navigation from "./Navigation";
import Hero from "./Hero";
import Contact from "./Contact"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Contact />
    </div>
  );
}

export default App;
