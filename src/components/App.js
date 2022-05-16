import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Display from './Display';
import Home from './Home';
import '../App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Display" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
