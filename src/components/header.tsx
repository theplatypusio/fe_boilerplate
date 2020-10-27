import Link from 'next/link';
import React from 'react';

// Styles
import styles from './header.scss';

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link href="/">
            <a>Page A</a>
          </Link>
        </li>
        <li>
          <Link href="/pageb">
            <a>Page B</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
