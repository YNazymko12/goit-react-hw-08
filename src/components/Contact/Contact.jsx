import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';

import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .catch(() => {
        toast.error('OOPS... Failed to delete contact. Please try again.');
      });
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
            {number}
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
