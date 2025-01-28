import React            from    'react';
import                          './ApexLeft.css';
import C1Logo           from    '../C1Logo/C1Logo.jsx';
import C1Title          from    '../C1Title/C1Title.jsx';

import C1Search         from    '../C1Search/C1Search.jsx';

import config           from     '../F1Customize/config_all.js';



export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Left ');
  return (
    <div className="apex-left">
      <C1Logo/>
      {config.title_on && <C1Title / >}
      <C1Search />
    </div>
  );
};
