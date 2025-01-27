import                          './ApexLeft.css';
import React            from    'react';
import C1Logo           from    '../C1Logo/C1Logo.jsx';
import CompTitle        from    '../CompTitle/CompTitle.jsx';

import CompSearch       from    '../CompSearch/CompSearch.jsx';

import config           from     '../F1Customize/config_all.js';



export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Left ');
  return (
    <div className="apex-left">
      <C1Logo/>
      {config.title_on && <CompTitle / >}
      <CompSearch />
    </div>
  );
};
