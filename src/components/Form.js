import React, { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    updateState: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
    id: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      id: shortid.generate(),
    });
  };

  findByName = (name) => {
    return this.props.contacts.some(([elem]) => elem === name);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, id } = this.state;

    if (this.findByName(name)) {
      alert(`${name} is already in contacts!`);
      return;
    }
    this.props.updateState(name, number, id);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
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

          <label htmlFor={this.numberInputId}>
            Number
            <input
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

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;
