import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/modules/cart/actions';

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

  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className='product-wrapper container'>
      <Gallery product={product} />
      <Info product={product} addProductToCart={handleAddProductToCart} />
    </main>
  );
}

export default Product;
