import React from 'react';
import './M1FormButton.css';

export default (props) => {
  console.logD('DEBUG: L5 : F1-Modal-M1-Form-Button ');

  if(props.config === true) {
    return <button className="form_button">Update</button>;
  } else {
    return <button className="form_button">Add</button>;
  }
};
