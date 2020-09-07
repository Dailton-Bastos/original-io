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
  const [openMenu, setOpenMenu] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  const handleCloseMenu = (evt) => {
    if(evt.target.tagName === 'A') setOpenMenu(false)
  }

  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <header className='page-header'>
        <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
          <div className={`hamburger ${openMenu ? "close-btn" : ""}`}></div>
        </div>
        <div className='logo'>
          <Link to='/'>
            <img src={logoImg} alt='original.io' />
          </Link>
        </div>

        <div className='header-content'>
          <div className='auth'>
            <Link to='/signin'>Entrar</Link>
            <Link to='/signup'>Cadastrar-se</Link>
          </div>

          <nav
            className={`navigation ${openMenu ? "menu-opened" : ""}`}
            onClick={handleCloseMenu}
          >
            <ul>
              <li>
                <Link to='/category/shoes'>Sapatos</Link>
              </li>
              <li>
                <Link to='/category/bags'>Bolsas</Link>
              </li>
              <li>
                <Link to='/category/accessories'>Acessórios</Link>
              </li>
              <li>
                <Link to='/promo'>Off</Link>
              </li>

              <li className="auth-mobile">
                <Link to='/signin'>Entrar</Link>
                <span>|</span>
                <Link to='/signup'>Cadastrar-se</Link>
              </li>
            </ul>
          </nav>

          <div className='search'>
            <form action='/search' method='get' className={openSearch ? 'open': ''}>
              <button
                type="button"
                onClick={() => setOpenSearch(!openSearch)}
              >X
              </button>

              <span onClick={() => setOpenSearch(!openSearch)}>
                <img src={searchIcon} alt='Search icon' />
              </span>
              <input type='text' placeholder='Buscar' />
            </form>

            <div className='cart' onClick={() => setOpenCart(true)}>
              <img src={cartIcon} alt='Cart icon' />
              <span>{cart.length + 5}</span>
            </div>
          </div>
        </div>
      </header>
      <Cart openCart={openCart} setOpenCart={setOpenCart} products={cart} />
    </>
  );
}

export default Header;
