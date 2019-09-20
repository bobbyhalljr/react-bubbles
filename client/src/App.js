import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <nav>
          <div>
            <NavLink to='/login'>Login</NavLink>
          </div>
          <div>
            <NavLink to='/bubble-page'>Bubbles Page</NavLink>
          </div>
        </nav>
        <Route path="/login" component={Login} />
        {/* <Route component={Login}/> */}
        <PrivateRoute exact path='/bubble-page' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
