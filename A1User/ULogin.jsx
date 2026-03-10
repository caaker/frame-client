import ULoginGoogle       from  './ULoginGoogle.jsx';
import config             from  '../F1Customize/config_all.js';
import                          './ULogin.css';

export default function ULogin () {
  return (

    <div id ="box-container">
      <div id ="box-container-2">
        <p className="title">
          {config.title}
        </p>
        <ULoginGoogle/>
      </div>
    </div>

  );
};
