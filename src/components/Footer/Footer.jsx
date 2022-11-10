import React from 'react';
// import { ReactComponent as Logo } from '../../assets/logo.svg';
// import { ReactComponent as Facebook } from '../../assets/icon-facebook.svg';
// import { ReactComponent as Instagram } from '../../assets/icon-instagram.svg';
// import { ReactComponent as Twitter } from '../../assets/icon-twitter.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.footer}>
      {/* <Logo className={styles.logo} /> */}
      <div className={styles.container}>
        <h3>Experience more together</h3>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and group video
          sessions.
        </p>
        <button>
          Download <span>v1.3</span>
        </button>
      </div>
    </section>
  );
};

export default Footer;
