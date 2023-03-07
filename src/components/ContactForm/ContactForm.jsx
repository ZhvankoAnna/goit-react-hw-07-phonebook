import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/contacts-operations';
// import { addContact } from 'redux/contacts/contacts-slice';
import css from 'components/ContactForm/contact-form.module.css';

const ContactForm = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    phone: '',
  });
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setInputValue(prevInputValue => ({ ...prevInputValue, [name]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const data = { ...inputValue };
    // const newName = data.name;
    // const isDublicate = contacts.find(item => item.name === newName);
    // if (isDublicate) {
    //   return Notify.failure(`${newName} is already in contacts`);
    // }
    dispatch(addContact(data));
    setInputValue({
      name: '',
      phone: '',
    });
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          onChange={handleInputChange}
          value={inputValue.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          onChange={handleInputChange}
          value={inputValue.phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
