import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
// import Filter from './Filter/Filter';
import styles from './App.module.css';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = { name, number, id: shortid.generate() };
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  render() {
    return (
      <div className={styles.conteiner}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={styles.secondTitle}>Contacts</h2>
        {/* <Filter /> */}
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
