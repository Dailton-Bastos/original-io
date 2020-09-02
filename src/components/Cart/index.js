import React from 'react';

import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';

import './styles.css';

function Cart(props) {
  return (
    <section
      className={props.openCart ? 'cart-container active' : 'cart-container'}
    >
      <div className='content'>
        <button
          type='button'
          className='close'
          onClick={() => props.setOpenCart(false)}
        >
          X
        </button>

        <p>Sacola</p>
        <span>5 Itens</span>

        <div className='products'>
          <div className='item'>
            <a href='/'>
              <img src={product1} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>

          <div className='item'>
            <a href='/'>
              <img src={product2} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>

          <div className='item'>
            <a href='/'>
              <img src={product3} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>

          <div className='item'>
            <a href='/'>
              <img src={product4} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>

          <div className='item'>
            <a href='/'>
              <img src={product1} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>

          <div className='item'>
            <a href='/'>
              <img src={product4} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>

          <div className='item'>
            <a href='/'>
              <img src={product1} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>

          <div className='item'>
            <a href='/'>
              <img src={product4} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>

          <div className='item'>
            <a href='/'>
              <img src={product1} alt='Product name' />
              <div className='info'>
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </a>
            <div className='quantity-control'>
              <button type='button'>-</button>
              <span>01</span>
              <button type='button'>+</button>
            </div>
            <button type='button'>X</button>
          </div>
        </div>

        <footer>
          <div className='promo'>
            <p>
              Faltam R$ xx,xx para você <span>Ganhar Frete Grátis</span>
            </p>
          </div>

          <div className='actions'>
            <div className='resume'>
              <p>Total: R$ 149,00</p>
              <span>até 3x de R$ 49,90 sem juros</span>
            </div>

            <button type='button'>Finalizar Compra</button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Cart;
