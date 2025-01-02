import './ApexCenter.css';
import React from 'react';
import { useSelector }              from 'react-redux';
import ApexCenterHome               from './ApexCenterHome.jsx';
import ApexCenterUser               from './ApexCenterUser.jsx';
import ApexCenterPeople             from './ApexCenterPeople.jsx';
import ApexCenterBookmark           from './ApexCenterBookmark.jsx';

import ApexCenterBike               from './ApexCenterBike.jsx';
import ApexCenterBikeCab            from './ApexCenterBikeCab.jsx';

export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Center ');
  return (

    <div className="apex-center">
      {<ApexCenterUser/>}
      {<ApexCenterHome/>}

{/*   
      {<ApexCenterBookmark/>}
      {<ApexCenterBike/>}
      {<ApexCenterBikeCab/>}
      {<ApexCenterPeople/>}

*/}

    </div>
  );
};


  // const user = useSelector( state => state.User.current );
  // const show = user || (window.location.hostname === 'localhost');
