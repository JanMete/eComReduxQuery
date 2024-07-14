import { useSelector } from 'react-redux';
import { useCurrency } from '../../hooks/useCurrency';
import { RootState } from '../../redux/store';
import { ProductsProps } from '../../types/productsProps';
import style from './cartDetails.module.css';
import { CURRENCIES } from '../../constants/currency';
import FullWidthButton from '../fullWidthButton/FullWidthButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import {
  deliveryCost,
  minSumsForFreeDelivery,
} from '../../constants/deloveryCostAndMinSumDelivery';
type CardDetailsProps = {
  products: ProductsProps;
};

export default function CartDetails({ products }: CardDetailsProps) {
  const { currency } = useSelector((state: RootState) => state.currency);

  const { displayCurrency } = useCurrency();
  const priceSum = products.reduce((acc, product) => {
    const price =
      currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD;
    return (acc += price);
  }, 0);

  const deliveryPrice = deliveryCost[currency];
  const minFreeDelivery = minSumsForFreeDelivery[currency];
  const orderSum = priceSum + deliveryPrice;

  return (
    <div className={style.cardDetailsMainContainer}>
      <h2 className={style.summaryHeader}>Podsumowanie</h2>
      <div className={style.flexFullWidthContainer}>
        <p>Wartość produktów</p>
        <p>
          {priceSum}
          {displayCurrency}
        </p>
      </div>
      <div className={style.flexFullWidthContainer}>
        <p>Koszt dostawy</p>
        <p>
          {deliveryPrice}
          {displayCurrency}
        </p>
      </div>
      <div className={style.flexFullWidthContainer}>
        <p>Do zapłaty</p>
        <p>
          {orderSum}
          {displayCurrency}
        </p>
      </div>
      <FullWidthButton onClick={() => location.replace('/')}>
        DO KASY
      </FullWidthButton>
      <div className={style.freeDeliveryContainer}>
        <FontAwesomeIcon icon={faTruckFast} />
        <p>
          Darmowa dostawa od {minFreeDelivery}
          {displayCurrency}
        </p>
      </div>
    </div>
  );
}
