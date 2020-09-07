import React, { useState } from 'react';

import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import pinterestIcon from '../../assets/icons/pinterest.svg';

import vtexLogo from '../../assets/images/vtex.svg';
import ebitLogo from '../../assets/images/selo-ebit.svg';
import footerLogo from '../../assets/icons/logo-footer.svg';

import Accordion from '../Accordion'

import './styles.css';

function Footer() {
  const [institutionalLinks] = useState([
    'A Marca', 'Lojas', 'Contato'
  ])
  const [infoLinks] = useState([
    'Formas de Pagamento', 'Trocas e Develuções', 'Cuidados Com o Produto'
  ])
  const [knowLinks] = useState([
    'Franquias e Multimarcas', 'Trabalhe com a Gente', 'Procon-RJ'
  ])
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

        < Accordion title="Institucional" >
          {institutionalLinks}
        </ Accordion>

        < Accordion title="Informações" >
          {infoLinks}
        </ Accordion>

        < Accordion title="Conheça" >
          {knowLinks}
        </ Accordion>

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
          Via Mia | V. Milano Centro Comercio de Bolsas Eireli - EPP.
          Av.das Américas, 500 - bloco 20, loja 126 - Barra da Tijuca - Rio de Janeiro - RJ - CEP: 22640-100
          CNPJ: 05.292.288/0002-10 - I.E: 86.732.548 - E-mail: ecommerce@viamia.com.br
        </p>

        <img src={footerLogo} alt='Original.io' />
      </div>
    </footer>
  );
}

export default Footer;
