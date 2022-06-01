import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import thunkFunction from '../redux/API';

const Display = () => {
  const country = useSelector((store) => store);
  useEffect(() => {
    thunkFunction();
  }, []);
  const details = window.location.href.slice(30);
  return (
    <div className="display-body">
      <div>
        <h1 className="main-text">Further Details</h1>
      </div>
      <section className="section">
        {country.map((i) => (i.id === details
          ? (
            <div className="main-p" key={i.id}>
              <h1 key={i.id}>{i.id.toUpperCase()}</h1>
              <p>
                Today&lsquo;s Confirmed Cases:
                &nbsp;
                {i.today_confirmed}
              </p>
              <p>
                Today&lsquo;s Confirmed deaths:
                &nbsp;
                {i.today_deaths}
              </p>
              <p>
                Today&lsquo;s Open Cases:
                &nbsp;
                {i.today_open_cases}
              </p>
              <p>
                Today&lsquo;s Recovered Cases:
                &nbsp;
                {i.today_recovered}
              </p>
            </div>
          )
           :console.log('it is not right match')))}

      </section>
    </div>
  );
};

export default Display;
