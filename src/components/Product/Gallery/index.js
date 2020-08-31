import React from 'react';

import productImg from '../../../assets/images/product-photo.png';
import productPreview from '../../../assets/images/product-photo-preview.png';
import playerIcon from '../../../assets/icons/player.svg';

import arrowUpIcon from '../../../assets/icons/arrow-up.svg';
import arrowDownIcon from '../../../assets/icons/arrow-down.svg';
import './styles.css';

function Gallery() {
  return (
    <div className='gallery'>
      <section className='thumbs'>
        <div className='video'>
          <p>Video</p>

          <div className='video-player'>
            <img src={productImg} alt='Video Product' />
            <span>
              <img src={playerIcon} alt='Icon Player' />
            </span>
          </div>
        </div>

        <ul>
          <span>
            <img src={arrowUpIcon} alt='Arrow Up Gallery' />
          </span>

          <li className='active'>
            <img src={productImg} alt='Product name' />
          </li>

          <li>
            <img src={productImg} alt='Product name' />
          </li>

          <li>
            <img src={productImg} alt='Product name' />
          </li>

          <li>
            <img src={productImg} alt='Product name' />
          </li>

          <span>
            <img src={arrowDownIcon} alt='Arrow Down Gallery' />
          </span>
        </ul>
      </section>

      <section className='preview'>
        <img src={productPreview} alt='Product name' />
      </section>
    </div>
  );
}

export default Gallery;
