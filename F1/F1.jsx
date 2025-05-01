// npm modules
import React              from      'react';
import { useSelector }    from      'react-redux';

// css
import                              './F1.css';

// configure
import config             from      '../F1Customize/config_all.js';

// immediately invoked
import F1ServerTester     from      '../F1Customize/class.ServerTester.js';

// components
import F1Data             from      '../F1Data/F1Data.jsx';
import F1Socket           from      '../F1Socket/F1Socket.jsx';

// rendered components
import F1Apex             from      '../F1Apex/F1Apex.jsx';
import F1Page             from      '../F1Page/F1Page.jsx';
import F1Modal            from      '../F1Modal/F1Modal.jsx';
import F1Footer           from      '../F1Footer/F1Footer.jsx';
import F1West             from      '../F1West/F1West.tsx';


export default function F1 () {
  console.logD('DEBUG: L1 : F1');
  return (
    <div id="app_hold">

      {/* These components do not render */}
      <F1Data />
      <F1Socket />

      {/* The core structure of the application is constructed with these components */}
      <F1Apex />
      <F1West />
      <F1Page />
      <F1Modal />
      <F1Footer config={config} />

    </div>
  );
};