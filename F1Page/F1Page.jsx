import './F1Page.css';
import React from 'react';
import { useSelector } from 'react-redux';

// app pages
import A1Article    from              '../A1Article/A1Article.jsx';
import A1Bookmark   from              '../A1Bookmark/A1Bookmark.jsx';
import A1Stocks     from              '../A1Stocks/A1Stocks.jsx';
import A1Clock      from              '../A1Clock/A1Clock.jsx';


import A1People     from              '../A1People/A1People.jsx';
import A1Bike       from              '../A1Bike/A1Bike.jsx';
import A1BikeCab    from              '../A1BikeCab/A1BikeCab.jsx';


// framework pages
import A1User from                 '../A1User/A1User.jsx';

export default () => {
  const page = useSelector( (state) => state.MenuPage.current );
  const user = useSelector( (state) => state.User.current );
  console.logD('DEBUG: L2 : F1-Page');
  return (
    <div id='page_hold'>
      <div className='page_container'>

        {(page === 'User')                    &&   <A1User/>}

        {(page === 'Articles')                &&   <A1Article/>}
        {(page === 'Bookmarks')               &&   <A1Bookmark/>}
        {(page === 'Stocks')                  &&   <A1Stocks/>}
        {(page === 'Clock')                   &&   <A1Clock/>}


        {(page === 'People')                  &&   <A1People/>}
        {(page === 'Bike')                    &&   <A1Bike/>}
        {(page === 'BikeCab')                 &&   <A1BikeCab/>}

      </div>
    </div>
  );
};
