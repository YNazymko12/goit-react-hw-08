import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.phone}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
