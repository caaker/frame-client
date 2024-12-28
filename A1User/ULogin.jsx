import './ULogin.css';
import React from 'React';
import ULoginGoogle from './ULoginGoogle.jsx';
import config             from      '../F1Customize/config_all.js';

export default () => {
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
