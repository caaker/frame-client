import                                    './F1Apex.css';
import React from                         'react';

import F1ApexLeft                     from  '../F1ApexLeft/F1ApexLeft.jsx';
import F1ApexCenter                   from  '../F1ApexCenter/F1ApexCenter.jsx';
import F1ApexRight                    from  '../F1ApexRight/F1ApexRight.jsx';

export default function F1Apex () {
  console.logD('DEBUG: L2 : F1-Apex ');
  return (
    <div className='apex_hold_hold'>
      <div className='apex_hold'>
        <F1ApexLeft/>
        <F1ApexCenter/>
        <F1ApexRight/>
      </div>
    </div>
  );
};
