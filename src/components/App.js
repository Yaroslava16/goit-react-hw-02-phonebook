import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      ['Rosie Simpson', '459-12-56', 'id-1'],
      ['Hermione Kline', '443-89-12', 'id-2'],
      ['Eden Clements', '645-17-79', 'id-3'],
      ['Annie Copeland', '227-91-26', 'id-4'],
    ],
    filter: '',
  };

  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = (name, number, id) => {
    this.setState(previousState => ({
      contacts: [...previousState.contacts, [name, number, id]],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(([name]) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContacts = contactId => {
    this.setState(previousState => ({
      contacts: previousState.contacts.filter(([, , id]) => id !== contactId),
    }));
  };

  render() {
    const findContacts = this.getVisibleContacts();
    const { contacts, filter } = this.state;
    return (
      <div className={styles.conteiner}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form contacts={contacts} updateState={this.addContact} />
        <h2 className={styles.secondTitle}>Contacts</h2>
        <Filter filter={filter} filterContacts={this.filterContacts} />
        <Contacts contacts={findContacts} onDelete={this.deleteContacts} />
      </div>
    );
  }
}

export default App;
