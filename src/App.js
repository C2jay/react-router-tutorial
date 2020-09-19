import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from './pages/HomePage';
// import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        
        <Switch>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;