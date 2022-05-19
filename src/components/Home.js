import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";

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
    
    <div className="item ja">
      <BsArrowRightCircle />
      <h2 className="country">Jamaica</h2>
    </div>
    <div className="item be">
      <BsArrowRightCircle />
      <h2 className="country">Belize</h2>
    </div>
  </div>
  <div className="border">Stats by Country</div>
  <div className="row">
    <div className="item pu">
    <BsArrowRightCircle />
    <h2 className="country">Puerto Rico</h2>
    </div>
    <div className="item ar">
      <BsArrowRightCircle />
      <h2 className="country">Aruba</h2>
      </div>
  </div>
  <div className="row">
    <div className="item ba">
    <BsArrowRightCircle />
    <h2 className="country">Bahamas</h2>
    </div>
    <div className="item bar">
    <BsArrowRightCircle />
    <h2 className="country">Barbados</h2>
    </div>
  </div>
</div>
  </div>
);

export default Home;
