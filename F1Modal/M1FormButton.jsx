import React from 'react';
import './M1FormButton.css';

// Consider React.memo() to stop unneeded re-render
export default function M1FormButton(props) {
  console.logD('DEBUG: L5 : F1-Modal-M1-Form-Button ');
  if(props.config === true) {
    return <button className="form_button">Update</button>;
  } else {
    return <button className="form_button">Add</button>;
  }

};

