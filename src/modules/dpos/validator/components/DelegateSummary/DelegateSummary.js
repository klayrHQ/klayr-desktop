import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from 'src/theme/box';
import BoxHeader from 'src/theme/box/header';
import BoxContent from 'src/theme/box/content';
import Icon from 'src/theme/Icon';
import { truncateAddress } from 'src/modules/wallet/utils/account';
import DateTimeFromTimestamp from 'src/modules/common/components/timestamp';
import WalletVisual from 'src/modules/wallet/components/walletVisual';
import { PrimaryButton } from 'src/theme/buttons';
import DialogLink from 'src/theme/dialog/link';
import styles from './DelegateSummary.css';

const DelegateSummary = ({ delegate, status, weight }) => {
  const { address, name, rank, consecutiveMissedBlocks, nextForgingTime } = delegate;
  const { t } = useTranslation();

  return (
    <Box className={styles.wrapper}>
      <BoxHeader>
        <div className={`${styles.delegateDetails}`}>
          <WalletVisual address={address} size={44} />
          <div>
            <p className={styles.delegateName}>
              <span>{name}</span>
              <span className={status.className}>{status.value}</span>
            </p>
            <p className={styles.delegateAddress}>{truncateAddress(address)}</p>
          </div>
          <div>
            <DialogLink component="editVote">
              <PrimaryButton disabled={status.className === 'banned'}>
                {t('Vote')}
              </PrimaryButton>
            </DialogLink>
          </div>
        </div>
      </BoxHeader>
      <BoxContent>
        {/* @Todo: the value of roundLength should be dynamically integrated from the useDposConstnats query hook which would be addressed in issue #4502 */}
        <p>{t('This delegate is among the first 101 delegates in delegate weight ranking.')}</p>
        <div className={styles.summaryDetails}>
          <div>
            <span>
              <Icon name="starDark" />
            </span>
            <span>{rank}</span>
          </div>
          <div>
            <span>
              <Icon name="weightDark" />
            </span>
            <span>{weight}</span>
          </div>
          <div>
            <span>{t('CMB :')}</span>
            <span data-testid="cmb">{consecutiveMissedBlocks}</span>
          </div>
          <div>
            <span>{t('Last forged :')}</span>
            <span>
              <DateTimeFromTimestamp time={nextForgingTime} />
            </span>
          </div>
        </div>
      </BoxContent>
    </Box>
  );
};

export default DelegateSummary;
