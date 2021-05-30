import PropTypes from 'prop-types';
import { getVisibleContacts } from './Redux/phonebook-selectors';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import { useSelector } from 'react-redux';

import 'modern-normalize/modern-normalize.css';
import './App.scss';

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const totalContactsCount = contacts.length;

  return (
    <div className="App">
      <h2 className="Title">Phonebook</h2>
      <ContactForm />
      <h2 className="Title">Total contacts: {totalContactsCount}</h2>
      <Filter />
      {contacts.length > 0 ? (
        <>
          <ContactList />
        </>
      ) : (
        <span className="Empty">Your phonebook is empty or you have no such contact</span>
      )}
    </div>
  );
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
