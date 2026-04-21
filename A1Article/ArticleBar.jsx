import { useSelector }  from    'react-redux';

import C1Favicon        from    '../C1Favicon/C1Favicon.jsx';
import C1Flip           from    '../C1Flip/C1Flip.jsx';
import C1Copy           from    '../C1Copy/C1Copy.jsx';
import C1Edit           from    '../C1Edit/C1Edit.jsx';
import C1Delete         from    '../C1Delete/C1Delete.jsx';

// css
import                          './ArticleBar.css';

export default function ArticleBar({article}) {

  const email = useSelector((state) => state.User.current.email);
  const admin = (email === 'caaker.0@gmail.com');

  return (
    <div className='article_bar' >

      {/* far right */}
      {/* <C1Flip article={article}   admin={admin}/> */}
      
      <div className='article_bar_main'>
        <C1Favicon className='c1_favicon' domain={article.domain}/>
      </div>

      <div className='article_bar_admin'>
        <C1Copy title={article.title} />
        <C1Delete article={article}   admin={admin}/>
        <C1Edit   article={article}   admin={admin}/>
      </div>

    </div>
  );
};
