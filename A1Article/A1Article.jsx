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




/*
articles is an object with these properties
      domain - example ... healthline.com
      image - example ... pinterest.com/some_image
      index - the number in the array
      link - link to the instigating article
      owner - who submitted the article
      summary - summary of the article
      tag - tags are hierarchical
      timestamp - time it was submitted
      title - tile of the article
      __v - internal
      _id - internal
*/



    // // create a hash of arrays
    // const top_hash = {};
    // articles.forEach((article) => {

    //   // tag creation
    //   if (!(article.tag in top_hash)) {
    //     top_hash[article.tag] = {};
    //     top_hash[article.tag][article.domain] = 1;

    //   // domain creation
    //   } else {

    //     if(!(article.tag.domain in top_hash.tag)) {
    //       top_hash[article.tag][article.domain] = 1;
    //     } else{
    //     }
    //   }

    // });
    // console.logD('DEBUG: L3 : F1-Page-Article : tag_array : ');
    // console.log(top_hash);








        // // add domains - ?
        // if(article.domain in top_hash[article.tag]) {
        //   // top_hash[article.tag][article.domain]['_count'] = top_hash[article.tag][article.domain]['_count'] + 1;
        // } else {
        //   top_hash[article.tag][article.domain] = {ass: 'ass'};
        //   // top_hash[article.tag][article.domain]['_count'] = 1;
        // }
