import { useDispatch }      from  'react-redux';
import { SVGEdit }          from  '../C0Vectors/SVGEdit.jsx';
import                            './C1Edit.css';
import { setArticleForm }   from  '../_redux/a-article-form';

export default function C1Edit({ article, admin }) {
  const dispatch = useDispatch();
  function editClicked() {
    if(!admin) {
      alert("You must be logged in as an administrator for this operation");
      return;
    }
    dispatch({ type: 'toggleModalOn', config: true });
    dispatch(setArticleForm(article));
  }
  return <SVGEdit className="article_icons_right" onClick={editClicked} />;
}
