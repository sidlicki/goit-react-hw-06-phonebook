import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

// const handleAddContact = (name, number, resetForm) => {
//   if (
//     contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     )
//   ) {
//     alert(`A contact with the name "${name}" already exists.`);
//     return;
//   }

// const newContact = {
//   name: name,
//   number: number,
//   id: nanoid(),
// };

// const handleDeleteContact = id => {
//   setContacts(contacts.filter(contact => contact.id !== id));
// };

// const handleFilterChange = evt => {
//   setFilter(evt.target.value.toLowerCase());
// };

// const getFilteredContacts = () => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };
