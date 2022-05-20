import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import thunkFunction from '../redux/API';

const Display = () => {
  const country = useSelector((store) => store);
  useEffect(() => {
    thunkFunction();
  }, []);
  // console.log(typeof country);
  const blaa = window.location.href.slice(30);
  // console.log(blaa);
  const toggle = (a) => {
    const movie = <p>test</p>;
    if (a.id === blaa) {
      movie.textContent = a.id
    }
    return movie;
  };
  return (
    <div className="home">
      <h1>Please see further details</h1>
      <section>
        {country.map((i) => toggle(i))}
        {/* <h2 className="country">{country.id}</h2>
        <h2 className="date">
          Date:
          {country.date}
        </h2>
        <h2 className="confirm">
          Confirmed Cases:
          {country.today_confirmed}
        </h2> */}
      </section>
    </div>
  );
};

export default Display;
