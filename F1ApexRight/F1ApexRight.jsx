import                                      './F1ApexRight.css';
import React                          from  'react';
import { useSelector }                from  'react-redux';
import C1Avatar                       from  '../C1Avatar/C1Avatar.jsx';
import C1Menu                         from  '../C1Menu/Menu.jsx';

export default function F1ApexRight() {
  console.logD('DEBUG: L3 : F1-Apex-Right ');
  return (
    <div className="apex-right">
      <C1Avatar />
      <C1Menu/>
    </div>
  );
};
