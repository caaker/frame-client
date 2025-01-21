import React        from 'react';
import ReactDOM     from 'react-dom/client';
import { Provider } from 'react-redux';
import store        from './_redux/store';
import F1           from './F1/F1.jsx';

// customize the app
import './F1Customize/class.Header.js';
import './F1Customize/class.GlobalCSS.js';

console.logD('DEBUG: L0 : index.jsx');

// updated on move to react / react-dom 18.2
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <F1></F1>
  </Provider> 
);
