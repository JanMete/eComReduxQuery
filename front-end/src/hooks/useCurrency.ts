import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { CURRENCIES, CURRENCY_SIGN } from '../constants/currency';
import { ProductTypes } from '../types/productTypes';

export const useCurrency = (product?: ProductTypes) => {
  const { currency } = useSelector((state: RootState) => state.currency);

  const price =
    currency === CURRENCIES.PLN ? product?.pricePLN : product?.priceUSD;
  const displayCurrency =
    CURRENCY_SIGN[currency as keyof typeof CURRENCY_SIGN] || '';

  return { price, displayCurrency };
};
