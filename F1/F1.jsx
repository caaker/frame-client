// npm modules
import React              from      'react';
import { useSelector }    from      'react-redux';

// css
import                              './F1.css';

// components
import F1Data             from      '../F1Data/F1Data.jsx';
import F1Socket           from      '../F1Socket/F1Socket.jsx';
import F1Apex             from      '../F1Apex/F1Apex.jsx';
import F1Page             from      '../F1Page/F1Page.jsx';
import F1Modal            from      '../F1Modal/F1Modal.jsx';
import F1Footer           from      '../F1Footer/F1Footer.jsx';
import config             from      '../F1Customize/config_all.js';

import F1ServerTester     from      '../F1Customize/class.ServerTester.js';


export default () => {
  console.logD('DEBUG: L1 : F1');
  const page = useSelector( state => state.MenuPage.current );
  return (
    <div id="app_hold">

      {/* These components do not render */}
      <F1Data />
      <F1Socket />

      {/* The core structre of the application is constructed with these 4 components */}
      <F1Apex />
      <F1Page />
      <F1Modal />
      <F1Footer config={config} />
    </div>
  );
};
