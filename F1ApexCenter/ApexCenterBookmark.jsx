import { useNavigation }        from './useNavigation.js';
import { SVGBookmark }            from '../C0Vectors/SVGBookmark.jsx';

export default function ApexCenterUser() {
  const { handleClick, classes } = useNavigation('Bookmarks');
  return (
    <div onClick={handleClick} className={classes}>
      <SVGBookmark className='theme-height' />
    </div>
  );
}