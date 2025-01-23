import                      './A1Article.css';

import React, { useEffect }   from 'react';
import { useSelector }        from 'react-redux';

import Article                from './Article.jsx';
import Search                 from './Search.js';
import arc                    from 'frame-arc';


export default () => {

  console.logD('DEBUG: L3 : F1-Page-Article ');

  useEffect(() => {
    arc.scrollToHash(0);
  });

  let articles = useSelector((state) => state.Articles.articles);
  let search = useSelector((state) => state.SearchInput.current);

  function makeArticles() {
    if(articles) {
      if(search) {
        articles = articles.filter((val) => {
          return Search(val, search);
        });
      };
      articles = articles.map((article, index) => {
        article.index = index;
        return <Article key={index} article={article}/>;
      });
      return articles;
    }
  }

  return (
    <div id = "page_article">
      {makeArticles()}
    </div>
  );
};
