import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Box from 'src/theme/box';
import BoxHeader from 'src/theme/box/header';
import BoxContent from 'src/theme/box/content';
import Icon from 'src/theme/Icon';
import { truncateAddress } from 'src/modules/wallet/utils/account';
import DateTimeFromTimestamp from 'src/modules/common/components/timestamp';
import WalletVisual from 'src/modules/wallet/components/walletVisual';
import { PrimaryButton } from 'src/theme/buttons';
import { addSearchParamsToUrl } from 'src/utils/searchParams';
import styles from './ValidatorSummary.css';
import { convertCommissionToPercentage } from '../../utils';
import { usePosConstants } from '../../hooks/queries';

const ValidatorSummary = ({ validator, status, weight }) => {
  const { address, name, rank, commission, nextAllocatedTime } = validator;
  const { t } = useTranslation();
  const history = useHistory();
  const { data: posConstants } = usePosConstants();
  const roundLength = posConstants?.data?.roundLength || '-';

  const handleClick = (e) => {
    e.preventDefault();
    addSearchParamsToUrl(history, { validatorAddress: address, modal: 'editStake' });
  };

  return (
    <Box className={styles.wrapper}>
      <BoxHeader>
        <div className={`${styles.validatorDetails}`}>
          <WalletVisual address={address} size={44} />
          <div>
            <p className={styles.validatorName}>
              <span>{name}</span>
              <span className={status.className}>{status.value}</span>
            </p>
            <p className={styles.validatorAddress}>{truncateAddress(address)}</p>
          </div>
          <div>
            <PrimaryButton disabled={status.className === 'banned'} onClick={handleClick}>
              {t('Stake')}
            </PrimaryButton>
          </div>
        </div>
      </BoxHeader>
      <BoxContent>
        <p>
          {t(
            'This validator is among the first {{roundLength}} validators in validator weight ranking.',
            { roundLength }
          )}
        </p>
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
            <span>{t('Commission :')}</span>
            <span data-testid="commission">{convertCommissionToPercentage(commission)}%</span>
          </div>
          {nextAllocatedTime && (
            <div>
              <span>{t('Last generated :')}</span>
              <span>
                <DateTimeFromTimestamp time={nextAllocatedTime} />
              </span>
            </div>
          )}
        </div>
      </BoxContent>
    </Box>
  );
};

export default ValidatorSummary;
