import PropTypes from 'prop-types';

import './ContactListItem.scss';

const ContactListItem = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className="ContactList__item">
            {name}: {number}
            <button type="button" onClick={() => onDeleteContact(id)} className="ContactList__btn">
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactListItem;
