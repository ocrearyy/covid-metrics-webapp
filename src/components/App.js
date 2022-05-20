import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './NavBar';
import Display from './Display';
import Home from './Home';
import { setInitialData } from '../redux/reducer';
import '../App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialData());
  }, []);
  return (
    <div className="App">
      <div className="contain">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/country/:id" element={<Display />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
