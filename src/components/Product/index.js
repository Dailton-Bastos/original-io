import React from 'react';
import Gallery from './Gallery';
import Info from './Info';
import './styles.css';

function Product() {
  return (
    <main className='product-wrapper container'>
      <Gallery />
      <Info />
    </main>
  );
}

export default Product;
