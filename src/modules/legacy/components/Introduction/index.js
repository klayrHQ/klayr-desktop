import React from 'react';
import { withTranslation } from 'react-i18next';
import Illustration from 'src/modules/common/components/illustration';
import { PrimaryButton } from 'src/theme/buttons';
import styles from './introduction.css';

const Introduction = ({ t, nextStep }) => (
  <div className={styles.container}>
    <Illustration className={styles.illustration} name="reclaimTokensIntro" />
    <p className={styles.header}>{t('Reclaim KLY tokens')}</p>
    <p className={styles.text}>
      {t('Your tokens associated with your secret recovery phrase are available to be reclaimed.')}
      <br />
      <br />
      {t('You can learn more')}{' '}
      <span
        className={styles.link}
        onClick={() => {
          window.open(
            'https://klayr.xyz/blog/posts/announcing-klayr-mainnet-v4-migration',
            '_blank',
            'rel=noopener noreferrer'
          );
        }}
      >
        {t('here')}
      </span>
    </p>
    <PrimaryButton className={styles.button} onClick={() => nextStep()}>
      {t('Continue')}
    </PrimaryButton>
  </div>
);

export default withTranslation()(Introduction);
