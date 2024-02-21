/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TertiaryButton } from 'src/theme/buttons';
import styles from './NoActionView.css';

function NoTokenBalance({ onClick, message, buttonTitle }) {
  const { t } = useTranslation();

  return (
    <div className={styles.errorWrapper}>
      <p>{message || t('There are no tokens to display for this account at this moment.')}</p>
      <TertiaryButton onClick={onClick}>{buttonTitle || t('Request token')}</TertiaryButton>
    </div>
  );
}

export default NoTokenBalance;
