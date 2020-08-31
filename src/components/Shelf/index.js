import React from 'react';

import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';

import arrowRightIcon from '../../assets/icons/arrow-right.svg';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import './styles.css';

function Shelf() {
  return (
    <section className='shelf-wrapper container'>
      <h2>Quem viu, viu também</h2>
      <div className='shelf-list'>
        <div className='item'>
          <img src={product1} alt='Product name' />
          <footer>
            <span>R$ 204,90</span>
            <div className='colors'>
              <div className='color-1' />
              <div className='color-2' />
              <div className='color-3' />
              <div className='color-4' />
            </div>
          </footer>
        </div>

        <div className='item'>
          <img src={product2} alt='Product name' />
          <footer>
            <span>R$ 204,90</span>
            <div className='colors'>
              <div className='color-1' />
              <div className='color-2' />
              <div className='color-3' />
              <div className='color-4' />
            </div>
          </footer>
        </div>

        <div className='item'>
          <img src={product3} alt='Product name' />
          <footer>
            <span>R$ 204,90</span>
            <div className='colors'>
              <div className='color-1' />
              <div className='color-2' />
              <div className='color-3' />
              <div className='color-4' />
            </div>
          </footer>
        </div>

        <div className='item'>
          <img src={product4} alt='Product name' />
          <footer>
            <span>R$ 204,90</span>
            <div className='colors'>
              <div className='color-1' />
              <div className='color-2' />
              <div className='color-3' />
              <div className='color-4' />
            </div>
          </footer>
        </div>
      </div>

      <div className='control-slide'>
        <span>
          <img src={arrowLeftIcon} alt='Arrow left' />
        </span>
        <p>1 de 3</p>
        <span>
          <img src={arrowRightIcon} alt='Arrow rigth' />
        </span>
      </div>
    </section>
  );
}

export default Shelf;
