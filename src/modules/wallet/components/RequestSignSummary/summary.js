/* eslint-disable complexity */
/* eslint-disable max-statements */
import React from 'react';
import BoxContent from 'src/theme/box/content';
import Box from 'src/theme/box';
import Footer from '@transaction/components/TxSummarizer/footer';
import { LayoutSchema } from '@transaction/components/TransactionDetails/layoutSchema';
import TransactionDetailsContext from '@transaction/context/transactionDetailsContext';
import layoutSchemaStyles from '@transaction/components/TransactionDetails/layoutSchema.css';
import { joinModuleAndCommand } from 'src/modules/transaction/utils';
import BlockchainAppDetailsHeader from '@blockchainApplication/explore/components/BlockchainAppDetailsHeader';
import styles from './styles.css';

const RequestSignSummary = ({
  t,
  transactionJSON,
  actionFunction,
  formProps,
  nextStep,
  prevStep,
}) => {
  const confirmButton = {
    label: t('Sign'),
    onClick: () => {
      nextStep({
        formProps,
        transactionJSON,
        selectedPriority: 'normal',
        actionFunction,
      });
    },
  };
  const cancelButton = {
    label: t('Go back'),
    onClick: () => {
      prevStep({ formProps });
    },
  };
  const Layout = LayoutSchema.structuredGeneralLayout;

  const { chainName, chainID, projectPage, logo } = formProps.fields?.recipientChain || {};

  const application = {
    data: {
      name: chainName,
      projectPage,
      icon: logo?.png,
    },
  };

  return (
    <Box className={styles.boxContainer}>
      <BlockchainAppDetailsHeader
        headerText={t('Transaction summary')}
        application={application}
        clipboardCopyItems={[{ label: 'Chain ID:', value: chainID }]}
      />
      <BoxContent>
        <Box className={`${styles.container} ${styles.txDetails}`}>
          <p className={styles.description}>
            {t('Please review and verify the transaction details before signing.')}
          </p>
          <BoxContent className={`${layoutSchemaStyles.mainContent} ${Layout.className}`}>
            <TransactionDetailsContext.Provider
              value={{
                transaction: {
                  ...transactionJSON,
                  moduleCommand: joinModuleAndCommand(transactionJSON),
                },
              }}
            >
              {Layout.components.map((Component, index) => (
                <Component key={index} t={t} />
              ))}
            </TransactionDetailsContext.Provider>
          </BoxContent>
        </Box>
        <Footer cancelButton={cancelButton} confirmButton={confirmButton} t={t} />
      </BoxContent>
    </Box>
  );
};
export default RequestSignSummary;
