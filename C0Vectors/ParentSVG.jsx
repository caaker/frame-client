import React           from 'react';
import                      './ParentSVG.css';

const ParentSVG = ({ path, fontSize = '25px', onClick = () => {}, id, className = '' }) => {
  const computedClassName = className ? `css-zicon ${className}` : 'css-zicon';
  return (
    <svg
      {...(id && { id })}      
      className={computedClassName}
      fontSize={fontSize}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      {path}
    </svg>
  );
};

export default ParentSVG;

/*
removed -> focusable="false" -> legacy IE code
removed -> aria-hidden="true" as it should be accessible to screen readers
fixed default id issue for best practice
*/
