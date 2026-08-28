import                                      './C1Delete.css';
import { useDispatch }                from  'react-redux';
import { SVGDelete }                  from  '../C0Vectors/SVGDelete.jsx';
import Helper                         from  '../F1All/class.Helper.js';
import { deleteArticle }              from  '../_redux/a-articles';
import { LSdeleteArticle }            from  '../F1LS/F1LSArticles.js';


export default function C1Delete({ article, admin }) {
  const dispatch = useDispatch();

  function deleteClicked() {
    if (!admin) return alert("You must be logged in as an administrator for this operation");
    if (!confirm(`Are you sure you want to delete the article titled - '${article.title}'?`)) { return; }
    
    // delete from redux
    dispatch(deleteArticle(article.index));

    // delete from localStorage
    LSdeleteArticle(article._id);
  
    // delete from server
    Helper.fetchJSON(`${Helper.getBaseURL()}/articles/delete/${encodeURIComponent(article._id)}`, { method: 'DELETE' });
  }
  return <SVGDelete className="article_icons_right" onClick={deleteClicked} />;

}