import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { CURRENCY } from '../constants/currency';
import { ProductTypes } from '../types/productTypes';

export const useCurrency = (product: ProductTypes) => {
  const { currency } = useSelector((state: RootState) => state.currency);
  const price = currency === 'PLN' ? product.pricePLN : product.priceUSD;
  const displayCurrency =
    currency === 'PLN' || currency === 'USD' ? CURRENCY[currency] : '';
  return { price, displayCurrency };
};
