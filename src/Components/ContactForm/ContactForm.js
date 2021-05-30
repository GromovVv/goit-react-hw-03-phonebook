import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from'../../Redux/phonebook-selectors';
import * as phonebookActions from '../../Redux/phonebook-actions';
import './ContactForm.scss';

function ContactForm() {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
   const onSubmit = (name, number) =>
    dispatch(phonebookActions.addContact(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactCheck = () => {
    const namesIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const numbersIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (namesIsIn.includes(name) || numbersIsIn.includes(number)) {
      alert(`${name}${number} is already in contacts`);
    }

    if (name === '' || number === '') {
      alert('Enter all data, please');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setName('');
    setNumber('');
    if (contactCheck()) {
      return;
    }

    onSubmit(name, number);
  };

  return (
     <div>
        <form onSubmit={handleSubmit}  className="form">
          <label className="form__label">
            Name
            <input
              className="form__input"
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              onChange={event => setName(event.currentTarget.value)}
              required
            />
          </label>
          <label className="form__label">
            Number
            <input
              className="form__input"
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              onChange={event => setNumber(event.currentTarget.value)}
              required
            />
          </label>

          <button type="submit" className="form__btn">Add contact</button>
        </form>
      </div>
  );
}

export default ContactForm;

