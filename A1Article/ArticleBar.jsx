import { useSelector }  from    'react-redux';

// right
import C1Copy           from    '../C1Copy/C1Copy.jsx';
import C1Edit           from    '../C1Edit/C1Edit.jsx';
import C1Delete         from    '../C1Delete/C1Delete.jsx';
import C1Flip           from    '../C1Flip/C1Flip.jsx';

// left
import C1Favicon        from    '../C1Favicon/C1Favicon.jsx';

// css
import                          './ArticleBar.css';

export default function ArticleBar({article}) {

  const email = useSelector((state) => state.User.current.email);
  const admin = (email === 'caaker.0@gmail.com');

  return (
    <div className='article_bar' >
      <C1Favicon className='c1_favicon' domain={article.domain}/>
      
      <C1Flip article={article}   admin={admin}/>
      <C1Copy title={article.title} />
      <div className='article_bar_admin'>
        <C1Edit   article={article}   admin={admin}/>
        <C1Delete article={article}   admin={admin}/>
      </div>
    </div>
  );
};
