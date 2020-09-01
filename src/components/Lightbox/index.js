import React from 'react';

import productImg from '../../assets/images/product4.png';

import './styles.css';

function Lightbox() {
  return (
    <section className='lightbox-container'>
      <div className='content'>
        <button type='button' className='close'>
          X
        </button>

        <div className='details'>
          <img src={productImg} alt='Product name' />

          <p>
            Produto adicionado <br /> com sucesso!
          </p>

          <button type='button'>Finalizar Compra</button>

          <a href='/'>Continuar Comprando</a>
        </div>
      </div>
    </section>
  );
}

export default Lightbox;
