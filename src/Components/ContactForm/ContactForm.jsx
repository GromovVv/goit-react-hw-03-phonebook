import { Component } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    const { name, number } = this.state;
    event.preventDefault();

    this.props.submit(name, number);

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
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor={this.nameInputId} className="form__label">
            Name
            <input
              className="form__input"
              type="text"
              name="name"
              value={name}
              id={this.nameInputId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label htmlFor={this.numberInputId} className="form__label">
            Number
            <input
              className="form__input"
              type="tel"
              name="number"
              value={number}
              id={this.numberInputId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              onChange={this.handleInputChange}
              required
            />
          </label>

          <button type="submit" className="form__btn">Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
