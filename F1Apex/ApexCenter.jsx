import './ApexCenter.css';
import React from 'react';
import { useSelector }              from 'react-redux';
import ApexCenterHome               from './ApexCenterHome.jsx';
import ApexCenterUser               from './ApexCenterUser.jsx';
import ApexCenterPeople             from './ApexCenterPeople.jsx';
import ApexCenterBookmark           from './ApexCenterBookmark.jsx';


export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Center ');
  return (

    <div className="apex-center">
      {<ApexCenterUser/>}
      {<ApexCenterHome/>}
      {<ApexCenterBookmark/>}

{/*   

      {<ApexCenterPeople/>}
*/}

    </div>
  );
};