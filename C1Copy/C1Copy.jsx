import arc from           'frame-arc';
import                    './C1Copy.css';
import { SVGCopy } from   '../C0Vectors/SVGCopy.jsx';

export default function C1Copy (props) {
  const slug = props.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const hash_link = window.location.origin + '#' + slug;
  function onClick() {
    arc.copyToClipboard(hash_link);
    alert('Copied the text: ' + hash_link);
  }
  return <SVGCopy className='article_icons_right' onClick={onClick} />;
};
