import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";

const App = () => {
 return (
  <Router>
   <Fragment>
    <Navbar />

    <div>
     <Switch>
      <Route exact path='/' component={Home} />
     </Switch>
    </div>
   </Fragment>
  </Router>
 );
};

export default App;
