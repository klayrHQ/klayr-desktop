import styles from './stakeForm.css';

const header = (t) => [
  {
    title: t('Validator'),
    classList: styles.infoColumn,
  },
  {
    title: t('Commission (%)'),
    classList: styles.amountColumn,
  },
  {
    title: t('Stake amount'),
    classList: styles.amountColumn,
  },
  {
    classList: styles.editColumn,
  },
];

export default header;
