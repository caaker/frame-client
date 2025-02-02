import                                  './A1Bookmark.css';
import React, { useEffect, useState }   from 'react';
import { useSelector }                  from 'react-redux';

export default () => {
  const [tag, setTag] = useState('Nutrition');
  const articles = useSelector((state) => state.Articles.articles);
  const top_hash = {};

  // top hash models an n-ary tree with only 2 levels - tags and domains
  function makeTopHash() {
    if(!articles) {
      return;
    }
    articles.forEach((article) => {
      if(!(article.tag in top_hash)) {
        top_hash[article.tag] = {};
      }
      if(!(article.domain in top_hash[article.tag])) {
        top_hash[article.tag][article.domain] = {};
      }
    });
  }
  makeTopHash();

  function makeTags() {
    const t1 = Object.keys(top_hash);
    const t2 = t1.sort();
    return t2.map((value, index) => {
      return <div key={index} onClick={clicked} id={value} className='tag_ovals'>{value}</div>
    });
  };

  // domains
  function makeDomains() {
    if(!articles || articles.length === 0) {
      return;
    }
    let array = Object.keys(top_hash[tag]).sort();
    array = array.map((value, index) => {
      return  <div className='domain_divs' key={index} id={value} >
        <img className='domain_images' src={'https://www.google.com/s2/favicons?domain=' + value} />
        <a className='domain_values' target="_blank" href={'https://' + value}>{value}</a>
      </div>
    });
    return array;
  }

  function clicked(event) {
    setTag(event.target.id);
  }

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
