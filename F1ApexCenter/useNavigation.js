import { useDispatch, useSelector }   from 'react-redux';
import { updateMenuPage }             from    '../_redux/f-menu';

export function useNavigation(pageName) {
  const dispatch = useDispatch();
  const page = useSelector(state => state.MenuPage.current);
  const handleClick = () => dispatch(updateMenuPage(pageName));
  const classes = (page === pageName) ? 'apex-option apex-option-on' : 'apex-option';
  return { handleClick, classes };
}