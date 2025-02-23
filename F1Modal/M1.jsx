import React from 'react';
import './M1.css';
import M1Form from './M1Form.jsx';

// might be better combined with M1Form?
export default function M1 () {
  console.logD('DEBUG: L3 : F1-Modal-M1 ');

  return (
    <div className='modal-article'>
      <p className='modal-article-title'>Articles</p>
      <M1Form/>
    </div>
  );
};
