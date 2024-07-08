import { useState } from 'react';
import style from './productCardLeftContainer.module.css';
import { ProductProps } from '../../types/productProps';

export default function ProductCardLeftContainer({ product }: ProductProps) {
  const [activePhoto, setActivePhoto] = useState(0);

  const renderThumbnails = () => {
    return product.photos.map((photo: string, index: number) => {
      return (
        <div key={index}>
          <img
            src={photo}
            className={`${style.imageElement} ${
              activePhoto === index ? style.activeImage : ''
            }`}
            onClick={() => setActivePhoto(index)}
          />
        </div>
      );
    });
  };
  return (
    <div className={style.leftContainer}>
      <div>{renderThumbnails()}</div>
      <div>
        <img src={product.photos[activePhoto]} className={style.mainImage} />
      </div>
    </div>
  );
}
