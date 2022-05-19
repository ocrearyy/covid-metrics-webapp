import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import thunkFunction from '../redux/API'
import { useSelector } from 'react-redux';

const Home = () => {
  const country = useSelector(store => store);
  // const info = useSelector(store => store.info);
  // console.log(store);
  thunkFunction();
  return (
    <div className="home">
      {country.map(country => {
        return (
          <div className="outer">
            <div className="row">
              <div className="item">
                <BsArrowRightCircle />
                <h2 className="country">{country.id}</h2>
                <h2 className="data">{country.today_confirmed}</h2>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Home;
