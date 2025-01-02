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
import SVGMap             from '../C0Vectors/SVGMap.jsx';


import                         './MenuBox.css';


export default () => {
  const dispatch = useDispatch();

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

      {<MenuBoxItem name='User'>
        <SVGUser />
      </MenuBoxItem>}

      {<MenuBoxItem name='Articles'>
        <SVGHome  />
      </MenuBoxItem>}

      {<MenuBoxItemOdd name='Add'>
        <SVGAdd />
      </MenuBoxItemOdd>}

{/*      
      {admin && <MenuBoxItem name='Stocks'>
        <SVGStocks/>
      </MenuBoxItem>}

      {admin && <MenuBoxItem name='Map'>
        <SVGMap/>
      </MenuBoxItem>}

      { false && <MenuBoxItem name='Clock'>
        <SVGClock/>
      </MenuBoxItem>}

      {admin && <MenuBoxItem name='People'>
        <SVGPeople/>
      </MenuBoxItem>}

      {false && <MenuBoxItem name='BikeCab'>
        <SVGBike  />
      </MenuBoxItem>}

      {false && <MenuBoxItem name='Bike'>
        <SVGBike  />
      </MenuBoxItem>}

      {<MenuBoxItem name='Bookmarks'>
        <SVGBookmark />
      </MenuBoxItem>}

*/}

    </span>
  );
};


  // const email = useSelector((state)=>state.User.current.email);
  // const admin = (email === 'caaker.0@gmail.com') || (window.location.hostname === 'localhost');

