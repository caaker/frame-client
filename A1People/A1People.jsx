import                                            './A1People.css';
import React                        from          'react';
import PeopleFaces                  from          './PeopleFaces.jsx';
import PeopleConvo                  from          './PeopleConvo.jsx';
import PeopleForm                   from          './PeopleForm.jsx';
import { connect, useSelector }     from          'react-redux';

export default () => {

  const people = useSelector((state) => state.People.people);

  console.logD('DEBUG: L3 : F1-Page-People ');

  return (

    <div id="page-people">

      {/*padding for the top bar*/}
      <div id="people-pad"></div>

      {/*contains all the users logged in and have their profile set to public*/}
      <PeopleFaces people={ people } />

      {/*contains a single conversation thread for all users*/}
      <PeopleConvo people={ people } />

      {/*allows a user to input a message*/}
      <PeopleForm/>

    </div>

  );

};