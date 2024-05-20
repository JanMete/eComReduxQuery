import { useSelector } from 'react-redux';
import style from './addedToFavoritePopup.module.css';
import { RootState } from '../../redux/store';

export default function AddedToFavoritePopup() {
  const addToFavoritePopup = useSelector(
    (state: RootState) => state.addToFavoritePopup.isPopupDisplayed
  );
  return (
    <div
      className={`${style.popupContainer} ${
        addToFavoritePopup ? style.showPopupContainer : ''
      }`}
    >
      <p>Added product to favorite</p>
    </div>
  );
}
