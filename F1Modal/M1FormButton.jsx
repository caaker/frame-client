import React from 'react';
import './M1FormButton.css';

// Consider React.memo() to stop not needed re-render
export default function M1FormButton({config}) {
  console.logD('DEBUG: L5 : F1-Modal-M1-Form-Button ');

  return config ? <button className="form_button">Update</button> : <button className="form_button">Add</button>;
};

