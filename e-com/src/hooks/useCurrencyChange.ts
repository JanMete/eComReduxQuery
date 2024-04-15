import { useDispatch } from 'react-redux';
import { PLN, USD } from '../redux/currency';

export const useCurrencyChange = () => {
  const dispatch = useDispatch();

  const handleCurrencyChange = (currency: string) => {
    if (currency === 'PLN') {
      dispatch(PLN());
    } else if (currency === 'USD') {
      dispatch(USD());
    }
  };
  return { handleCurrencyChange };
};
