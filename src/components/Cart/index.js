import React from 'react';

import remove_icon from '../../assets/icons/remove_icon.svg'
import add_icon from '../../assets/icons/add_icon.svg'
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';

import './styles.css';

function Cart(props) {
  return (
    <section className={props.openCart ? 'cart-container isOpen' : 'cart-container'}>
      <div className="cart-content">
        <button
          type="button"
          className="close-cart"
          onClick={() => props.setOpenCart(false)}
        >X</button>

        <header>
          <p>Sacola</p>
          <span>{props.products.length + 5} Itens</span>
        </header>

        <div className="itens">
          { props.products && props.products.map((item) => (
            <div className="item" key={item.product.id + Math.random()}>
              <div className="item-info">
                <div className="image">
                  <img src={item.product.images[0].url} alt='Product name' />
                </div>
                <div className="detail">
                  <p>{item.product.title}</p>
                  <span>R$ {item.product.price}</span>
                </div>
              </div>

              <div className="item-increments">
                <div className="add-remove">
                  <span><img src={remove_icon} alt="Remove icon" /></span>
                  <p className="total-item">{item.quantity}</p>
                  <span><img src={add_icon} alt="Add icon" /></span>
                </div>
                <div className="delete-item">
                  <button>X</button>
                </div>
              </div>
            </div>
          ))}

          <div className="item">
            <div className="item-info">
              <div className="image">
                <img src={product1} alt='Product name' />
              </div>
              <div className="detail">
                <p>Bolsa Bege Lorena</p>
                <span>R$ 79,90</span>
              </div>
            </div>

            <div className="item-increments">
              <div className="add-remove">
                <span><img src={remove_icon} alt="Remove icon" /></span>
                <p className="total-item">01</p>
                <span><img src={add_icon} alt="Add icon" /></span>
              </div>
              <div className="delete-item">
                <button>X</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="item-info">
              <div className="image">
                <img src={product2} alt='Product name' />
              </div>
              <div className="detail">
                <p>Rasteira Lara Areia</p>
                <span>R$ 49,90</span>
              </div>
            </div>

            <div className="item-increments">
              <div className="add-remove">
                <span><img src={remove_icon} alt="Remove icon" /></span>
                <p className="total-item">01</p>
                <span><img src={add_icon} alt="Add icon" /></span>
              </div>
              <div className="delete-item">
                <button>X</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="item-info">
              <div className="image">
                <img src={product3} alt='Product name' />
              </div>
              <div className="detail">
                <p>Bolsa Feminina de Ombro Pagani</p>
                <span>R$ 99,95</span>
              </div>
            </div>

            <div className="item-increments">
              <div className="add-remove">
                <span><img src={remove_icon} alt="Remove icon" /></span>
                <p className="total-item">01</p>
                <span><img src={add_icon} alt="Add icon" /></span>
              </div>
              <div className="delete-item">
                <button>X</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="item-info">
              <div className="image">
                <img src={product4} alt='Product name' />
              </div>
              <div className="detail">
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </div>

            <div className="item-increments">
              <div className="add-remove">
                <span><img src={remove_icon} alt="Remove icon" /></span>
                <p className="total-item">01</p>
                <span><img src={add_icon} alt="Add icon" /></span>
              </div>
              <div className="delete-item">
                <button>X</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="item-info">
              <div className="image">
                <img src={product2} alt='Product name' />
              </div>
              <div className="detail">
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </div>

            <div className="item-increments">
              <div className="add-remove">
                <span><img src={remove_icon} alt="Remove icon" /></span>
                <p className="total-item">01</p>
                <span><img src={add_icon} alt="Add icon" /></span>
              </div>
              <div className="delete-item">
                <button>X</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="item-info">
              <div className="image">
                <img src={product2} alt='Product name' />
              </div>
              <div className="detail">
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </div>

            <div className="item-increments">
              <div className="add-remove">
                <span><img src={remove_icon} alt="Remove icon" /></span>
                <p className="total-item">01</p>
                <span><img src={add_icon} alt="Add icon" /></span>
              </div>
              <div className="delete-item">
                <button>X</button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="item-info">
              <div className="image">
                <img src={product2} alt='Product name' />
              </div>
              <div className="detail">
                <p>Rasteira Tira Dedo</p>
                <span>R$ 49,90</span>
              </div>
            </div>

            <div className="item-increments">
              <div className="add-remove">
                <span><img src={remove_icon} alt="Remove icon" /></span>
                <p className="total-item">01</p>
                <span><img src={add_icon} alt="Add icon" /></span>
              </div>
              <div className="delete-item">
                <button>X</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="cart-footer">
          <div className="cart-promo">
            <p>
              Faltam R$ xx,xx para você <br />
              <span>Ganhar Frete Grátis</span>
            </p>
          </div>
          <div className="cart-total-price">
            <div className="cart-resume">
              <span>Total: R$ 149,00</span>
              <p>até 3x de R$ 49,90 sem juros</p>
            </div>

            <button type='button'>Finalizar Compra</button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Cart;
