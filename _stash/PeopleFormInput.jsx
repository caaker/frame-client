import './PeopleFormInput.css';
import { useSelector, useDispatch }   from   'react-redux';

export default function PeopleFormInput() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.PeopleInput.current);
  function onChange(event) {
    dispatch({type: 'updatePeopleInput', current: event.target.value});
  };
  return (
    <input
      type='text'
      id="pdiv-form-input"
      value={current}
      onChange={onChange}
      placeholder="message"
      name="link"
    />
  );
};