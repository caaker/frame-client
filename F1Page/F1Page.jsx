import './F1Page.css';
import React                from 'react';
import { useSelector }      from 'react-redux';

// app pages
import A1Article            from              '../A1Article/A1Article.jsx';
import A1Bookmark           from              '../A1Bookmark/A1Bookmark.jsx';
import A1Station            from              '../A1Station/A1Station.jsx';
import A1People             from              '../A1People/A1People.jsx';

// framework pages
import A1User from                    '../A1User/A1User.jsx';

export default () => {
  const page = useSelector( (state) => state.MenuPage.current );
  console.logD('DEBUG: L2 : F1-Page');
  return (
    <div id='page_hold'>
      <div className='page_container'>

        {(page === 'User')                    &&   <A1User/>}
        {(page === 'Articles')                &&   <A1Article/>}
        {(page === 'Bookmarks')               &&   <A1Bookmark/>}
        {(page === 'Clock')                   &&   <A1Station/>}
        {(page === 'People')                  &&   <A1People/>}

      </div>
    </div>
  );
};
