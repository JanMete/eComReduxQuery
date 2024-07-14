import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import style from './productButton.module.css';

type ProductButtonComponent = {
  children: ReactNode;
  icon: IconDefinition;
  onclick?: () => void;
};

export default function ProductButton({
  children,
  icon,
  onclick,
}: ProductButtonComponent) {
  return (
    <button className={style.productButton} onClick={onclick}>
      <FontAwesomeIcon icon={icon} />
      {children}
    </button>
  );
}
