import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Cart from '../Cart';

import logoImg from '../../assets/images/logo.svg';
import searchIcon from '../../assets/icons/search.svg';
import cartIcon from '../../assets/icons/cart.svg';

import './styles.css';

function Header() {
  const [openCart, setOpenCart] = useState(false);

  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <header className='page-header'>
        <div className='logo'>
          <Link to='/'>
            <img src={logoImg} alt='original.io' />
          </Link>
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
              <span>{cart.length}</span>
            </div>
          </div>
        </div>
      </header>
      <Cart openCart={openCart} setOpenCart={setOpenCart} products={cart} />
    </>
  );
}

export default Header;
