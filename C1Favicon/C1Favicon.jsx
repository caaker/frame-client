import './C1Favicon.css';

export default function C1Favicon (props) {

  // failed sub-requests that show up in the dev tools are not accessible here
  // only the final request has the capability to trigger an error
  function errorHandler (event) {
    event.target.src = '/images/medical-symbol.jpeg';
    console.logD('DEBUG: Google Favicon API: failed', 'red');
  }

  return (
    <img className={props.className} 
      src={'https://www.google.com/s2/favicons?domain=' + props.domain}
      onError={errorHandler}
    />
  );
};
