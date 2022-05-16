import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav">
    <ul id="navList">
      <li><Link id="anchora" to="/">Home</Link></li>
      <li><Link id="anchorb" to="/Display">Display</Link></li>
    </ul>
  </div>
);

export default NavBar;
