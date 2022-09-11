import ContactsForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
