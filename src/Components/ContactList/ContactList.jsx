import './ContactList.scss';

import PropTypes from 'prop-types';

const ContactList = ({ children }) => {
  return (
    <ul className="Contact__list">
      {children}
    </ul>
  );
};

ContactList.propTypes = {
  children: PropTypes.node,
};

export default ContactList;
