import React from 'react';
import Gallery from './Gallery';
import Info from './Info';
import Lightbox from '../Lightbox';
import './styles.css';

function Product() {
  return (
    <main className='product-wrapper container'>
      <Gallery />
      <Info />
      <Lightbox />
    </main>
  );
}

export default Product;
