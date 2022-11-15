import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import people_tab from '../../assets/tablet/image-hero.png';
import people_left from '../../assets/desktop/image-hero-left.png';
import people_right from '../../assets/desktop/image-hero-right.png';

const Header = () => {
  return (
    <section className={styles.header}>
      <Logo />
      <img src={people_tab} alt="people1" className={styles.image} />

      <div className={styles.chat}>
        <div className={styles.left_img}></div>

        <div className={styles.group_chat}>
          <h1>Group Chat for Everyone</h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and collaborate across
            any device.
          </p>
          <div className={styles.buttons}>
            <button>
              Download <span>v1.3</span>
            </button>
            <button className={styles.about}>What is it?</button>
          </div>
        </div>
        <div className={styles.right_img}></div>
      </div>
    </section>
  );
};

export default Header;
