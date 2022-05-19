// import React from 'react';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import thunkFunction from './redux/fetchRequest';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Display from './Display';
import Home from './Home';
import '../App.css';

function App() {
  return (
    <div className="App">
      <div className="contain">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Display" element={<Display />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
