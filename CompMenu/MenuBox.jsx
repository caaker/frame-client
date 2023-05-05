import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuBoxItem        from './MenuBoxItem.jsx';
import MenuBoxItemOdd     from './MenuBoxItemOdd.jsx';
import SVGBookmark        from '../C0Vectors/SVGBookmark.jsx';

import SVGStocks          from '../C0Vectors/SVGStocks.jsx';
import SVGClock           from '../C0Vectors/SVGClock.jsx';

import SVGUser            from '../C0Vectors/SVGUser.jsx';
import SVGHome            from '../C0Vectors/SVGHome.jsx';
import SVGAdd             from '../C0Vectors/SVGAdd.jsx';
import SVGPeople          from '../C0Vectors/SVGPeople.jsx';
import SVGBike            from '../C0Vectors/SVGBike.jsx';

import                         './MenuBox.css';
import config             from '../F1Customize/config_private.js';


export default () => {
  const dispatch = useDispatch();
  const email = useSelector((state)=>state.User.current.email);
  const admin = (email === 'caaker.0@gmail.com') || (window.location.hostname === 'localhost');

  function bodyClicked(event) {
    console.log('DEBUG: document.body clicked via', event.target.id);
    if((event.target.id !== 'menu_top') && (event.target.id !== 'menu_path')) {
      // console.log('DEBUG: MenuBox: dipatch: toggleOff');
      dispatch({type: 'toggleMenuPageOff'});
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', bodyClicked);
    return () => {
      document.body.removeEventListener('click', bodyClicked);
    };
  });

  return (
    <span id='menu_box'>

      {config.show.User && <MenuBoxItem name='User'>
        <SVGUser />
      </MenuBoxItem>}

      {admin && <MenuBoxItem name='Stocks'>
        <SVGStocks/>
      </MenuBoxItem>}

      <MenuBoxItem name='Clock'>
        <SVGClock/>
      </MenuBoxItem>

      {admin && <MenuBoxItem name='People'>
        <SVGPeople/>
      </MenuBoxItem>}

      {config.show.BikeCab && <MenuBoxItem name='BikeCab'>
        <SVGBike  />
      </MenuBoxItem>}

      {config.show.Bike && <MenuBoxItem name='Bike'>
        <SVGBike  />
      </MenuBoxItem>}

      {config.show.Articles && <MenuBoxItem name='Articles'>
        <SVGHome  />
      </MenuBoxItem>}


      {config.show.Bookmarks && <MenuBoxItem name='Bookmarks'>
        <SVGBookmark />
      </MenuBoxItem>}

      {config.show.Add && <MenuBoxItemOdd name='Add'>
        <SVGAdd />
      </MenuBoxItemOdd>}

    </span>
  );
};




// https://www.google.com/search?q=document.body.addEventListener(%27click%27%2C+bodyClicked)%3B
