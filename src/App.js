import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Friend from './Components/Friend/Friend';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {


  return (
    <div className="App">

      <Router>

        <Switch>

          <Route path="/home">



            <Home></Home>

          </Route>
          <Route exact path="/">



            <Home></Home>

          </Route>
          <Route path="/about/:id">



            <AboutMe ></AboutMe>

          </Route>



          <Route path='*'>

            <NoMatch></NoMatch>

          </Route>

        </Switch>

      </Router>

    </div>

  );
}

export default App;
