import                                  './A1Bookmark.css';
import React, { useEffect, useState }   from 'react';
import { useSelector }                  from 'react-redux';


export default () => {

  // holds the current menu state for tags
  const [tag, setTag] = useState('Nutrition');
  const articles = useSelector((state) => state.Articles.articles);
  const top_hash = {};

  function makeTopHash() {
    if(!articles) {
      return;
    }
    articles.forEach((article) => {

      // populate tags
      if(article.tag in top_hash) {
        // top_hash[article.tag]['_count'] = top_hash[article.tag]['_count'] + 1;
      } else {
        top_hash[article.tag] = {};
        // top_hash[article.tag]['_count'] = 1;
      }

      // populate domains - favicon + domain_name
      if(article.domain in top_hash[article.tag]) {
        // top_hash[article.tag][article.domain]['_count'] = top_hash[article.tag][article.domain]['_count'] + 1;
      } else {
        top_hash[article.tag][article.domain] = {};
        // top_hash[article.tag][article.domain]['_count'] = 1;
      }

      // populate bookmarks - favicon + title + url

    });
  }

  makeTopHash();

  function makeTags() {
    let array = []
    for (const the_tag in top_hash) {
      array.push(the_tag);
    }
    array.sort();
    array = array.map((value, index) => {
      return <div key={index} onClick={clicked} id={value} className='tag_ovals'>{value}</div>
    })
    return array;
  };

  function clicked(event) {
    setTag(event.target.id);
  }

  function makeDomains() {
    if(!articles) {
      return;
    }
    let array = []
    for (const the_domain in top_hash[tag]) {
      array.push(the_domain);
    }
    array.sort();
    array = array.map((value, index) => {
      return  <div className='domain_divs' key={index} id={value} >
                <img className='domain_images' src={'https://www.google.com/s2/favicons?domain=' + value} />
                <a className='domain_values' target="_blank" href={'https://' + value}>{value}</a>
              </div>
    });
    return array;
  }


  // console.log(top_hash);
  console.logD('DEBUG: L3 : F1-Page-Bookmark ');

  return (

    <div id = "page_bookmark">

      <div id = "big_wrapper">
        <div id = "tags_wrapper">
          {makeTags()}
        </div>
        <div id = "domain_wrapper">
          {makeDomains()}
        </div>
      </div>

    </div>
  );
};
