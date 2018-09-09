import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div class="headerStyle">
          <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/item">Item</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
    </div>
  );
}


export default Navigation;
