import './ApexCenter.css';
import React from 'react';
import { useSelector }              from 'react-redux';
import ApexCenterHome               from './ApexCenterHome.jsx';
import ApexCenterUser               from './ApexCenterUser.jsx';
import ApexCenterPeople             from './ApexCenterPeople.jsx';
import ApexCenterBookmark           from './ApexCenterBookmark.jsx';

import ApexCenterBike               from './ApexCenterBike.jsx';
import ApexCenterBikeCab            from './ApexCenterBikeCab.jsx';


// config
import config                       from '../F1Customize/config_private.js';

export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Center ');
  const user = useSelector( state => state.User.current );
  const show = user || (window.location.hostname === 'localhost');
  return (

    <div className="apex-center">
      {config.show.User     && <ApexCenterUser/>}
      {config.show.Articles && <ApexCenterHome/>}
      {config.show.Bookmarks && <ApexCenterBookmark/>}

      {config.show.Bike && <ApexCenterBike/>}
      {config.show.BikeCab && <ApexCenterBikeCab/>}

      {config.show.People && show && <ApexCenterPeople/>}

    </div>
  );
};