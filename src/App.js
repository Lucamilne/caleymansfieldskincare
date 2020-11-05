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
        <Route exact path="/caleymansfieldskincare/" children={<Home />} />
        <Route path="/caleymansfieldskincare/about" children={<AboutMe />} />
        <Route path="/caleymansfieldskincare/technology/:id" children={<ReadMore />} />
        <Route>{'404: not found'}</Route>
      </Switch>
      {isModal && <Route path="/about" children={<AboutMe />} />}
      {isModal && <Route path="/technology/:id" children={<ReadMore />} />}
    </div>
  );
}

export default App;