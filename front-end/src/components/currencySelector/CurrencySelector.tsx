import { useDispatch } from 'react-redux';
import { PLN, USD } from '../../redux/currency';
import style from './currencySelector.module.css';

export default function CurrencySelector() {
  const dispatch = useDispatch();

  const handleCurrencyChange = (currency: string) => {
    switch (currency) {
      case 'PLN':
        dispatch(PLN());
        break;
      case 'USD':
        dispatch(USD());
        break;
    }
  };
  return (
    <select
      onChange={(e) => handleCurrencyChange(e.target.value)}
      className={style.currencySelector}
      name='currency'
      id='currency'
    >
      <option value='PLN'>PLN</option>
      <option value='USD'>USD</option>
    </select>
  );
}
