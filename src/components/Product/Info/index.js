import React from 'react';
import './styles.css';

function Info() {
  return (
    <div className='product-info'>
      <header>
        <h1>Rasteira tira dedo</h1>
        <span>rt 0568 | 03.07.0653</span>
      </header>

      <div className='price-info'>
        <div className='price'>
          <span className='old-price'>R$ 69,99 |</span>
          <span>R$ 55,20</span>
        </div>
        <span>Ou 6x de R$ 9,20</span>
      </div>

      <div className='product-options'>
        <div className='colors'>
          <p>
            Cor: <span>(Fucsia)</span>
          </p>

          <div className='colors-option'>
            <div className='color-1 selected' />
            <div className='color-2' />
            <div className='color-3' />
            <div className='color-4' />
            <div className='color-5' />
          </div>
        </div>

        <div className='product-size'>
          <div className='size-info'>
            <p>
              Tamanho: <span>(37)</span>
            </p>
            <a href='/guide-size'>Guia de medidas</a>
          </div>

          <ul>
            <li>33</li>
            <li>34</li>
            <li>35</li>
            <li>36</li>
            <li className='selected'>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
            <li>41</li>
            <li>42</li>
          </ul>
        </div>
      </div>

      <button type='button'>Adicionar à sacola</button>

      <div className='product-desc'>
        <p>
          Rasteira em atanado soft com tira no dedo e fechamento de fivela.
          Possui sola sempre na cor do cabedal.
        </p>
      </div>
    </div>
  );
}

export default Info;
