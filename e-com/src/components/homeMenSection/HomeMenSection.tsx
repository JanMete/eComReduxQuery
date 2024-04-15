import style from './homeMenSection.module.css';
import { links } from '../../constants/links';
import HomeSectionButton from '../homeSectionButton/HomeSectionButton';

export default function HomeMenSection() {
  return (
    <section className={style.menSectionContainer}>
      <div className={style.overlay}></div>
      <HomeSectionButton gender={links.mezczyzna}>Men</HomeSectionButton>
    </section>
  );
}
