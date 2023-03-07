import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { removeContact } from 'redux/contacts-slice';
import { RxAvatar } from 'react-icons/rx';
import css from 'components/ListElement/list-element.module.css';

const ListElement = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };

  const elements = filteredContacts.map(({ id, name, number }) => (
    <li className={css.item}>
      <RxAvatar className={css.icon} />
      <p>
        {name}: {number}
      </p>
      <button
        className={css.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  ));

  return elements;
};

export default ListElement;
