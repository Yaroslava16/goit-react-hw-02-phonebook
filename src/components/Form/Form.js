import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from '../Form/Form.module.css';

class Form extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    updateState: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    id: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.conteiner}>
          <label htmlFor={this.nameInputId} className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>

          <label htmlFor={this.numberInputId} className={styles.label}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
              onChange={this.handleChange}
              id={this.numberInputId}
            />
          </label>

          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
