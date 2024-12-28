import React                          from  'react';
import config                         from  '../F1Customize/config_all.js';
import                                      './CompTitle.css';

export default () => {
  return (
    <p className="apex_title">{config.title}</p>
  );
};
