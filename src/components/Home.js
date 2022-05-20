import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
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
              <BsArrowRightCircle />
              <h2 className="country">{country.id}</h2>
              <h2 className="date">
                Date:
                {country.date}
              </h2>
              <h2 className="confirm">
                Confirmed Cases:
                {country.today_confirmed}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
