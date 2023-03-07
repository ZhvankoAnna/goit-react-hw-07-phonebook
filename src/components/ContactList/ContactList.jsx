import ListElement from 'components/ListElement/ListElement';
import css from 'components/ContactList/contact-list.module.css';

const ContactList = () => {
  return (
    <ul className={css.list}>
      <ListElement />
    </ul>
  );
};

export default ContactList;
