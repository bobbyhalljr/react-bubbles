import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { BubbleContext } from "../contexts/BubbleContext";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth().get('/colors')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => console.log(err.response))
  }, [])

  return (
    <>
      {/* <BubbleContext.Provider value={setColorList}> */}
        <Router>
          <NavLink to='/color-list'>ColorList</NavLink>
          <Route path='/color-list/' render={props => <ColorList {...props} colors={colorList} updateColors={setColorList} />} />
          <Bubbles colors={colorList} />
        </Router>
      {/* </BubbleContext.Provider> */}
    </>
  );
};

export default BubblePage;
