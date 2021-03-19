import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import TitleBar from './components/TitleBar';
import Icon from './components/Icon';

/* Home Page
 * The home page will have a centered upload icon if
 * there are no scripts found. Users can drag and drop
 * .py files or click the icon to select it manually.
 * if there are scripts found the page will load with
 * a board of them with buttons Run, Schedule, and Delete
 * to the right of the filenames. Users can click on the
 * row or filename to navigate to a setup page.
 */
const Home = () => {
  return (
    <div className="home-container">
      <TitleBar />
      <div className="center-div">
        <Icon
          id="upload-icon"
          className="interactive-icon"
          src="../assets/upload.svg"
          height="70px"
          width="70px"
        />
      </div>
    </div>
  );
};

/* Setup Page
 * The set up page will have a drop down preview of the
 * script contents with it minimized (partial) by default.
 * Below there will be data about the script and its setup
 * such as its filename, python interpreter, schedule data,
 * along with run history and statistics. Statistics will
 * be visualized with d3.js.
 */
const Setup = () => {
  return <div />;
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
