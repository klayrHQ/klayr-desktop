import React from 'react';
import Table from 'src/theme/table';
import Box from 'src/theme/box';
import BoxHeader from 'src/theme/box/header';
import BoxContent from 'src/theme/box/content';
import TransactionRow from './transactionRow';
import header from './transactionsTableHeader';
import styles from './multiSignature.css';

const TransactionsTable = ({ transactions, t, host }) => (
  <Box>
    <BoxHeader>
      <h2>{t('Pending multisignature transactions')}</h2>
    </BoxHeader>
    <BoxContent className={`${styles.tableContent} transactions-table`}>
      <Table
        data={transactions}
        row={TransactionRow}
        header={header(t)}
        additionalRowProps={{ t, host }}
      />
    </BoxContent>
  </Box>
);

export default TransactionsTable;
