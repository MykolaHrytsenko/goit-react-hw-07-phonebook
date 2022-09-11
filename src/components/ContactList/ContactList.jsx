import React from 'react';
import { Loader } from '../Loader/Loader';
import { useSelector } from 'react-redux';
import { filterSlice, contactsSlice } from '../../redux';
import { ContactsItem } from '../ContactsItem/ContactsItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const { data: contacts, isLoading: loadingList } =
    contactsSlice.useFetchContactsQuery();
  const filterValue = useSelector(filterSlice.getFilter);

  const getContactsFilter = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter)
      )
    );
  };
  const contactsFilter = getContactsFilter();

  return (
    <div>
      {loadingList && <Loader />}
      {contacts && (
        <ol className={css.contacts}>
          {contactsFilter.map(contact => (
            <ContactsItem key={contact.id} contact={contact} />
          ))}
        </ol>
      )}
    </div>
  );
};

export default ContactList;
