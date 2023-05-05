import React from 'react';

import './PeopleFaces.css';

import PeopleFacesBox from './PeopleFacesBox.jsx';

export default (props) => {
  const people = props.people;
  function makePeople() {
    if(people) {
      return people.map((person, index) => <PeopleFacesBox key={person.id} id={person.id} name={person.name} src={person.pic} online={person.online}/>);
    }
  }

  return (
    <div className='people_faces'>
      { makePeople() }
    </div>
  );
};
