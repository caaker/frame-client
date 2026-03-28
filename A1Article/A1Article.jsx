import { useEffect }          from 'react';
import { useSelector }        from 'react-redux';
import arc                    from 'frame-arc';
import Article                from './Article.jsx';
import ArticleFilter          from './ArticleFilter.js';
import                        './A1Article.css';

export default function A1Article () {
  console.logD('DEBUG: L3 : F1-Page-A1Article : Hello World');
  
  useEffect(() => {
    arc.scrollToHash(0);
  });

  let articles = useSelector((state) => state.Articles.articles);
  let search = useSelector((state) => state.SearchInput.current);

  function makeArticles() {
    if (!articles) return null;

    if (search) {
      articles = articles.filter(val => ArticleFilter(val, search));
    }

    articles = articles.map((article, index) => {
      return <Article key={index} article={article}/>;
    });

    return articles;
  }

  return (
    <div id = "page_article">
      {makeArticles()}
    </div>
  );
};
