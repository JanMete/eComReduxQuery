import style from './homeChildSection.module.css';
import { links } from '../../constants/links';
import HomeSectionButton from '../homeSectionButton/HomeSectionButton';

export default function HomeChildSection() {
  return (
    <section className={style.childSectionContainer}>
      <HomeSectionButton gender={links.dziecko}>Children</HomeSectionButton>
    </section>
  );
}
