import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import store from './store';

import Header from './components/Header';
import Footer from './components/Footer';
import BreadCrumb from './components/BreadCrumb';

import './assets/styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <BreadCrumb />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
