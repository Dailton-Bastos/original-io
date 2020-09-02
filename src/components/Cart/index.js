import React from 'react';

import { Link } from 'react-router-dom';

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
        <span>{props.products.length} Itens</span>

        <div className='products'>
          {props.products.length ? (
            props.products.map((item) => {
              const { product } = item;

              return (
                <div className='item' key={product.id + Math.random()}>
                  <a href='/'>
                    <img src={product.images[0].url} alt='Product name' />
                    <div className='info'>
                      <p>{product.title}</p>
                      <span>R$ {product.price}</span>
                    </div>
                  </a>
                  <div className='quantity-control'>
                    <button type='button'>-</button>
                    <span>{item.quantity}</span>
                    <button type='button'>+</button>
                  </div>
                  <button type='button'>X</button>
                </div>
              );
            })
          ) : (
            <div className='cart-empty'>
              <p>Seu carrinho está vazio!</p>
              <Link to='/'>Comprar agora</Link>
            </div>
          )}
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
