import {useSelector }               from          'react-redux';
import                                            './A1People.css';

export default function A1People() {
  const people = useSelector((state) => state.People.people);
  console.logD('DEBUG: L3 : F1-Page-People ');
  return (

    <div id="page-people">

    </div>

  );

};