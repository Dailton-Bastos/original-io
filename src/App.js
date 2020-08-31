import React from 'react';

import Header from './components/Header';
import BreadCrumb from './components/BreadCrumb';
import ProductPage from './pages/Product';

import './assets/styles/global.css';

function App() {
  return (
    <>
      <Header />
      <BreadCrumb />
      <ProductPage />
    </>
  );
}

export default App;
