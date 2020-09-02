import React, { useState, useEffect } from 'react';
import ProductsServices from '../../services/products';

import Gallery from './Gallery';
import Info from './Info';
import './styles.css';

function Product() {
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const response = await ProductsServices.index();

    if (response.data) {
      return setProduct(response.data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className='product-wrapper container'>
      <Gallery product={product} />
      <Info product={product} />
    </main>
  );
}

export default Product;
