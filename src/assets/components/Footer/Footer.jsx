import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icon-twitter.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Logo className={styles.logo} />
      <h3>Experience more together</h3>
      <p>
        Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
      </p>
      <button>Download v1.3</button>
      <ul>
        <li>
          <Facebook />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Twitter />
        </li>
      </ul>
    </section>
  );
};

export default Footer;
