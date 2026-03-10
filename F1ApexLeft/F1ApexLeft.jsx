import                          './F1ApexLeft.css';

import C1Logo           from    '../C1Logo/C1Logo.jsx';
import C1Search         from    '../C1Search/C1Search.jsx';
import C1MenuLeft       from    '../C1MenuLeft/C1MenuLeft.jsx';

export default function F1ApexLeft () {
  console.logD('DEBUG: L3 : F1-Apex-Left ');
  return (
    <div className="apex-left">

      <C1MenuLeft/>
      <C1Logo/>      
      <C1Search />

    </div>
  );
}
