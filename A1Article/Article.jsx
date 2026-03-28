import arc              from  'frame-arc';
import ArticleBar       from  './ArticleBar.jsx';
import                        './Article.css';
import config           from  '../F1Customize/config_all.js';

export default function Article ({ article }) {
  const { title, link, image, summary, tag, domain } = article;
  const hash = arc.makeAnchorHash(title);
  const handleImageError = (error) => {
    error.currentTarget.onerror = null; 
    error.currentTarget.src = config.fallback;   
    console.logD('DEBUG: L4 : F1-Page-A1Article-Article : Image not Found ', 'red');
  };

  return (
      <article id={hash} className='__article'>
      {console.log(article)}
      <a className="article_link" href={link} target="_blank" rel="noreferrer">
        <img className="article_link_image" rel="noreferrer" src={image} alt={title} onError={handleImageError} />
      </a>
      <p className="article_heading">
        <a className="article_heading_link" href={link} target="_blank">{title}</a>
      </p>
      <p className="article_summary">
        {summary}
      </p>
      <p className="article_tag">
        {tag}
      </p>
      <p className="article_domain">
        {domain}
      </p>
      <ArticleBar article={article}/>
    </article>
  );
};