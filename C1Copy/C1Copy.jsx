import arc from           'frame-arc';
import React from         'react';
import                    './C1Copy.css';
import SVGCopy from       '../C0Vectors/SVGCopy.jsx';

export default function C1Copy (props) {
  const hash = arc.makeAnchorHash(props.title);
  const hash_link = window.location.origin + '#' + hash;
  const class_name = props.className || 'c1_copy';

  function onClick(event) {
    arc.copyToClipboard(hash_link);
    alert('Copied the text: ' + hash_link);
  }

  return (
    <SVGCopy id={hash} className={class_name} onClick={onClick} />
  );

};
