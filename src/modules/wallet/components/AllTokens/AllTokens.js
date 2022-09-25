import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Heading from 'src/modules/common/components/Heading';
import { useFilter } from 'src/modules/common/hooks';
import { useTokensBalance } from 'src/modules/token/fungible/hooks/queries';

import { Input } from 'src/theme';
import Box from 'src/theme/box';
import { PrimaryButton, SecondaryButton } from 'src/theme/buttons';
import BoxContent from 'src/theme/box/content';
import { QueryTable } from 'src/theme/QueryTable';
import BoxHeader from 'src/theme/box/header';
import Icon from 'src/theme/Icon';
import styles from './AllTokens.css';
import header from './tableHeaderMap';
import TokenRow from '../TokenRow';

const AllTokens = () => {
  const [search, setSearch] = useState('');
  const { setFilter } = useFilter({});
  const { t } = useTranslation();
  const timeout = useRef();
  const params = {};

  const handleFilter = useCallback(({ target: { value } }) => {
    setSearch(value);
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setFilter('search', value);
    }, 500);
  }, []);

  return (
    <Box className={styles.wrapper}>
      <BoxHeader>
        <Heading title="All my tokens">
          <div className={styles.rightHeaderSection}>
            <Input
              icon={<Icon className={styles.searchIcon} name="searchActive" />}
              onChange={handleFilter}
              value={search}
              className={styles.filterTokens}
              size="l"
              placeholder={t('Search Token')}
            />
            <div className={styles.actionButtons}>
              <SecondaryButton>{t('Request')}</SecondaryButton>
              <PrimaryButton>{t('Send')}</PrimaryButton>
            </div>
          </div>
        </Heading>
      </BoxHeader>
      <BoxContent>
        <QueryTable
          showHeader
          queryHook={useTokensBalance}
          queryConfig={{ config: { params } }}
          row={TokenRow}
          header={header(t)}
          headerClassName={styles.tableHeader}
        />
      </BoxContent>
    </Box>
  );
};

export default AllTokens;
