import React from 'react';
import ParentSVG from './ParentSVG.jsx';

export default ( props ) => {
  const path = <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>;
  return (
    <ParentSVG path={path} fontSize={props.fontSize} onClick={props.onClick} className={props.className} id={props.id} />
  );
};

/*
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
<path d="M0 0h24v24H0z" fill="none"/>
<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
</svg>
*/