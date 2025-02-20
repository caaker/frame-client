import React                          from 'react';
import { useDispatch, useSelector }   from 'react-redux';
import                                './C1Search.css';


// implement1 - refactor this
export default function C1Search () {

  const dispatch = useDispatch();
  const page = useSelector((state) => state.MenuPage.current);
  const search_current = useSelector((state) => state.SearchInput.current);
  const id = (page === 'Articles') ? 'left_input_show' : 'left_input_hide';

  // this is a controlled component
  function onChange(event) {
    dispatch({type: 'updateSearchInput', current: event.target.value});
  }

  return (
    <div className="apex-input-div">
      <input
        type="text"
        className="left_input"
        id={id}
        name="search"
        placeholder=" Search"
        value={search_current}
        onChange={onChange}
      />
    </div>
  );

};
