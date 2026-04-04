
import { useDispatch, useSelector } from 'react-redux';

export function useMenuNavigation(pageName) {
  const dispatch = useDispatch();
  const page = useSelector(state => state.MenuPage.current);

  const handleClick = () => dispatch({ type: 'updateMenuPage', current: pageName });
  const classes = (page === pageName) ? 'apex-option apex-option-on' : 'apex-option';

  return { handleClick, classes };
}