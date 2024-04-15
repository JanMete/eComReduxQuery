import style from './homeWomenSection.module.css';
import { links } from '../../constants/links';
import HomeSectionButton from '../homeSectionButton/HomeSectionButton';

export default function HomeWomenSection() {
  return (
    <section className={style.womenSectionContainer}>
      <HomeSectionButton gender={links.kobieta}>Women</HomeSectionButton>
    </section>
  );
}
