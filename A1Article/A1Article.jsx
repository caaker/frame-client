import { useEffect }          from 'react';
import { useSelector }        from 'react-redux';
import arc                    from 'frame-arc';
import { Article }            from './Article.jsx';
import ArticleFilter          from './ArticleFilter.js';
import                        './A1Article.css';

export default function A1Article () {
  console.logD('DEBUG: L3 : F1-Page-A1Article');
  useEffect(() => arc.scrollToHash(0));
  let articles = useSelector((state) => state.Articles.articles);
  let search = useSelector((state) => state.SearchInput.current);

  // created on every render, but OK for now 
  function makeArticles() {
    if (!articles) {
      console.logD('DEBUG: L3 : F1-Page-A1Article: Articles not found');
      return null;
    }
    console.logD('DEBUG: L3 : F1-Page-A1Article: Articles found:');
    if (search) articles = articles.filter(val => ArticleFilter(val, search));
    articles = articles.map(article => <Article key={article._id} article={article} />);
    return articles;
  }
  return (
    <div id = "page_article">
      {makeArticles()}
    </div>
  );
};