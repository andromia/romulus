import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.png';
import './App.global.css';

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="Home">
        <img width="200px" alt="icon" src={icon}/>
      </div>
      <h1>Romulus</h1>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
