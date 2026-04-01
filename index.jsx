import ReactDOM     from 'react-dom/client';
import { Provider } from 'react-redux';
import store        from './_redux/store';
import F1           from './F1/F1.jsx';

console.logD('DEBUG: L0 : index.jsx -0->');
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <F1 />
  </Provider> 
);
