import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Logo from './Logo';

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="Home">
        <Logo />
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
