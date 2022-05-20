import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import thunkFunction from '../redux/API';

const Display = () => {
  const country = useSelector((store) => store);
  useEffect(() => {
    thunkFunction();
  }, []);
  const blaa = window.location.href.slice(30);
  return (
    <div className="home">
      <h1>Please see further details</h1>
      <section>
        {country.map((i) => (i.id === blaa
          ? (
            <div key={i.id}>
              <h1 key={i.id}>{i.id}</h1>
              <p>{i.today_confirmed}</p>
              <p>{i.today_confirmed}</p>
              <p>{i.today_open_cases}</p>
              <p>{i.yesterday_confirmed}</p>

            </div>
          )
          : console.log('it is not right match')))}
      </section>
    </div>
  );
};

export default Display;
