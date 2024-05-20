import { Link } from 'react-router-dom';
import style from './homeSectionButton.module.css';
import { FunctionComponent, PropsWithChildren } from 'react';

interface HomeSectionButtonProps {
  gender: string;
}

type CombinedProps = PropsWithChildren<HomeSectionButtonProps>;

const HomeSectionButton: FunctionComponent<CombinedProps> = ({
  gender,
  children,
}) => {
  return (
    <Link className={style.sectionButton} to={`/${gender}`}>
      {children}
    </Link>
  );
};

export default HomeSectionButton;
