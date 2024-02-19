import React from 'react';
import styles from './PageLoader.css';
import colLogo from '../../../../../setup/react/assets/images/logo/col-logo-no-text.svg'

function PageLoader({ progress }) {
  return (
    <div className={styles.splashScreen}>
      <figure className={styles.logo}>
        <img
          alt="logo"
          src={colLogo}
        />
        <div className={styles.ldsRing}>
          {[...new Array(4).keys()].map((key) => (
            <div key={key} />
          ))}
        </div>
      </figure>
      {!!progress && (
        <div>
          Loading <span>{progress}%</span>
        </div>
      )}
    </div>
  );
}

export default PageLoader;
