import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from '../Contacts/Contacts.module.css';

const Contacts = ({ contacts, onDelete }) => (
  <>
    <ul className={styles.list}>
      {contacts.map(([name, number, id]) => (
        <li className={styles.itemContact} key={shortid.generate()}>
          {name}: {number}
          <button className={styles.btn} onClick={onDelete.bind(this, id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contacts;
