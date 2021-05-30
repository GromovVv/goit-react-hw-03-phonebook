import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../Redux/phonebook-actions';
import { getVisibleContacts } from '../../Redux/phonebook-selectors';

import PropTypes from 'prop-types';


import './ContactList.scss';


function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className="Contact__list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="ContactList__item">
          {name}: {number}
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className="ContactList__btn"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
