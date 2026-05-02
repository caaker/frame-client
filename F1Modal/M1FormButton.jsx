import './M1FormButton.css';

// Consider React.memo() to stop re-render
export default function M1FormButton({config}) {
  return config ? <button className="form_button">Update</button> : <button className="form_button">Add</button>;
};

