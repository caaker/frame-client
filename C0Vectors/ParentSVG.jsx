import React           from 'react';
import                      './ParentSVG.css';

const ParentSVG = ({ path, fontSize = '25px', onClick = () => {}, id = '', className = '' }) => {
  const computedClassName = className ? `css-zicon ${className}` : 'css-zicon';
  return (
    <svg
      id={id}
      className={computedClassName}
      fontSize={fontSize}
      onClick={onClick}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
};

export default ParentSVG;