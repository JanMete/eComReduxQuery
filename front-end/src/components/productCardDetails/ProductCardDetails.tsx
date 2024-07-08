import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import style from './productCardDetails.module.css';
import { useState } from 'react';

type ProductCardDetailsProps = {
  description: string;
  title: string;
};

export default function ProductCardDetails({
  description,
  title,
}: ProductCardDetailsProps) {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const toggleDescription = () => {
    setIsDescriptionShown((prevState) => !prevState);
  };

  return (
    <div className={style.detailContainer} onClick={toggleDescription}>
      <div className={style.detailTitleContainer}>
        <p className={style.detailTitle}>{title}</p>
        <FontAwesomeIcon
          icon={faArrowDown}
          className={`${isDescriptionShown ? style.rotate : ''}`}
        />
      </div>
      <div>{isDescriptionShown && <p>{description}</p>}</div>
    </div>
  );
}
