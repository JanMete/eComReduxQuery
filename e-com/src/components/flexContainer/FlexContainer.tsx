import { PropsWithChildren, FunctionComponent } from 'react';
import style from './flexContainer.module.css';

const FlexContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className={style.flexContainer}>{children}</div>;
};

export default FlexContainer;
