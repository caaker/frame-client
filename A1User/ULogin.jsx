import ULoginGoogle       from  './ULoginGoogle.jsx';
import config             from  '../F1Customize/config_all.js';
import                          './ULogin.css';

// <ULoginGoogle/>
export default function ULogin () {
  return (

    <div id ="box-container">
      <div id ="box-container-inner">

        <div id ="box-container-front">
          <p className="title"> {config.title} </p>
          <ULoginGoogle/>
        </div>

        <div id ="box-container-back">
          <p>test-0</p>
        </div>

      </div>
    </div>
  );
};
