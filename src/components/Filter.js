import React from "react";

const Filter = ({ filter, filterContacts }) => (
  <label>
    Find contacts by name
    <input type="text" value={filter} onChange={filterContacts} />
  </label>
);

export default Filter;
