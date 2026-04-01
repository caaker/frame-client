import PeopleFacesBox from  './PeopleFacesBox.jsx';
import                      './PeopleFaces.css';

export default ({people}) => {
  function makePeople() {
    if(people) {
      return people.map((person) => <PeopleFacesBox key={person.id} id={person.id} name={person.name} src={person.pic} online={person.online}/>);
    }
  }

  return (
    <div className='people_faces'>
      { makePeople() }
    </div>
  );
};
