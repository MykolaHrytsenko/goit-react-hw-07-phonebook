import { useState } from 'react';
import { contactsSlice } from '../../redux';
import { Loader } from 'components/Loader/Loader';
import css from './ContactsForm.module.css';

function ContactsForm() {
  const [createContact, { isLoading }] =
    contactsSlice.useCreateContactMutation();
  const { data: contacts } = contactsSlice.useFetchContactsQuery();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    const contact = { name, phone };
    e.preventDefault();
    const normalzeName = contact.name.toLocaleLowerCase();
    if (contacts.find(item => item.name.toLocaleLowerCase() === normalzeName)) {
      return alert(`${contact.name} is already in contacts`);
    }
    await createContact(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <label className={css.label}>
        <span>Number</span>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}
          className={css.input}
        />
      </label>
      <div className={css.buttonDiv}>
        <button type="submit" className={css.button}>
          {isLoading ? <Loader /> : <div> Add contact</div>}
        </button>
      </div>
    </form>
  );
}

export default ContactsForm;
