import React from 'react';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <a href="" className={styles.headerNavItem}>YUZUMI</a>
        <a href="#about" className={styles.headerNavItem}>About</a>
        <a href="#services" className={styles.headerNavItem}>Services</a>
      </nav>
    </header>
  );
};

export default Header;