import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import Icon from 'src/theme/Icon';
import { TertiaryButton } from 'src/theme/buttons';
import styles from './TokenRow.css';
import chainImage from '../../../../../setup/react/assets/images/LISK.png';

export const Token = ({ tokenSymbol, chainName, chainLogo = chainImage }) => (
  <div className={`${styles.token} ${grid['col-xs-4']}`}>
    <img src={chainLogo} />
    <div>
      <p>{tokenSymbol}</p>
      <span>{chainName}</span>
    </div>
  </div>
);

export const Balance = ({ amount }) => (
  <div className={`${grid['col-xs-2']} ${styles.balance}`}>{amount}</div>
);

export const LockedBalance = ({ onClick, amount }) => (
  <div className={`${styles.lockedBalance} ${grid['col-xs-2']}`}>
    <Balance amount={amount}/>
    <TertiaryButton onClick={onClick}>
      <Icon name="arrowRightInactive" />
    </TertiaryButton>
  </div>
);
