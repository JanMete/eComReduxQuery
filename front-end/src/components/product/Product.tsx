import { Link } from 'react-router-dom';
import style from './product.module.css';
import { ProductProps } from '../../types/productProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useAddProductToFavorite } from '../../hooks/useAddProductToFavorite';
import { useCurrency } from '../../hooks/useCurrency';
import {
  MAP_TO_POLISH_GENDER,
  PATH_TO_ENDPOINT_MAPPING,
} from '../../utils/mappers';

export default function Product({ product }: ProductProps) {
  const { price, displayCurrency } = useCurrency(product);

  const [isHeartIconHovered, setIsHeartIconHovered] = useState(false);
  const heartIcon = isHeartIconHovered ? solidHeart : regularHeart;

  const { addProductToFavorite } = useAddProductToFavorite();

  return (
    <div className={style.linkContainer}>
      <FontAwesomeIcon
        onMouseEnter={() => setIsHeartIconHovered(true)}
        onMouseLeave={() => setIsHeartIconHovered(false)}
        onClick={() => addProductToFavorite(product.id)}
        className={style.heartIcon}
        icon={heartIcon}
      />
      <Link
        to={`/${MAP_TO_POLISH_GENDER[product.gender]}/${product.category}/${
          product.subcategory
        }/${product.id}`}
      >
        <div>
          <img
            className={style.productImage}
            src={product.photos[0]}
            alt={product.productName}
          />
        </div>
        <div className={style.descriptionContainer}>
          <h3 className={style.productTitle}>{product.productName}</h3>
          <p>{`${price} ${displayCurrency}`}</p>
        </div>
      </Link>
    </div>
  );
}
