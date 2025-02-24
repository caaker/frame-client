import React from 'react';
import ParentSVG from './ParentSVG.jsx';

export default ( props ) => {
  const path = <path d="M9 16.17l-4.88-4.88L2 13l7 7 14-14-2.12-2.12L9 16.17z" />;
  return (
    <ParentSVG path={path} fontSize={props.fontSize} onClick={props.onClick} className={props.className} id={props.id} />
  );
};
