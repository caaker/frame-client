import                                  './A1Bookmark.css';
import React, { useEffect, useState }   from 'react';
import { useSelector }                  from 'react-redux';
import C1Link                           from '../C1Link/C1Link.jsx'

export default () => {
  const [tag, setTag] = useState('Nutrition');
  const articles = useSelector((state) => state.Articles.articles);
  const top_hash = {};

  // top hash models an n-ary tree with only 2 levels - tags and domains
  function makeTopHash() {
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
    const tags = (Object.keys(top_hash)).sort();
    return tags.map((value, index) => <div key={index} onClick={clicked} id={value} className='tag_ovals'>{value}</div>);
  };

  function makeDomains() {
    const domains = Object.keys(top_hash[tag]).sort();
    return domains.map((value, index) => <C1Link key={index} value={value}/>);
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
