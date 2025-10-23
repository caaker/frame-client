import React              from      'react';
import                              './F1.css';
import config             from      '../F1Customize/config_all.js';

// rendered components
import F1Apex             from      '../F1Apex/F1Apex.jsx';
import F1West             from      '../F1West/F1West.jsx';
import F1Page             from      '../F1Page/F1Page.jsx';
import F1Modal            from      '../F1Modal/F1Modal.jsx';
import F1Footer           from      '../F1Footer/F1Footer.jsx';

// 3 styles for non-react logic - dummy components, JS externally run, JS internally run
// imports cause the function to run just one time, we can pull out the function later if needed 
import                              '../F1Server/class.Server.js';
import                              '../F1Data/F1Data.js';
import                              '../F1Socket/F1Socket.js';


export default function F1 () {
  console.logD('DEBUG: L1 : F1');
  return (
    <div id="app_hold">
      <F1Apex />
      <F1West />
      <F1Page />
      <F1Modal />
      <F1Footer config={config} />
    </div>
  );
};