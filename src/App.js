import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';
import BreadCrumb from './components/BreadCrumb';

import './assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <BreadCrumb />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
