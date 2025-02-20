import React from 'react';
import './C1Link.css';

export default function C1Link({ value }) {

  // implement1 - remove or update this to be useful
  function clicked(event) {
    event.preventDefault();
    window.open(data.link, '_blank');
  }

  return (
    <div className='domain_divs' id={value} >
      <img className='domain_images' src={'https://www.google.com/s2/favicons?domain=' + value} />
      <a className='domain_values' target="_blank" href={'https://' + value}>{value}</a>
    </div>
  );
}
