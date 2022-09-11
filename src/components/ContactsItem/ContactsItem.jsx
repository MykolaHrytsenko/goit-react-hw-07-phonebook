import { contactsSlice } from '../../redux';
import { LoaderMini } from 'components/Loader/Loader';
import css from './ContactsItem.module.css';

export const ContactsItem = ({ contact }) => {
  const [deleteTodo, { isLoading: isDeleting }] =
    contactsSlice.useDeleteContactMutation();

  return (
    <li className={css.contact}>
      <p className={css.name}>{contact.name} :</p>
      <p className={css.number}>{contact.phone}</p>

      <button
        className={css.button}
        type="button"
        onClick={() => deleteTodo(contact.id)}
        disabled={isDeleting}
      >
        {isDeleting ? <LoaderMini /> : <span>Delete</span>}
      </button>
    </li>
  );
};
