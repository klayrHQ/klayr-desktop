import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { removeSearchParamsFromUrl } from 'src/utils/searchParams';
import BoxEmptyState from 'src/theme/box/emptyState';
import styles from './requestSummary.css';

const EmptyState = ({ history }) => {
  const { t } = useTranslation();
  const timeout = useRef();

  const redirectToHome = () => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      removeSearchParamsFromUrl(history, ['modal', 'status', 'name', 'action']);
    }, 3000);
  };

  useEffect(() => {
    redirectToHome();

    return () => clearTimeout(timeout.current);
  }, []);

  return (
    <BoxEmptyState className={styles.emptyState}>
      <p>{t('There are no transactions requested from Klayr Desktop yet.')}</p>
    </BoxEmptyState>
  );
};

export default EmptyState;
