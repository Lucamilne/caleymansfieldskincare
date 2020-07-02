import React from 'react';
import './styles/App.css';
import Navigation from "./Navigation";
import Hero from "./Hero";
import Range from "./Range"
import Contact from "./Contact"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
       <Range />
      <Contact />
    </div>
  );
}

export default App;
