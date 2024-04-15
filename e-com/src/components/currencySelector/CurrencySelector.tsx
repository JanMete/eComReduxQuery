import { useCurrencyChange } from '../../hooks/useCurrencyChange';
import style from './currencySelector.module.css';

export default function CurrencySelector() {
  const { handleCurrencyChange } = useCurrencyChange();
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
