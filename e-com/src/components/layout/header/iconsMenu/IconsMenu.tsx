import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './iconMenu.module.css';

export default function IconsMenu() {
  return (
    <div>
      <FontAwesomeIcon
        className={style.icon}
        icon={faHeart}
        style={{ color: '#000000' }}
      />
      <FontAwesomeIcon
        className={style.icon}
        icon={faCartShopping}
        style={{ color: '#000000' }}
      />
    </div>
  );
}
