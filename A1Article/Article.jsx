import arc              from  'frame-arc';
import ArticleBar       from  './ArticleBar.jsx';
import                        './Article.css';
import config           from  '../F1All/config_all.js';

const handleImageError = (error) => {
  error.currentTarget.onerror = null; 
  error.currentTarget.src = config.fallback;   
  console.logD('DEBUG: L4 : F1-Page-A1Article-Article : Image not Found ', 'red');
};

export function Article ({ article }) {
  const { title, link, image, summary, tag, domain } = article;
  const hash = arc.makeAnchorHash(title);

  // move this logic to server and add a hash
  const extension = new URL(image).pathname.split('.').pop();
  const location = '/_images-lfs/' + title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + '.' + extension;
  
  console.log(location)
  
  return (
    <article id={hash} className='__article'>
      
      <a className="article_link" href={link} target="_blank" rel="noreferrer">
        <img className="article_link_image" rel="noreferrer" src={location} alt={title} onError={handleImageError} />
      </a>

      <p className="article_heading"> <a className="article_heading_link" href={link} target="_blank">{title}</a> </p>
      <p className="article_summary"> {summary} </p>
      <p className="article_tag"> {tag} </p>
      <p className="article_domain"> {domain} </p>
      
      <ArticleBar article={article}/>
    </article>
  );
};