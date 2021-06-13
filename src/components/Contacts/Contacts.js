import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

const Contacts = ({ contacts, onDelete }) => (
  <>
    <ul>
      {contacts.map(([name, number, id]) => (
        <li key={shortid.generate()}>
          {name}: {number}
          <button onClick={onDelete.bind(this, id)}>Delete</button>
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
