import React                              from      'react';
import { useSelector, useDispatch }       from      'react-redux';
import                                              './C1MenuLeft.css';

// define a react functional component

const C1MenuLeft: React.FC = () => {
  
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch({ type: 'toggleMenuLeft' });
  };

  return (
    <div id="menu_left_div">
      <svg 
        id="menu_left_svg"
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        width="24px"
        viewBox="0 -960 960 960" 
        fill="#1f1f1f"
      >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
      </svg>
    </div>
  );
};

export default C1MenuLeft;

