import React, { useState } from 'react';

import productImg from '../../../assets/images/product-photo.png';
import playerIcon from '../../../assets/icons/player.svg';

import arrowUpIcon from '../../../assets/icons/arrow-up.svg';
import arrowDownIcon from '../../../assets/icons/arrow-down.svg';
import './styles.css';

function Gallery(props) {
  const [selectImage, setSelectImage] = useState({
    selectedImage: null,
  });

  const [previewImage, setPreviewImage] = useState({});

  const toggleActive = (index) => {
    setSelectImage({
      ...selectImage,
      selectedImage: props.product.images[index],
    });
  };

  const toggleSelectImage = (index) => {
    const status = 'active';
    if (props.product.images[index] === selectImage.selectedImage) {
      return status;
    }
  };

  const handleSetImagePreview = (index) => {
    setPreviewImage(props.product.images[index]);
  };

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

          {props.product?.images?.map((image, index) => (
            <li
              key={image.url}
              className={toggleSelectImage(index)}
              onClick={() => {
                toggleActive(index);
                handleSetImagePreview(index);
              }}
            >
              <img src={image.url} alt={image.name} />
            </li>
          ))}

          <span>
            <img src={arrowDownIcon} alt='Arrow Down Gallery' />
          </span>
        </ul>
      </section>

      <section className='preview'>
        <img
          src={previewImage.url || props.product?.images?.[0].url}
          alt={previewImage.name}
        />
        <div className="gallery-controll">
          <div className="video-play">
            <span><img src={playerIcon} alt="" /></span>
          </div>

          <div className="slide-controll">
            <div className="selected"></div>
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
