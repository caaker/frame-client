// css
import                              './F1.css';

// npm modules
import React              from      'react';
import { useSelector }    from      'react-redux';

// repo files
import F1Data             from      '../F1Data/F1Data.jsx';
import F1Socket           from      '../F1Socket/F1Socket.jsx';
import F1Apex             from      '../F1Apex/Apex.jsx';
import F1Page             from      '../F1Page/F1Page.jsx';
import F1Modal            from      '../F1Modal/F1Modal.jsx';
import F1Footer           from      '../F1Footer/F1Footer.jsx';
import config             from      '../F1Customize/config_all.js';

// functional component
export default () => {
  console.logD('DEBUG: L1 : F1');
  const page = useSelector( state => state.MenuPage.current );
  return (
    <div id="app_hold">

      {/* Application pulls much data on load into redux */}
      <F1Data />
      <F1Socket />
      <F1Apex />
      <F1Page />
      <F1Modal />
      <F1Footer email={config.email} subject={config.subject} github={config.github} />
    </div>
  );
};
