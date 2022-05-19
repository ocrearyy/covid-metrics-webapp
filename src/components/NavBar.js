import React from 'react';
import { Link } from 'react-router-dom';
import { BiMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { AiFillHome } from "react-icons/ai";

import '../App.css'
const NavBar = () => (
  <div className="nav">
    <ul id="navList">
      <li><Link id="anchora" to="/"><AiFillHome /></Link></li>
      <li><Link id="anchorb" to="/Display">Covid Watch</Link></li>
    </ul>
    <div className="logoDiv">
      <BiMicrophone className="microphone" />
      <FiSettings />
    </div>
  </div>
);

export default NavBar;
