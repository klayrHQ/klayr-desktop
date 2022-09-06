import React from 'react';
import { getSpaceSeparated } from '@transaction/utils/helpers';
import styles from './genericTxParams.css';

// @todo As a next step, we can estimate data type, and for:
// address/publicKey -> show avatar and address/publicKey
// amount -> normalize and display the token name next ot it
// timestamp -> show correct date
const PrimaryValue = ({ value }) => (
  <span className={styles.value}>
    {
      typeof value === 'boolean' ? value.toString() : value
    }
  </span>
);

/**
 * This function iterates over the params object and returns
 * 1. An instance of PrimaryValue if the value is string|number|boolean
 * 2. A list of PrimaryValue if the value is an array
 * 3. Re-iterates to return key-values as a PrimaryValue for each member of the object
 *
 * @param {any} value The value to be displayed in key-value pair
 * @param {index?} i Index of the parent element in list
 * @returns {ReactElement} React element to be rendered
 */
const ParsedParams = ({ value, itx }) => {
  if (Array.isArray(value)) {
    return (
      <div className={styles.list}>
        {
          value.map((item, index) => (
            <label
              key={`list-${itx}-${index}`}
              className={styles.listItem}
            >
              <ParsedParams value={item} index={index} />
            </label>
          ))
        }
      </div>
    );
  }
  if (typeof value === 'object') {
    return (
      <div className={styles.object}>
        {
          Object.keys(value).map((key, index) => (
            <div key={`${key}-${itx}-${index}`} className={styles.pair}>
              <label className={styles.label}>
                {getSpaceSeparated(key)}
              </label>
              <ParsedParams value={value[key]} itx={index} />
            </div>
          ))
        }
      </div>
    );
  }
  return <PrimaryValue key={`${value}-${itx}`} value={value} />;
};

const GenericTxParams = ({ transaction = {} }) => (
  <section className={styles.wrapper}>
    <ParsedParams value={transaction.params} />
  </section>
);

export default GenericTxParams;
