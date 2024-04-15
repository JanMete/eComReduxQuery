import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import style from './iconMenu.module.css';

export default function IconsMenu() {
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const heartIcon = isHeartHovered ? solidHeart : regularHeart;
  const cartIcon = isCartHovered ? faCartArrowDown : faCartShopping;
  return (
    <div>
      <FontAwesomeIcon
        className={style.icon}
        icon={heartIcon}
        onMouseEnter={() => setIsHeartHovered(true)}
        onMouseLeave={() => setIsHeartHovered(false)}
      />
      <FontAwesomeIcon
        className={style.icon}
        icon={cartIcon}
        onMouseEnter={() => setIsCartHovered(true)}
        onMouseLeave={() => setIsCartHovered(false)}
      />
    </div>
  );
}
