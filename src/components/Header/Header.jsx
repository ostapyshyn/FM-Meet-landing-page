import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import people_tab from '../../assets/tablet/image-hero.png';

const Header = () => {
  return (
    <section className={styles.header}>
      <Logo />
      <img src={people_tab} alt="people" className={styles.image} />
      <h1>Group Chat for Everyone</h1>
      <p>
        Meet makes it easy to connect with others face-to-face virtually and collaborate across any
        device.
      </p>
      <div className={styles.buttons}>
        <button>Download v1.3</button>
        <button className={styles.about}>What is it?</button>
      </div>
    </section>
  );
};

export default Header;
