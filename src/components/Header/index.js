import React, { useState } from 'react';

import Cart from '../Cart';

import logoImg from '../../assets/images/logo.svg';
import searchIcon from '../../assets/icons/search.svg';
import cartIcon from '../../assets/icons/cart.svg';

import './styles.css';

function Header() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <header className='page-header'>
        <div className='logo'>
          <a href='/'>
            <img src={logoImg} alt='original.io' />
          </a>
        </div>

        <div className='header-content'>
          <div className='auth'>
            <a href='/signin'>Entrar</a>
            <a href='/signup'>Cadastrar-se</a>
          </div>

          <nav className='navigation'>
            <ul>
              <li>
                <a href='/category/shoes'>Sapatos</a>
              </li>
              <li>
                <a href='/category/bags'>Bolsas</a>
              </li>
              <li>
                <a href='/category/accessories'>Acessórios</a>
              </li>
              <li>
                <a href='/promo'>Off</a>
              </li>
            </ul>
          </nav>

          <div className='search'>
            <form action='/search' method='get'>
              <span>
                <img src={searchIcon} alt='Search icon' />
              </span>
              <input type='text' placeholder='Buscar' />
            </form>

            <div className='cart' onClick={() => setOpenCart(true)}>
              <img src={cartIcon} alt='Cart icon' />
              <span>0</span>
            </div>
          </div>
        </div>
      </header>
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
}

export default Header;
