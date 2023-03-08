import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from 'components/app.module.css';

const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};

export default App;
