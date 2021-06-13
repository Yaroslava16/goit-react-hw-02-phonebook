import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, filterContacts }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={filterContacts}
    />
  </label>
);

export default Filter;
