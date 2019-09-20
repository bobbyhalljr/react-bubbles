import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";
import { BubbleContext } from "./contexts/BubbleContext";

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
        <BubbleContext.Provider value={setColorList}>
          <PrivateRoute exact path='/bubble-page' component={BubblePage} />
        </BubbleContext.Provider>
      </div>
    </Router>
  );
}

export default App;
