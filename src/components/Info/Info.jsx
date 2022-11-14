import React from 'react';
import styles from './Info.module.scss';
import woman from '../../assets/desktop/image-woman-in-videocall.jpg';
import women from '../../assets/desktop/image-women-videochatting.jpg';
import men from '../../assets/desktop/image-men-in-meeting.jpg';
import man from '../../assets/desktop/image-man-texting.jpg';

const Info = () => {
  return (
    <section className={styles.info}>
      <div className={styles.images}>
        <div className={styles.image}>
          <img src={woman} alt="woman" />
        </div>
        <div className={styles.image}>
          <img src={women} alt="women" />
        </div>
        <div className={styles.image}>
          <img src={men} alt="men" />
        </div>
        <div className={styles.image}>
          <img src={man} alt="man" />
        </div>
      </div>

      <div className={styles.about}>
        <h2>Built for modern use</h2>
        <h3>Smarter meetings, all in one place</h3>
        <p className={styles.message}>
          Send messages, share files, show your screen, and record your meetings — all in one
          workspace. Control who can join with invite-only team access, data encryption, and data
          export.
        </p>
      </div>
    </section>
  );
};

export default Info;
