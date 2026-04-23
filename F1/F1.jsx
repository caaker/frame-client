import config             from      '../F1All/config_all.js';

// rendered components
import F1Apex             from      '../F1Apex/F1Apex.jsx';
import F1West             from      '../F1West/F1West.jsx';
import F1Page             from      '../F1Page/F1Page.jsx';
import F1Modal            from      '../F1Modal/F1Modal.jsx';
import F1Footer           from      '../F1Footer/F1Footer.jsx';

// non-react files
import                              '../F1All/class.Custom.js';
import                              '../F1All/class.ServerTest.js';
import                              '../F1All/F1Data.js';
import                              '../F1All/F1Socket.js';

// global css
import                              '../F1All/global-resets.css';
import                              '../F1All/global-layouts.css';
import                              '../F1All/global-themes.css';

export default function F1 () {
  console.logD('DEBUG: L1 : F1', 'black');
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
