import React from 'react';
import './App.css';
import HomepageImage from './Components/HomepageImage';
import Images from './Pages/Images';
import Contact from './Pages/Contact';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
    <Router>
      <Switch>
        <Route exact path ="/" component={HomepageImage} />
        <Route exact path ="/Images" component= {Images} />
        <Route exact path ="/Contact" component= {Contact} />
      </Switch>
    </Router>
      </header>
    </div>
  );
}

export default App;
