import React from 'react';

import productImg from '../../assets/images/product4.png';

import './styles.css';

function Lightbox(props) {
  return (
    <section
      className={
        props.openLightbox ? 'lightbox-container active' : 'lightbox-container'
      }
    >
      <div className='content'>
        <button
          type='button'
          className='close'
          onClick={() => props.setOpenLightbox(false)}
        >
          X
        </button>

        <div className='details'>
          <img src={props.product?.images?.[0].url} alt='Product name' />

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
