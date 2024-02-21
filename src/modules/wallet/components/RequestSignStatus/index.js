import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import copyToClipboard from 'copy-to-clipboard';
import { useSession } from '@libs/wcm/hooks/useSession';
import Box from 'src/theme/box';
import Icon from 'src/theme/Icon';
import { TertiaryButton, PrimaryButton } from 'src/theme/buttons';
import { toTransactionJSON } from '@transaction/utils';
import styles from './styles.css';

const errorData = (t) => ({
  error: true,
  title: t('Transaction signature failure'),
  description: t(
    'There was an error signing your transaction. please close this dialog and try again.'
  ),
});

const successData = (t) => ({
  error: false,
  title: t('Transaction signature successful'),
  description: t(
    'Your transaction has been signed. Please copy the signed transaction and return to application.'
  ),
});

const getStringifiedTransactionJSON = (signedTransaction, schema) => {
  const transactionJSON = toTransactionJSON(signedTransaction, schema);
  return JSON.stringify(transactionJSON);
};

// eslint-disable-next-line max-statements
const RequestSignStatus = (props) => {
  const { t } = useTranslation();
  const ref = useRef();
  const [copied, setCopied] = useState(false);
  const transactions = useSelector((state) => state.transactions);
  const { respond } = useSession();
  const stringifiedTransactionJSON = getStringifiedTransactionJSON(
    transactions.signedTransaction,
    props.formProps.schema
  );

  const data =
    !transactions.txSignatureError && transactions.signedTransaction?.signatures?.length
      ? successData(t)
      : errorData(t);

  const onCopy = () => {
    setCopied(true);
    copyToClipboard(stringifiedTransactionJSON);
    ref.current = setTimeout(() => setCopied(false), 1000);
  };

  useEffect(() => () => clearTimeout(ref.current), []);

  useEffect(() => {
    respond({ payload: stringifiedTransactionJSON });
  }, []);

  return (
    <Box className={`${styles.wrapper} transaction-status`}>
      <h5 className="result-box-header">{data.title}</h5>
      <p>{data.description}</p>
      {!data.error && (
        <PrimaryButton
          className={`${styles.signatureButton} copy-signature-button`}
          onClick={onCopy}
        >
          <span className={styles.buttonContent}>
            <Icon name="copy" />
            <span>{copied ? t('Copied') : t('Copy signed transaction')}</span>
          </span>
        </PrimaryButton>
      )}
      <a
        href={props.formProps.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cancel}
      >
        <TertiaryButton>{t('Return to application')}</TertiaryButton>
      </a>
    </Box>
  );
};

export default RequestSignStatus;
