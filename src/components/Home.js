import React from 'react';
import { RiFirstAidKitLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import thunkFunction from '../redux/API';

const Home = () => {
  const country = useSelector((store) => store);
  thunkFunction();
  return (
    <div className="home">
      {country.map((country) => (
        <Link to={`/country/${country.id}`} className="outer" key={country.id}>
          <div className="row">
            <div className="item">
              <RiFirstAidKitLine className="first-aid" />
              <h2 className="country">{country.id.toUpperCase()}</h2>
              <button type="button" className="btn">View Details</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
