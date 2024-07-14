import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import style from './iconMenu.module.css';
import { Link } from 'react-router-dom';

export default function IconsMenu() {
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const heartIcon = isHeartHovered ? solidHeart : regularHeart;
  const cartIcon = isCartHovered ? faCartArrowDown : faCartShopping;
  return (
    <div>
      <Link to={'/favorites'}>
        <FontAwesomeIcon
          className={style.icon}
          icon={heartIcon}
          onMouseEnter={() => setIsHeartHovered(true)}
          onMouseLeave={() => setIsHeartHovered(false)}
        />
      </Link>
      <Link to={'/cart'}>
        <FontAwesomeIcon
          className={style.icon}
          icon={cartIcon}
          onMouseEnter={() => setIsCartHovered(true)}
          onMouseLeave={() => setIsCartHovered(false)}
        />
      </Link>
    </div>
  );
}
