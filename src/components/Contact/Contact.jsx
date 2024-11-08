import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <li className={css.item}>
        <div>
          <p className={css.text}>
            <span className={css.span} role="img" aria-label="Contact Name">
              👤
            </span>
            {name}
          </p>
          <p>
            <span className={css.span} role="img" aria-label="Phone Number">
              📞
            </span>
            {phone}
          </p>
        </div>
        <button className={css.btn} type="button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
