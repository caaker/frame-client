import { useState, useMemo }            from 'react';
import { useSelector }                  from 'react-redux';
import C1Link                           from '../C1Link/C1Link.jsx'
import                                  './A1Bookmark.css';


export function A1Bookmark() {
  const [tag, setTag] = useState('Nutrition');
  const articles = useSelector((state) => state.Articles.articles);

  const top_hash = useMemo(() => {
    return articles.reduce((hash, { tag, domain }) => {
      hash[tag] ??= {};
      hash[tag][domain] ??= {};
      return hash;
    }, {});
  }, [articles]);

  function makeTags() {
    const tags = (Object.keys(top_hash)).sort();
    return tags.map((value, index) => <div key={index} onClick={clicked} id={value} className='tag_ovals'>{value}</div>);
  };

  function makeDomains() {
    const domains = Object.keys(top_hash[tag]).sort();
    return domains.map((value, index) => <C1Link key={index} value={value}/>);
  }

  function clicked(event) {
    setTag(event.target.id);
  }

  console.logD('DEBUG: L3 : F1-Page-Bookmark ');
  return (
    <div id = "page_bookmark">
      <div id = "big_wrapper">
        <div id = "tags_wrapper">
          {makeTags()}
        </div>
        <div id = "domain_wrapper">
          {makeDomains()}
        </div>
      </div>
    </div>
  );
};
