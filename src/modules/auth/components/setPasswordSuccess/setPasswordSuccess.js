import React from 'react';
import { useTranslation } from 'react-i18next';
import { PrimaryButton, TertiaryButton } from 'src/theme/buttons';
import { downloadJSON } from '@transaction/utils';
import Box from 'src/theme/box';
import BoxContent from 'src/theme/box/content';
import Icon from 'src/theme/Icon';
import styles from './setPasswordSuccess.css';

function SetPasswordSuccess({ onClose, backupJSON }) {
  const { t } = useTranslation();

  const onDownload = () => {
    downloadJSON(backupJSON, 'encrypted_secret_recovery_phrase');
  };

  return (
    <Box className={styles.container}>
      <BoxContent className={styles.content}>
        <h1>{t("Perfect! You're all set")}</h1>
        <p className={styles.subheader}>
          {t('You can now download your encrypted secret recovery phrase and use it to add your account on other devices.')}
        </p>
        <div className={styles.downloadLisk}>
          <Icon name="fileOutline" />
          <p className="option-value">encrypted_secret_recovery_phrase.json</p>
          <TertiaryButton
            className={styles.downloadBtn}
            size="xs"
            onClick={onDownload}
          >
            {t('Download')}
          </TertiaryButton>
        </div>
        <PrimaryButton className={styles.button} onClick={onClose}>
          {t('Continue to Dashboard')}
        </PrimaryButton>
      </BoxContent>
    </Box>
  );
}

export default SetPasswordSuccess;
