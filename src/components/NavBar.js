import React from 'react';
import { Link } from 'react-router-dom';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import '../App.css'
const NavBar = () => (
  <div className="nav">
    <ul id="navList">
      <li><Link id="anchora" to="/">{"<"}2022</Link></li>
      <li><Link id="anchorb" to="/Display">Covid Cases</Link></li>
    </ul>
    <div className="logoDiv">
      <BiMicrophone className="microphone" />
      <FiSettings />
    </div>
  </div>
);

export default NavBar;
