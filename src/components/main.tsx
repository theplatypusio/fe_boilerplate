import React, { ReactNode } from 'react';

// Styles
import styles from './main.scss';

type Props = { children?: ReactNode };

const Main = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Main;
