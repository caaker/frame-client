import                      './A1Article.css';

import React, { useEffect }   from 'react';
import { useSelector }        from 'react-redux';

import Article                from './Article.jsx';
import Search                 from './Search.js';
import arc                    from 'frame-arc';


export default () => {


  useEffect(() => {
    console.logD('DEBUG: L3 : F1-Page-Article : useEffect : scrollToHash ');
    arc.scrollToHash(0);
  });

  let articles = useSelector((state) => state.Articles.articles);
  let search = useSelector((state) => state.SearchInput.current);

  // make articles by filtering via search criteria, and then mapping to Article component
  function makeArticles() {
    if(articles) {
      if(search) {
        articles = articles.filter((val) => {
          return Search(val, search);
        });
      } ;
      let count = 0;
      articles = articles.map((article, index) => {
        count++;
        article.index = index;
        return <Article key={index} article={article}/>;
      });
      console.logD('DEBUG: L3 : F1-Page-Article : count : ' + count);
      return articles;
    }
  }


  console.logD('DEBUG: L3 : F1-Page-Article ');
  return (
    <div id = "page_article">
      {makeArticles()}
    </div>
  );
};
