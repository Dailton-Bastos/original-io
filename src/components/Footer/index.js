import React from 'react';

import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import pinterestIcon from '../../assets/icons/pinterest.svg';

import vtexLogo from '../../assets/images/vtex.svg';
import ebitLogo from '../../assets/images/selo-ebit.svg';
import footerLogo from '../../assets/icons/logo-footer.svg';

import './styles.css';

function Footer() {
  return (
    <footer className='page-footer'>
      <div className='footer-content'>
        <div className='social-links'>
          <div className='social'>
            <a href='/'>
              <img src={facebookIcon} alt='Facebook logo' />
            </a>
            <a href='/'>
              <img src={instagramIcon} alt='Instagram logo' />
            </a>
            <a href='/'>
              <img src={pinterestIcon} alt='Pinterest logo' />
            </a>
          </div>

          <div className='labels'>
            <a href='/'>
              <img src={vtexLogo} alt='Vtex logo' />
            </a>
            <a href='/'>
              <img src={ebitLogo} alt='Ebit logo' />
            </a>
          </div>
        </div>

        <div className='company'>
          <p>Institucional</p>
          <ul>
            <li>
              <a href='/'>A marca</a>
            </li>
            <li>
              <a href='/'>Lojas</a>
            </li>
            <li>
              <a href='/'>Contato</a>
            </li>
          </ul>
        </div>

        <div className='info'>
          <p>Informações</p>
          <ul>
            <li>
              <a href='/'>Formas de Pagamento</a>
            </li>
            <li>
              <a href='/'>Trocas e Develuções</a>
            </li>
            <li>
              <a href='/'>Cuidados Com o Produto</a>
            </li>
          </ul>
        </div>

        <div className='know'>
          <p>Conheça</p>
          <ul>
            <li>
              <a href='/'>Franquias e Multimarcas</a>
            </li>
            <li>
              <a href='/'>Trabalhe com a Gente</a>
            </li>
            <li>
              <a href='/'>Procon-RJ</a>
            </li>
          </ul>
        </div>

        <div className='news'>
          <p>Assine Nossa News</p>
          <form>
            <label htmlFor='name'>Nome</label>
            <input type='text' placeholder='Dailton Bastos' />
            <input type='email' placeholder='E-mail' />

            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At quae sint
          quod aperiam veritatis nemo iure blanditiis ipsam vel dignissimos
          cupiditate voluptas obcaecati dicta laudantium ea, iusto perspiciatis.
          Facilis, possimus?
        </p>

        <img src={footerLogo} alt='Original.io' />
      </div>
    </footer>
  );
}

export default Footer;
