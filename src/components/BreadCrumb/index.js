import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function BreadCrumb() {
  return (
    <div className='timeline container'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li className='selected'>
          <Link to='/category/shoes'>Sapatos</Link>
        </li>
      </ul>
    </div>
  );
}

export default BreadCrumb;
