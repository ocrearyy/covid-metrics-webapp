import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './NavBar';
import Display from './Display';
import Home from './Home';
import { setInitialData } from '../redux/continent';
import '../App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialData());
  }, []);
  return (
    <Router className="App">
      <div className="contain">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/country/:id" element={<Display />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
