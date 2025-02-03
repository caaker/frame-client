import React from 'react';
import './C1Link.css';

export default function C1Link({ data }) {
  function clicked(event) {
    event.preventDefault();
    window.open(data.link, '_blank');
  }

  return (
    <div className="link_div" id={data.id + 'a'} onClick={clicked}>
      <img className="link_image" src={`http://www.google.com/s2/favicons?domain=${data.domain}`} alt="favicon" />
      <a className="link_anchor" onClick={clicked} href={data.link} target="_blank" rel="noopener noreferrer">
        {data.title}
      </a>
    </div>
  );
}
