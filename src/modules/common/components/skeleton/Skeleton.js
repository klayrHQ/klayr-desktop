import React from 'react';
import styles from './Skeleton.css';

const Skeleton = ({ radius = 20, width = '50%', height = 15, right = false, theme = 'rect' }) => (
  <>
    <div
      data-testid="skeleton-wrapper"
      className={`${styles.skeletonWrapper} ${styles[theme]}`}
      style={{
        width: theme === 'circle' ? 2 * radius : width,
        height: theme === 'circle' ? 2 * radius : height,
        textAlign: right ? 'right' : 'left',
      }}
    />
    {theme === 'walletWithAddress' && <div className={styles.skeletonWrapper} />}
  </>
);

export default Skeleton;
