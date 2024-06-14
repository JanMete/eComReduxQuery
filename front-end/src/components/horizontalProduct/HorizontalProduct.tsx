import { ProductProps } from '../../types/productProps';
import style from './horizontalProduct.module.css';
import { useCurrency } from '../../hooks/useCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useFetcher } from 'react-router-dom';

export default function HorizontalProduct({ product }: ProductProps) {
  const { price, displayCurrency } = useCurrency(product);
  const { Form } = useFetcher();

  //Ogarnąć zoda walidację

  return (
    <div className={style.productContainer}>
      <img
        className={style.productImage}
        src={product?.photos[0]}
        alt={product.productName || ''}
      />
      <div className={style.productDetailsContainer}>
        <div>
          <div className={style.productNameRow}>
            <h3>{product.productName}</h3>
            <p className={style.currency}>
              {price}
              {displayCurrency}
            </p>
          </div>
          <div className={style.priceContainer}>
            <p className={style.priceParagraph}>Cena:</p>
            <p className={style.currency}>
              {price}
              {displayCurrency}
            </p>
          </div>
        </div>
        <div className={style.buttonsContainer}>
          <Form method='DELETE' action={`/delete-from-favorite/${product.id}`}>
            <button>
              {/* Zrobić komponent ze stylami */}
              <FontAwesomeIcon icon={faX} /> Usuń
            </button>
          </Form>
          <button>
            <FontAwesomeIcon icon={faBagShopping} /> Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
