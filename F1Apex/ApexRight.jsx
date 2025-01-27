import                                      './ApexRight.css';
import React                          from  'react';
import { useSelector }                from  'react-redux';
import C1Avatar                       from  '../C1Avatar/C1Avatar.jsx';
import CompMenu                       from  '../CompMenu/Menu.jsx';

export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Right ');
  const User = useSelector( state => state.User );
  return (
    <div className="apex-right">
      { User.current && <C1Avatar /> }
      <CompMenu/>
    </div>
  );
};
