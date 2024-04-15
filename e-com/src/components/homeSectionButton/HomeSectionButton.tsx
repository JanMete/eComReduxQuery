import { Link } from 'react-router-dom';
import style from './homeSectionButton.module.css';

type HomeSectionButtonProps = {
  gender: string;
  children: React.ReactNode;
};

const HomeSectionButton = ({ gender, children }: HomeSectionButtonProps) => {
  return (
    <Link className={style.sectionButton} to={`/${gender}`}>
      {children}
    </Link>
  );
};

export default HomeSectionButton;
