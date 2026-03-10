import PeopleFacesBoxCircle from './PeopleFacesBoxCircle.jsx';
import                            './PeopleFacesBox.css';

export default function PeopleFacesBox({ id, src, name }) {
  return (
    <div className='people_box'>
      <PeopleFacesBoxCircle key={id} src={src} />
      <p className='people_box_title'>{name}</p>
    </div>
  );
};