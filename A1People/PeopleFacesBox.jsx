import                                './PeopleFacesBox.css';

import React                from      'react';
import PeopleFacesBoxCircle from      './PeopleFacesBoxCircle.jsx';

export default (props) => {
  let id = props.id;
  // console.log('ID: ', id)
  return (
    <div className='people_box'>
      <PeopleFacesBoxCircle key={id} src={props.src} />
      <p className='people_box_title'>{props.name} </p>
    </div>
  );
};