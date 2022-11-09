import React from 'react';
import styles from './Info.module.scss';
import phone from '../../assets/illustration-app.png';
import { ReactComponent as Logo } from '../../assets/bg-pattern-2.svg';
import Card from '../Card/Card';

const Info = () => {
  return (
    <section className={styles.info}>
      <img src={phone} alt="phone" />
      <p>Built for modern use</p>
      <h2>Smarter meetings, all in one place</h2>
      <p>
        Send messages, share files, show your screen, and record your meetings — all in one
        workspace. Control who can join with invite-only team access, data encryption, and data
        export.
      </p>
    </section>
  );
};

export default Info;
