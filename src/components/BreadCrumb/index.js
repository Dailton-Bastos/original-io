import React from 'react';
import './styles.css';

function BreadCrumb() {
  return (
    <div className='timeline container'>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li className='selected'>
          <a href='/category/shoes'>Sapatos</a>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumb;
