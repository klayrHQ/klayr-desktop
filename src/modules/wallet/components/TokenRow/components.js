import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import Icon from 'src/theme/Icon';
// import { TertiaryButton } from 'src/theme/buttons';
import DialogLink from 'src/theme/dialog/link';
import styles from './TokenRow.css';
import chainImage from '../../../../../setup/react/assets/images/LISK.png';

export const Token = ({ tokenSymbol, chainName, chainLogo = chainImage }) => (
  <div className={`${styles.token} ${grid['col-xs-3']}`}>
    <img src={chainLogo} />
    <div>
      <p>{tokenSymbol}</p>
      <span>{chainName}</span>
    </div>
  </div>
);

export const Balance = ({ amount }) => (
  <p className={`${grid['col-xs-2']} ${styles.balance}`}>{amount}</p>
);

export const LockedBalance = ({ amount, address }) => (
  <div className={`${styles.lockedBalance} ${grid['col-xs-3']}`}>
    <p className={styles.balance}>{amount}</p>
    <DialogLink component="lockedBalance"  data={{ address }} >
      <Icon name="arrowRightInactive" />
    </DialogLink>
  </div>
);
