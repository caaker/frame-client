import React                          from  'react';
import config                         from  '../F1Customize/config_all.js';
import                                      './C1Title.css';

export default function C1Title () {
  return (
    <p className="apex_title">{config.title}</p>
  );
};
