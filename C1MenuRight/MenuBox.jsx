import React, { useEffect }           from 'react';
import { useDispatch, useSelector }   from 'react-redux';

import                                './MenuBox.css';

// SVG Containers
import MenuBoxItem                    from './MenuBoxItem.jsx';
import MenuBoxItemAdd                 from './MenuBoxItemAdd.jsx';

// SVG
import SVGAdd                         from '../C0Vectors/SVGAdd.jsx';
import SVGUser                        from '../C0Vectors/SVGUser.jsx';
import SVGHome                        from '../C0Vectors/SVGHome.jsx';
import SVGBookmark                    from '../C0Vectors/SVGBookmark.jsx';
import SVGClock                       from '../C0Vectors/SVGClock.jsx';

export default function MenuBox () {
  const dispatch = useDispatch();

  function bodyClicked(event) {
    if((event.target.id !== 'menu_top') && (event.target.id !== 'menu_path')) {
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

      {<MenuBoxItemAdd name='Add'>
        <SVGAdd />
      </MenuBoxItemAdd>}

      {<MenuBoxItem name='User'>
        <SVGUser />
      </MenuBoxItem>}

      {<MenuBoxItem name='Articles'>
        <SVGHome  />
      </MenuBoxItem>}

      {<MenuBoxItem name='Bookmarks'>
        <SVGBookmark />
      </MenuBoxItem>}

      {<MenuBoxItem name='Clock'>
        <SVGClock/>
      </MenuBoxItem>}

    </span>

  );
};
