import { Link } from 'react-router-dom';
import style from './storeName.module.css';

export default function StoreName() {
  return (
    <h1 className={style.storeName}>
      <Link className={style.storeNameLink} to={'/'}>
        Store Name
      </Link>
    </h1>
  );
}
