import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Lightbox from '../../Lightbox';

import './styles.css';

function Info(props) {
  const [colorName, setColorName] = useState('');
  const [selectColor, setSelectColor] = useState({
    selectedColor: null,
  });

  const [size, setSize] = useState('');
  const [selectSize, setSelectSize] = useState({
    selectedSize: null,
  });

  const toggleActive = (index) => {
    setSelectColor({
      ...selectColor,
      selectedColor: props.product.colors[index],
    });
  };

  const toggleSizeActive = (index) => {
    setSelectSize({
      ...selectSize,
      selectedSize: props.product.sizes[index],
    });
  };

  const toggleSelectColor = (index) => {
    const status = 'selected';
    if (props.product.colors[index] === selectColor.selectedColor)
      return status;
  };

  const toggleSelectSize = (index) => {
    const status = 'selected';
    if (props.product.sizes[index] === selectSize.selectedSize) return status;
  };

  const selectColorName = (name) => {
    return setColorName(name);
  };

  const selectProducSize = (size) => {
    return setSize(size);
  };

  const [openLightbox, setOpenLightbox] = useState(false);

  return (
    <>
      <div className='product-info'>
        <header>
          <h1>{props.product.title}</h1>
          <span>{props.product.cod}</span>
        </header>

        <div className='price-info'>
          <div className='price'>
            <span className='old-price'>R$ {props.product.oldPrice} |</span>
            <span>R$ {props.product.price}</span>
          </div>
          <span>Ou 6x de R$ {(props.product.price / 6).toFixed(2)}</span>
        </div>

        <div className='product-options'>
          <div className='colors'>
            <p>
              Cor: <span>({colorName || 'Nenhuma cor selecionada'})</span>
            </p>

            <div className='colors-option'>
              {props.product?.colors?.map((color, index) => (
                <div
                  key={color.hex}
                  style={{ backgroundColor: color.hex }}
                  className={toggleSelectColor(index)}
                  onClick={() => {
                    toggleActive(index);
                    selectColorName(color.name);
                  }}
                />
              ))}
            </div>
          </div>

          <div className='product-size'>
            <div className='size-info'>
              <p>
                Tamanho: <span>({size})</span>
              </p>
              <Link to='/guide-size'>Guia de medidas</Link>
            </div>

            <ul>
              {props.product?.sizes?.map((size, index) => (
                <li
                  key={size}
                  className={toggleSelectSize(index)}
                  onClick={() => {
                    selectProducSize(size);
                    toggleSizeActive(index);
                  }}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type='button'
          onClick={() => {
            setOpenLightbox(true);
            props.addProductToCart();
          }}
        >
          Adicionar à sacola
        </button>

        <div className='product-desc'>
          <h3>Descrição</h3>
          <p>{props.product.desc}</p>
        </div>
      </div>

      <Lightbox
        openLightbox={openLightbox}
        setOpenLightbox={setOpenLightbox}
        product={props.product}
      />
    </>
  );
}

export default Info;
