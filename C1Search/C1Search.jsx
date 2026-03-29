import { useDispatch, useSelector }   from 'react-redux';
import                                './C1Search.css';

export default function C1Search () {

  const dispatch = useDispatch();
  const page = useSelector((state) => state.MenuPage.current);
  const search_current = useSelector((state) => state.SearchInput.current);
  const css_id = (page === 'Articles') ? 'left_input_show' : 'left_input_hide';

  function onChange(event) {
    dispatch({type: 'updateSearchInput', current: event.target.value});
  }

  return (
      <input
        type="text"
        className="left_input"
        id={css_id}
        name="search"
        placeholder=" Search"
        value={search_current}
        onChange={onChange}
      />
  );

};
