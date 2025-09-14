import './F1ApexCenter.css';
import React from 'react';
import { useSelector }              from 'react-redux';
import ApexCenterHome               from './ApexCenterHome.jsx';
import ApexCenterUser               from './ApexCenterUser.jsx';
import ApexCenterPeople             from './ApexCenterPeople.jsx';
import ApexCenterBookmark           from './ApexCenterBookmark.jsx';


export default function F1ApexCenter () {
  console.logD('DEBUG: L3 : F1-Apex-Center ');
  return (

    <div className="apex-center">
      {<ApexCenterUser/>}
      {<ApexCenterHome/>}
      {<ApexCenterBookmark/>}
    </div>
  );
};


/*   

  This will be the chat / AI integration later
  {<ApexCenterPeople/>}

*/