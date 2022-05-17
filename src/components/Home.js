import React from 'react';

fetch("https://api.covid19tracking.narrativa.com/api/2020-03-22")
.then(res => {
  console.log('RESOLVED!', res);
  res.json(),then(data => console.log('JSON convert', data))
})
.catch(e => {
  console.log('ERROR!', e)
});


const Home = () => (
  <div className="home">
    <div className="outer">
  <div className="row">
    <div className="item">Jamaica</div>
    <div className="item">Belize</div>
  </div>
  <div>Stats by Country</div>
  <div className="row">
    <div className="item">Puerto Rico</div>
    <div className="item">Aruba</div>
  </div>
  <div className="row">
    <div className="item">Bahamas</div>
    <div className="item">Barbados</div>
  </div>
</div>
  </div>
);

export default Home;
