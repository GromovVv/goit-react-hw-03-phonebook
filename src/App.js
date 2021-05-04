import { Component } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import ContactListItem from './Components/ContactListItem';

import 'modern-normalize/modern-normalize.css';
import './App.scss';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.number,
  };

  state = {
    contacts: [
      { id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12' },
      { id: shortid.generate(), name: 'Eden Clements', number: '645-17-79' },
      { id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name === name || contact.number === number,
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <div className="App">
        <h2 className="Title">Phonebook</h2>
        <ContactForm submit={this.addContact} contacts={contacts} />
        <h2 className="Title">Contacts</h2>

        {contacts.length > 0 ? (
          <>
            <Filter filter={filter} changeFilter={this.changeFilter} />

            <ContactList>
              <ContactListItem
                contacts={this.getVisibleContacts()}
                onDeleteContact={this.deleteContact}
              />
            </ContactList>
          </>
        ) : (
          <span className="Empty">Your phonebook is empty</span>
        )}
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default App;
