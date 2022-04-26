import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentBlockHeight } from '@common/store/selectors';
import Box from '@basics/box';
import BoxHeader from '@basics/box/header';
import BoxContent from '@basics/box/content';
import Table from '@basics/table';
import FilterBar from '@shared/filterBar';
import TransactionRow from '@transaction/list/row';
import FilterDropdown from './filterDropdown';
import styles from './transactions.css';
import header from './tableHeader';

const Transactions = ({
  pending,
  transactions,
  activeToken,
  filters,
  applyFilters,
  changeSort,
  sort,
  clearFilter,
  clearAllFilters,
  t,
  votedDelegates,
  address,
  confirmedLength,
}) => {
  const currentBlockHeight = useSelector(selectCurrentBlockHeight);
  useEffect(() => {
    // This will automatically load the new data too.
    clearAllFilters();
  }, [activeToken]);

  useEffect(() => {
    const addressList = transactions.data.data && transactions.data.data.reduce((acc, data) => {
      if (data.title === 'vote') {
        const votesList = data.asset.votes || [];
        const dataAddresses = votesList.map(vote => vote.delegateAddress);
        return acc.concat(dataAddresses);
      }
      return acc;
    }, []);
    if (addressList.length > 0) {
      votedDelegates.loadData({ addressList });
    }
  }, [transactions.data.data]);

  useEffect(() => {
    transactions.loadData();
  }, [pending.length, confirmedLength, address]);

  /* istanbul ignore next */
  const handleLoadMore = () => {
    transactions.loadData({
      offset: transactions.data.meta.count + transactions.data.meta.offset,
      sort,
      ...filters,
    });
  };

  const canLoadMore = transactions.data.meta
    ? transactions.data.meta.total > transactions.data.meta.count + transactions.data.meta.offset
    : false;

  const formatters = {
    dateFrom: value => `${t('From')}: ${value}`,
    dateTo: value => `${t('To')}: ${value}`,
    amountFrom: value => `> ${value} ${activeToken}`,
    amountTo: value => `< ${value} ${activeToken}`,
  };

  return (
    <Box main isLoading={transactions.isLoading} className={`${styles.wrapper} transactions-box`}>
      <BoxHeader>
        {
          activeToken === 'LSK' ? (
            <FilterDropdown
              filters={filters}
              applyFilters={f => applyFilters({ ...f, address })}
            />
          ) : null
        }
      </BoxHeader>
      <FilterBar {...{
        clearFilter, clearAllFilters, filters, formatters, t,
      }}
      />
      <BoxContent className={`${styles.content} transaction-results`}>
        <Table
          data={pending.concat(transactions.data.data)}
          isLoading={transactions.isLoading}
          row={TransactionRow}
          loadData={handleLoadMore}
          additionalRowProps={{
            activeToken,
            host: address,
            delegates: votedDelegates.data,
            currentBlockHeight,
            layout: 'hosted',
            avatarSize: 40,
          }}
          header={header(t, activeToken, changeSort)}
          currentSort={sort}
          canLoadMore={canLoadMore}
          error={transactions.error.code !== 404 ? transactions.error : undefined}
          emptyState={{ message: t('This account does not have any transactions.') }}
        />
      </BoxContent>
    </Box>
  );
};

export default Transactions;
