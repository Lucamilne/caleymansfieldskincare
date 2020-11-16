import React from 'react';
import './styles/App.css';
import { Route, Switch, useLocation, } from "react-router-dom";
import AboutMe from './AboutMe';
import ReadMore from './ReadMore';
import Home from "./Home.js";

function App() {
  const location = useLocation()
  const isModal = location.state && location.state.modal;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/about" children={<AboutMe />} />
        <Route path="/technology/:id" children={<ReadMore />} />
        <Route>{''}</Route>
      </Switch>
      {isModal && <Route path="/about" children={<AboutMe />} />}
      {isModal && <Route path="/technology/:id" children={<ReadMore />} />}
    </div>
  );
}

export default App;