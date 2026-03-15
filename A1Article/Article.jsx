import arc              from  'frame-arc';
import ArticleBar       from  './ArticleBar.jsx';
import                        './Article.css';

const image_not_found = '/images/medical-symbol.jpeg';

export default function Article ({ article }) {
  
  const hash = arc.makeAnchorHash(article.title);
  
  return (
    <article id={hash} className='__article'>

      <a 
        className="article_link" 
        href={article.link} 
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="article_link_image"
          rel="noreferrer"
          src={article.image}
          alt={article.title}
          onError={(error) => {
            error.currentTarget.src = image_not_found;
            console.logD('DEBUG: L4 : F1-Page-A1Article-Article : Image not Found ', 'red');

            // prevents infinite loops if the fallback image fails
            e.currentTarget.onerror = null;
          }}
        />
      </a>

      <p className="article_heading">
        <a className="article_heading_link" href={article.link} target="_blank">{article.title}</a>
      </p>

      <p className="article_summary">
        {article.summary}
      </p>

      <p className="article_tag">
        {article.tag}
      </p>

      <p className="article_domain">
        {article.domain}
      </p>

      <ArticleBar article={article}/>

    </article>
  );
};
